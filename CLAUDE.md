# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

A static vanilla HTML/CSS/JS personal portfolio with no build system, no package manager, and no framework. Deploy by copying files directly to a web server.

**Live URL:** `https://algonzalez.cloud/portfolio/`

## Development

Open any HTML file directly in a browser — there is no dev server or build step required.

**Cache busting:** All pages reference assets with query params (`styles.css?v=5`, `main.js?v=5`). Bump the version number when making CSS or JS changes, updating all 4 HTML files consistently.

## Architecture

### Pages
| File | Route | Notes |
|---|---|---|
| `index.html` | `/` | Hero + intro overlay animation (first-visit only) |
| `about.html` | `/about` | Avatar, bio, experience timeline, CV download |
| `projects.html` | `/projects` | Project cards + interactive vis.js graph + skills section |
| `contact.html` | `/contact` | Contact cards (email/LinkedIn/GitHub/CV) |
| `skills.html` | `/skills` | Legacy standalone skills page (not in nav) |

### Key Files
- **`styles.css`** — All styling. Dark mode by default; light mode via `body.light-mode` class. Uses CSS custom properties (`--bg`, `--text`, `--accent`, etc.) for theming.
- **`main.js`** — Shared across all pages. Handles: i18n (EN/ES), theme toggle, active nav link, header scroll effect, mobile hamburger, smooth scroll, scroll-reveal via IntersectionObserver, intro overlay.
- **`graph.js`** — Interactive vis.js network graph on `projects.html`. Projects are green nodes (`#3ddc84`), skills are blue nodes (`#7aaaff`). Theme-aware colors.

### i18n System
All user-visible text uses `data-i18n="key"` attributes. The `translations` object in `main.js` holds all strings in both `en` and `es` namespaces. Language preference is saved in `localStorage`. The browser language is auto-detected on first visit (Spanish if `navigator.language` starts with `"es"`).

### Theming
- Default: dark (`#0d0d0d` bg, `#3ddc84` accent)
- Light mode: toggled via `body.classList.toggle('light-mode')`, persisted in `localStorage`
- CSS variables defined in `:root` (dark) and overridden in `body.light-mode`

### Mobile Navigation
The hamburger menu is only rendered on `< 768px`. The nav uses `transform: translateY(-130%)` / `translateY(0)` to slide in. Closed by: clicking the toggle, clicking outside, pressing Escape, or navigating via a link.

### Scroll Reveal
Elements with `.reveal` or `.reveal-stagger` start hidden (`opacity: 0`, `translateY`) and are made visible when entering the viewport via IntersectionObserver. After becoming visible, the observer disconnects from that element.

## Important Constraints

- **No emoji as icons** — Use inline SVGs (Heroicons/Lucide style with `stroke="currentColor"`).
- **`prefers-reduced-motion`** — The CSS `@media (prefers-reduced-motion: reduce)` block at the bottom of `styles.css` disables all animations site-wide. Any new animations must be covered by this block.
- **Touch targets** — Interactive elements must be at least 44×44px. Use `min-width`/`min-height` if the visual size is smaller.
- **Focus styles** — All interactive elements must have `:focus-visible` styles using the `var(--accent)` outline.
- **Spacing scale** — Use the defined `--space-*` and `--fs-*` custom properties; avoid ad-hoc pixel values.
- **Overflow** — `overflow-x: hidden` is set on `main` and `.site-footer` only, not on `html` or `body`, to avoid clipping the fixed header.
