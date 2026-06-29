#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="$ROOT/assets/volleytrack/screenshots/iphone-17-pro-max/final"
OUT="$ROOT/assets/volleytrack/screens"
mkdir -p "$OUT"

make_screen() {
  local name="$1"
  local image="$2"

  /opt/homebrew/bin/ffmpeg -y -i "$SRC/$image" \
    -vf "crop=1020:2080:150:660,scale=720:-2:flags=lanczos" \
    -frames:v 1 -q:v 3 "$OUT/${name}.jpg" >/dev/null 2>&1
}

make_screen "coach-from-the-sideline" "01-coach-from-the-sideline.png"
make_screen "live-scoring" "02-score-every-rally.png"
make_screen "set-lineup" "03-set-the-lineup.png"
make_screen "match-summary" "04-save-the-story.png"
make_screen "premium-settings" "05-premium-ready.png"
make_screen "fan-mode" "06-invite-the-fans.png"
make_screen "quick-match" "07-start-fast.png"

echo "Created VolleyTrack documentation screens in $OUT"
