

# Collection Page Redesign — Filters, Sort, Grid, Mobile Drawer

Redesign `src/pages/Collection.tsx` for a premium luxury feel with stronger filtering UX, persistent desktop sidebar, and a true mobile drawer (not an inline panel).

---

## What changes

### Desktop (≥1024px)
- **Two-column layout**: persistent left filter rail (260px) + product grid (4 columns)
- **Filter rail**: collapsible accordion sections — Category, Size, Color, Length, Price, Availability — each open by default, with active-count badges
- **Sticky toolbar above grid**: product count (left) · active filter chips (center, removable) · sort dropdown (right)
- **Sort dropdown**: Featured / Newest / Price ↑ / Price ↓ / Best Selling
- **Active filter chips row**: shows applied filters with × to remove + "Clear all"
- **Product grid**: 4-up, 3:4 ratio, hover-swap second image, Quick Add on hover
- **Pagination**: numbered + Prev/Next at the bottom

### Tablet (768–1023px)
- Filter rail hides, replaced by a "Filters" button in the toolbar that opens a **left Sheet drawer**
- Product grid: **3 columns**
- Sort dropdown stays on the right
- Active filter chips visible below toolbar

### Mobile (<768px)
- Sticky top toolbar: `Filters` (left, with active count badge) · product count (center) · `Sort` (right)
- **Filters open as a full-height bottom Sheet drawer** with:
  - Sticky header (title + close)
  - Scrollable accordion sections (Size chips, Color swatches, Length chips, Price chips, Category checkboxes)
  - Sticky footer: "Clear all" + "Show X products" CTA
- **Sort opens as a bottom Sheet** with radio list (large 44px tap targets)
- Active filter chips horizontally scrollable below toolbar
- Product grid: **2 columns, 1px gap** (editorial density)
- Pagination: Prev / "Page 1 of N" / Next
- Clears bottom nav with `pb-20`

---

## Technical approach

**File touched**: `src/pages/Collection.tsx` (single-file refactor, no new routes)

**New UI primitives used (already in project)**:
- `@/components/ui/sheet` for mobile/tablet filter + sort drawers
- `@/components/ui/accordion` for filter section grouping
- `@/components/ui/checkbox`, `@/components/ui/badge`, `@/components/ui/separator`
- Existing `ProductCard`, `CollectionSeoDescription`, `MobileBottomBar`, `Header`, `Footer`

**State (local, useState)**:
- `filters`: `{ sizes: string[], colors: string[], lengths: string[], priceRanges: string[], categories: string[] }`
- `sortBy`: string
- `filterDrawerOpen`, `sortDrawerOpen`: booleans
- `currentPage`: number
- Derived: `filteredProducts` (memoized), `activeFilterCount`, `paginatedProducts`

**Filtering logic**: client-side over `allProducts` from `@/data/products` — multi-select OR within a facet, AND across facets. Price ranges parsed from chip labels (`Under 500 AED`, `500-1000 AED`, `1000+ AED`).

**Sort logic**: extends current price asc/desc with newest (by `id` desc as proxy) and best-selling (by a `rating` or fallback to original order).

**Responsive switching**: Tailwind breakpoints — `lg:` shows sidebar, `lg:hidden` shows the Filters button + drawer. Single source of truth so desktop and mobile share state.

**Brand alignment**:
- Playfair Display title (uppercase, tracked)
- General Sans for all UI labels (uppercase, `tracking-[0.15em]`, 11–12px)
- Neutral palette only — black/white/beige/grey, no blue
- Soft fade transitions, `active:scale-95` on tap
- 1px-gap mobile grid, generous desktop gaps

---

## Out of scope (ask before adding)
- URL-synced filter state (`?size=M&color=black`)
- Server-side filtering / Shopify product source
- Saving filters per user
- Image filtering (lazy-load already in place via ProductCard)

---

## Visual map

```text
DESKTOP (≥1024px)                      MOBILE (<768px)
┌───────────────────────────────┐      ┌──────────────────┐
│ Header                        │      │ Header           │
│ Title + SEO desc              │      │ Title + SEO      │
│ ┌────────┬──────────────────┐ │      │ [Filters][N][Sort]│ sticky
│ │ Filter │ count chips sort │ │      │ chips → → →      │
│ │ rail   │ ──────────────── │ │      │ ┌──┬──┐          │
│ │ Cat    │ ┌──┬──┬──┬──┐    │ │      │ │  │  │ 2-col    │
│ │ Size   │ │  │  │  │  │    │ │      │ ├──┼──┤          │
│ │ Color  │ ├──┼──┼──┼──┤    │ │      │ │  │  │          │
│ │ Length │ │  │  │  │  │    │ │      │ └──┴──┘          │
│ │ Price  │ └──┴──┴──┴──┘    │ │      │ Prev · 1/N · Next│
│ │        │ Prev 1 2 3 Next  │ │      │ Footer           │
│ └────────┴──────────────────┘ │      │ Bottom bar       │
│ Footer                        │      └──────────────────┘
└───────────────────────────────┘       ↑ Filters opens bottom Sheet
                                        ↑ Sort opens bottom Sheet
```

