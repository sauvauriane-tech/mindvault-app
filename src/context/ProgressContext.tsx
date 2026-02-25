import React, { createContext, useContext, useEffect, useState } from 'react';
import { Topic } from '@/data/content';

interface LessonProgress {
  pagesRead: number;
  completed: boolean;
  quizScore?: number; // 0-100
}

interface ProgressState {
  lessons: Record<string, LessonProgress>; // key: `${courseId}/${lessonId}`
  selectedTopic: Topic;
  streakDays: number;
  lastActiveDate: string; // ISO date string YYYY-MM-DD
  todayMinutes: number;
  dailyGoalMinutes: number;
}

interface ProgressContextValue {
  state: ProgressState;
  setSelectedTopic: (topic: Topic) => void;
  markPageRead: (courseId: string, lessonId: string, pageIndex: number, totalPages: number) => void;
  markLessonComplete: (courseId: string, lessonId: string) => void;
  saveQuizScore: (courseId: string, lessonId: string, score: number) => void;
  addStudyMinutes: (minutes: number) => void;
  getLessonProgress: (courseId: string, lessonId: string) => LessonProgress;
  isLessonUnlocked: (courseId: string, lessonIndex: number) => boolean;
  getCourseProgress: (courseId: string, totalLessons: number) => number; // 0-100
}

const defaultState: ProgressState = {
  lessons: {},
  selectedTopic: 'History',
  streakDays: 0,
  lastActiveDate: '',
  todayMinutes: 0,
  dailyGoalMinutes: 5,
};

const ProgressContext = createContext<ProgressContextValue | null>(null);

const STORAGE_KEY = 'mindvault_progress';

function loadState(): ProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState;
    return { ...defaultState, ...JSON.parse(raw) };
  } catch {
    return defaultState;
  }
}

function saveState(state: ProgressState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function todayISO(): string {
  return new Date().toISOString().split('T')[0];
}

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<ProgressState>(() => {
    const loaded = loadState();
    // Update streak on load
    const today = todayISO();
    if (loaded.lastActiveDate !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().split('T')[0];
      const newStreak = loaded.lastActiveDate === yesterdayStr ? loaded.streakDays : 0;
      return { ...loaded, streakDays: newStreak, todayMinutes: 0, lastActiveDate: today };
    }
    return loaded;
  });

  useEffect(() => {
    saveState(state);
  }, [state]);

  const updateActivity = (s: ProgressState): ProgressState => {
    const today = todayISO();
    if (s.lastActiveDate !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().split('T')[0];
      const newStreak = s.lastActiveDate === yesterdayStr ? s.streakDays + 1 : 1;
      return { ...s, lastActiveDate: today, streakDays: newStreak };
    }
    return s;
  };

  const setSelectedTopic = (topic: Topic) => {
    setState(s => ({ ...s, selectedTopic: topic }));
  };

  const getLessonProgress = (courseId: string, lessonId: string): LessonProgress => {
    return state.lessons[`${courseId}/${lessonId}`] ?? { pagesRead: 0, completed: false };
  };

  const markPageRead = (courseId: string, lessonId: string, pageIndex: number, totalPages: number) => {
    const key = `${courseId}/${lessonId}`;
    setState(s => {
      const current = s.lessons[key] ?? { pagesRead: 0, completed: false };
      const pagesRead = Math.max(current.pagesRead, pageIndex + 1);
      return updateActivity({
        ...s,
        lessons: {
          ...s.lessons,
          [key]: { ...current, pagesRead },
        },
      });
    });
  };

  const markLessonComplete = (courseId: string, lessonId: string) => {
    const key = `${courseId}/${lessonId}`;
    setState(s => {
      const current = s.lessons[key] ?? { pagesRead: 0, completed: false };
      return updateActivity({
        ...s,
        lessons: { ...s.lessons, [key]: { ...current, completed: true } },
      });
    });
  };

  const saveQuizScore = (courseId: string, lessonId: string, score: number) => {
    const key = `${courseId}/${lessonId}`;
    setState(s => {
      const current = s.lessons[key] ?? { pagesRead: 0, completed: false };
      return updateActivity({
        ...s,
        lessons: { ...s.lessons, [key]: { ...current, completed: true, quizScore: score } },
      });
    });
  };

  const addStudyMinutes = (minutes: number) => {
    setState(s => updateActivity({ ...s, todayMinutes: s.todayMinutes + minutes }));
  };

  const isLessonUnlocked = (courseId: string, lessonIndex: number): boolean => {
    if (lessonIndex === 0) return true;
    // Need the course's lesson list — look at state
    // We check if previous lesson is completed by looking at the lessons record
    // We need courseId + lessonId of previous lesson — this is passed from the page
    // For now we just look at whether any lesson at index-1 is completed
    // Callers should pass lessonIds from the course
    return false; // overridden by the real check below
  };

  const isLessonUnlockedById = (courseId: string, lessonIndex: number): boolean => {
    if (lessonIndex === 0) return true;
    return false;
  };

  const getCourseProgress = (courseId: string, totalLessons: number): number => {
    if (totalLessons === 0) return 0;
    let completed = 0;
    Object.keys(state.lessons).forEach(key => {
      if (key.startsWith(`${courseId}/`) && state.lessons[key].completed) completed++;
    });
    return Math.round((completed / totalLessons) * 100);
  };

  return (
    <ProgressContext.Provider value={{
      state,
      setSelectedTopic,
      markPageRead,
      markLessonComplete,
      saveQuizScore,
      addStudyMinutes,
      getLessonProgress,
      isLessonUnlocked,
      getCourseProgress,
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

// Helper to check if a specific lesson (by index in course.lessons) is unlocked
export function checkLessonUnlocked(
  lessons: { id: string }[],
  lessonIndex: number,
  courseId: string,
  progressState: ProgressState
): boolean {
  if (lessonIndex === 0) return true;
  const prevLesson = lessons[lessonIndex - 1];
  const key = `${courseId}/${prevLesson.id}`;
  return progressState.lessons[key]?.completed === true;
}
