# harpelle.com studio home: plan

Updated: 2026-09-04 by Claude Code (Fable 5.1 review)

## Intentions

The studio's honest face; legal text says HarpElle LLC.

The code agrees with this. Footers and privacy pages say "HarpElle LLC";
brand copy says "HarpElle".

## Now (current needs)

- Land the contact-email migration sitting uncommitted on the Primary Mac
  checkout, then stop publishing internal files. Details in
  `status/REVIEW_2026-09-04.md`.

## Next (in order)

1. **Confirm the `info@` mailboxes deliver** (S)
   - Send a test message to `info@volleytrackapp.com`,
     `info@volleytallyapp.com`, and `info@harpelle.com` from any account.
   - Acceptance: all three arrive in a mailbox Jason reads. If one does not,
     fix it in Google Workspace before step 2.

2. **Commit the site half of the email migration** (S)
   - On the Primary checkout `/Users/jasonpaschall/HarpElle/HarpElleSites/HarpElle`:
     `git pull --rebase origin main` (the checkout is two merges behind),
     `git checkout -b chore/contact-email-migration`, then `git add` the 17
     modified site files (everything except `workers/volleytrack-feedback/wrangler.toml`).
   - While on the branch, sweep the remaining occurrences in
     `volleytrack/coach-test/`, `volleytrack/demos/`, `volleytrack/print/`,
     and the help pages so `grep -rn 'jason@harpelle.com' .` returns nothing.
   - Push, `gh pr create`, merge.
   - Acceptance: `curl -s https://harpelle.com/volleytrack/privacy.html | grep -c jason@` prints 0 and
     `grep -rn 'jason@harpelle.com'` on main prints nothing.

3. **Fix the Swing Time proposal link** (S)
   - `clients/swing-time-83dc2d/index.html` line 76 links to `proposal.html`.
     Either copy `clients/_template/proposal.html` into the folder and fill
     the `{{CLIENT_NAME}}` and `{{VALID_THROUGH}}` tokens, or remove the band.
   - Acceptance: `curl -o /dev/null -w '%{http_code}' https://harpelle.com/clients/swing-time-83dc2d/proposal.html`
     prints 200, or the link is gone and the page still renders.

4. **Stop publishing internal files** (S)
   - Add `_config.yml` at the repo root:
     `exclude: [status, AGENTS.md, README.md, workers, scripts, .codex]`.
     Do not add `.nojekyll`; the legacy Jekyll build is what hides
     `clients/_template`.
   - Acceptance: after the Pages build, `https://harpelle.com/status/CURRENT.md`
     and `https://harpelle.com/workers/volleytrack-feedback/wrangler.toml`
     return 404 while `https://harpelle.com/volleytrack/help/` and
     `https://harpelle.com/clients/swing-time-83dc2d/` still return 200.

5. **Wire feedback notifications and deploy the Worker** (M)
   - In Cloudflare, enable Email Sending for `volleytrackapp.com` and verify
     `info@volleytrackapp.com` as a destination.
   - Commit the `wrangler.toml` change (`[[send_email]] name = "EMAIL"`,
     `NOTIFY_TO`, `NOTIFY_FROM`) on its own branch.
   - While there, in `workers/volleytrack-feedback/src/index.js`: reject
     bodies over 16 KB before `request.json()`, and add a rate-limit binding
     (Durable Object if the number must hold; the plain binding is per-colo).
   - `cd workers/volleytrack-feedback && wrangler deploy`, then submit the live
     form at `https://harpelle.com/volleytrack/feedback/`.
   - Add one sentence under the form saying name and email are stored to reply
     and are deleted on request.
   - Acceptance: a D1 row appears (`wrangler d1 execute volleytrack_feedback --command 'select id, created_at from feedback order by created_at desc limit 1'`)
     and the notification email arrives at `info@volleytrackapp.com`.

6. **Refresh VolleyTrack launch copy once store status is confirmed** (S)
   - Files: `volleytrack/index.html` (availability note, Google Play
     "Review" badge), `volleytrack/coach-test/index.html` (hero),
     `sitemap.xml` (add `/volleytrack/feedback/` and `/volleytrack/coach-test/`
     if they should be indexed), `llms.txt` (canonical VolleyTrack URL).
   - Acceptance: the page says what the stores say; both store badges link to
     live listings or are removed.

7. **Housekeeping** (S)
   - `git push origin --delete agent/harpelle-pages-studio-containment-20260724`.
   - Expand `README.md` to a short folder map plus the Worker deploy command.
   - Decide on `.codex/config.toml` (commit or ignore) and delete or use
     `assets/PARfectPutt-phone-fast-scoring@2x.png` on the Primary checkout.
   - Point `volleytrack/help/help.css` at the self-hosted fonts in
     `assets/fonts/` and drop the fonts.googleapis.com links from the 15 help,
     feedback, and coach-test pages.
   - Acceptance: `gh api repos/HarpElle/harpelle.github.io/branches --jq '.[].name'`
     lists only `main`; `grep -rl fonts.googleapis volleytrack/` is empty.

## Later (not scheduled)

- Move app help pages to each app's own site over time. Trigger: when
  volleytrackapp.com gets a help section, move `volleytrack/help/` there and
  leave redirects here.
- Self-host or pre-render the React and Babel scripts the Swing Time demo
  loads from unpkg.com, when the next client demo is exported.
- Add a link-check step (the Python snippet in the 2026-09-04 review) to
  whatever pre-push habit this repo adopts.

## How this plan is maintained

Any agent may reorder Next or add to Later with a `LOG.md` entry. Intentions
change only with Jason. Items move from Later to Next when they have a
trigger (a date, a shipped dependency, or a decision) written next to them.
