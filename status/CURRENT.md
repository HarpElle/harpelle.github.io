# harpelle.com studio home — current state

Updated: 2026-11-20 by Chief (Claude Code, Opus 5)
Stage: **live** · Health: **attention**

Studio home, app privacy/help pages, feedback Workers.

## What is live / where main stands

- Studio Home v2 live 2026-08-29 (PR #5).
- Primary local checkout has 20 uncommitted modified files: all VolleyTrack help pages, privacy, terms, feedback Worker config. Origin unknown.

## In flight

- **branch `design-md`** — root DESIGN.md + home/chrome contrast and token
  alignment, then a second pass confirming it against the brand guide and
  finishing the 44px touch targets (2026-11-20, Chief). Awaiting Jason's
  review; see LOG.
- **local** — 20 uncommitted VolleyTrack help/privacy edits (unexplained)

## 2026-09-05

- Contact-email migration committed and merged (PR #9): app pages now use info@volleytrackapp.com, info@volleytallyapp.com, info@harpelle.com. Jason confirmed the Google Workspace mailboxes work. The feedback Worker's send_email config is committed but the Worker is not redeployed; Email Sending must be enabled for volleytrackapp.com first. Eight tracked files still mention jason@harpelle.com (sweep is plan step 1).

## Blockers

- None.

## Decisions for Jason

- Ratify the two derived brand colors? DESIGN.md adds Secondary Ink #6F6862
  (small secondary text) and Pink Accent Ink #A47E70 (pink as text on light,
  display sizes only) because the published five-color palette has no
  AA-compliant value for either, and the brand guide says to use only its
  documented hexes. Recommended: yes — adopt both into the Brand & Identity
  Guide and the Claude Design "HarpElle" project, with Mid Neutral and Pink
  Accent kept for large text, borders, and decoration.

## Links

- [Repo](https://github.com/HarpElle/harpelle.github.io)
- [Live](https://harpelle.com)
