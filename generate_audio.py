#!/usr/bin/env python3
"""
generate_audio.py
Generate bilingual narration audio for 女娲补天 — Nuwa Mending the Sky
using Edge TTS.

Usage:
    pip install edge-tts
    python generate_audio.py

Outputs:
    audio/pageN_en.mp3  — English narration (male voice, regular speed)
    audio/pageN_zh.mp3  — Mandarin narration (female voice, -8% speed)
"""
import asyncio
import json
import os
from pathlib import Path

try:
    import edge_tts
except ImportError:
    print("Installing edge-tts…")
    os.system("pip install edge-tts")
    import edge_tts

# ── Voice configuration ───────────────────────────────────────
# English: male voice, regular speed (+0%)
EN_VOICE  = "en-US-GuyNeural"
EN_RATE   = "+0%"

# Mandarin: female voice, slowed by 8%
# Alternatives if Xiaoxiao is unavailable:
#   zh-CN-XiaoyiNeural (female, warm)
#   zh-CN-YunxiNeural  (male, warm)
ZH_VOICE  = "zh-CN-XiaoxiaoNeural"
ZH_RATE   = "-8%"


async def generate(text: str, voice: str, rate: str, path: Path) -> bool:
    try:
        comm = edge_tts.Communicate(text, voice, rate=rate)
        await comm.save(str(path))
        print(f"  ✅  {path.name}  ({path.stat().st_size // 1024} KB)")
        return True
    except Exception as exc:
        print(f"  ❌  {path.name}: {exc}", flush=True)
        return False


async def main() -> None:
    base = Path(__file__).parent
    with open(base / "story.json", encoding="utf-8") as fh:
        story = json.load(fh)

    audio_dir = base / "audio"
    audio_dir.mkdir(exist_ok=True)

    print("🎵  Generating narration audio…\n")
    total    = len(story["pages"]) * 2
    finished = 0

    for page in story["pages"]:
        n   = page["id"]
        t   = page["title"]
        c   = page["content"]

        # English: "Title. Content."
        en_path = audio_dir / f"page{n}_en.mp3"
        if not en_path.exists():
            ok = await generate(f"{t['en']}. {c['en']}", EN_VOICE, EN_RATE, en_path)
            finished += ok
        else:
            print(f"  ⏭  {en_path.name} already exists")
            finished += 1

        # Mandarin: "Title。Content。"  (full-width period for natural pause)
        zh_path = audio_dir / f"page{n}_zh.mp3"
        if not zh_path.exists():
            ok = await generate(f"{t['zh']}。{c['zh']}", ZH_VOICE, ZH_RATE, zh_path)
            finished += ok
        else:
            print(f"  ⏭  {zh_path.name} already exists")
            finished += 1

    print(f"\n🎉  Done — {finished}/{total} files generated")


if __name__ == "__main__":
    asyncio.run(main())
