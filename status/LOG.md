# harpelle.com studio home — status log (newest first)

## 2026-11-27 — Grok Bot — removed clients/ from the public repo

- Jason: none of the pitch pages are active; take them down. Deleted `clients/`
  (Swing Time, Ergun Kodesh demos, `_template`) and dropped the now-pointless
  `Disallow: /clients/` from robots.txt so crawlers can see the 404s.
- Archived a copy in the private repo HarpElle/harpelle-pitches (never served).
- Old copies remain in this repo's git history. Rewriting history is Jason's call.

## 2026-11-27 — Grok Bot — GetVolleyApps public copy

- Social flagged that the GetVolleyApps section named VolleyTrack and claimed
  "match stats and analysis." Comms rule: do not use that name in public copy
  and do not mention analytics or stats analysis. A Comms folder was not
  quickly findable in Drive; followed that rule, DESIGN.md voice, and what
  is actually offered (VolleyTally, VolleySignal, and VolleyScorer).
- Removed the Coach card, the footer link, the JSON-LD SoftwareApplication,
  and the llms.txt line. Rewrote the family intro and the hero map from
  "four" tools to "three," and dropped "track stats from the bench."
- Noted, not changed in this pass: the /volleytrack/ help and legal pages,
  and a VolleyTrack CTA on /volleytally/. Those still use the name.
- Branch `copy/getvolleyapps-public-offering`. Low-risk copy.

## 2026-11-27 — Grok Bot — SundaySent spelling

- Jason asked that the brand be written SundaySent (one camel-case word),
  never as two words. Updated the product card, footer, llms.txt, and
  status files on PR #17 to match. Meta and title did not use the name.
  Do not merge without Jason's yes.

## 2026-11-27 — Grok Bot — studio product list

- Added pixpl.us and MiniTally to the studio-home product list, footer,
  llms.txt, and structured data. pixpl.us copy has no prices (DESIGN.md) and
  does not call the retouching AI.
- Corrected PARfectPutt from "2 to 6 players" to "up to 8 players", matching
  the App Store listing (id 6782712093: "Score up to 8 players", "Quick setup
  for 2 to 8 players") and parfectputt.com help.
- Listed SundaySent as an interest signup only, using wording from the
  live waitlist at sundaysent.com ("Your sermon, edited and ready to post",
  "A person at your church approves before anything is posted",
  "Join the founding churches"). Link goes to https://sundaysent.com/#join.
  Not added as a SoftwareApplication in JSON-LD, because it is not generally
  available.
- This repo has no SITE.md; followed DESIGN.md and AGENTS.md. No prices on
  the studio home (pixpl.us).
- Left the hero "What we build" map and hero body as a flagship summary
  (four rows). Putting every new product in the hero intro wrapped poorly
  at 360–768. The complete list is in #products and the footer.
- Opened [PR #17](https://github.com/HarpElle/harpelle.github.io/pull/17) from `update/studio-product-list`. Do not merge without Jason's yes.

## 2026-11-20 — Chief (Claude Code, Opus 5) — design-system agreement pass

- Reviewed every change on branch `design-md` against the HarpElle Brand &
  Identity Guide v1.0, the published "Balanced Craft" tokens, and the approved
  studio-home handoff. All of it agrees with the system; nothing was reverted.
  The guide itself rates Mid Neutral #8E8680 "AA (large text only)" while also
  assigning it to captions, so the derived ink #6F6862 settles that conflict.
- Finished the one half-done item: footer links and the header logo link now
  clear the system's 44px touch target (the footer link column grows about
  50px as a result). DESIGN.md's "every interactive element ≥44px" is now true
  of the page.
- DESIGN.md gained the upstream/provenance note, the exact ink derivations,
  the brand guide's 16px body minimum, the base-vs-marketing type scale rule,
  the shadow-level rule, 44px component specs, and a changelog naming the old
  values. `npx @google/design.md lint DESIGN.md`: 0 errors, 0 warnings.
- `assets/css/harpelle-site.css` now documents the token rules in place
  (small-text ink, accent-as-text is sub-brand only, white surfaces are debt).
  Comments only; no rendering change on the product, help, or client pages.
- DesignSync `list_projects` still shows only "pixpl.us Design System"; no
  HarpElle project is visible to this session, so nothing was pushed there.
- Not touched, listed for a later pass: volleytally/, volleytrack/, and
  clients/ page bodies still set 11–16px text in #8E8680 and use pink/purple
  as text on light. The client hub and `clients/_template/*` pages are
  parent-brand surfaces and are the closest to needing the same fix.

## 2026-11-20 — Chief (Claude Code, Fable 5)

- Branch `design-md` (not merged): added root DESIGN.md (Google DESIGN.md
  format, lint-clean) derived from the HarpElle "Balanced Craft" system, and
  aligned the home page + shared chrome to it. Contrast fixes: small
  secondary text #8E8680 → derived ink #6F6862 (3.29:1 → 5.04:1), hero accent
  line → #A47E70 (2.40:1 → 3.33:1), studio quote → Dark Anchor; warm-tinted
  hover shadow on family cards; 44px nav touch targets; minor type/spacing
  grid alignment. Awaiting Jason's review before any merge to main.

- Accepted recommendation applied: every public occurrence of the personal address replaced with info@harpelle.com (client template and Swing Time pages). Status files restored to their historical wording after the sweep touched them.

## 2026-09-07 — Claude Code (Fable 5.1)

- Jason accepted every recommended default on 2026-09-07. Moved 5 recommendation(s) to the top of PLAN.md Next as accepted steps and cleared the decision queue.
- Items without a stated recommendation were dropped from the queue and kept here for the record: Is VolleyTrack publicly released on both stores? If yes, refresh landing and coach-test copy.

## 2026-09-05 — Claude Code (Fable 5.1)

- Merged the contact-email migration (PR #9). Jekyll exclude list (PR #8) keeps status/ and agent guides off harpelle.com.

## 2026-09-04 (later), Claude Code (Fable 5.1 review)

- Reviewed the repo end to end from a fresh clone: every page and asset,
  the feedback Worker and its D1 migration, GitHub PRs #1 to #6, branches,
  Pages config, branch protection, Dependabot (no open alerts), and a
  read-only diff of the Primary Mac checkout. Live checks against
  harpelle.com, the Worker endpoint, and sibling app domains.
- Wrote `status/REVIEW_2026-09-04.md`: 0 P0, 4 P1, 8 P2, six suggestions,
  six decisions for Jason.
- Characterized the 18 uncommitted local files: a 2026-08-05 contact-email
  migration (jason@harpelle.com to per-app info@ addresses) plus a Worker
  send_email binding. Recommended committing them in two parts.
- Found a live 404 (Swing Time proposal.html) and that internal files
  (status/, workers/, scripts/, AGENTS.md) are published by Pages.
- Rewrote `status/PLAN.md` Next into seven sized steps with acceptance
  checks; kept Intentions (code agrees) and Later, adding two Later items.
- Mirrored everything into `status/status.json`; health stays `attention`.

## 2026-09-04 — Claude Code (Fable 5.1)

- Created the `status/` folder from the 2026-09-04 portfolio sweep
  (GitHub commits, PRs, check runs, and the Primary Mac checkout).
- Recorded stage `live`, health `attention`, 1 item(s) in flight,
  0 blocker(s), 1 decision(s) for Jason.
- Codex is asked to review this record against its own recent sessions and
  correct anything it knows better.

Reviewed by Codex on 2026-09-04; no corrections.
