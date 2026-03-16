import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getLesson, PageImage } from '@/data/content';
import { useProgress } from '@/context/ProgressContext';
import Navbar from '@/components/Navbar';
import { proxyImageUrl } from '@/lib/utils';

// ── Inline carousel ──────────────────────────────────────────────────────────
function ImageCarousel({ images }: { images: PageImage[] }) {
  const [idx, setIdx] = useState(0);
  if (!images.length) return null;
  const img = images[idx];
  return (
    <figure className="my-6 w-full">
      <div className="relative rounded-xl overflow-hidden bg-muted" style={{ maxHeight: '56vw', minHeight: 180 }}>
        <img
          key={idx}
          src={img.url}
          alt={img.caption ?? ''}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-opacity duration-300"
          style={{ maxHeight: '56vw', minHeight: 180, display: 'block' }}
        />
        {images.length > 1 && (
          <>
            <button
              onClick={() => setIdx(i => (i - 1 + images.length) % images.length)}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/80 backdrop-blur flex items-center justify-center shadow text-foreground hover:bg-background transition"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIdx(i => (i + 1) % images.length)}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/80 backdrop-blur flex items-center justify-center shadow text-foreground hover:bg-background transition"
              aria-label="Next image"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            {/* Dots */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${i === idx ? 'bg-white scale-125' : 'bg-white/50'}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      {img.caption && (
        <figcaption className="mt-2 text-xs text-muted-foreground text-center italic leading-snug px-2">
          {img.caption}
        </figcaption>
      )}
    </figure>
  );
}

// ── Extra images gallery strip ────────────────────────────────────────────────
function ExtraImagesGallery({ images }: { images: PageImage[] }) {
  if (!images.length) return null;
  return (
    <div className="mt-8 mb-2">
      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related Works</p>
      <div className={`grid gap-3 ${images.length === 1 ? 'grid-cols-1' : images.length === 2 ? 'grid-cols-2' : 'grid-cols-2 sm:grid-cols-3'}`}>
        {images.map((img, i) => (
          <figure key={i} className="group">
            <div className="rounded-lg overflow-hidden bg-muted aspect-[4/3]">
              <img
                src={img.url}
                alt={img.caption ?? ''}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            {img.caption && (
              <figcaption className="mt-1 text-[11px] text-muted-foreground leading-snug italic text-center">
                {img.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </div>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────────
export default function ReadingPage() {
  const { courseId, lessonId } = useParams<{ courseId: string; lessonId: string }>();
  const navigate = useNavigate();
  const { markPageRead, addMinutes } = useProgress();
  const [currentPage, setCurrentPage] = useState(0);
  const startTimeRef = useRef(Date.now());

  const data = getLesson(courseId!, lessonId!);

  useEffect(() => {
    return () => {
      const minutes = (Date.now() - startTimeRef.current) / 60000;
      if (minutes > 0.1) addMinutes(Math.round(minutes * 10) / 10);
    };
  }, []);

  if (!data) return <div className="p-8 text-center">Lesson not found.</div>;
  const { lesson } = data;
  const pages = lesson.pages;
  const page = pages[currentPage];
  const isLast = currentPage === pages.length - 1;
  const progress = ((currentPage + 1) / pages.length) * 100;

  const handleNext = () => {
    markPageRead(lessonId!, currentPage, pages.length);
    if (isLast) {
      navigate(`/quiz/${courseId}/${lessonId}`);
    } else {
      setCurrentPage(p => p + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) setCurrentPage(p => p - 1);
  };

  // Split body into paragraphs; intersperse carousel images between them
  const paragraphs = page.body.split('\n\n');
  const carouselImages = page.images ?? [];
  const hasCarousel = carouselImages.length > 0;

  return (
    <div className="min-h-screen bg-background pb-20">
      <Navbar />
      <div className="pt-14">
        {/* Progress bar */}
        <div className="sticky top-14 z-40 bg-background/95 backdrop-blur border-b border-border">
          <div className="h-1.5 bg-[hsl(var(--progress-bg))] w-full">
            <div
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="max-w-2xl mx-auto px-4 py-2 flex items-center gap-3">
            <button onClick={() => navigate(-1)} className="text-muted-foreground hover:text-foreground">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs text-muted-foreground flex-1 text-center">{currentPage + 1} / {pages.length}</span>
            <div className="w-5" />
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 py-8">
          <p className="text-xs font-medium text-primary uppercase tracking-wider mb-1">{lesson.title}</p>
          <h1 className="text-2xl font-bold mb-6">{page.title}</h1>

          {/* Legacy single image (no carousel defined) */}
          {page.imageUrl && !hasCarousel && (
            <img
              src={page.imageUrl}
              alt={page.title}
              className="w-full h-52 object-cover rounded-xl mb-6"
            />
          )}

          {/* Paragraphs interspersed with carousel */}
          <div className="max-w-none">
            {paragraphs.map((para, i) => (
              <div key={i}>
                <p className="font-serif text-lg leading-relaxed text-foreground mb-4">{para}</p>
                {/* Insert carousel after the first paragraph if images are defined */}
                {hasCarousel && i === 0 && (
                  <ImageCarousel images={carouselImages} />
                )}
              </div>
            ))}
          </div>

          {/* Extra standalone gallery below body */}
          {page.extraImages && <ExtraImagesGallery images={page.extraImages} />}

          <div className="flex gap-3 mt-10">
            {currentPage > 0 && (
              <Button variant="outline" onClick={handlePrev} className="flex-1">
                <ChevronLeft className="w-4 h-4 mr-1" /> Previous
              </Button>
            )}
            <Button onClick={handleNext} className="flex-1 bg-primary text-primary-foreground">
              {isLast ? 'Take Quiz' : 'Next Page'}
              {!isLast && <ChevronRight className="w-4 h-4 ml-1" />}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
