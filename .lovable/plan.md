

## The Real Problem

Lovable **cannot import existing GitHub repositories directly** — it's a known limitation. The GitHub sync feature only works as a two-way sync after you've connected an existing Lovable project to GitHub. There is no "import from GitHub" button that pulls in external code.

What has been happening across all prior messages:
1. You gave a GitHub URL
2. I fetched the files to read them
3. I **rewrote** the app from scratch based on what I read — but in a different shape (2-column grid, different context API, wrong UX patterns)

The correct approach is to **faithfully port every screen, component, and data structure** from the original to match 1:1. I've now read all source files directly. Here is exactly what needs to be rebuilt.

---

## What I Now Have From the Original Repo

I've read all 6 key source files:
- `lib/content-data.ts` — full content with exact text, image URLs, all 5 courses
- `lib/progress-context.tsx` — exact API: `completedLessons`, `markQuizComplete(lessonId, score, answers[])`, `addMinutes`, `getTopicProgress`, `isLessonCompleted`, `setCurrentTopic`
- `constants/colors.ts` — exact color tokens
- `app/(tabs)/index.tsx` — exact Home screen layout
- `app/course/[id].tsx` — exact Course Detail layout
- `app/lesson/[courseId]/[lessonId].tsx` — exact Lesson Preview layout
- `app/(tabs)/profile.tsx` — Profile screen layout

---

## Full Plan: Faithful Port of All 6 Files

### File 1 — `src/data/content.ts` (REPLACE ENTIRELY)

Exact structure from original:
```ts
export interface QuizQuestion {
  id: string;           // 'q1', 'q2', 'q3'
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}
export interface LessonPage {
  title: string;
  body: string;
  imageUrl?: string;    // NOTE: original uses imageUrl not image
}
export interface Lesson {
  id: string;
  title: string;
  imageUrl: string;     // NOTE: imageUrl not thumbnail
  pages: LessonPage[];
  quiz: QuizQuestion[];
}
export interface Course {
  id: string;
  title: string;
  imageUrl: string;     // NOTE: imageUrl not coverImage
  topicId: string;      // NOTE: topicId (lowercase string), not topic
  rating: number;
  estimatedMinutes: number;
  lessons: Lesson[];
}
export interface Topic {
  id: string;
  name: string;
  icon: string;
}
export const TOPICS: Topic[] = [
  { id: 'history', name: 'History', icon: 'book' },
  { id: 'culture', name: 'Culture', icon: 'globe' },
  { id: 'politics', name: 'Politics', icon: 'flag' },
  { id: 'philosophy', name: 'Philosophy', icon: 'bulb' },
];
```

All 5 courses from repo (exact content, exact image URLs):
1. `medieval-europe` (history) — 4 lessons: real-middle-ages, peasant-life, monks-knowledge, flat-earth-myth
2. `ancient-egypt` (history) — 2 lessons: pyramid-builders, cleopatra
3. `ancient-philosophy` (philosophy) — 1 lesson: socrates-method
4. `cold-war-politics` (politics) — 1 lesson: iron-curtain
5. `world-cultures` (culture) — 1 lesson: maya-civilization

---

### File 2 — `src/context/ProgressContext.tsx` (REPLACE ENTIRELY)

Port the original exactly, replacing `AsyncStorage` with `localStorage`:

```ts
interface LessonProgress {
  completed: boolean;
  pagesRead: number;
  quizScore?: number;
  quizAnswers?: number[];
}
interface ProgressState {
  completedLessons: Record<string, LessonProgress>; // keyed by lessonId ONLY
  currentTopicId: string;
  streak: number;
  lastActiveDate: string;
  dailyGoalMinutes: number;
  todayMinutes: number;
}
// Context value:
markPageRead(lessonId, pageIndex, totalPages)      // lessonId only (not courseId/lessonId)
markQuizComplete(lessonId, score, answers[])       // NOT markLessonComplete + saveQuizScore
isLessonCompleted(lessonId)
isLessonUnlocked(courseId, lessonIndex)            // looks up COURSES internally
getLessonProgress(lessonId)
getCourseProgress(courseId, totalLessons)
getTopicProgress(topicId)                          // NEW - missing from current build
setCurrentTopic(topicId)                           // NOT setSelectedTopic
addMinutes(minutes)                                // NOT addStudyMinutes
```

Storage key: `@mindvault_progress`
Streak updates on `markQuizComplete` (not on page read)
`lastActiveDate` uses `.toDateString()` not ISO

---

### File 3 — `src/pages/Index.tsx` (REPLACE ENTIRELY)

Exact layout from original:

**StatsBar** — white card with border, two columns:
- Left: green square icon (Flag icon), "X / 5 min" bold, "Daily Goal" label below
- Vertical divider line
- Right: large bold number (streak), "Days Streak" label

**TopicSelector** — dark green pill (`#1B4332` = `primaryDark`):
- Left: small "Topic" label above large bold topic name
- Right: "Change" button pill (white 15% opacity bg, accentLight text)
- On click: animated dropdown list below with all 4 topics, checkmark on active

**Topic progress bar** (only shown when topicProgress > 0):
- Thin 6px bar with green fill, percentage text right

**Course list** — single column, gap between cards (no grid)

---

### File 4 — `src/components/CourseCard.tsx` (REPLACE ENTIRELY)

Single full-width card, rounded-xl, `surfaceSecondary` background (`#F5F0E8`):
- **Image area**: 200px tall, full width, `object-cover`
  - Top-left overlay badge: green pill showing `{progress}%` (only if progress > 0)
  - Top-right: white circular button with headphone icon
- **Content area**: centered, padding 18px
  - Meta text centered: `{N} lessons · {N} min · ★ {rating}`
  - Title: large serif font (SourceSerif4 equivalent = font-serif), centered, text-xl
  - "Start" dark button (centered, pill shape) — only shown if progress === 0

---

### File 5 — `src/pages/CoursePage.tsx` (REPLACE ENTIRELY)

- Hero image: 280px tall, full width, light overlay (rgba 0,0,0,0.1)
- Back button: white circle (90% opacity) top-left, chevron-left icon, dark text color
- Below hero: white/cream bg content area
  - "Course · N lessons" small gray meta text
  - Course title: large serif font
  - Lesson list (gap 12px), each row:
    - White card, rounded-2xl, border, padding 14px
    - Left: status icon circle (28px) — green filled+checkmark if complete, green border+dot if active, gray+lock if locked
    - Title text (flex-1): dark if unlocked, tertiary gray if locked
    - Right: lesson thumbnail image 70×70 rounded-xl
    - Locked rows: 60% opacity

---

### File 6 — `src/pages/LessonPreviewPage.tsx` (REPLACE ENTIRELY)

- Hero image: 280px tall
- Close "X" button top-left (white circle)
- Content area with padding 24px:
  - Badge row: green "Lesson" badge pill + optional green "✓ Completed" badge
  - Lesson title: large serif bold
  - Description: first paragraph of `lesson.pages[0].body.split('\n\n')[0]`
  - Meta row: document icon "N pages" · help icon "N questions" · clock "~N min"
  - **"Choose your mode"** heading (semibold)
  - **Learn Mode card** (white, border, rounded-2xl): book icon (green bg), title+desc, chevron-right
  - **Quiz Mode card** (light purple bg `#EEF2FF`): game-controller icon (indigo), title+desc, chevron-right
  - Previous quiz score row (if exists): trophy icon + "Previous quiz score: N%"
- **Fixed bottom action bar** (white bg, border-top, safe bottom padding):
  - "Read" button: outlined (border, bg-transparent), book icon, flex-1
  - "Play" button: filled green (`primary`), play icon, flex-1

---

### File 7 — `src/pages/ProfilePage.tsx` (UPDATE)

Match original structure:
- 3 stat cards in a row (flame-streak, checkmark-total completed, star-average score) — each card: icon circle with tinted bg, large value, label
- Daily goal progress bar (wider, taller than current) with flag icon
- Topic progress section: each topic row shows topic name + topic progress bar + percentage
- Completed courses list: each entry shows course title + lesson count + quiz score

---

### File 8 — `src/pages/ReadingPage.tsx` (MINOR UPDATES)

Change field references:
- `lesson.thumbnail` → `lesson.imageUrl`
- `page.image` → `page.imageUrl`
- `markLessonComplete` is removed — completion now happens via `markQuizComplete`
- `addStudyMinutes` → `addMinutes`
- `markPageRead(courseId, lessonId, ...)` → `markPageRead(lessonId, ...)` (lessonId only)

---

### File 9 — `src/pages/QuizPage.tsx` (UPDATE)

- `saveQuizScore(courseId, lessonId, score)` → `markQuizComplete(lessonId, score, answers[])` 
- Must collect `answers[]` array as user answers each question
- Pass answers array to `markQuizComplete`

---

### File 10 — `src/index.css` (UPDATE COLORS)

Add exact color tokens from `constants/colors.ts` as CSS variables:
```css
--primary: #2D6A4F
--primary-dark: #1B4332    /* for topic bar */
--accent: #D4A373
--accent-light: #E9C89B
--surface-secondary: #F5F0E8   /* for course cards */
--surface-tertiary: #EDE8DC
--streak: #F59E0B
--locked: #C4C4C4
--progress-bg: #E8E2D6
```

---

## Summary of Key Differences to Fix

| What | Original | Currently broken |
|------|----------|-----------------|
| Topic selector | Dark green pill + "Change" dropdown | 4 horizontal pill buttons |
| Stats bar | White card, Flag icon + N/5min + divider + big streak number | Green header with circular ring |
| Course cards | Single column, 200px tall image, centered serif title | 2-column grid, small image |
| Course card bg | `#F5F0E8` surfaceSecondary | Default card white |
| Progress key | `completedLessons[lessonId]` | `lessons[courseId/lessonId]` |
| `markQuizComplete` | Takes `lessonId, score, answers[]` | Takes `courseId, lessonId, score` |
| `getTopicProgress` | Exists | Missing entirely |
| Lesson preview | "Choose your mode" + bottom action bar | 2 stat boxes + single button |
| Lesson preview description | First paragraph of content | Page count + quiz count only |
| Field name | `imageUrl` | `thumbnail` / `coverImage` |
| Function name | `addMinutes` | `addStudyMinutes` |
| Function name | `setCurrentTopic` | `setSelectedTopic` |
| Missing courses | Cold War (politics), Lost Civilizations (culture) | Not present |
| Topic ID format | `'history'` lowercase | `'History'` capitalized |

