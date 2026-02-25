import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, CheckCircle, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { getLesson } from '@/data/content';
import { useProgress } from '@/context/ProgressContext';
import Navbar from '@/components/Navbar';

export default function LessonPreviewPage() {
  const { courseId, lessonId } = useParams<{ courseId: string; lessonId: string }>();
  const navigate = useNavigate();
  const { getLessonProgress } = useProgress();

  const data = getLesson(courseId!, lessonId!);
  if (!data) return <div className="p-8 text-center">Lesson not found.</div>;

  const { course, lesson } = data;
  const lp = getLessonProgress(courseId!, lessonId!);
  const pageProgress = lesson.pages.length > 0 ? (lp.pagesRead / lesson.pages.length) * 100 : 0;

  return (
    <div className="min-h-screen bg-background pb-24">
      <Navbar />
      <div className="pt-14">
        {/* Hero */}
        <div className="relative h-52">
          <img src={lesson.thumbnail} alt={lesson.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <button
            onClick={() => navigate(-1)}
            className="absolute top-4 left-4 bg-black/40 text-white rounded-full p-1.5 backdrop-blur"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-white/70 text-xs mb-1">{course.title}</p>
            <h1 className="text-xl font-bold text-white">{lesson.title}</h1>
          </div>
        </div>

        <div className="max-w-xl mx-auto px-4 py-6">
          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="bg-card rounded-xl p-4 border">
              <p className="text-xs text-muted-foreground mb-1">Reading Progress</p>
              <p className="font-semibold text-sm mb-2">{lp.pagesRead} / {lesson.pages.length} pages</p>
              <Progress value={pageProgress} className="h-1.5" />
            </div>
            <div className="bg-card rounded-xl p-4 border">
              <p className="text-xs text-muted-foreground mb-1">Quiz Status</p>
              {lp.quizScore !== undefined ? (
                <>
                  <p className="font-semibold text-sm flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-primary" /> Completed
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">Score: {lp.quizScore}%</p>
                </>
              ) : (
                <p className="font-medium text-sm text-muted-foreground flex items-center gap-1">
                  <BookOpen className="w-4 h-4" /> Not taken
                </p>
              )}
            </div>
          </div>

          <div className="text-sm text-muted-foreground mb-6">
            {lesson.pages.length} reading pages · {lesson.quiz.length} quiz questions
          </div>

          <Button
            onClick={() => navigate(`/read/${courseId}/${lessonId}`)}
            className="w-full bg-primary text-primary-foreground h-12 text-base"
          >
            {lp.pagesRead > 0 ? 'Continue Reading' : 'Start Reading'}
          </Button>

          {lp.completed && lp.quizScore === undefined && (
            <Button
              variant="outline"
              onClick={() => navigate(`/quiz/${courseId}/${lessonId}`)}
              className="w-full mt-3"
            >
              Take Quiz
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
