import React, { createContext, useContext, useEffect, useState } from 'react';

interface LessonProgress {
  completed: boolean;
  pagesRead: number;
  quizScore?: number;
  quizAnswers?: number[];
}

interface ProgressState {
  completedLessons: Record<string, LessonProgress>;
  currentTopicId: string;
  streak: number;
  lastActiveDate: string;
  dailyGoalMinutes: number;
  todayMinutes: number;
}

interface ProgressContextValue {
  state: ProgressState;
  setCurrentTopic: (topicId: string) => void;
  markPageRead: (lessonId: string, pageIndex: number, totalPages: number) => void;
  markQuizComplete: (lessonId: string, score: number, answers: number[]) => void;
  isLessonCompleted: (lessonId: string) => boolean;
  isLessonUnlocked: (courseId: string, lessonIndex: number) => boolean;
  getLessonProgress: (lessonId: string) => LessonProgress;
  getCourseProgress: (courseId: string, totalLessons: number) => number;
  getTopicProgress: (topicId: string) => number;
  addMinutes: (minutes: number) => void;
}

const defaultState: ProgressState = {
  completedLessons: {},
  currentTopicId: 'history',
  streak: 0,
  lastActiveDate: '',
  dailyGoalMinutes: 5,
  todayMinutes: 0,
};

const ProgressContext = createContext<ProgressContextValue | null>(null);

const STORAGE_KEY = '@mindvault_progress';

function loadState(): ProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState;
    return { ...defaultState, ...JSON.parse(raw) };
  } catch {
    return defaultState;
  }
}

function saveState(s: ProgressState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
}

function todayStr(): string {
  return new Date().toDateString();
}

// lazy import to avoid circular dep
async function getCourses() {
  const { courses } = await import('@/data/content');
  return courses;
}

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<ProgressState>(() => {
    const loaded = loadState();
    const today = todayStr();
    if (loaded.lastActiveDate !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const ysStr = yesterday.toDateString();
      const newStreak = loaded.lastActiveDate === ysStr ? loaded.streak : 0;
      return { ...loaded, streak: newStreak, todayMinutes: 0, lastActiveDate: today };
    }
    return loaded;
  });

  // courses cache
  const [coursesData, setCoursesData] = React.useState<{ id: string; lessons: { id: string }[]; topicId: string }[]>([]);
  useEffect(() => {
    getCourses().then(c => setCoursesData(c));
  }, []);

  useEffect(() => {
    saveState(state);
  }, [state]);

  const updateStreak = (s: ProgressState): ProgressState => {
    const today = todayStr();
    if (s.lastActiveDate === today) return s;
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const ysStr = yesterday.toDateString();
    const newStreak = s.lastActiveDate === ysStr ? s.streak + 1 : 1;
    return { ...s, lastActiveDate: today, streak: newStreak };
  };

  const setCurrentTopic = (topicId: string) => {
    setState(s => ({ ...s, currentTopicId: topicId }));
  };

  const getLessonProgress = (lessonId: string): LessonProgress => {
    return state.completedLessons[lessonId] ?? { pagesRead: 0, completed: false };
  };

  const isLessonCompleted = (lessonId: string): boolean => {
    return state.completedLessons[lessonId]?.completed === true;
  };

  const isLessonUnlocked = (courseId: string, lessonIndex: number): boolean => {
    if (lessonIndex === 0) return true;
    const course = coursesData.find(c => c.id === courseId);
    if (!course) return false;
    const prevLesson = course.lessons[lessonIndex - 1];
    return state.completedLessons[prevLesson.id]?.completed === true;
  };

  const markPageRead = (lessonId: string, pageIndex: number, _totalPages: number) => {
    setState(s => {
      const current = s.completedLessons[lessonId] ?? { pagesRead: 0, completed: false };
      const pagesRead = Math.max(current.pagesRead, pageIndex + 1);
      return {
        ...s,
        completedLessons: { ...s.completedLessons, [lessonId]: { ...current, pagesRead } },
      };
    });
  };

  const markQuizComplete = (lessonId: string, score: number, answers: number[]) => {
    setState(s => {
      const current = s.completedLessons[lessonId] ?? { pagesRead: 0, completed: false };
      return updateStreak({
        ...s,
        completedLessons: {
          ...s.completedLessons,
          [lessonId]: { ...current, completed: true, quizScore: score, quizAnswers: answers },
        },
      });
    });
  };

  const getCourseProgress = (courseId: string, totalLessons: number): number => {
    if (totalLessons === 0) return 0;
    const course = coursesData.find(c => c.id === courseId);
    if (!course) return 0;
    const completed = course.lessons.filter(l => state.completedLessons[l.id]?.completed).length;
    return Math.round((completed / totalLessons) * 100);
  };

  const getTopicProgress = (topicId: string): number => {
    const topicCourses = coursesData.filter(c => c.topicId === topicId);
    if (topicCourses.length === 0) return 0;
    const completed = topicCourses.filter(c => getCourseProgress(c.id, c.lessons.length) === 100).length;
    return Math.round((completed / topicCourses.length) * 100);
  };

  const addMinutes = (minutes: number) => {
    setState(s => ({ ...s, todayMinutes: s.todayMinutes + minutes }));
  };

  return (
    <ProgressContext.Provider value={{
      state,
      setCurrentTopic,
      markPageRead,
      markQuizComplete,
      isLessonCompleted,
      isLessonUnlocked,
      getLessonProgress,
      getCourseProgress,
      getTopicProgress,
      addMinutes,
    }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used within ProgressProvider');
  return ctx;
}
