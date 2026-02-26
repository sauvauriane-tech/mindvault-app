
## Understanding the Uploaded Files

**`questions.js`** — A quiz database with 9 categories matching the timeline categories (european-history, french-history, german-history, spanish-history, italian-history + geography, film, music, politics). Each question has: `id`, `category`, `question`, `options[]`, `correctAnswer` (index), `image`, `explanation`, `funFact`. This is a **separate quiz data source** from the timeline reading content — it's the question bank for the Quiz mode.

**`ModeSelection.js/css`** — A mode picker UI with 3 modes: Explore (read articles/timelines), Quiz (test knowledge), Flags (coming soon). The user wants this **after** category selection, not on the home screen.

**`WikipediaQuestionBuilder.js` + `wikipediaService.js`** — A tool to search Wikipedia and generate quiz questions. Not needed for now.

**Plan:**

### 1. Merge timeline categories in `src/data/timelines.ts`
- Remove `TIMELINE_CATEGORIES` and `TIMELINE_CATEGORIES_RECENT` as separate arrays
- Export a single `ALL_TIMELINE_CATEGORIES` array combining both (Spanish Recent + Italian Recent merged into the main list)
- Update `ALL_TIMELINE_CATEGORIES` export to just reference the unified array

### 2. Add quiz questions data in `src/data/questions.ts` (new file)
- Port `questions.js` into TypeScript with proper interfaces
- `QuizQuestion` interface: `{ id, category, question, options[], correctAnswer, image, explanation, funFact }`
- Export `categories[]` and `questionsDatabase[]`
- Export helper `getQuestionsByCategory(categoryId: string): QuizQuestion[]`

### 3. Update `src/pages/Index.tsx`
- History section: render one unified list of all timeline categories (no "Full Timelines" / "Recent History" section headers)

### 4. Create `src/pages/TimelineModeSelectPage.tsx` (new page)
- Route: `/timeline/:categoryId/mode`
- Shows the category name + image at top
- Two mode cards (matching the app's existing card style, not the CSS from the upload):
  - **Explore** — "Read articles & timelines" → navigates to `/timeline/:categoryId`
  - **Quiz** — "Test your knowledge" → navigates to `/timeline/:categoryId/quiz`
- Flags card shown as "Coming soon" (disabled/grayed)

### 5. Create `src/pages/TimelineQuizPage.tsx` (new page)
- Route: `/timeline/:categoryId/quiz`
- Pulls questions from `getQuestionsByCategory(categoryId)`
- Same quiz UI as existing `QuizPage.tsx` (options, correct/wrong highlight, explanation, funFact, score at end)
- Back navigates to `/timeline/:categoryId/mode`

### 6. Update routing in `src/App.tsx`
- Add `/timeline/:categoryId/mode` → `TimelineModeSelectPage`
- Add `/timeline/:categoryId/quiz` → `TimelineQuizPage`
- Change the category card click in `Index.tsx` from `navigate('/timeline/${cat.id}')` to `navigate('/timeline/${cat.id}/mode')`

### Files to change:
1. `src/data/timelines.ts` — merge the two category arrays
2. `src/data/questions.ts` — new file, port questions.js
3. `src/pages/Index.tsx` — single unified category list, navigate to `/mode`
4. `src/pages/TimelineModeSelectPage.tsx` — new mode selection page
5. `src/pages/TimelineQuizPage.tsx` — new quiz page using questions.ts
6. `src/App.tsx` — add 2 new routes
