import { Flame, Flag, BookOpen, Star, Trophy, CheckCircle } from 'lucide-react';
import { courses, TOPICS } from '@/data/content';
import { useProgress } from '@/context/ProgressContext';
import Navbar from '@/components/Navbar';
import { Link } from 'react-router-dom';

export default function ProfilePage() {
  const { state, getCourseProgress, getLessonProgress, getTopicProgress } = useProgress();
  const { streak, todayMinutes, dailyGoalMinutes, completedLessons } = state;

  const totalCompleted = Object.values(completedLessons).filter(l => l.completed).length;

  const allScores = Object.values(completedLessons)
    .map(l => l.quizScore)
    .filter((s): s is number => s !== undefined);
  const avgScore = allScores.length > 0
    ? Math.round(allScores.reduce((a, b) => a + b, 0) / allScores.length)
    : 0;

  const goalProgress = Math.min((todayMinutes / dailyGoalMinutes) * 100, 100);

  const completedCourses = courses.filter(c => getCourseProgress(c.id, c.lessons.length) === 100);

  return (
    <div className="min-h-screen bg-background pb-24">
      <Navbar />
      <div className="pt-14 max-w-xl mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">My Progress</h1>

        {/* 3 stat cards */}
        <div className="grid grid-cols-3 gap-3 mb-5">
          <div className="bg-card rounded-2xl border p-4 text-center">
            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-2">
              <Flame className="w-5 h-5 text-[hsl(var(--streak))]" />
            </div>
            <p className="text-2xl font-bold">{streak}</p>
            <p className="text-xs text-muted-foreground">Day Streak</p>
          </div>
          <div className="bg-card rounded-2xl border p-4 text-center">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
              <CheckCircle className="w-5 h-5 text-primary" />
            </div>
            <p className="text-2xl font-bold">{totalCompleted}</p>
            <p className="text-xs text-muted-foreground">Completed</p>
          </div>
          <div className="bg-card rounded-2xl border p-4 text-center">
            <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center mx-auto mb-2">
              <Star className="w-5 h-5 text-yellow-500" />
            </div>
            <p className="text-2xl font-bold">{avgScore > 0 ? `${avgScore}%` : '—'}</p>
            <p className="text-xs text-muted-foreground">Avg Score</p>
          </div>
        </div>

        {/* Daily goal */}
        <div className="bg-card rounded-2xl border p-4 mb-5">
          <div className="flex items-center gap-2 mb-3">
            <Flag className="w-4 h-4 text-primary" />
            <span className="font-semibold text-sm">Daily Goal</span>
            <span className="ml-auto text-xs text-muted-foreground">{Math.round(todayMinutes)} / {dailyGoalMinutes} min</span>
          </div>
          <div className="h-3 rounded-full bg-[hsl(var(--progress-bg))] overflow-hidden">
            <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${goalProgress}%` }} />
          </div>
          {goalProgress >= 100 && (
            <p className="text-xs text-primary font-medium mt-2 flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5" /> Goal reached today! 🎉
            </p>
          )}
        </div>

        {/* Topic progress */}
        <h2 className="font-semibold text-base mb-3">Topic Progress</h2>
        <div className="flex flex-col gap-3 mb-6">
          {TOPICS.map(topic => {
            const pct = getTopicProgress(topic.id);
            return (
              <div key={topic.id} className="bg-card rounded-2xl border p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-sm">{topic.name}</span>
                  <span className="text-xs text-muted-foreground">{pct}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-[hsl(var(--progress-bg))] overflow-hidden">
                  <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${pct}%` }} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Completed courses */}
        {completedCourses.length > 0 && (
          <>
            <h2 className="font-semibold text-base mb-3">Completed Courses</h2>
            <div className="flex flex-col gap-2">
              {completedCourses.map(course => {
                const lessonScores = course.lessons
                  .map(l => getLessonProgress(l.id).quizScore)
                  .filter((s): s is number => s !== undefined);
                const avgCourseScore = lessonScores.length > 0
                  ? Math.round(lessonScores.reduce((a, b) => a + b, 0) / lessonScores.length)
                  : null;

                return (
                  <Link
                    key={course.id}
                    to={`/course/${course.id}`}
                    className="flex items-center gap-3 bg-card rounded-2xl border p-3 hover:shadow-sm transition"
                  >
                    <img src={course.imageUrl} alt={course.title} className="w-12 h-12 rounded-xl object-cover" />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm">{course.title}</p>
                      <p className="text-xs text-muted-foreground">{course.lessons.length} lessons{avgCourseScore !== null ? ` · ${avgCourseScore}% avg` : ''}</p>
                    </div>
                    <Trophy className="w-5 h-5 text-[hsl(var(--secondary))] shrink-0" />
                  </Link>
                );
              })}
            </div>
          </>
        )}

        {totalCompleted === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <BookOpen className="w-10 h-10 mx-auto mb-3 opacity-30" />
            <p className="font-medium">No progress yet</p>
            <p className="text-sm">Start a course to track your learning!</p>
          </div>
        )}
      </div>
    </div>
  );
}
