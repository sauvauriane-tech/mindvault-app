import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProgressProvider } from "@/context/ProgressContext";
import Index from "./pages/Index";
import CoursePage from "./pages/CoursePage";
import LessonPreviewPage from "./pages/LessonPreviewPage";
import ReadingPage from "./pages/ReadingPage";
import QuizPage from "./pages/QuizPage";
import ProfilePage from "./pages/ProfilePage";
import TimelineCategoriesPage from "./pages/TimelineCategoriesPage";
import TimelinePage from "./pages/TimelinePage";
import TimelineModeSelectPage from "./pages/TimelineModeSelectPage";
import TimelineQuizPage from "./pages/TimelineQuizPage";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ProgressProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/course/:id" element={<CoursePage />} />
            <Route path="/lesson/:courseId/:lessonId" element={<LessonPreviewPage />} />
            <Route path="/read/:courseId/:lessonId" element={<ReadingPage />} />
            <Route path="/quiz/:courseId/:lessonId" element={<QuizPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/timelines" element={<TimelineCategoriesPage />} />
            <Route path="/timeline/:categoryId" element={<TimelinePage />} />
            <Route path="/timeline/:categoryId/mode" element={<TimelineModeSelectPage />} />
            <Route path="/timeline/:categoryId/quiz" element={<TimelineQuizPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ProgressProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
