#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="$ROOT/assets/volleytrack/screenshots/iphone-17-pro-max/final"
OUT="$ROOT/assets/volleytrack/motion"
mkdir -p "$OUT"

make_demo() {
  local name="$1"
  local image="$2"
  local poster="$OUT/${name}.jpg"
  local mp4="$OUT/${name}.mp4"
  local webm="$OUT/${name}.webm"

  /opt/homebrew/bin/ffmpeg -y -i "$SRC/$image" \
    -vf "scale=720:-2:flags=lanczos,crop=720:1564,format=yuv420p" \
    -frames:v 1 -q:v 3 "$poster" >/dev/null 2>&1

  /opt/homebrew/bin/ffmpeg -y -loop 1 -i "$SRC/$image" -t 4 -r 30 \
    -vf "scale=760:-2:flags=lanczos,zoompan=z='min(zoom+0.00045,1.035)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=120:s=720x1564:fps=30,format=yuv420p" \
    -an -movflags +faststart -c:v libx264 -preset veryfast -crf 27 "$mp4" >/dev/null 2>&1

  /opt/homebrew/bin/ffmpeg -y -loop 1 -i "$SRC/$image" -t 4 -r 30 \
    -vf "scale=760:-2:flags=lanczos,zoompan=z='min(zoom+0.00045,1.035)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=120:s=720x1564:fps=30,format=yuv420p" \
    -an -c:v libvpx-vp9 -b:v 0 -crf 38 "$webm" >/dev/null 2>&1
}

make_demo "start-match" "07-start-fast.png"
make_demo "score-and-undo" "02-score-every-rally.png"
make_demo "voice-input" "02-score-every-rally.png"
make_demo "fan-mode" "06-invite-the-fans.png"
make_demo "sub-libero-correction" "03-set-the-lineup.png"
make_demo "finish-match" "04-save-the-story.png"
make_demo "premium-settings" "05-premium-ready.png"

echo "Created VolleyTrack motion demos in $OUT"
