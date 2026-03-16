import { Link } from 'react-router-dom';
import { Star, Clock, Headphones } from 'lucide-react';
import { Course } from '@/data/content';
import { proxyImageUrl } from '@/lib/utils';

interface CourseCardProps {
  course: Course;
  progress: number;
}

export default function CourseCard({ course, progress }: CourseCardProps) {
  return (
    <Link to={`/course/${course.id}`} className="block">
      <div className="rounded-2xl overflow-hidden border border-border bg-[hsl(var(--surface-secondary))] hover:shadow-md transition-shadow">
        {/* Image */}
        <div className="relative h-[200px]">
          <img
            src={course.imageUrl}
            alt={course.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />
          {progress > 0 && (
            <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-semibold px-2.5 py-1 rounded-full">
              {progress}%
            </div>
          )}
          <button
            onClick={e => e.preventDefault()}
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center shadow-sm"
          >
            <Headphones className="w-4 h-4 text-foreground" />
          </button>
        </div>

        {/* Content */}
        <div className="px-5 py-4 text-center">
          <p className="text-xs text-muted-foreground mb-1">
            {course.lessons.length} lessons · {course.estimatedMinutes} min ·{' '}
            <Star className="w-3 h-3 inline fill-[hsl(var(--secondary))] text-[hsl(var(--secondary))]" />{' '}
            {course.rating}
          </p>
          <h3 className="font-serif text-xl font-semibold text-foreground mb-3 leading-snug">
            {course.title}
          </h3>
          {progress === 0 && (
            <div className="inline-flex items-center px-6 py-2 rounded-full bg-foreground text-background text-sm font-semibold">
              Start
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
