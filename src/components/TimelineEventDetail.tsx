import { useState } from 'react';
import { ChevronLeft, Lightbulb, BookOpen } from 'lucide-react';
import { TimelineEvent } from '@/data/timelines';


interface Props {
  event: TimelineEvent;
  isRead: boolean;
  onMarkRead: () => void;
  onBack: () => void;
}

function ImageWithCaption({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return (
    <figure className="mb-6">
      <div className="bg-muted rounded-xl overflow-hidden">
        <img
          src={src}
          alt={alt}
          className="w-full h-auto block"
          onError={() => setFailed(true)}
        />
      </div>
      <figcaption className="mt-2 text-xs text-muted-foreground italic leading-relaxed text-center px-2">
        {caption ? `${caption} · AI-generated illustration` : 'AI-generated illustration'}
      </figcaption>
    </figure>
  );
}

export default function TimelineEventDetail({ event, isRead, onMarkRead, onBack }: Props) {
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Sticky back button */}
      <div className="sticky top-0 z-10 bg-background border-b border-border px-4 py-3 flex items-center gap-3">
        <button
          onClick={onBack}
          className="w-9 h-9 rounded-full bg-muted flex items-center justify-center shrink-0"
        >
          <ChevronLeft className="w-4 h-4 text-foreground" />
        </button>
        <span className="text-xs font-bold text-primary uppercase tracking-wide">{event.year}</span>
      </div>

      <div className="max-w-xl mx-auto px-4 py-6">
        {/* Title */}
        <h1 className="text-2xl font-bold font-serif mb-6 leading-snug">{event.title}</h1>

        {/* Article-style image with caption */}
        {event.image && (
          <ImageWithCaption src={event.image} alt={event.imageCaption ?? event.title} caption={event.imageCaption} />
        )}

        {/* Content */}
        <div className="space-y-3 mb-6">
          {event.content.split('\n\n').map((para, i) => (
            <p key={i} className="text-sm text-foreground leading-relaxed">
              {para.trim()}
            </p>
          ))}
        </div>

        {/* Fun fact */}
        {event.funFact && (
          <div className="bg-[hsl(var(--surface-secondary))] rounded-2xl p-4 mb-6 flex gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
              <Lightbulb className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-xs font-semibold text-primary mb-1">Fun Fact</p>
              <p className="text-sm text-foreground leading-relaxed">{event.funFact}</p>
            </div>
          </div>
        )}
      </div>

      {/* Bottom action bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border px-4 py-3">
        <div className="max-w-xl mx-auto">
          <button
            onClick={() => { onMarkRead(); onBack(); }}
            disabled={isRead}
            className={`w-full py-3 rounded-2xl font-semibold text-sm flex items-center justify-center gap-2 transition-all ${
              isRead
                ? 'bg-muted text-muted-foreground cursor-default'
                : 'bg-primary text-primary-foreground hover:opacity-90'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            {isRead ? '✓ Marked as Read' : 'Mark as Read'}
          </button>
        </div>
      </div>
    </div>
  );
}
