import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CheckCircle, XCircle, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { getLesson } from '@/data/content';
import { useProgress } from '@/context/ProgressContext';
import Navbar from '@/components/Navbar';

export default function QuizPage() {
  const { courseId, lessonId } = useParams<{ courseId: string; lessonId: string }>();
  const navigate = useNavigate();
  const { markQuizComplete } = useProgress();
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [correctTrack, setCorrectTrack] = useState<boolean[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [finished, setFinished] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  const data = getLesson(courseId!, lessonId!);
  if (!data) return <div className="p-8 text-center">Lesson not found.</div>;

  const { lesson } = data;
  const questions = lesson.quiz;
  const q = questions[currentQ];

  const handleSelect = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    setShowResult(true);
  };

  const handleNext = () => {
    if (selected === null) return;
    const correct = selected === q.correctIndex;
    const newCorrect = [...correctTrack, correct];
    const newAnswers = [...userAnswers, selected];

    if (currentQ + 1 >= questions.length) {
      const score = Math.round((newCorrect.filter(Boolean).length / questions.length) * 100);
      markQuizComplete(lessonId!, score, newAnswers);
      setCorrectTrack(newCorrect);
      setUserAnswers(newAnswers);
      setFinalScore(score);
      setFinished(true);
    } else {
      setCorrectTrack(newCorrect);
      setUserAnswers(newAnswers);
      setCurrentQ(p => p + 1);
      setSelected(null);
      setShowResult(false);
    }
  };

  if (finished) {
    const perfect = finalScore === 100;
    const correctCount = correctTrack.filter(Boolean).length;
    return (
      <div className="min-h-screen bg-background pb-20">
        <Navbar />
        <div className="pt-14 max-w-md mx-auto px-4 py-16 text-center">
          <div className={cn("text-6xl mb-4", perfect ? "animate-bounce" : "")}>
            {perfect ? '🎉' : finalScore >= 70 ? '👍' : '📚'}
          </div>
          <Trophy className={cn("w-12 h-12 mx-auto mb-4", perfect ? "text-[hsl(var(--secondary))]" : "text-muted-foreground")} />
          <h1 className="text-3xl font-bold mb-2">{finalScore}%</h1>
          <p className="text-muted-foreground mb-2">{correctCount} / {questions.length} correct</p>
          <p className="text-lg font-medium mb-8">
            {perfect ? 'Perfect score! Brilliant!' : finalScore >= 70 ? 'Great work!' : 'Keep studying!'}
          </p>
          <div className="flex gap-3">
            <Button variant="outline" onClick={() => navigate(`/course/${courseId}`)} className="flex-1">
              Back to Course
            </Button>
            <Button onClick={() => navigate('/')} className="flex-1 bg-primary text-primary-foreground">
              Home
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      <Navbar />
      <div className="pt-14 max-w-xl mx-auto px-4 py-8">
        <p className="text-xs text-muted-foreground mb-1">Question {currentQ + 1} of {questions.length}</p>
        <div className="w-full bg-muted rounded-full h-1.5 mb-6">
          <div
            className="bg-primary h-1.5 rounded-full transition-all"
            style={{ width: `${(currentQ / questions.length) * 100}%` }}
          />
        </div>

        <h2 className="text-xl font-semibold mb-6 font-serif leading-snug">{q.question}</h2>

        <div className="flex flex-col gap-3 mb-6">
          {q.options.map((opt, idx) => {
            const isCorrect = idx === q.correctIndex;
            const isSelected = idx === selected;
            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className={cn(
                  "w-full text-left px-4 py-4 rounded-xl border-2 transition-all font-medium text-sm",
                  !showResult && "border-border bg-card hover:border-primary hover:bg-primary/5",
                  showResult && isCorrect && "border-primary bg-primary/10 text-primary",
                  showResult && isSelected && !isCorrect && "border-destructive bg-destructive/10 text-destructive",
                  showResult && !isSelected && !isCorrect && "border-border bg-card opacity-60",
                )}
              >
                <div className="flex items-center justify-between">
                  <span>{opt}</span>
                  {showResult && isCorrect && <CheckCircle className="w-5 h-5 text-primary shrink-0" />}
                  {showResult && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-destructive shrink-0" />}
                </div>
              </button>
            );
          })}
        </div>

        {showResult && (
          <div className={cn(
            "rounded-xl p-4 mb-6 text-sm",
            selected === q.correctIndex
              ? "bg-primary/10 text-primary border border-primary/20"
              : "bg-destructive/10 text-destructive border border-destructive/20"
          )}>
            <p className="font-semibold mb-1">{selected === q.correctIndex ? '✓ Correct!' : '✗ Not quite'}</p>
            <p>{q.explanation}</p>
          </div>
        )}

        {showResult && (
          <Button onClick={handleNext} className="w-full bg-primary text-primary-foreground">
            {currentQ + 1 >= questions.length ? 'See Results' : 'Next Question'}
          </Button>
        )}
      </div>
    </div>
  );
}
