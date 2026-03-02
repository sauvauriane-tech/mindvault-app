import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, CheckCircle2 } from 'lucide-react';
import { getTimelineForCategory, ALL_TIMELINE_CATEGORIES, TimelineEvent } from '@/data/timelines';
import TimelineEventDetail from '@/components/TimelineEventDetail';

const PERIOD_COLORS: Record<string, string> = {
  antiquity: 'bg-amber-100 text-amber-800',
  medieval: 'bg-stone-100 text-stone-700',
  reformation: 'bg-orange-100 text-orange-800',
  'early-modern': 'bg-yellow-100 text-yellow-800',
  modern: 'bg-blue-100 text-blue-800',
  contemporary: 'bg-green-100 text-green-800',
  recent: 'bg-purple-100 text-purple-800',
};

export default function TimelinePage() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);
  const [readIds, setReadIds] = useState<string[]>(() => {
    const saved = localStorage.getItem(`timeline_read_${categoryId}`);
    return saved ? JSON.parse(saved) : [];
  });

  const category = ALL_TIMELINE_CATEGORIES.find(c => c.id === categoryId);
  const events = getTimelineForCategory(categoryId || '');
  const progress = events.length > 0 ? Math.round((readIds.length / events.length) * 100) : 0;

  const handleMarkRead = (id: string) => {
    if (readIds.includes(id)) return;
    const updated = [...readIds, id];
    setReadIds(updated);
    localStorage.setItem(`timeline_read_${categoryId}`, JSON.stringify(updated));
  };

  if (selectedEvent) {
    return (
      <TimelineEventDetail
        event={selectedEvent}
        isRead={readIds.includes(selectedEvent.id)}
        onMarkRead={() => handleMarkRead(selectedEvent.id)}
        onBack={() => setSelectedEvent(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background pb-16">
      {/* Sticky header */}
      <div className="sticky top-0 z-10 bg-background border-b border-border">
        <div className="max-w-xl mx-auto px-4 py-3 flex items-center gap-3">
          <button
            onClick={() => navigate('/timelines')}
            className="w-9 h-9 rounded-full bg-muted flex items-center justify-center shrink-0"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex-1 min-w-0">
            <h1 className="font-bold text-base truncate">{category?.name ?? categoryId}</h1>
            <p className="text-xs text-muted-foreground">{readIds.length} of {events.length} read</p>
          </div>
          <div
            className="px-3 py-1 rounded-full text-xs font-semibold text-white shrink-0"
            style={{ background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary-dark)))' }}
          >
            {progress}%
          </div>
        </div>
        {/* Progress bar */}
        <div className="h-1 bg-muted">
          <div
            className="h-full bg-primary transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-xl mx-auto px-4 pt-6 pb-8">
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-0.5"
            style={{ background: 'linear-gradient(180deg, hsl(var(--primary)) 0%, hsl(var(--primary-dark)) 100%)' }}
          />

          <div className="flex flex-col gap-5">
            {events.map((event) => {
              const isRead = readIds.includes(event.id);
              const periodClass = PERIOD_COLORS[event.period] ?? 'bg-muted text-muted-foreground';
              return (
                <button
                  key={event.id}
                  onClick={() => setSelectedEvent(event)}
                  className="relative pl-14 text-left group"
                >
                  {/* Marker */}
                  <div
                    className={`absolute left-[13px] top-3 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all z-10 ${
                      isRead
                        ? 'bg-primary border-primary'
                        : 'bg-background border-primary group-hover:bg-primary/10'
                    }`}
                  >
                    {isRead && <CheckCircle2 className="w-3 h-3 text-primary-foreground" />}
                  </div>

                  {/* Card */}
                  <div className="bg-card border border-border rounded-2xl p-4 group-hover:border-primary/40 group-hover:shadow-sm transition-all">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <span className="text-sm font-bold text-primary">{event.year}</span>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0 capitalize ${periodClass}`}>
                        {event.period.replace('-', ' ')}
                      </span>
                    </div>
                    <p className="font-semibold text-sm text-foreground leading-snug">{event.title}</p>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                      {event.content.split('\n\n')[0]}
                    </p>
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
