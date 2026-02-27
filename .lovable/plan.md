
## Plan

### Source for paintings
All images will come from **Wikimedia Commons** (upload.wikimedia.org) — it hosts thousands of famous public-domain paintings in high resolution with stable URLs. This is already the source used throughout the codebase. I'll replace placeholder/photo images with specific, well-known masterworks matching each event's theme.

### Problem 1: Recent history categories showing as separate cards
`spanishHistoryRecent` and `italianHistoryRecent` exist as separate entries in `ALL_TIMELINE_CATEGORIES`. The fix: remove them from `ALL_TIMELINE_CATEGORIES`, and instead append their events directly into the `spanish-history` and `italian-history` timeline arrays in `timelines.ts`. This way French/German/European/Spanish/Italian history each become one unified timeline.

### Problem 2: Add paintings to all events
Every event currently has an image, but many use photographs, generic images, or placeholder URLs. I'll replace each with a specific famous painting that fits the historical moment:

**French history** — events mostly already have good paintings (Delacroix, David, Goya). Improve the weaker ones:
- fr_002 (Reign of Terror): Replace with Paul Delaroche "Execution of Lady Jane Grey" or Géricault "Raft of the Medusa"
- fr_006 (Paris Commune): Replace photo with Édouard Manet or Courbet work
- fr_008–fr_012: Replace photos of de Gaulle/Mitterrand with appropriate art

**German history** — already has some good paintings. Improve:
- de_003 (30 Years War): already has Callot ✓
- de_006 (WWI): uses Sargent's "Gassed" ✓
- de_008 (Nazi): replace propaganda photo with Otto Dix "The War" triptych
- de_009 (Berlin ruins): replace photo with Paul Klee or Kathe Kollwitz work

**European history** — mostly good (Raphael, Bruegel, Delacroix). Improve:
- eu_002 (Rome): already David ✓
- eu_003 (Fall of Rome): already Cole ✓

**Spanish history** — already has Goya, Velázquez, Sorolla, Picasso, Dalí. Some need improvement:
- es_001 (Al-Andalus): replace Gérôme mosque painting with an Alhambra-themed painting
- es_003 (Columbus): use a more relevant painting

**Italian history** — already has Botticelli, Titian, Boccioni. Improve:
- it_008 (Collapse/Civil War): replace Picasso "Massacre in Korea" with more relevant Italian art

### Files to change:

1. **`src/data/timelines.ts`**:
   - Remove `spanishHistoryRecent` and `italianHistoryRecent` from `ALL_TIMELINE_CATEGORIES` (lines 25–26)
   - Append the 4 `spanishHistoryRecent` events to `spanish-history` array
   - Append the 4 `italianHistoryRecent` events to `italian-history` array
   - Remove the separate `spanishHistoryRecent` and `italianHistoryRecent` timeline keys
   - Upgrade ~20 event images to famous paintings (specific Wikimedia URLs):
     - fr_002: Théodore Géricault, "Raft of the Medusa" (1818–1819)
     - fr_006: Édouard Manet, "The Barricade" (1871)
     - fr_007: already has Sargent ✓ — keep
     - fr_008: Eugène Delacroix, "Greece on the Ruins of Missolonghi" for resistance theme
     - fr_009–fr_012: replace portrait photos with relevant period paintings
     - de_008: Otto Dix, "The War" (1929–1932) — triptych
     - de_009: Kathe Kollwitz, "The Survivors" (1923)
     - es_001: replace Gérôme mosque with Mariano Fortuny's Moorish painting
     - it_008: replace Picasso "Massacre in Korea" with Renato Guttuso "The Crucifixion" (1941)
     - it_010: replace Fiat photo with Lucio Fontana or Arte Povera
     - it_011: replace Boetti map with Mario Sironi work
     - recent events (es_r, it_r): replace modern photos with Dalí, Miró, de Chirico ✓ (some already done)

No other files need changes — `Index.tsx` already loops `ALL_TIMELINE_CATEGORIES` correctly, so removing the two separate recent entries from that array is all that's needed for the UI fix.
