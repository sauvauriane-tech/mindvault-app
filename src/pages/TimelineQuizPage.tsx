import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CheckCircle, XCircle, Trophy, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { getQuestionsByCategory } from '@/data/questions';
import { ALL_TIMELINE_CATEGORIES } from '@/data/timelines';

export default function TimelineQuizPage() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();

  const questions = getQuestionsByCategory(categoryId!);
  const category = ALL_TIMELINE_CATEGORIES.find(c => c.id === categoryId);

  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [correctTrack, setCorrectTrack] = useState<boolean[]>([]);
  const [finished, setFinished] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-4 p-8 text-center">
        <p className="text-muted-foreground">No quiz questions available for this category yet.</p>
        <Button variant="outline" onClick={() => navigate(`/timeline/${categoryId}/mode`)}>Go Back</Button>
      </div>
    );
  }

  const q = questions[currentQ];

  const handleSelect = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    setShowResult(true);
  };

  const handleNext = () => {
    if (selected === null) return;
    const correct = selected === q.correctAnswer;
    const newCorrect = [...correctTrack, correct];

    if (currentQ + 1 >= questions.length) {
      const score = Math.round((newCorrect.filter(Boolean).length / questions.length) * 100);
      setCorrectTrack(newCorrect);
      setFinalScore(score);
      setFinished(true);
    } else {
      setCorrectTrack(newCorrect);
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
        <div className="max-w-md mx-auto px-4 py-16 text-center">
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
            <Button variant="outline" onClick={() => navigate(`/timeline/${categoryId}/mode`)} className="flex-1">
              Back
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
      <div className="max-w-xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={() => navigate(`/timeline/${categoryId}/mode`)}
            className="w-9 h-9 rounded-full border border-border flex items-center justify-center"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <div>
            <p className="text-xs text-muted-foreground">{category?.name}</p>
            <p className="text-sm font-semibold text-foreground">Quiz</p>
          </div>
        </div>

        <p className="text-xs text-muted-foreground mb-1">Question {currentQ + 1} of {questions.length}</p>
        <div className="w-full bg-muted rounded-full h-1.5 mb-6">
          <div
            className="bg-primary h-1.5 rounded-full transition-all"
            style={{ width: `${(currentQ / questions.length) * 100}%` }}
          />
        </div>

        {q.image && (
          <div className="rounded-xl overflow-hidden h-40 mb-5">
            <img src={q.image} alt="" className="w-full h-full object-cover" />
          </div>
        )}

        <h2 className="text-xl font-semibold mb-6 font-serif leading-snug">{q.question}</h2>

        <div className="flex flex-col gap-3 mb-6">
          {q.options.map((opt, idx) => {
            const isCorrect = idx === q.correctAnswer;
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
            "rounded-xl p-4 mb-4 text-sm",
            selected === q.correctAnswer
              ? "bg-primary/10 text-primary border border-primary/20"
              : "bg-destructive/10 text-destructive border border-destructive/20"
          )}>
            <p className="font-semibold mb-1">{selected === q.correctAnswer ? '✓ Correct!' : '✗ Not quite'}</p>
            <p className="mb-2">{q.explanation}</p>
            {q.funFact && (
              <p className="text-xs opacity-80 border-t border-current/20 pt-2 mt-2">
                💡 <span className="font-medium">Fun fact:</span> {q.funFact}
              </p>
            )}
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
