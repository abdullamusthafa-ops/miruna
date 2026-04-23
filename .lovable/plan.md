

# Home Page Premium Upgrade — Oh Polly / PLT Inspired

A focused UI/UX pass to make the homepage feel unmistakably premium the moment a visitor lands. No restructuring of routes or data — purely refining the components already in place.

---

## What feels off today (audit findings)

1. **Announcement bar hides until scroll** — first-paint loses a key trust + offer message. Premium peers always show it.
2. **Hero CTA is small & semi-transparent** — lacks confident commerce energy. Headline kerning is loose, subline is tiny.
3. **Type hierarchy is inconsistent** — section headlines are too small (`text-lg`), competing with body. Premium feel needs bigger Playfair display.
4. **Style Edits / Drops captions are 8–10px** — reads as cramped on mobile, no breathing room.
5. **SHE Carousel header is small + tab pills look generic** — needs editorial weight + cleaner tab styling.
6. **No dual hover image on Style Edits / Editorial drops** — feels static vs PLT/Oh Polly where everything reveals on hover.
7. **Trust badges are flat icons in a tight row** — premium sites use a quieter, single-line marquee or refined 4-up with serif numerals.
8. **Newsletter is a stark black block with default input** — looks like a template; needs editorial framing.
9. **Section gaps inconsistent** — some `mt-12`, some none, some `py-16`. Premium rhythm needs uniform breathing.
10. **No micro-interactions on first scroll** — soft fade-in on hero copy + staggered grid reveal would lift perceived quality instantly.

---

## What changes (component by component)

### 1. Announcement Bar
- Show on first paint (remove the "only after scroll" gate)
- Tighter type: `text-[11px]` `tracking-[0.25em]`, vertical padding `py-2.5`
- Add subtle 200ms fade between messages instead of hard swap
- Add inline mini "·" separators on desktop showing all 4 messages as a marquee on `lg+`, single rotating message on mobile

### 2. Header
- Slightly increase height on desktop (`h-16` → `h-[72px]`) for premium presence
- Logo `h-5` → `h-6` on desktop
- Nav letter-spacing bumped to `tracking-[0.2em]`
- Sale link: replace bordered button with subtle red dot accent + "Sale" text (Oh Polly pattern)

### 3. Hero Slideshow
- Subline above headline: increase size to `text-xs`, add a thin `h-px w-12 bg-white/60` line above it
- Headline: increase to `text-4xl md:text-6xl lg:text-7xl`, tighten tracking (`tracking-tight`), keep Playfair
- CTA: solid white background, black text, `px-12 py-4`, uppercase `tracking-[0.2em]` — confident, not glass
- Add a secondary "Shop Spring" ghost CTA next to it
- Add 700ms fade-in + 12px upward translate on copy after image loads
- Mobile: increase headline to `text-3xl`, CTA full-width with safe-area padding

### 4. Style Edits Grid
- Caption block: lift to `text-xs` name + `text-[11px]` subtext on mobile, `text-sm` + `text-xs` on desktop
- Add hover: caption slides up 4px, thin underline animates left→right under the name
- Add second hover image on each tile (use existing imagery on the collection)
- Replace ✦ divider with a tasteful "MIRUNA — EST. UAE" wordmark divider (tiny, centered, muted)

### 5. Dual Collection Grid
- Add hover zoom (already partially) + caption slide-up
- Replace tiny "Shop Now" with full bordered CTA `border border-white px-6 py-2.5` like the hero
- Increase headline to `text-base md:text-xl tracking-[0.25em]`

### 6. Spring Promo Section
- Eyebrow: tracked uppercase tiny label stays
- Headline: increase to `text-2xl md:text-4xl lg:text-5xl`, max-width to read like editorial
- Add a thin gold/taupe horizontal rule above eyebrow (`bg-luxury-taupe`)
- CTA: switch to standard premium bordered-fill button (consistent across site)
- Mobile: add `px-6` and tighten line-height; no longer feels like an afterthought

### 7. SHE Collection Carousel
- Section title: `text-2xl md:text-4xl` Playfair, centered on mobile / left aligned on desktop
- Subline + "Limited Pieces" on a single tracked row
- Tabs: remove pill background, use underline-on-active style (Oh Polly), `tracking-[0.2em]`
- Active tab: black underline `h-px`, font-medium
- Increase product card image quality with `aspect-[3/4]`, add subtle shadow on hover
- Quick-view "+ ADD" appears on hover bottom of card (desktop only)

### 8. Editorial Drops Section
- Add `text-2xl md:text-4xl` section title row above the split: "THE DROPS" with a one-line eyebrow
- Drop tile captions: increase to `text-xs md:text-sm`, add hover underline
- Add a subtle "VIEW ALL DROPS →" link below the 4-up grid

### 9. Instagram Gallery
- Increase header type to `text-2xl md:text-4xl` Playfair
- Tighter grid gaps on desktop (`gap-1` → `gap-px` for editorial density)
- Add a "Tag us @miruna.studio" small line under header
- Replace dark hover overlay with subtle white-out + Instagram icon

### 10. Trust Badges
- Replace icon-stacked layout with a single refined row on desktop: number / label pairs (e.g. "04. — 4-HOUR DELIVERY · DUBAI")
- Add hairline dividers between badges
- On mobile: 2×2 with the same numbered eyebrow style
- Background switches to `bg-luxury-cream` for warmth instead of stark white

### 11. Newsletter Section
- Replace solid black with a 2-column editorial layout on desktop: image on the left (model in white), copy + form on the right
- Headline `text-3xl md:text-5xl` Playfair: "Be the first to know."
- Subline + "10% off your first order" treated as a small eyebrow chip
- Input: thin bottom-border only, no box; submit is a bordered-fill CTA
- Mobile: stacks, image on top, form below

### 12. Global polish
- Standardize section vertical rhythm: `py-16 md:py-24` everywhere
- Shared scroll-reveal: opacity 0→1 + translate-y-2 over 700ms with 60ms stagger
- All CTAs use the existing premium bordered-fill button style for consistency
- All section headings standardize on `font-display` Playfair `text-2xl md:text-4xl lg:text-5xl tracking-tight`

---

## Files touched

- `src/components/AnnouncementBar.tsx`
- `src/components/Header.tsx` (cosmetic only — height, tracking, sale styling, show announcement always)
- `src/components/HeroSlideshow.tsx`
- `src/components/StyleEditsGrid.tsx`
- `src/components/DualCollectionGrid.tsx`
- `src/components/SpringPromoSection.tsx`
- `src/components/SheCollectionCarousel.tsx`
- `src/components/EditorialDropsSection.tsx`
- `src/components/InstagramGallery.tsx`
- `src/components/TrustBadges.tsx`
- `src/components/NewsletterSection.tsx`
- `src/index.css` (one new utility: `.section-fade-in` for shared reveal)

No new dependencies. No data/route changes. No backend.

---

## Out of scope (ask if you want them)
- Adding a video hero variant
- A full mega-menu redesign
- New product imagery / collection structure
- A/B testing infrastructure
- Replacing Unsplash placeholders in the Instagram grid with real posts

