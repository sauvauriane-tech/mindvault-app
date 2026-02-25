import { useParams, useNavigate, Link } from 'react-router-dom';
import { ChevronLeft, BookOpen, CheckCircle, Lock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { getCourse } from '@/data/content';
import { useProgress, checkLessonUnlocked as ctxCheck } from '@/context/ProgressContext';
import Navbar from '@/components/Navbar';

export default function CoursePage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { state, getCourseProgress, getLessonProgress } = useProgress();

  const course = getCourse(id!);
  if (!course) return <div className="p-8 text-center">Course not found.</div>;

  const progress = getCourseProgress(course.id, course.lessons.length);

  return (
    <div className="min-h-screen bg-background pb-24">
      <Navbar />
      <div className="pt-14">
        {/* Hero */}
        <div className="relative h-52">
          <img src={course.coverImage} alt={course.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <button
            onClick={() => navigate(-1)}
            className="absolute top-4 left-4 bg-black/40 text-white rounded-full p-1.5 backdrop-blur"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-4 right-4">
            <Badge className="bg-secondary text-secondary-foreground mb-2 text-xs">{course.topic}</Badge>
            <h1 className="text-2xl font-bold text-white">{course.title}</h1>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 py-6">
          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <span className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-secondary text-secondary" /> {course.rating}
            </span>
            <span>{course.estimatedMinutes} min</span>
            <span>{course.lessons.length} lessons</span>
          </div>

          {/* Progress */}
          <div className="mb-6">
            <div className="flex justify-between text-xs text-muted-foreground mb-1">
              <span>Course progress</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <h2 className="font-semibold text-lg mb-3">Lessons</h2>

          <div className="flex flex-col gap-3">
            {course.lessons.map((lesson, idx) => {
              const unlocked = ctxCheck(course.lessons, idx, course.id, state);
              const lp = getLessonProgress(course.id, lesson.id);
              return (
                <button
                  key={lesson.id}
                  onClick={() => unlocked && navigate(`/lesson/${course.id}/${lesson.id}`)}
                  disabled={!unlocked}
                  className={`flex items-center gap-4 p-3 rounded-xl border text-left transition-all ${
                    unlocked
                      ? 'bg-card hover:shadow-md cursor-pointer border-border'
                      : 'bg-muted/50 cursor-not-allowed border-transparent opacity-60'
                  }`}
                >
                  <img
                    src={lesson.thumbnail}
                    alt={lesson.title}
                    className="w-16 h-16 rounded-lg object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm leading-snug">{lesson.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{lesson.pages.length} pages · {lesson.quiz.length} questions</p>
                    {lp.quizScore !== undefined && (
                      <span className="inline-block mt-1 text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">
                        Quiz: {lp.quizScore}%
                      </span>
                    )}
                  </div>
                  <div className="shrink-0">
                    {lp.completed ? (
                      <CheckCircle className="w-5 h-5 text-primary" />
                    ) : !unlocked ? (
                      <Lock className="w-5 h-5 text-muted-foreground" />
                    ) : (
                      <BookOpen className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
