import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { getLesson } from '@/data/content';
import { useProgress } from '@/context/ProgressContext';
import Navbar from '@/components/Navbar';

export default function ReadingPage() {
  const { courseId, lessonId } = useParams<{ courseId: string; lessonId: string }>();
  const navigate = useNavigate();
  const { markPageRead, markLessonComplete, addStudyMinutes } = useProgress();
  const [currentPage, setCurrentPage] = useState(0);
  const startTimeRef = useRef(Date.now());

  const data = getLesson(courseId!, lessonId!);

  useEffect(() => {
    return () => {
      const minutes = (Date.now() - startTimeRef.current) / 60000;
      if (minutes > 0.1) addStudyMinutes(Math.round(minutes * 10) / 10);
    };
  }, []);

  if (!data) return <div className="p-8 text-center">Lesson not found.</div>;
  const { course, lesson } = data;
  const pages = lesson.pages;
  const page = pages[currentPage];
  const isLast = currentPage === pages.length - 1;
  const progress = ((currentPage + 1) / pages.length) * 100;

  const handleNext = () => {
    markPageRead(courseId!, lessonId!, currentPage, pages.length);
    if (isLast) {
      markLessonComplete(courseId!, lessonId!);
      navigate(`/quiz/${courseId}/${lessonId}`);
    } else {
      setCurrentPage(p => p + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) setCurrentPage(p => p - 1);
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <Navbar />
      <div className="pt-14">
        {/* Progress bar */}
        <div className="sticky top-14 z-40 bg-background/95 backdrop-blur border-b border-border px-4 py-2">
          <div className="max-w-2xl mx-auto flex items-center gap-3">
            <button onClick={() => navigate(-1)} className="text-muted-foreground hover:text-foreground">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <Progress value={progress} className="flex-1 h-2" />
            <span className="text-xs text-muted-foreground whitespace-nowrap">{currentPage + 1} / {pages.length}</span>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 py-8">
          <p className="text-xs font-medium text-primary uppercase tracking-wider mb-1">{lesson.title}</p>
          <h1 className="text-2xl font-bold mb-6">{page.title}</h1>

          {page.image && (
            <img
              src={page.image}
              alt={page.title}
              className="w-full h-52 object-cover rounded-xl mb-6"
            />
          )}

          <div className="prose prose-lg max-w-none">
            {page.body.split('\n\n').map((para, i) => (
              <p key={i} className="font-serif text-lg leading-relaxed text-foreground mb-4">
                {para}
              </p>
            ))}
          </div>

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
