
# MindVault — Knowledge Hub Web App

## What Was Built on Replit

The original app is called **MindVault** — a Duolingo-style educational app built with **Expo/React Native**. Since Lovable builds web apps with React + Vite, I'll recreate it faithfully as a **web app** using the same content, structure, and design philosophy.

---

## App Overview

A structured learning platform where users pick topics (History, Culture, Politics, Philosophy), browse courses, read lessons page-by-page, and take quizzes — with streak and progress tracking.

---

## Design System

Matching the original earthy/nature-inspired palette:
- **Primary**: Forest green `#2D6A4F`
- **Accent**: Warm amber `#D4A373`
- **Background**: Cream `#FAFAF5`
- **Surface**: White `#FFFFFF`
- **Text**: Near-black `#1A1A1A`
- **Fonts**: Inter for UI, serif font for reading content

---

## Pages & Screens

### 1. Home Page (`/`)
- **Header**: App logo "MindVault", streak counter (🔥 flame icon + days), daily goal progress ring
- **Topic Selector Bar**: Dropdown/pill selector showing current topic (History / Culture / Politics / Philosophy) with a "Change" button that reveals a 4-option picker
- **Course Grid**: 2-column card grid of courses filtered by selected topic
  - Each card: cover image (Unsplash), title, rating (⭐), estimated minutes, progress bar showing % lessons completed
  - Locked/unlocked visual state (first lesson always unlocked)

### 2. Course Detail Page (`/course/:id`)
- Full-width hero image with course title overlay
- Rating, estimated time metadata
- **Lesson List**: Ordered list of lessons, each showing:
  - Thumbnail image
  - Lesson title
  - Lock icon if not yet unlocked (must complete previous lesson first)
  - Checkmark if completed
  - Quiz score badge if quiz was taken
- Tap unlocked lesson → goes to Lesson Preview

### 3. Lesson Preview Page (`/lesson/:courseId/:lessonId`)
- Lesson title + hero image
- "Start Reading" button → goes to Reading screen
- Shows lesson progress (pages read / total pages)
- Shows quiz completion status

### 4. Reading Screen (`/read/:courseId/:lessonId`)
- Page-by-page reading experience (one page at a time)
- Page has: title, optional image, body text (serif font, comfortable reading width)
- Progress bar at top showing current page / total pages
- "Next Page" / "Previous Page" navigation buttons
- On last page: "Take Quiz" button
- Time tracking: counts minutes spent reading

### 5. Quiz Screen (`/quiz/:courseId/:lessonId`)
- One multiple-choice question at a time
- Question text + 4 answer options as tappable cards
- After selection: immediate feedback — green for correct, red for wrong, with explanation text
- "Next Question" button
- Final score screen: percentage, celebration for perfect score, "Back to Course" button
- Score saved to progress

### 6. Profile Page (`/profile`)
- **Stats cards**: Streak (days), Lessons completed, Total minutes studied
- **Topic Progress**: Progress bar per topic showing % courses completed
- **Daily Goal**: Visual ring/bar showing today's minutes vs. 5-min daily goal
- **Completed Courses**: List of finished courses

---

## Navigation
- **Top navbar**: MindVault logo (home link), Profile link
- **Bottom tab bar** (mobile-first feel): Home | Profile icons
- Breadcrumb-style back navigation on deep pages

---

## Content Data (from the repository)
All content is already defined in static TypeScript — I'll port it directly:

**Topics**: History, Culture, Politics, Philosophy

**Courses included**:
- **Medieval Europe** (History) — 4 lessons: The Real Middle Ages, Peasant Life, How Monks Saved Knowledge, Flat Earth Myth
- **Mysteries of Ancient Egypt** (History) — 2 lessons: Who Built the Pyramids, Cleopatra Beyond the Myth
- **Great Thinkers of Antiquity** (Philosophy) — 1+ lessons: Socrates, and more

Each lesson has 2–3 reading pages + 2–3 quiz questions with explanations.

---

## Progress Tracking (localStorage)
Persisted in localStorage (replacing AsyncStorage):
- Which lessons are completed
- Pages read per lesson
- Quiz scores per lesson
- Current selected topic
- Daily streak (days in a row active)
- Today's minutes studied
- Daily goal: 5 minutes

**Unlock logic**: Lesson N+1 unlocks only after Lesson N is completed.

---

## Implementation Order
1. Set up content data file (port all courses/lessons/quizzes)
2. Set up progress context with localStorage persistence
3. Build shared components (TopicSelector, CourseCard, LessonCard, ProgressBar, QuizOption)
4. Build Home page with topic filtering + course grid
5. Build Course Detail page with lesson list
6. Build Reading screen (page-by-page)
7. Build Quiz screen (questions + scoring)
8. Build Profile page (stats + progress)
9. Set up routing and navigation
10. Apply color theme and typography
