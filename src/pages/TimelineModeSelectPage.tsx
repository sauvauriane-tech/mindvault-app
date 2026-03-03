import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, BookOpen, HelpCircle, Flag } from 'lucide-react';
import { ALL_TIMELINE_CATEGORIES } from '@/data/timelines';
import { getQuestionsByCategory } from '@/data/questions';

export default function TimelineModeSelectPage() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();

  const category = ALL_TIMELINE_CATEGORIES.find(c => c.id === categoryId);
  if (!category) return <div className="p-8 text-center text-muted-foreground">Category not found.</div>;

  const questionCount = getQuestionsByCategory(categoryId!).length;

  return (
    <div className="min-h-screen bg-background sm:bg-white">
      {/* Hero image */}
      <div className="relative h-[220px]">
        <img src={category.imageUrl} alt={category.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/35" />
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center shadow z-20"
        >
          <ChevronLeft className="w-5 h-5 text-foreground" />
        </button>
        <div className="absolute bottom-4 left-5 right-5">
          <p className="text-white/80 text-xs font-medium uppercase tracking-wider mb-1">History</p>
          <h1 className="text-white text-2xl font-bold tracking-tight leading-tight">{category.name}</h1>
          <p className="text-white/70 text-sm mt-0.5">{category.description}</p>
        </div>
      </div>

      {/* Mode selection */}
      <div className="max-w-xl mx-auto px-4 py-6">
        <h2 className="text-base font-semibold text-foreground mb-4 tracking-tight">Choose your mode</h2>

        <div className="flex flex-col gap-3">
          {/* Explore */}
          <button
            onClick={() => navigate(`/timeline/${categoryId}`)}
            className="w-full flex items-center gap-4 px-4 py-3 rounded-lg border border-border bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-left shadow-sm"
          >
            <div className="w-11 h-11 rounded-lg bg-primary-foreground/20 flex items-center justify-center shrink-0">
              <BookOpen className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-primary-foreground">Explore</p>
              <p className="text-sm text-primary-foreground/70">Read articles &amp; timelines</p>
            </div>
            <ChevronLeft className="w-5 h-5 text-primary-foreground/60 rotate-180 shrink-0" />
          </button>

          {/* Quiz */}
          <button
            onClick={() => navigate(`/timeline/${categoryId}/quiz`)}
            className="w-full flex items-center gap-4 px-4 py-3 rounded-lg border border-border bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-left shadow-sm"
          >
            <div className="w-11 h-11 rounded-lg bg-primary-foreground/20 flex items-center justify-center shrink-0">
              <HelpCircle className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-primary-foreground">Quiz</p>
              <p className="text-sm text-primary-foreground/70">
                Test your knowledge · {questionCount} question{questionCount !== 1 ? 's' : ''}
              </p>
            </div>
            <ChevronLeft className="w-5 h-5 text-primary-foreground/60 rotate-180 shrink-0" />
          </button>

          {/* Flags — coming soon */}
          <button
            disabled
            className="w-full flex items-center gap-4 px-4 py-3 rounded-lg border border-border bg-primary text-primary-foreground opacity-40 text-left cursor-not-allowed"
          >
            <div className="w-11 h-11 rounded-lg bg-primary-foreground/20 flex items-center justify-center shrink-0">
              <Flag className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-primary-foreground">Flags</p>
              <p className="text-sm text-primary-foreground/70">Guess the country flag</p>
            </div>
            <span className="text-xs font-medium text-primary-foreground/60 bg-primary-foreground/20 px-2 py-0.5 rounded-full shrink-0">Soon</span>
          </button>
        </div>
      </div>
    </div>
  );
}
