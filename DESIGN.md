---
version: alpha
name: HarpElle Balanced Craft
description: >-
  Warm-neutral parent-brand design system for harpelle.com, the HarpElle
  studio home. Derived from the HarpElle Brand & Identity Guide v1.0 and the
  published HarpElle design-system tokens ("Balanced Craft").
---

# HarpElle — studio home design system

This file is the single source of truth for the harpelle.com studio home
(`@index.html`) and the shared studio chrome in `@assets/css/harpelle-site.css`
(the header, footer, and page frame that the product, help, and client pages
reuse). The two files hold separate copies of the same tokens — the home page is
self-contained and never loads the shared stylesheet — so a token change lands
in all three places in the same commit. Sub-brand surfaces — `volleytally/`,
`volleytrack/`, and `clients/` page bodies — intentionally carry their own
systems and are out of scope here; they inherit only the chrome rules.

Upstream: the HarpElle Brand & Identity Guide v1.0 and the published "Balanced
Craft" token set (Claude Design project `harpelle`, id 58b88756-e515), plus the
approved studio-home handoff (`design_handoff_studio_home`). Where this file
departs from those, the departure is named here and in the changelog — nowhere
else.

## Overview

HarpElle is an independent product studio. The name joins the founder's
daughters — **Harp**er and Elli**anna** ("Elle") — and the brand is a mark of
care, not a single product. The promise: *if it ships under this name, it was
worth building well.*

The look is **"Balanced Craft"**: calm, warm, made-not-assembled. Warm
neutrals carry roughly 90% of every surface; the two family accents (pink for
Harper, purple for Ellianna) appear in only 5–10%. Flat warm color, generous
breathing room, a slab-serif brand voice reserved for headline moments, and
restrained motion. Never pure white, never neon, never hype. The audience is
coaches, gyms, church admins, families, and prospective clients — people who
should feel they are dealing with a careful person, not a growth funnel.

## Colors

Warm neutrals do the work; accents are seasoning. The five brand colors are the
published palette and do not change. The two "ink" tokens extend it: each is its
parent darkened in the same warm hue (about 10–12 HSL lightness points) — Secondary Ink
`hsl(28, 6%, 41%)` from Mid Neutral `hsl(26, 6%, 53%)`, Pink Accent Ink
`hsl(16, 22%, 54%)` from Pink Accent `hsl(16, 22%, 64%)`. They exist because the
published palette had no AA-compliant value for secondary text under 24px, or
for pink text on a light surface. The brand guide rates Mid Neutral "AA (large
text only)" at 3.29:1 while also assigning it to captions and timestamps; the
ink tokens settle that conflict in favor of the contrast rating. Because the
guide also says to use only its documented hex values, **Jason ratified the two
ink hexes at brand level on 2026-11-21** (see the changelog); the parent values stay
correct for large text, dark backgrounds, borders, and decoration.

- **Primary — Dark Anchor (#35312E):** primary text, dark bands, primary
  buttons. On Light Foundation it measures 11.84:1 (AAA, all sizes).
- **Neutral — Light Foundation (#F7F5F2):** page background, light cards, and
  text on dark bands. Never substitute pure #FFFFFF for a parent-brand surface.
- **Secondary — Mid Neutral (#8E8680):** 3.29:1 on Light Foundation, so it is
  approved for **large text and decoration only** (the brand guide's own
  constraint). For captions, overlines, nav links, and any text under 24px,
  use Secondary Ink.
- **Secondary Ink (#6F6862):** the small-text version of Mid Neutral.
  5.04:1 on Light Foundation, 4.57:1 on Sunken Surface — AA at any size.
- **Pink Accent — Harper (#B89A8F):** tags, badges, hover/active states, the
  monogram H crossbar. As text it passes AA only on dark surfaces (4.94:1 on
  Dark Anchor, 4.53:1 on Dark Card). Never use it as text on light surfaces.
- **Pink Accent Ink (#A47E70):** the light-background text version of the
  pink accent, on Light Foundation only (3.02:1 on Sunken and 2.99:1 on the
  hover veil miss 3:1), for large display moments and resting UI glyphs (3.33:1 — AA large text, e.g.
  the 68px hero accent line). Not for body-size text.
- **Purple Accent — Ellianna (#9280A0):** categories, notification dots, the
  monogram E bars. Decoration and large text only on light surfaces (3.32:1).
- **Derived neutrals:** Hairline border #E3DFD9 (dividers), Sunken Surface
  #EDEAE5 (inset bands, the studio CTA), Soft-on-Dark #E8E4DF (body copy
  inside dark bands — 9.32:1 on Dark Card).
- **Interaction neutrals:** Dark Hover #2A2724 (primary-button hover), Dark
  Card #3B3733 (cards on dark bands), Light Hover #ECE9E4 (light-button
  hover), Veil rgba(53,49,46,0.06) (hover wash on light surfaces).

Color is never the sole signal — pair every tint with a label, icon, or
position. Mid Neutral, Purple Accent, and Pink Accent Ink share nearly the same
luminance (about 3.3:1 on Light Foundation), so they tie in grayscale; never let
hue alone separate them.

```yaml
colors:
  primary: "#35312E"
  neutral: "#F7F5F2"
  secondary: "#8E8680"
  secondary-ink: "#6F6862"
  accent-pink: "#B89A8F"
  accent-pink-ink: "#A47E70"
  accent-purple: "#9280A0"
  border-hairline: "#E3DFD9"
  surface-sunken: "#EDEAE5"
  text-on-dark-soft: "#E8E4DF"
  dark-hover: "#2A2724"
  dark-card: "#3B3733"
  light-hover: "#ECE9E4"
  veil-dark: "rgba(53, 49, 46, 0.06)"
  scrim: "rgba(53, 49, 46, 0.45)"
```

## Typography

Two families, two voices. **Zilla Slab** is the brand voice: display
headlines, section headings (H1/H2), and pull quotes — nothing else. **Plus
Jakarta Sans** is the product voice: H3 and below, body, UI, buttons, labels.
Both are self-hosted woff2 (SIL OFL 1.1). Reserve the slab so it stays
distinctive; sub-brands never use it except in the "a HarpElle app"
attribution.

The hero accent line (`display` with weight 300, italic, Pink Accent Ink) is
the one place the display face goes light and italic. The pull quote
(`quote`) is Zilla Slab 300 italic in Dark Anchor — not pink, which cannot
reach AA at quote size on light surfaces. Overlines are uppercase with 0.12em
tracking; everything else is sentence case. Body copy keeps a max measure of
75ch (48–54ch for leads) and never drops below the brand guide's 16px minimum at
line height 1.5 or looser. Sizes of 15px and under are for secondary and
supporting roles only — captions, row kinds, directory descriptions, footer text
— set in Secondary Ink or stronger on light surfaces, Soft-on-Dark inside dark
bands.

```yaml
typography:
  display:
    fontFamily: Zilla Slab
    fontSize: 68px
    fontWeight: 600
    lineHeight: 1.06
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Zilla Slab
    fontSize: 40px
    fontWeight: 500
    lineHeight: 1.2
  headline-md:
    fontFamily: Zilla Slab
    fontSize: 36px
    fontWeight: 500
    lineHeight: 1.2
  title:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.4
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.65
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.7
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
  quote:
    fontFamily: Zilla Slab
    fontSize: 22px
    fontWeight: 300
    lineHeight: 1.4
  caption:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.5
  overline:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0.12em
  button:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1
  display-sm:
    fontFamily: Zilla Slab
    fontSize: 44px
    fontWeight: 600
    lineHeight: 1.06
    letterSpacing: -0.02em
  headline-lg-sm:
    fontFamily: Zilla Slab
    fontSize: 32px
    fontWeight: 500
    lineHeight: 1.2
  headline-md-sm:
    fontFamily: Zilla Slab
    fontSize: 30px
    fontWeight: 500
    lineHeight: 1.2
```

The `-sm` variants are the mobile (≤720px) sizes of their desktop counterparts.

The brand guide's base hierarchy (H1 42/600, H2 32/500) governs product, help,
and content pages. The studio home is the brand's one marketing surface and runs
the handoff's extended display scale above — `display` 68, `headline-lg` 40,
`headline-md` 36. Those two scales are the whole vocabulary: the handoff's
one-off 34px section heading and 17px band intro were folded onto `headline-md`
and `body-lg` rather than kept as extra steps.

## Layout

A fixed-max-width column (1120px) centered on the page, with 32px side
gutters on desktop and 24px under 720px (16px under 560px for the shared
chrome). Spacing sits on an 8px grid with a 4px half-step. Generous breathing
room is the brand's signature: at least 24px between elements, 48–80px
between sections. Long light pages are broken up by full-width contrast
bands (Dark Anchor for the app family, Sunken Surface for the studio CTA).

```yaml
spacing:
  2xs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 80px
  gutter: 32px
  gutter-sm: 24px
  container: 1120px
```

## Elevation & Depth

Depth comes first from tonal layers (Light Foundation page, hairline-bordered
cards, Sunken and Dark bands), then from low, soft shadows **always tinted
with Dark Anchor — never neutral black**, even on dark bands. No glows,
bevels, or hard drop shadows.

- Card: `0 1px 3px rgba(53,49,46,0.08)` — resting cards, scrolled header.
- Raised: `0 4px 12px rgba(53,49,46,0.12)` — feature cards like the hero map.
- Overlay: `0 12px 32px rgba(53,49,46,0.18)` — dialogs and true overlays.
- Hover lift on dark bands: `0 12px 32px rgba(21,17,14,0.35)` (a warm
  near-black; depth on Dark Anchor needs a darker tint to read at all).

These four are the only shadows allowed on a parent-brand surface, and a value
between levels is a drift signal. The handoff drew the hero map card with
`0 12px 32px rgba(53,49,46,.10)` — overlay geometry at a resting card's weight —
and it now uses Raised, the level whose documented role is feature cards.

## Shapes

Calm corners, never sharp: 8px on controls (buttons, inputs), 12px on cards,
16px on large cards and modals, pills at 999px for small round labels.
Borders are 1px Hairline for dividers and card edges; focus is a visible 2px
Dark Anchor outline offset from the element.

```yaml
rounded:
  sm: 8px
  md: 12px
  lg: 16px
  full: 999px
```

## Motion & Micro-interaction

Calm and quiet. State changes (hover, color, shadow) land in 160ms with a
plain ease; larger surface transitions take 240ms. Scroll-reveal content
fades up 16px over 560ms with a decelerating curve, applied from JS only so
no-JS visitors, crawlers, and reduced-motion users see full content
immediately. Interactive cards lift 2px with a shadow swap on hover; presses
scale to 0.98. Nothing bounces, nothing loops, nothing moves purely for
decoration. Honor `prefers-reduced-motion` everywhere, including smooth
scrolling.

- **state-change:** 160ms, `ease` — hover, color, border, and shadow changes.
- **surface-enter:** 240ms, `ease` — larger surface transitions.
- **reveal:** 560ms, `cubic-bezier(0.22, 0.61, 0.36, 1)` — the scroll-settle
  fade-up (opacity 0→1, translateY 16px→0), staggered 70–80ms per sibling.

## Voice & Content Strategy

- **Tone of voice:** genuine, plainspoken, confident but restrained. A real
  person stands behind the work. Calm over clever; no exclamation marks, no
  hype ("revolutionary", "game-changing", "crush", "scale fast" are banned).
  Embrace: built, crafted, thoughtful, reliable, intentional, clear, refined.
- **Person & address:** speak as people ("we build"), address the reader
  directly ("tell us what you're building"). Personal, never corporate — and
  structured, never sloppy.
- **Capitalization:** sentence case everywhere — headlines, buttons, nav.
  UPPERCASE only in overlines (11px, 0.12em tracking). The brand name is
  always **HarpElle** — never HARPELLE, harpelle, or Harpelle.
- **Terminology:** "GetVolleyApps" is the volleyball app family (VolleyTally,
  VolleyTrack, VolleySignal, VolleyScorer); VolleyScorer lives inside the
  family, never as a separate studio product. "Studio", not "agency".
- **Button and action labels:** short verb phrases naming the outcome
  ("See the work", "Write to the studio"), never "Submit" or "Click here".
- **Numbers and claims:** no pricing on the studio home; every availability
  claim (stores, platforms) must match the product as it is today.
- **Emoji:** none in the parent brand.

## Components

The studio home is a single static page; components live inline in
`@index.html` and the shared chrome in `@assets/css/harpelle-site.css`.

- **Buttons:** 46px tall, 0 26px padding, 8px radius, 14px/600 Jakarta.
  Primary = Dark Anchor fill, Light Foundation text, hover Dark Hover.
  Outline = 1px Dark Anchor border, hover veil wash. Light (on dark bands) =
  Light Foundation fill, Dark Anchor text, hover Light Hover. Every
  interactive element keeps a ≥44px touch target.
- **Header:** sticky, Light Foundation at 96% with 10px blur (96% keeps Secondary Ink nav links at
  4.69:1 when the header passes over the dark band; 92% gave 4.37:1); bottom border
  transparent until scroll, then Hairline plus the card shadow. Nav links are
  14px/600 Secondary Ink, hover Dark Anchor, each a 44px-tall target; Contact is
  a 44px outline pill at 13px/600 — one step below the nav links so it reads as
  a control, not a nav item. The logo link is a 44px target around a 42px mark.
- **Map card (hero):** Light Foundation, 1px Hairline, 16px radius, raised
  shadow; rows split by Hairline dividers with a veil hover and a Pink Accent
  Ink arrow that turns Dark Anchor on hover (Pink Accent Ink is 2.99:1 on the
  veil).
- **Family band cards:** Dark Card on Dark Anchor band, 12px radius, 24px
  padding; overlines in Pink Accent (4.53:1 on Dark Card), descriptions in
  Soft-on-Dark; hover lifts 2px with the warm near-black shadow.
- **List rows (products/services):** hairline-divided rows, 24px vertical
  padding; name 18px/600 Dark Anchor, kind caption and description in
  Secondary Ink. The trailing link carries 12px vertical padding so the target
  clears 44px without moving the row.
- **Footer:** hairline top border, overline column heads in Secondary Ink,
  links in Dark Anchor weight 400–600. Each link is a 44px-tall row and the
  column gap is 0 — the target height *is* the vertical rhythm, so link lists
  are never packed tighter than a thumb.

```yaml
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    height: 46px
  button-primary-hover:
    backgroundColor: "{colors.dark-hover}"
  button-outline:
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    height: 46px
  button-outline-hover:
    backgroundColor: "{colors.veil-dark}"
  button-light:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    height: 46px
  button-light-hover:
    backgroundColor: "{colors.light-hover}"
  card:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  card-dark:
    backgroundColor: "{colors.dark-card}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  card-dark-body:
    backgroundColor: "{colors.dark-card}"
    textColor: "{colors.text-on-dark-soft}"
  overline-accent:
    backgroundColor: "{colors.dark-card}"
    textColor: "{colors.accent-pink}"
    typography: "{typography.overline}"
  hero-accent-line:
    textColor: "{colors.accent-pink-ink}"
    typography: "{typography.display}"
  band-studio:
    backgroundColor: "{colors.surface-sunken}"
    textColor: "{colors.primary}"
    padding: "{spacing.3xl}"
  divider:
    backgroundColor: "{colors.border-hairline}"
    height: 1px
  notification-dot:
    backgroundColor: "{colors.accent-purple}"
    rounded: "{rounded.full}"
    size: 8px
  dialog-scrim:
    backgroundColor: "{colors.scrim}"
  nav-link:
    textColor: "{colors.secondary-ink}"
    typography: "{typography.button}"
    height: 44px
  nav-link-hover:
    textColor: "{colors.primary}"
  nav-contact:
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    height: 44px
  footer-link:
    textColor: "{colors.primary}"
    typography: "{typography.body-sm}"
    height: 44px
  overline:
    textColor: "{colors.secondary-ink}"
    typography: "{typography.overline}"
```

## Do's and Don'ts

- Do keep warm neutrals on ~90% of every surface; accents stay under 10%.
- Don't use pure #FFFFFF for parent-brand surfaces — warmth comes from Light
  Foundation. (Known debt: `@assets/css/harpelle-site.css` sets `--he-surface`
  to white and paints white card surfaces and white-to-warm gradients on the
  product, help, and client pages. Those are sub-brand page bodies with their
  own systems, so the rules stay until those pages are next touched; the file
  marks them as debt in place.)
- Do set small secondary text (under 24px) in Secondary Ink #6F6862; Mid
  Neutral #8E8680 is for large text, borders, and decoration only.
- Don't set Pink or Purple Accent as text on light surfaces; on light, pink
  text appears only as Pink Accent Ink at display sizes. Pink Accent as text
  is fine on Dark Anchor and Dark Card.
- Do reserve Zilla Slab for H1, H2, and pull quotes; everything else is Plus
  Jakarta Sans. Sub-brands get no slab serif and no warm-neutral palette.
- Don't introduce gradients between brand colors, busy textures, glows, or
  neutral-black shadows; shadows are warm-tinted and soft.
- Do keep every interactive element at a ≥44px touch target with a visible
  2px focus outline.
- Don't animate for decoration: 160ms state changes, one gentle reveal per
  element, full content without JS, `prefers-reduced-motion` respected.
- Do pair every color signal with a label, icon, or position — the palette
  must survive grayscale.
- Don't swap the monogram's meaning: pink crossbar = Harper, purple bars =
  Ellianna. Never redraw, recolor, or re-case the marks (always "HarpElle").

## Changelog

**2026-11-21 — inks ratified.** Jason approved both ink hexes on the
condition that an independent review agreed. It did: `#6F6862` keeps Mid
Neutral's hue and chroma at 5.04:1, and `#A47E70` keeps Pink Accent's hue at
3.33:1. A darker pink (for example `#946E60`, 4.14:1) reads as taupe, and to a
deuteranope it is nearly the secondary grey, so it would cost the accent its
identity. The review found two component gaps, fixed here instead of
bending the tokens: the sticky header went from 92% to 96% Light Foundation
(nav links over the dark band were 4.37:1, now 4.69:1), and the map-row arrow
turns Dark Anchor on hover (Pink Accent Ink is 2.99:1 on the veil). The
grayscale note now admits that Mid Neutral, Purple Accent, and Pink Accent Ink
share nearly the same luminance.

**2026-11-20 — contrast, touch targets, and scale cleanup (branch `design-md`).**
First encode of this system as a DESIGN.md, plus the alignment pass it exposed.
What changed from the published tokens and the studio-home handoff, and why:

- Added `secondary-ink #6F6862` and `accent-pink-ink #A47E70`. Small secondary
  text moved off Mid Neutral `#8E8680` (3.29:1 at 11–15px) and the hero accent
  line moved off Pink Accent `#B89A8F` (2.40:1 on Light Foundation). Both new
  hexes extend the published five-color palette and need Jason's brand-level
  sign-off; nothing else in the palette moved.
- The studio pull quote was 20px Pink Accent on Sunken Surface (2.17:1). It is
  now `quote` (22px) in Dark Anchor at 10.74:1 — at 22px, WCAG wants 4.5:1, and
  no pink value on a light surface reaches it.
- Nav links, the Contact pill, the logo link, the list-row links, and the footer
  links were 36px or shorter. All now clear the system's 44px minimum.
- Section headings were 34px (28px mobile) and the family-band intro 17px; both
  were off-scale and became `headline-md` 36 (30 mobile) and `body-lg` 18. Card
  and row paddings of 26px became 24px, back on the 8px grid.
- The family-card hover shadow was neutral black `rgba(0,0,0,.28)`; it is now
  warm `rgba(21,17,14,.35)`. The hero map card moved from the handoff's
  off-token `0 12px 32px rgba(53,49,46,.10)` to Raised, and the overlay token
  was restored to its published `.18` alpha.
