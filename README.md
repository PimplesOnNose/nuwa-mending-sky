# Nuwa Mending the Sky — 女娲补天

> A bilingual illustrated children's story app. Classical Chinese ink painting aesthetic.

[English](README.md) | [中文](README.zh.md)

---

## 🪡 Crafted with

<a href="https://platform.stepfun.ai/" target="_blank"><img src="https://img.shields.io/badge/StepFunAI-FF6B35?style=for-the-badge" alt="StepFunAI" height="28"/></a> <a href="https://pi.dev" target="_blank"><img src="https://img.shields.io/badge/Pi-FF6B35?style=for-the-badge" alt="Pi" height="28"/></a>

---

## 📖 Live Demo

👉 **[Nuwa Mending the Sky — GitHub Pages](https://pimplesonnose.github.io/nuwa-mending-sky/)**

---

## 📖 About the Project

**Nuwa Mending the Sky (女娲补天)** is one of China's most beloved creation myths. When the sky cracked and the world teetered on the brink of destruction, the goddess Nuwa gathered five-coloured magic stones and mended the heavens — saving all of creation with nothing but courage and love.

This project retells that timeless story for **primary-school-age children (5–10 years)** as a fully self-contained interactive web application. Every page is narrated aloud and accompanied by a Chinese ink-painting-style illustration generated with AI, delivered through a browsing experience themed like a celestial tapestry floating on a starry cosmos.

### ✨ Features

- 📖 **Bilingual** — English and Chinese versions with **separate Hanzi and pinyin blocks** (Chinese mode shows two distinct text blocks; English mode shows just one)
- 🎵 **Full narration** — Every page has a pre-recorded MP3 using Microsoft Edge TTS:
  - Mandarin: `zh-CN-XiaoxiaoNeural` (female voice, slowed by 8%)
  - English: `en-US-GuyNeural` (male voice, normal speed)
- 🖼️ **AI-generated illustrations** — 10 pages of original classical Chinese ink painting (guohua) style images created with Cloudflare Workers AI / FLUX.1 Schnell
- ▶️ **Autoplay mode** — One click to have the story read aloud and advance through all 10 pages automatically
- 📱 **Touch-friendly** — Swipe left/right to turn pages on mobile devices
- ⌨️ **Keyboard shortcuts** — Arrow keys or spacebar
- 🏮 **"Celestial Tapestry" theme** — Animated starfield, nebula glow orbs, frosted glass content panel, pinyin in Cormorant Garamond italic, Chinese headlines in ZCOOL KuaiLe

### 🛠 Technology

| Component | Technology |
|-----------|-----------|
| Frontend | Pure HTML / CSS / JavaScript (no build step) |
| Speech | Microsoft Edge TTS via `edge-tts` |
| Images | Cloudflare Workers AI — `@cf/black-forest-labs/flux-1-schnell` |
| Fonts | Cormorant Garamond · ZCOOL KuaiLe · Noto Serif SC (Google Fonts) |
| Hosting | GitHub Pages |

---

## 🚀 Quick Start

```bash
# 1. Clone
git clone https://github.com/PimplesOnNose/nuwa-mending-sky.git
cd nuwa-mending-sky

# 2. Generate narration audio
pip install edge-tts
python generate_audio.py

# 3. Generate illustrations
pip install requests
python generate_images.py

# 4. Preview locally
python -m http.server 8000
# Open http://localhost:8000
```

**Environment variables** (for image generation only):

```bash
# ~/.pi/agent/.env
CLOUDFLARE_ID=<your-account-id>
CLOUDFLARE_API_KEY=<your-api-key>
```

---

## 📂 Repository Structure

```
nuwa-mending-sky/
├── index.html              # App shell — "Celestial Tapestry" cosmos theme
├── story.json              # 10 pages, tri-lingual: EN / 中文 / pinyin
├── css/style.css           # Starfield, nebula orbs, glass panel, Chinese numerals
├── js/app.js               # Language toggle, audio playback, autoplay, swipe, keyboard
├── generate_audio.py       # Edge TTS script — 20 MP3 files
├── generate_images.py      # FLUX.1 Schnell script — 10 ink-painting images
├── PLAN.md                 # Original project plan + research notes
├── README.md               # English README (you are here)
├── README.zh.md            # 中文版 README（请切换到左侧查看）
├── audio/                  # pageN_en.mp3 + pageN_zh.mp3 (gitignored)
└── images/                 # pageN.jpg ink-painting illustrations (gitignored)
```

---

## 🗺️ Story Outline

| Page | Chinese | English | Illustration |
|------|---------|---------|--------------|
| 1 | 世界的开端 | The Peaceful World | Nuwa surveying paradise |
| 2 | 共工怒触不周山 | The Great Clash | Gonggong vs Zhu Rong |
| 3 | 天崩地裂 | The Sky Cracks | Sky breaking, flood and fire |
| 4 | 女娲心痛 | Nuwa's Heartbreak | Goddess resolves to act |
| 5 | 登上昆仑山 | The Climb to Kunlun | Five-coloured magic stones |
| 6 | 熔炼五色石 | Melting the Magic Stones | Alchemical forge |
| 7 | 炼石补天 | Mending the Sky | Pouring molten stone into the crack |
| 8 | 巨龟四足撑天 | The Turtle's Legs | Turtle legs holding up the sky |
| 9 | 天地恢复 | Order Restored | Peace restored |
| 10 | 女娲的遗产 | The Legacy of Nuwa | Rainbow, moral, ending |

---

## 🎨 Design: "Celestial Tapestry"

Instead of a simulated-xuan-paper cream-scroll (already done by Journey to the West), the Nuwa theme leans into the **cosmic scale** of the myth:

- Background: near-black cosmos `#08080f` with radial nebula
- Three animated star layers (CSS `radial-gradient` dots, each with a different `twinkle` timing)
- Four large blurred "nebula orb" divs drifting slowly (cinnabar red, jade green, gold, sky blue)
- Story panel: frosted-glass card anchored at the bottom, glassmorphism via `backdrop-filter: blur(14px)`
- Page counter: vertical Chinese numerals (壹 · 拾) in cinnabar red
- Decorative: ◆ gem separator; gold glow on first-letter drop-cap

Typography pairings:
- **English body + pinyin**: Cormorant Garamond
- **Chinese headlines**: ZCOOL KuaiLe (rounded playfulness → child audience)
- **Chinese body**: Noto Serif SC

---

## 📝 License

MIT — Story content adapted from the public-domain Chinese myth *Nuwa Mending the Sky*.
