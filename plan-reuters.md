# Plan: Create Components Inspired by Reuters Graphics

## Source

[Reuters Graphics Components](https://github.com/reuters-graphics/graphics-components/tree/main/src/components) — a Svelte 5 component library for editorial/news graphics with 49 components covering layout, scrollytelling, multimedia, theming, and data display.

## Reuters Architecture Summary

- **Framework**: Svelte 5 (runes: `$props`, `$state`, `$derived`, `$effect`, `$bindable`)
- **Styling**: SCSS mixins + CSS custom properties (`--theme-*`) + utility classes
- **Layout primitive**: `Block` component constrains content to named column widths (`narrower`/`narrow`/`normal`/`wide`/`wider`/`widest`/`fluid`)
- **Theming**: `Theme` component flattens a theme object into CSS custom properties using `display: contents`
- **Content rendering**: String-or-Snippet duality — props accept markdown strings or Svelte 5 Snippets
- **Accessibility**: Semantic HTML, ARIA attributes, skip links, keyboard support, alt text validation
- **Lazy loading**: IntersectionObserver-based visibility detection (Visible component)

## Mapping: Reuters → Lily Components

### Already in Lily (no action needed)

| Reuters | Lily Equivalent |
|---------|----------------|
| Table | DataTable, Table (+ Head/Body/Foot/Col/Row/Data) |
| SearchInput | TextInputWithSearch, SearchInput |
| Spinner | Loading, ProgressSpinner |
| BeforeAfter | Diff |

### New Components to Create

Components inspired by Reuters patterns, adapted to Lily's headless, framework-agnostic approach.

#### Priority 1: Layout Primitives

| # | Component | Reuters Inspiration | Lily Name | HTML Tag | Description |
|---|-----------|-------------------|-----------|----------|-------------|
| 1 | Article | Article | article-layout | `<article>` | Top-level article wrapper with CSS custom properties for column widths |
| 2 | Block | Block | content-block | `<div>` | Content width constraint container with named column widths |
| 3 | PaddingReset | PaddingReset | padding-reset | `<div>` | Resets padding inside fluid-width containers |

#### Priority 2: Editorial Content

| # | Component | Reuters Inspiration | Lily Name | HTML Tag | Description |
|---|-----------|-------------------|-----------|----------|-------------|
| 4 | Headline | Headline | headline | `<div>` | Page headline with heading, subtitle (dek), and byline area |
| 5 | HeroHeadline | HeroHeadline | hero-headline | `<div>` | Full-bleed hero section with headline over media |
| 6 | BodyText | BodyText | body-text | `<div>` | Rendered text block within a content width container |
| 7 | Byline | Byline | byline | `<div>` | Author attribution with timestamps |
| 8 | EndNotes | EndNotes | end-notes | `<div>` | Array of titled endnote items |
| 9 | InfoBox | InfoBox | information-callout | `<aside>` | Already exists — enhance with header/body/footer slots and light/dark theme support |

#### Priority 3: Scrollytelling & Interactive

| # | Component | Reuters Inspiration | Lily Name | HTML Tag | Description |
|---|-----------|-------------------|-----------|----------|-------------|
| 10 | Scroller | Scroller | scroller | `<div>` | Scrollytelling container with step-based foreground/background composition |
| 11 | ScrollerBase | ScrollerBase | scroller-base | `<div>` | Low-level scroll position tracking primitive |
| 12 | ScrollerVideo | ScrollerVideo | scroller-video | `<div>` | Video-driven scrollytelling with frame-by-frame scrubbing |
| 13 | HorizontalScroller | HorizontalScroller | horizontal-scroller | `<div>` | Horizontally scrollable content container |

#### Priority 4: Graphics & Media Wrappers

| # | Component | Reuters Inspiration | Lily Name | HTML Tag | Description |
|---|-----------|-------------------|-----------|----------|-------------|
| 14 | GraphicBlock | GraphicBlock | graphic-block | `<figure>` | Wrapper for charts/graphics with title, description, notes, ARIA description |
| 15 | FeaturePhoto | FeaturePhoto | feature-photo | `<figure>` | Responsive photo with lazy loading and alt text validation |
| 16 | PhotoPack | PhotoPack | photo-pack | `<div>` | Collection of photos displayed together |
| 17 | Video (enhanced) | Video | video-player | `<div>` | Video with play-in-view, custom controls, IntersectionObserver |

#### Priority 5: Visibility & Theming Utilities

| # | Component | Reuters Inspiration | Lily Name | HTML Tag | Description |
|---|-----------|-------------------|-----------|----------|-------------|
| 18 | Visible | Visible | visible | `<div>` | IntersectionObserver wrapper that exposes visibility state |
| 19 | Theme (enhanced) | Theme | theme-provider | `<div>` | Wraps content with CSS custom properties from a theme object, using `display: contents` |

#### Priority 6: Data Visualization

| # | Component | Reuters Inspiration | Lily Name | HTML Tag | Description |
|---|-----------|-------------------|-----------|----------|-------------|
| 20 | SimpleTimeline | SimpleTimeline | timeline-list / timeline-list-item | `<ol>` / `<li>` | Already exists — verify feature parity with Reuters (dates, SVG markers, colors) |
| 21 | TileMap | TileMap | tile-map | `<div>` | Tile/cartogram map with layers |

#### Priority 7: Mockups & Decorative

| # | Component | Reuters Inspiration | Lily Name | HTML Tag | Description |
|---|-----------|-------------------|-----------|----------|-------------|
| 22 | Framer | Framer | framer | `<div>` | Container for framed content display |

## Implementation Strategy

### Approach: Headless, Framework-Agnostic

Unlike Reuters (Svelte-specific with SCSS), Lily components are:

1. **Headless** — zero CSS, consumer provides all styling
2. **Framework-agnostic** — documentation describes behavior/semantics, implementations exist per framework
3. **Semantic HTML** — uses appropriate HTML elements (not generic divs where semantic elements exist)
4. **WCAG 2.2 AAA** — accessibility-first design

### Per-Component Workflow

For each new component:

1. **Create component directory** `components/{component-name}/`
2. **Write `index.md`** following Lily's documentation structure (see `components/AGENTS.md`)
3. **Create `README.md` symlink** → `index.md`
4. **Write `AGENTS.md`** with metadata, behaviors, ARIA, keyboard, props, acceptance criteria
5. **Write `CLAUDE.md`** with `@AGENTS.md` reference
6. **Add CSS class** to `css-style-sheet-template.css`
7. **Add component** to AGENTS.md component list

### Key Adaptations from Reuters

| Reuters Pattern | Lily Adaptation |
|----------------|----------------|
| `Block` with named widths | CSS custom properties (`--content-width-narrow`, etc.) documented as consumer responsibility |
| SCSS mixins for typography | Consumer provides typography via CSS classes |
| `Markdown` component for rendering | Props accept plain text; rendering is consumer responsibility |
| String-or-Snippet duality | Props accept content via slots/children; consumer decides rendering |
| IntersectionObserver baked in | Document the behavior; headless implementation delegates observer setup |
| `display: contents` on Theme | Document as recommended pattern for theme providers |
| Svelte 5 `$bindable()` | Document as two-way binding props where applicable |

### Column Width System (from Reuters Article/Block)

Reuters defines these column widths:
- `narrower`: 330px
- `narrow`: 510px
- `normal`: 660px (default)
- `wide`: 930px
- `wider`: 1200px
- `widest`: viewport width
- `fluid`: 100% of parent

Lily adaptation: Document as CSS custom properties that `article-layout` sets and `content-block` reads:

```css
.article-layout {
  --content-width-narrower: 330px;
  --content-width-narrow: 510px;
  --content-width-normal: 660px;
  --content-width-wide: 930px;
  --content-width-wider: 1200px;
}

.content-block {
  max-width: var(--content-width-normal);
  margin-inline: auto;
}

.content-block[data-width="wide"] {
  max-width: var(--content-width-wide);
}
```

## Execution Order

### Phase 1: Layout Foundation
1. `article-layout` — top-level wrapper
2. `content-block` — width constraint primitive
3. `padding-reset` — fluid container helper

### Phase 2: Editorial Text
4. `headline`
5. `hero-headline`
6. `body-text`
7. `byline`
8. `end-notes`

### Phase 3: Scrollytelling
9. `scroller-base` — low-level primitive first
10. `scroller` — builds on scroller-base
11. `scroller-video` — video variant
12. `horizontal-scroller`

### Phase 4: Graphics & Media
13. `graphic-block`
14. `feature-photo`
15. `photo-pack`
16. `video-player`

### Phase 5: Utilities
17. `visible`
18. `theme-provider` (enhance existing theme components)

### Phase 6: Data & Maps
19. Verify `timeline-list` / `timeline-list-item` feature parity
20. `tile-map`
21. `framer`

## Components NOT Being Created

These Reuters components are excluded because they are Reuters-specific branding, third-party integrations, or already covered:

| Reuters Component | Reason Excluded |
|------------------|-----------------|
| SiteHeader, SiteFooter | Reuters branding — Lily has generic Header/Footer |
| ToolsHeader | Reuters-specific |
| ReutersLogo, ReutersGraphicsLogo, KinesisLogo | Reuters branding |
| Analytics | Third-party integration (GA, Chartbeat) |
| AdSlot | Third-party integration (Freestar) |
| SEO | Framework-specific `<head>` injection |
| PymChild | Legacy iframe integration |
| EmbedPreviewerLink | Reuters tooling |
| DatawrapperChart | Third-party embed |
| DocumentCloud | Third-party embed |
| Lottie | Third-party animation player |
| ReferralBlock | Reuters editorial |
| BlogPost, BlogTOC | Reuters editorial |
| ClockWall | Niche utility |
| Headpile | Niche utility |
| LanguageButton | Lily already has theme/locale patterns |
| SiteHeadline | Variant of Headline |

## Success Criteria

- [ ] All Priority 1-5 components have `index.md`, `AGENTS.md`, `CLAUDE.md`, `README.md` symlink
- [ ] All new components added to `css-style-sheet-template.css`
- [ ] All new components added to `AGENTS.md` component list
- [ ] Scrollytelling components document IntersectionObserver and scroll-position patterns
- [ ] Column width system documented with CSS custom property conventions
- [ ] All components follow WCAG 2.2 AAA compliance patterns
- [ ] `bin/test` passes
