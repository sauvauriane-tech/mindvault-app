import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';
import { ALL_TIMELINE_CATEGORIES, getTimelineForCategory } from '@/data/timelines';
import Navbar from '@/components/Navbar';

export default function TimelineCategoriesPage() {
  const navigate = useNavigate();

  const renderCategory = (cat: { id: string; name: string; description: string }) => {
    const events = getTimelineForCategory(cat.id);
    return (
      <button
        key={cat.id}
        onClick={() => navigate(`/timeline/${cat.id}`)}
        className="w-full flex items-center justify-between bg-card rounded-2xl border border-border p-4 text-left hover:border-primary/50 hover:shadow-md transition-all group"
      >
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-sm text-foreground">{cat.name}</p>
          <p className="text-xs text-muted-foreground mt-0.5 leading-snug">{cat.description}</p>
          <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
            <Clock className="w-3 h-3" />
            <span>{events.length} events</span>
          </div>
        </div>
        <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors ml-3 shrink-0" />
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      <Navbar />
      <div className="pt-14">
        <div className="max-w-xl mx-auto px-4 py-4">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <button
              onClick={() => navigate(-1)}
              className="w-9 h-9 rounded-full bg-muted flex items-center justify-center"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div>
              <h1 className="text-xl font-bold font-serif">History Timelines</h1>
              <p className="text-xs text-muted-foreground">Explore European history chronologically</p>
            </div>
          </div>

          {/* Main timelines */}
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Full Timelines</p>
          <div className="flex flex-col gap-3 mb-6">
            {TIMELINE_CATEGORIES.map(renderCategory)}
          </div>

          {/* Recent history */}
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Recent History</p>
          <div className="flex flex-col gap-3">
            {TIMELINE_CATEGORIES_RECENT.map(renderCategory)}
          </div>
        </div>
      </div>
    </div>
  );
}
