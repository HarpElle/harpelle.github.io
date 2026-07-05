# HarpElle client page templates

Static HTML templates for private, per-client engagement pages on the GitHub Pages
site. Converted from the Claude Design project (Client Page / The Thinking /
Proposal / Project Hub / Engagement Index) — the visual design is preserved
exactly; the dynamic Design Canvas constructs were materialized into plain HTML.

Every page is standalone HTML5, `noindex, nofollow`, loads Google Fonts
(Plus Jakarta Sans + Zilla Slab) and `../../assets/css/harpelle-site.css`, and
references brand SVGs at `../../assets/brand/`.

## Files

| File | What it is |
|---|---|
| `index.html` | Client-facing landing page, **active** state (after-meeting mode live; proactive mode + proposal band in marked comments — see "Page states"). |
| `index-declined.html` | Full standalone **declined** page. Renamed to `index.html` the day a client says no. |
| `index-archived.html` | Full standalone **archived** card. Renamed to `index.html` on the promised rest date. |
| `thinking.html` | "The thinking" research page — before/after slider + market/competitor/expectation sections. |
| `proposal.html` | Plain-language proposal with three pricing tiers (middle dark card = recommended). |
| `hub.html` | Project hub ("home base"). Swapped in for `index.html` when a client says **yes**. |
| `engagement-index.html` | **Jason-private** overview of all engagements. Never copied into client folders; keep it out of the deploy entirely, or at an unlisted path if you want it on the go. |

## Tokens per file

Replace every `{{UPPER_SNAKE}}` token when creating a client copy.

### index.html
| Token | Meaning | Example (design default) |
|---|---|---|
| `{{CLIENT_NAME}}` | Client business/family name | `Birchwood Lanes` |
| `{{HEADLINE}}` | Hero headline | `A web presence as warm as your welcome.` |
| `{{REST_DATE}}` | Date the page "rests" / materials come down | `September 1, 2026` |

### index-declined.html
| Token | Meaning | Example |
|---|---|---|
| `{{CLIENT_NAME}}` | Client name | `Birchwood Lanes` |
| `{{REST_DATE}}` | Take-down date promised in the decline note | `September 1, 2026` |

### index-archived.html
| Token | Meaning | Example |
|---|---|---|
| `{{CLIENT_NAME}}` | Client name | `Birchwood Lanes` |
| `{{ARCHIVE_YEAR}}` | Year shown in the "Prepared for … · YYYY" overline | `2026` |

### thinking.html
| Token | Meaning | Example |
|---|---|---|
| `{{CLIENT_NAME}}` | Client name | `Birchwood Lanes` |

Also expects two screenshots dropped into the client folder: `before.png`
(current site) and `after.png` (proposed homepage) for the drag slider.

### proposal.html
| Token | Meaning | Example |
|---|---|---|
| `{{CLIENT_NAME}}` | Client name | `Birchwood Lanes` |
| `{{VALID_THROUGH}}` | Proposal expiry date | `August 15, 2026` |

### hub.html
| Token | Meaning | Example |
|---|---|---|
| `{{CLIENT_NAME}}` | Client name | `Birchwood Lanes` |
| `{{CURRENT_PHASE}}` | "Where we are" card | `Building the site` |
| `{{LAST_UPDATED}}` | Date of last Friday update | `Friday, Jul 3` |
| `{{NEXT_MILESTONE}}` | Next milestone name | `Photography day` |
| `{{NEXT_MILESTONE_DATE}}` | Next milestone date/details | `Tuesday, Jul 14 — at the lanes, 9am` |
| `{{STAGING_URL}}` | Link target for "View the staging site" | (design default was `#`) |

### engagement-index.html
No tokens. The five rows and the "3 in play · 5 total" header count are sample
data — edit them directly (marked with an `<!-- EDIT -->` comment).

**Mailto note:** `{{CLIENT_NAME}}` also appears *inside* `mailto:` hrefs
(pre-encoded subjects/bodies). Simplest rule: fill all tokens, then fix the
mailto subjects — inside an href, spaces in the client name must be encoded as
`%20` (e.g. `subject=Birchwood%20Lanes%20%E2%80%94%20let%E2%80%99s%20talk`).
Everything after the client name is already encoded.

## Sample content that must be rewritten per client

The lists that were dynamic in the design (rendered from sample data) are now
static HTML marked with `<!-- EDIT PER CLIENT: … -->` comments. The sample copy
is bowling-specific (the Birchwood Lanes example) and **must be rewritten for
each client**:

- `thinking.html` — market observations (3 cards), competitor rows (3), customer expectations (4)
- `proposal.html` — pricing tiers (3, prices are placeholders), cost comparisons (4), "if you say yes" terms (4)
- `hub.html` — milestones (5), needs (3), decision log (4)

## Creating a new client folder

1. Copy `_template/` → `clients/<unguessable-slug>/` (the folder path is the
   only key — pick something unguessable, never linked from the public site).
2. Delete `engagement-index.html` from the client copy (Jason-private).
3. Fill every token (see tables above), then fix the mailto subjects (encode
   spaces in the client name as `%20`).
4. Rewrite the `EDIT PER CLIENT` sample content for the client.
5. Drop the `pitch/` and `demo/` folders in verbatim; add `proposal/` and
   `walkthrough/` if they exist (the "Also in your folder" links expect them).
6. Add `before.png` and `after.png` for the thinking page slider.
7. Update `clients/clients.json` and the private engagement index.

## Page states & lifecycle (from the playbook)

`active` → *proposal shown* → **won** (hub swapped in) or **declined** → **archived**

- **Active** — `index.html` as shipped. Two intro modes:
  - *after-meeting* (default, live in the file) — thanks the client for meeting.
  - *proactive* — for cold/unsolicited pitches. Marked in the file as
    `<!-- MODE: proactive — swap in … -->`: delete the after-meeting paragraph
    and uncomment the proactive one.
- **Proposal shown** (`showProposal`) — when the engagement reaches proposal
  stage, uncomment the dark band marked
  `<!-- SHOW PROPOSAL: uncomment this band … -->` in `index.html` (links to
  `proposal.html`).
- **Won** — replace `index.html` with `hub.html` (rename/copy `hub.html` →
  `index.html`). The client page becomes the project home base.
- **Declined** — replace `index.html` with `index-declined.html` the day they
  say no.
- **Archived** — on the promised rest date, delete `pitch/` and `demo/`, and
  replace `index.html` with `index-archived.html`. Keep a private copy outside
  the repo. No follow-up emails.

## Implementation notes (read before restyling)

- **Fonts:** inline styles use `var(--font-display)` (Zilla Slab) and
  `var(--font-sans)` (Plus Jakarta Sans), defined in each page's `<style>`
  block. All other design-token values are baked in as literal hex colors.
- **`!important` on some inline styles:** `harpelle-site.css` declares
  element-level `!important` rules (`section { padding … }`,
  `footer { background/border/color/padding … }`, `footer a { color … }`) that
  would otherwise override the templates' inline layout. The affected inline
  declarations carry `!important` to preserve the design exactly. Don't remove
  them, and if you add a new `<section>`/`<footer>`, give its padding
  `!important` too.
- **Buttons/badges:** the design system's `Button` and `Badge` components were
  materialized as `.hx-btn*` / `.hx-badge*` classes in each page's `<style>`
  block (primary, secondary, ghost, onDark; badge tones pink/purple/dark/
  neutral/outline with dot — the label is always present, color is never the
  sole signal).
- **Before/after slider** (`thinking.html`): plain `<img>` + `clip-path` wired
  to a range input by ~6 lines of vanilla JS. No dependencies.
