#!/usr/bin/env python3
"""
generate_images.py
Generate classical Chinese ink-painting-style illustration images for
女娲补天 — Nuwa Mending the Sky, using Cloudflare Workers AI (FLUX).

Requires:
    pip install requests
    CLOUDFLARE_ID  and  CLOUDFLARE_API_KEY  in ~/.pi/agent/.env

Usage:
    python generate_images.py
"""
import base64
import json
import os
import sys
from pathlib import Path

try:
    import requests
except ImportError:
    print("Installing requests…")
    os.system("pip install requests")
    import requests

# ── Cloudflare credentials ──────────────────────────────────
ENV_FILE = Path.home() / ".pi" / "agent" / ".env"
if ENV_FILE.exists():
    for line in ENV_FILE.read_text().splitlines():
        line = line.strip()
        if line and not line.startswith("#") and "=" in line:
            k, v = line.split("=", 1)
            os.environ[k.strip()] = v.strip().strip('"')

ACCOUNT_ID = os.environ.get("CLOUDFLARE_ID")
API_KEY    = os.environ.get("CLOUDFLARE_API_KEY")

if not ACCOUNT_ID or not API_KEY:
    sys.exit("❌  Set CLOUDFLARE_ID and CLOUDFLARE_API_KEY in ~/.pi/agent/.env")

API_URL = (
    f"https://api.cloudflare.com/client/v4/accounts/{ACCOUNT_ID}"
    "/ai/run/@cf/black-forest-labs/flux-1-schnell"
)

# ── Image prompt template ────────────────────────────────────
STYLE_APPENDIX = (
    "Traditional Chinese ink wash painting (guohua), classical Song dynasty landscape "
    "aesthetic, soft monochrome with selective touches of traditional colour "
    "(vermillion red, jade green, gold), elegant brushstrokes on xuan paper, "
    "light mist and atmospheric depth, calligraphic quality, masterpiece illustration "
    "for children's storybook, authentic classical Chinese art style"
)

SCENES = {
    1: (
        "A beautiful goddess Nuwa in flowing jade-green robes stands on high ground "
        "looking out over a peaceful paradise. Below she see rivers winding through "
        "green valleys, birds flying in the sky, children playing among trees and "
        "flowers, animals everywhere — a perfect harmonious world."
    ),
    2: (
        "Below thick swirling clouds, two enormous god-warriors clash in a titanic "
        "battle: one wreathed in roaring red flame, the other surrounded by surging "
        "dark water. In the background the great pillar mountain Buzhou rises "
        "majestically. Dynamic brushstrokes convey enormous energy."
    ),
    3: (
        "A terrible catastrophe: the sky has tilted and cracked open, stars raining "
        "down, rivers overflowing their banks, rivers bursting through the sky-fissure, "
        "great flames licking out, small frightened people running below. "
        "Chaotic ink droplets suggest destruction."
    ),
    4: (
        "On a high mountain plateau shrouded in mist, the goddess Nuwa looks down "
        "at the suffering world below. Her expression changes from sorrow to "
        "unshakeable determination. Her silk robes ripple in a strong wind. "
        "A moment of quiet resolve."
    ),
    5: (
        "Nuwa climbs the snowy peak of Mount Kunlun, wind and whirling clouds around "
        "her. At the summit she reaches her hand toward five brilliant, softly glowing "
        "orbs — red, blue, yellow, green, white — hovering in the mountain air like "
        "precious jewels."
    ),
    6: (
        "In a humble forge open to the sky, Nuwa works with great focus over a roaring "
        "furnace. Five glowing coloured stones glow fiercely above it, emitting light "
        "brighter than a hundred suns. Five jewel-toned streams of molten light rise "
        "and swirl alchemically into the air."
    ),
    7: (
        "Dynamic vertical composition: Nuwa flies on clouds at the edge of the cracked "
        "heavens, her paddle raised before a glowing wound in the sky coloured with "
        "five brilliant hues. Tiny people below look up in awe and wonder as the sky "
        "slowly heals."
    ),
    8: (
        "A great calm sea with a magnificent ancient turtle swimming peacefully. "
        "Nuwa kneels in gratitude on the shore, hands together. In a companion inset "
        "scene — the four mighty turtle legs planted solidly at the four corners of "
        "the world, sky held steady once more. Moonlight on the water."
    ),
    9: (
        "A peaceful bright landscape restored: warm golden sunlight, gentle rivers, "
        "children playing and dancing, people emerging from caves holding hands, "
        "Nuwa in the middle distance watching with a soft happy smile. "
        "Warm golden light bathes the whole scene."
    ),
    10: (
        "Nuwa stands on a hill looking thoughtfully upward as a brilliant five-coloured "
        "rainbow arcs across the post-rain sky. In the foreground small children point "
        "up in wonder. The whole scene is bathed in gentle golden light. "
        "A hopeful, peaceful ending."
    ),
}


def generate(prompt: str, out_path: Path, width: int = 1024, height: int = 768) -> bool:
    payload = {
        "prompt": f"{prompt}. {STYLE_APPENDIX}",
        "width": width,
        "height": height,
        "num_steps": 4,
        "guidance": 7.5,
    }
    try:
        resp = requests.post(
            API_URL,
            headers={
                "Authorization": f"Bearer {API_KEY}",
                "Content-Type": "application/json",
            },
            json=payload,
            timeout=90,
        )
        resp.raise_for_status()
        data = resp.json()

        img_b64 = data.get("result", {}).get("image", "")
        if not img_b64:
            print(f"  ❌  No image in response for page", flush=True)
            return False

        img = base64.b64decode(img_b64)
        out_path.write_bytes(img)
        print(f"  ✅  {out_path.name}  ({len(img) // 1024} KB)")
        return True

    except Exception as exc:
        print(f"  ❌  {out_path.name}: {exc}", flush=True)
        return False


def main() -> None:
    base     = Path(__file__).parent
    img_dir  = base / "images"
    img_dir.mkdir(exist_ok=True)

    print("🎨  Generating classical Chinese ink-style illustrations…\n")
    total    = len(SCENES)
    finished = 0

    for page_num, scene in SCENES.items():
        out = img_dir / f"page{page_num}.jpg"
        if out.exists():
            print(f"  ⏭  page{page_num}.jpg already exists")
            finished += 1
            continue
        print(f"  🖌  page {page_num:>2}…", end="", flush=True)
        if generate(scene, out):
            finished += 1

    print(f"\n🎉  Done — {finished}/{total} images generated\n")


if __name__ == "__main__":
    main()
