import { Link } from 'react-router-dom';
import { Star, Clock, Lock } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Course } from '@/data/content';

interface CourseCardProps {
  course: Course;
  progress: number; // 0-100
}

export default function CourseCard({ course, progress }: CourseCardProps) {
  return (
    <Link to={`/course/${course.id}`}>
      <Card className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer group">
        <div className="relative">
          <img
            src={course.coverImage}
            alt={course.title}
            className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
        <div className="p-3">
          <h3 className="font-semibold text-sm leading-tight mb-2 line-clamp-2">{course.title}</h3>
          <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
            <span className="flex items-center gap-0.5">
              <Star className="w-3 h-3 fill-secondary text-secondary" />
              {course.rating}
            </span>
            <span className="flex items-center gap-0.5">
              <Clock className="w-3 h-3" />
              {course.estimatedMinutes}m
            </span>
          </div>
          <Progress value={progress} className="h-1.5" />
          <p className="text-xs text-muted-foreground mt-1">{progress}% complete</p>
        </div>
      </Card>
    </Link>
  );
}
