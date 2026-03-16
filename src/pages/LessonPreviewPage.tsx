import { useParams, useNavigate } from 'react-router-dom';
import { X, BookOpen, HelpCircle, Clock, ChevronRight, Play, Trophy } from 'lucide-react';
import { getLesson } from '@/data/content';
import { useProgress } from '@/context/ProgressContext';
import Navbar from '@/components/Navbar';
import { proxyImageUrl } from '@/lib/utils';

export default function LessonPreviewPage() {
  const { courseId, lessonId } = useParams<{ courseId: string; lessonId: string }>();
  const navigate = useNavigate();
  const { getLessonProgress, isLessonCompleted } = useProgress();

  const data = getLesson(courseId!, lessonId!);
  if (!data) return <div className="p-8 text-center">Lesson not found.</div>;

  const { lesson } = data;
  const lp = getLessonProgress(lessonId!);
  const completed = isLessonCompleted(lessonId!);
  const description = lesson.pages[0]?.body.split('\n\n')[0] ?? '';
  const estimatedMin = Math.ceil((lesson.pages.length * 2 + lesson.quiz.length) / 2);

  return (
    <div className="min-h-screen bg-background pb-28">
      <Navbar />
      <div className="pt-14">
        {/* Hero */}
        <div className="relative h-[280px]">
          <img src={proxyImageUrl(lesson.imageUrl)} alt={lesson.title} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/20" />
          <button
            onClick={() => navigate(-1)}
            className="absolute top-4 left-4 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center shadow-sm"
          >
            <X className="w-5 h-5 text-foreground" />
          </button>
        </div>

        <div className="max-w-xl mx-auto px-6 py-6">
          {/* Badges */}
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">Lesson</span>
            {completed && (
              <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                ✓ Completed
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="font-serif text-2xl font-bold text-foreground mb-3 leading-snug">{lesson.title}</h1>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">{description}</p>

          {/* Meta */}
          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-6">
            <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5" /> {lesson.pages.length} pages</span>
            <span className="flex items-center gap-1"><HelpCircle className="w-3.5 h-3.5" /> {lesson.quiz.length} questions</span>
            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> ~{estimatedMin} min</span>
          </div>

          {/* Choose mode */}
          <p className="font-semibold text-sm mb-3">Choose your mode</p>

          <div className="flex flex-col gap-3 mb-4">
            {/* Learn mode */}
            <button
              onClick={() => navigate(`/read/${courseId}/${lessonId}`)}
              className="flex items-center gap-4 p-4 rounded-2xl border border-border bg-card hover:shadow-sm transition-all text-left"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-sm">Learn Mode</p>
                <p className="text-xs text-muted-foreground">Read through the lesson pages</p>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </button>

            {/* Quiz mode */}
            <button
              onClick={() => navigate(`/quiz/${courseId}/${lessonId}`)}
              className="flex items-center gap-4 p-4 rounded-2xl border border-border bg-indigo-50 hover:shadow-sm transition-all text-left"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center shrink-0">
                <HelpCircle className="w-5 h-5 text-indigo-600" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-sm">Quiz Mode</p>
                <p className="text-xs text-muted-foreground">Test your knowledge directly</p>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>

          {/* Previous quiz score */}
          {lp.quizScore !== undefined && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Trophy className="w-4 h-4 text-[hsl(var(--secondary))]" />
              Previous quiz score: <span className="font-semibold text-foreground">{lp.quizScore}%</span>
            </div>
          )}
        </div>
      </div>

      {/* Fixed bottom action bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border px-4 py-3 pb-6">
        <div className="max-w-xl mx-auto flex gap-3">
          <button
            onClick={() => navigate(`/read/${courseId}/${lessonId}`)}
            className="flex-1 flex items-center justify-center gap-2 h-12 rounded-xl border-2 border-primary bg-transparent text-primary font-semibold text-sm hover:bg-primary/5 transition-colors"
          >
            <BookOpen className="w-4 h-4" /> Read
          </button>
          <button
            onClick={() => navigate(`/quiz/${courseId}/${lessonId}`)}
            className="flex-1 flex items-center justify-center gap-2 h-12 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors"
          >
            <Play className="w-4 h-4" /> Play
          </button>
        </div>
      </div>
    </div>
  );
}
