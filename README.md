# 女娲补天 — Nuwa Mending the Sky
> An illustrated bilingual children's story app. Classical Chinese ink painting aesthetic.

[中文](/README.zh.md) | [English](/#english)

---

## 🪡 Crafted with

<a href="https://platform.stepfun.ai/" target="_blank"><img src="https://img.shields.io/badge/StepFunAI-FF6B35?style=for-the-badge" alt="StepFunAI" height="28"/></a>  <a href="https://pi.dev" target="_blank"><img src="https://img.shields.io/badge/Pi-FF6B35?style=for-the-badge" alt="Pi" height="28"/></a>

---

## 📖 Live Demo

👉 **[nüwa-mending-sky on GitHub Pages](https://pimplesonnose.github.io/nuwa-mending-sky/)**

---

## 📖 女娲补天

**女娲补天** 是中国最著名的神话传说之一，讲述女神女娲如何修补被撞破的天空，拯救世界的故事。

### ✨ 功能特点
- 📖 **双语对照** — 英语与中文同时呈现，中文字段附带拼音
- 🎵 **语音朗读** — Edge TTS 高品质语音，普通话女声慢速 (−8%)，英语男声正常语速
- 🖼️ **水墨画风格插图** — 每页配有 AI 生成的中国传统水墨画插图
- ▶️ **自动播放** — 一键开启自动翻页 + 朗读
- 📱 **触屏友好** — 支持左右滑动翻页
- ⌨️ **键盘操作** — 方向键翻页，空格键播放/暂停
- 🏮 **古风界面** — 宣纸质感、朱砂红印章、水墨晕染动效

### 🛠 技术
| 组件 | 技术 |
|------|------|
| 前端 | 纯 HTML / CSS / JavaScript（无构建步骤）|
| 语音 | Microsoft Edge TTS (`edge-tts`) |
| 图片 | Cloudflare Workers AI (`FLUX.1 Schnell`) |
| 字体 | Ma Shan Zheng · Noto Serif SC · Crimson Pro (Google Fonts) |
| 托管 | GitHub Pages |

---

## 🚀 快速开始

```bash
# 1. 克隆仓库
git clone https://github.com/<user>/nuwa-mending-sky.git
cd nuwa-mending-sky

# 2. 生成音频（需 edge-tts）
pip install edge-tts
python generate_audio.py

# 3. 生成插图（需 Cloudflare API key）
pip install requests
python generate_images.py

# 4. 本地预览
python -m http.server 8000
# 浏览器打开 http://localhost:8000
```

### 环境变量（图片生成）
在 `~/.pi/agent/.env` 中添加：
```
CLOUDFLARE_ID=<your-account-id>
CLOUDFLARE_API_KEY=<your-api-key>
```

---

## 📂 目录结构

```
nuwa-mending-sky/
├── index.html           # 主页面
├── story.json           # 故事内容（三语：EN / 中文 / 拼音）
├── css/style.css        # 水墨画风格样式
├── js/app.js            # 应用逻辑（语言、音频、导航）
├── generate_audio.py    # Edge TTS 音频生成脚本
├── generate_images.py   # AI 插图生成脚本
├── audio/               # 生成的 MP3 文件（已 gitignore）
└── images/              # 生成的插图（已 gitignore）
```

---

## 🗺️ 故事内容

| 页 | 中文标题 | English |
|----|---------|---------|
| 1 | 世界的开端 | The Peaceful World |
| 2 | 共工怒触不周山 | The Great Clash |
| 3 | 天崩地裂 | The Sky Cracks |
| 4 | 女娲心痛 | Nuwa's Heartbreak |
| 5 | 登上昆仑山 | The Climb to Kunlun |
| 6 | 熔炼五色石 | Melting the Magic Stones |
| 7 | 炼石补天 | Mending the Sky |
| 8 | 巨龟四足撑天 | The Turtle's Legs |
| 9 | 天地恢复 | Order Restored |
| 10 | 女娲的遗产 | The Legacy of Nuwa |

---

## 🎨 设计理念

整体视觉语言取法中国传统 **水墨山水画**（水墨画），融汇敦煌壁画、宋人山水与明代木刻版画之美。背景基调为近墨色，前景为宣纸米色，点缀朱砂红与古金色——营造古雅书卷氛围。

---

## 📄 许可

MIT License · 故事内容改编自中国神话传说，属公有领域。
