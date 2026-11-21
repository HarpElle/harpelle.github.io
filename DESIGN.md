---
version: alpha
name: HarpElle Balanced Craft
description: >-
  Warm-neutral parent-brand design system for harpelle.com, the HarpElle
  studio home. Derived from the HarpElle Brand & Identity Guide v1.0 and the
  published HarpElle design-system tokens ("Balanced Craft").
---

# HarpElle — studio home design system

This file governs the harpelle.com studio home (`@index.html`) and the shared
studio chrome in `@assets/css/harpelle-site.css` (the header and footer that
product and help pages reuse). Sub-brand surfaces — `volleytally/`,
`volleytrack/`, and `clients/` page bodies — intentionally carry their own
systems and are out of scope here; they inherit only the studio chrome rules.

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

Warm neutrals do the work; accents are seasoning. The two "ink" tokens are
derived one lightness step down from their parents (same hue and saturation)
so that small text and light-background accents meet WCAG AA; the parent
values remain correct for large text, dark backgrounds, and decoration.

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
  pink accent, for large display moments only (3.33:1 — AA large text, e.g.
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
position. All brand colors keep distinct lightness values so the palette
survives grayscale.

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
75ch (48–54ch for leads); body text never drops below 14px, and 14px and
smaller is reserved for secondary roles in Secondary Ink or stronger.

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

The `-sm` variants are the mobile (≤720px) sizes of their desktop
counterparts.

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
- **Header:** sticky, Light Foundation at 92% with 10px blur; bottom border
  transparent until scroll, then Hairline plus the card shadow. Nav links are
  14px/600 Secondary Ink, hover Dark Anchor; Contact is a 44px outline pill.
- **Map card (hero):** Light Foundation, 1px Hairline, 16px radius, raised
  shadow; rows split by Hairline dividers with a veil hover and a Pink Accent
  Ink arrow.
- **Family band cards:** Dark Card on Dark Anchor band, 12px radius, 24px
  padding; overlines in Pink Accent (4.53:1 on Dark Card), descriptions in
  Soft-on-Dark; hover lifts 2px with the warm near-black shadow.
- **List rows (products/services):** hairline-divided rows, 24px vertical
  padding; name 18px/600 Dark Anchor, kind caption and description in
  Secondary Ink.
- **Footer:** hairline top border, overline column heads in Secondary Ink,
  links in Dark Anchor weight 400–600.

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
  nav-link-hover:
    textColor: "{colors.primary}"
  overline:
    textColor: "{colors.secondary-ink}"
    typography: "{typography.overline}"
```

## Do's and Don'ts

- Do keep warm neutrals on ~90% of every surface; accents stay under 10%.
- Don't use pure #FFFFFF for parent-brand surfaces — warmth comes from Light
  Foundation. (Known debt: `@assets/css/harpelle-site.css` still uses white
  card surfaces on product/help pages; align when those pages are next
  touched.)
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
