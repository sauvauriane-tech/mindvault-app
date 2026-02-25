import { Flame, Clock, BookOpen, Target, CheckCircle } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { courses, topics } from '@/data/content';
import { useProgress, checkLessonUnlocked } from '@/context/ProgressContext';
import Navbar from '@/components/Navbar';
import { Link } from 'react-router-dom';

export default function ProfilePage() {
  const { state, getCourseProgress, getLessonProgress } = useProgress();
  const { streakDays, todayMinutes, dailyGoalMinutes, lessons } = state;

  const totalLessonsCompleted = Object.values(lessons).filter(l => l.completed).length;
  const goalProgress = Math.min((todayMinutes / dailyGoalMinutes) * 100, 100);

  const completedCourses = courses.filter(c =>
    getCourseProgress(c.id, c.lessons.length) === 100
  );

  return (
    <div className="min-h-screen bg-background pb-24">
      <Navbar />
      <div className="pt-14 max-w-xl mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">My Progress</h1>

        {/* Stats cards */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-card rounded-xl border p-4 text-center">
            <Flame className="w-6 h-6 text-secondary mx-auto mb-1" />
            <p className="text-2xl font-bold text-primary">{streakDays}</p>
            <p className="text-xs text-muted-foreground">day streak</p>
          </div>
          <div className="bg-card rounded-xl border p-4 text-center">
            <BookOpen className="w-6 h-6 text-primary mx-auto mb-1" />
            <p className="text-2xl font-bold text-primary">{totalLessonsCompleted}</p>
            <p className="text-xs text-muted-foreground">lessons done</p>
          </div>
          <div className="bg-card rounded-xl border p-4 text-center">
            <Clock className="w-6 h-6 text-muted-foreground mx-auto mb-1" />
            <p className="text-2xl font-bold text-primary">{Math.round(todayMinutes)}</p>
            <p className="text-xs text-muted-foreground">min today</p>
          </div>
        </div>

        {/* Daily goal */}
        <div className="bg-card rounded-xl border p-4 mb-6">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-primary" />
              <span className="font-medium text-sm">Daily Goal</span>
            </div>
            <span className="text-xs text-muted-foreground">{Math.round(todayMinutes)} / {dailyGoalMinutes} min</span>
          </div>
          <Progress value={goalProgress} className="h-2.5" />
          {goalProgress >= 100 && (
            <p className="text-xs text-primary font-medium mt-1.5 flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5" /> Goal reached today! 🎉
            </p>
          )}
        </div>

        {/* Topic progress */}
        <h2 className="font-semibold text-base mb-3">Topic Progress</h2>
        <div className="flex flex-col gap-3 mb-6">
          {topics.map(topic => {
            const topicCourses = courses.filter(c => c.topic === topic);
            const completed = topicCourses.filter(c => getCourseProgress(c.id, c.lessons.length) === 100).length;
            const pct = topicCourses.length > 0 ? Math.round((completed / topicCourses.length) * 100) : 0;
            return (
              <div key={topic} className="bg-card rounded-xl border p-3">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="font-medium text-sm">{topic}</span>
                  <span className="text-xs text-muted-foreground">{completed}/{topicCourses.length} courses</span>
                </div>
                <Progress value={pct} className="h-1.5" />
              </div>
            );
          })}
        </div>

        {/* Completed courses */}
        {completedCourses.length > 0 && (
          <>
            <h2 className="font-semibold text-base mb-3">Completed Courses</h2>
            <div className="flex flex-col gap-2">
              {completedCourses.map(course => (
                <Link
                  key={course.id}
                  to={`/course/${course.id}`}
                  className="flex items-center gap-3 bg-card rounded-xl border p-3 hover:shadow-sm transition"
                >
                  <img src={course.coverImage} alt={course.title} className="w-12 h-12 rounded-lg object-cover" />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm">{course.title}</p>
                    <p className="text-xs text-muted-foreground">{course.topic}</p>
                  </div>
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                </Link>
              ))}
            </div>
          </>
        )}

        {completedCourses.length === 0 && totalLessonsCompleted === 0 && (
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
