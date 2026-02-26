import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronRight, Flag, Check, Clock } from 'lucide-react';
import { TOPICS, getCoursesByTopic } from '@/data/content';
import { useProgress } from '@/context/ProgressContext';
import CourseCard from '@/components/CourseCard';
import Navbar from '@/components/Navbar';
import { TIMELINE_CATEGORIES, TIMELINE_CATEGORIES_RECENT, getTimelineForCategory } from '@/data/timelines';

export default function Index() {
  const navigate = useNavigate();
  const { state, setCurrentTopic, getCourseProgress, getTopicProgress } = useProgress();
  const { currentTopicId, streak, todayMinutes, dailyGoalMinutes } = state;
  const [topicOpen, setTopicOpen] = useState(false);

  const currentTopic = TOPICS.find(t => t.id === currentTopicId) ?? TOPICS[0];
  const filteredCourses = getCoursesByTopic(currentTopicId);
  const topicProgress = getTopicProgress(currentTopicId);

  return (
    <div className="min-h-screen bg-background pb-24">
      <Navbar />
      <div className="pt-14">
        <div className="max-w-xl mx-auto px-4 py-4">

          {/* Stats bar */}
          <div className="bg-card rounded-2xl border border-border p-4 mb-4 flex items-center">
            <div className="flex items-center gap-3 flex-1">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Flag className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="font-bold text-base leading-none">{Math.round(todayMinutes)} / {dailyGoalMinutes} min</p>
                <p className="text-xs text-muted-foreground mt-0.5">Daily Goal</p>
              </div>
            </div>
            <div className="w-px h-10 bg-border mx-4" />
            <div className="text-center flex-1">
              <p className="font-bold text-3xl leading-none text-[hsl(var(--streak))]">{streak}</p>
              <p className="text-xs text-muted-foreground mt-0.5">Days Streak</p>
            </div>
          </div>

          {/* Topic selector */}
          <div className="mb-4">
            <button
              onClick={() => setTopicOpen(o => !o)}
              className="w-full flex items-center justify-between px-5 py-3.5 rounded-2xl text-left"
              style={{ backgroundColor: 'hsl(var(--primary-dark))' }}
            >
              <div>
                <p className="text-xs font-medium opacity-60 text-primary-foreground mb-0.5">Topic</p>
                <p className="text-lg font-bold text-primary-foreground">{currentTopic.name}</p>
              </div>
              <div
                className="px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1"
                style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: 'hsl(var(--accent-light))' }}
              >
                Change <ChevronDown className="w-3 h-3" />
              </div>
            </button>

            {topicOpen && (
              <div className="mt-1 bg-card rounded-2xl border border-border overflow-hidden shadow-md">
                {TOPICS.map(topic => (
                  <button
                    key={topic.id}
                    onClick={() => { setCurrentTopic(topic.id); setTopicOpen(false); }}
                    className="w-full flex items-center justify-between px-5 py-3.5 hover:bg-muted transition-colors text-left"
                  >
                    <span className="font-medium text-sm">{topic.name}</span>
                    {topic.id === currentTopicId && <Check className="w-4 h-4 text-primary" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Topic progress */}
          {topicProgress > 0 && (
            <div className="mb-4">
              <div className="flex justify-between text-xs text-muted-foreground mb-1">
                <span>{currentTopic.name} progress</span>
                <span>{topicProgress}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-[hsl(var(--progress-bg))] overflow-hidden">
                <div
                  className="h-full rounded-full bg-primary transition-all"
                  style={{ width: `${topicProgress}%` }}
                />
              </div>
            </div>
          )}

          {/* Timelines banner — shown for History topic */}
          {currentTopicId === 'history' && (
            <button
              onClick={() => navigate('/timelines')}
              className="w-full flex items-center justify-between rounded-2xl p-4 mb-4 text-left hover:opacity-90 transition-opacity"
              style={{ background: 'linear-gradient(135deg, hsl(var(--primary-dark)), hsl(var(--primary)))' }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                  <Scroll className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-sm text-white">History Timelines</p>
                  <p className="text-xs text-white/70">French · German · European · Spanish · Italian</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-white/80 shrink-0" />
            </button>
          )}

          {/* Course list */}
          <div className="flex flex-col gap-4">
            {filteredCourses.length === 0 ? (
              <div className="text-center py-16 text-muted-foreground">
                <p>No courses yet for this topic.</p>
              </div>
            ) : (
              filteredCourses.map(course => (
                <CourseCard
                  key={course.id}
                  course={course}
                  progress={getCourseProgress(course.id, course.lessons.length)}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
