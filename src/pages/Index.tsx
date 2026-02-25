import { useNavigate } from 'react-router-dom';
import { Flame, Target, Star, Clock, BookOpen, CheckCircle } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { courses, topics, Topic } from '@/data/content';
import { useProgress, checkLessonUnlocked } from '@/context/ProgressContext';
import CourseCard from '@/components/CourseCard';
import Navbar from '@/components/Navbar';

export default function Index() {
  const navigate = useNavigate();
  const { state, setSelectedTopic, getCourseProgress } = useProgress();
  const { selectedTopic, streakDays, todayMinutes, dailyGoalMinutes } = state;

  const filteredCourses = courses.filter(c => c.topic === selectedTopic);
  const goalProgress = Math.min((todayMinutes / dailyGoalMinutes) * 100, 100);

  return (
    <div className="min-h-screen bg-background pb-24">
      <Navbar />
      <div className="pt-14">
        {/* Header stats */}
        <div className="bg-primary text-primary-foreground px-4 py-5">
          <div className="max-w-xl mx-auto flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold">Good day, learner! 👋</h2>
              <p className="text-primary-foreground/70 text-sm">Keep building your knowledge</p>
            </div>
            <div className="flex items-center gap-4">
              {/* Streak */}
              <div className="text-center">
                <div className="flex items-center gap-1 text-secondary font-bold text-lg">
                  <Flame className="w-5 h-5" />
                  {streakDays}
                </div>
                <p className="text-xs text-primary-foreground/70">streak</p>
              </div>
              {/* Daily goal ring */}
              <div className="text-center">
                <div className="relative w-10 h-10">
                  <svg className="w-10 h-10 -rotate-90" viewBox="0 0 36 36">
                    <circle cx="18" cy="18" r="15" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="3" />
                    <circle
                      cx="18" cy="18" r="15" fill="none"
                      stroke="hsl(35 50% 63%)"
                      strokeWidth="3"
                      strokeDasharray={`${goalProgress * 0.942} 100`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <Target className="absolute inset-0 m-auto w-4 h-4 text-primary-foreground" />
                </div>
                <p className="text-xs text-primary-foreground/70 mt-0.5">{Math.round(todayMinutes)}m</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-xl mx-auto px-4 py-4">
          {/* Topic selector */}
          <div className="mb-5">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Topic</p>
            <div className="flex gap-2 flex-wrap">
              {topics.map(topic => (
                <button
                  key={topic}
                  onClick={() => setSelectedTopic(topic)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all border ${
                    selectedTopic === topic
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-card text-foreground border-border hover:border-primary/40'
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>

          {/* Course grid */}
          <div className="mb-2 flex items-center justify-between">
            <h2 className="font-semibold text-base">{selectedTopic} Courses</h2>
            <span className="text-xs text-muted-foreground">{filteredCourses.length} courses</span>
          </div>

          {filteredCourses.length === 0 ? (
            <div className="text-center py-16 text-muted-foreground">
              <BookOpen className="w-10 h-10 mx-auto mb-3 opacity-40" />
              <p>No courses yet for this topic.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3">
              {filteredCourses.map(course => (
                <CourseCard
                  key={course.id}
                  course={course}
                  progress={getCourseProgress(course.id, course.lessons.length)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
