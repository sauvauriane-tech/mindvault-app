import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, CheckCircle, Lock, BookOpen } from 'lucide-react';
import { getCourse } from '@/data/content';
import { useProgress } from '@/context/ProgressContext';
import Navbar from '@/components/Navbar';

export default function CoursePage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isLessonCompleted, isLessonUnlocked, getLessonProgress } = useProgress();

  const course = getCourse(id!);
  if (!course) return <div className="p-8 text-center">Course not found.</div>;

  return (
    <div className="min-h-screen bg-background pb-24">
      <Navbar />
      <div className="pt-14">
        {/* Hero */}
        <div className="relative h-[280px]">
          <img src={course.imageUrl} alt={course.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/10" />
          <button
            onClick={() => navigate(-1)}
            className="absolute top-4 left-4 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center shadow-sm"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
        </div>

        <div className="max-w-2xl mx-auto px-4 py-6">
          <p className="text-xs text-muted-foreground mb-1">Course · {course.lessons.length} lessons</p>
          <h1 className="font-serif text-2xl font-bold mb-6">{course.title}</h1>

          <div className="flex flex-col gap-3">
            {course.lessons.map((lesson, idx) => {
              const unlocked = isLessonUnlocked(course.id, idx);
              const completed = isLessonCompleted(lesson.id);
              const lp = getLessonProgress(lesson.id);
              const isActive = !completed && unlocked;

              return (
                <button
                  key={lesson.id}
                  onClick={() => unlocked && navigate(`/lesson/${course.id}/${lesson.id}`)}
                  disabled={!unlocked}
                  className={`flex items-center gap-4 p-3.5 rounded-2xl border text-left transition-all ${
                    unlocked ? 'bg-card border-border hover:shadow-sm cursor-pointer' : 'bg-card border-border cursor-not-allowed'
                  } ${!unlocked ? 'opacity-60' : ''}`}
                >
                  {/* Status icon */}
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                    completed
                      ? 'bg-primary'
                      : isActive
                      ? 'border-2 border-primary bg-transparent'
                      : 'bg-[hsl(var(--locked))]'
                  }`}>
                    {completed ? (
                      <CheckCircle className="w-4 h-4 text-primary-foreground" />
                    ) : isActive ? (
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    ) : (
                      <Lock className="w-3.5 h-3.5 text-white" />
                    )}
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <p className={`font-medium text-sm leading-snug ${!unlocked ? 'text-muted-foreground' : 'text-foreground'}`}>
                      {lesson.title}
                    </p>
                    {lp.quizScore !== undefined && (
                      <span className="inline-block mt-1 text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">
                        Quiz: {lp.quizScore}%
                      </span>
                    )}
                  </div>

                  {/* Thumbnail */}
                  <img
                    src={lesson.imageUrl}
                    alt={lesson.title}
                    className="w-[70px] h-[70px] rounded-xl object-cover shrink-0"
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
