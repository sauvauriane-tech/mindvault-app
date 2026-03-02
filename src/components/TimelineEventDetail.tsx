import { useState } from 'react';
import { ChevronLeft, Lightbulb, BookOpen } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { TimelineEvent, EventImage } from '@/data/timelines';

interface Props {
  event: TimelineEvent;
  isRead: boolean;
  onMarkRead: () => void;
  onBack: () => void;
}

function ImageCarousel({ images }: { images: EventImage[] }) {
  const [failed, setFailed] = useState<Record<string, boolean>>({});

  const visible = images.filter(img => !failed[img.src]);
  if (visible.length === 0) return null;

  if (visible.length === 1) {
    const img = visible[0];
    return (
      <figure className="mb-6">
        <div className="bg-muted rounded-xl overflow-hidden" style={{ maxHeight: '60vh' }}>
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-contain block"
            onError={() => setFailed(f => ({ ...f, [img.src]: true }))}
          />
        </div>
        <figcaption className="mt-2 text-xs text-muted-foreground italic leading-relaxed text-center px-2">
          {img.alt}
        </figcaption>
      </figure>
    );
  }

  return (
    <figure className="mb-6">
      <div className="bg-muted rounded-xl overflow-hidden" style={{ maxHeight: '60vh' }}>
        <Swiper
          modules={[Pagination]}
          spaceBetween={8}
          slidesPerView={1}
          pagination={{ clickable: true }}
          style={{ maxHeight: '60vh' }}
        >
          {visible.map((img) => (
            <SwiperSlide key={img.src} style={{ display: 'flex', flexDirection: 'column' }}>
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-contain rounded-lg"
                style={{ maxHeight: 'calc(60vh - 2rem)' }}
                onError={() => setFailed(f => ({ ...f, [img.src]: true }))}
              />
              <figcaption className="mt-1 text-xs text-muted-foreground italic text-center px-2 pb-6">
                {img.alt}
              </figcaption>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </figure>
  );
}

function LegacyImage({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return (
    <figure className="mb-6">
      <div className="bg-muted rounded-xl overflow-hidden" style={{ maxHeight: '60vh' }}>
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-contain block"
          onError={() => setFailed(true)}
        />
      </div>
      <figcaption className="mt-2 text-xs text-muted-foreground italic leading-relaxed text-center px-2">
        {caption || ''}
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

        {/* Images: prefer new images[] array, fall back to legacy image */}
        {event.images?.length ? (
          <ImageCarousel images={event.images} />
        ) : event.image ? (
          <LegacyImage src={event.image} alt={event.imageCaption ?? event.title} caption={event.imageCaption} />
        ) : null}

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
