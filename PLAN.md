# Nuwa Mending the Sky — 女娲补天

> An illustrated, bilingual children's story app built in the style of classical Chinese ink painting.
> Pattern: follows the established architecture used by `journey-to-the-west` and `magic-paintbrush`.

---

## 1. Story Research Summary

### 女娲补天 — The Legend of Nuwa Mending the Sky

The myth stands as one of China's **four great foundational legends** (alongside Pangu creating the world, Shennong teaching agriculture, and Fuxi teaching marriage).

| Element | Detail |
|---|---|
| **Era** | Primordial / mythological — before emperors, ~"Three Sovereigns and Five Emperors" period |
| **Setting** | Ancient Earth, Mount Kunlun (昆仑山), the celestial realm |
| **Primary Characters** | **Nuwa** (女娲) — creator goddess, half-woman half-serpent |
| **Antagonist** | **Gonggong** (共工) — water god, who smashed his head against Mount Buzhou in anger |
| **Supporting** | No other named helpers; Nuwa acts alone |
| **Key Symbols** | Five-colour stones (五色石), turtle legs (鳌足), celestial fire |

### Plot Synopsis (10 pages, primary-school retelling)

1. **The World Before Chaos** — A peaceful world ruled by Nuwa, the creator goddess
2. **The Great Clash** — God Gonggong fights the fire god Zhu Rong and loses; in a rage he rams Mount Buzhou, pillar of the sky
3. **The Sky Cracks Open** — The sky tilts; fire and flood pour through the gap; monsters roam
4. **Nuwa's Heartbreak** — Nuwa sees her people suffering; she must act
5. **Gathering the Five-Colour Stones** — Nuwa climbs Mount Kunlun to collect magical stones of five colours
6. **Melting the Stones** — She melts the stones into glowing molten jewel-liquid
7. **Mending the Sky** — She climbs the tallest mountain and pours the molten stone to seal the crack, colour by colour
8. **Cutting the Turtle's Legs** — The sky tilts, so Nuwa kills a giant turtle and cuts off its legs to prop the sky straight again
9. **The Sky is Restored** — Order returns, fires die down, floods recede, monsters hide
10. **Lessons Left Behind** — A story of courage, love, and fixing what is broken

---

## 2. Directory Structure

```
nuwa-mending-sky/
├── index.html
├── story.json
├── README.md
├── generate_audio.py      ← Edge TTS script
├── generate_images.py     ← Cloudflare FLUX image generation
├── PLAN.md                ← ← ←  THIS FILE
├── css/
│   └── style.css
├── js/
│   └── app.js
├── images/
│   ├── page1.jpg
│   ├── ...
│   └── page10.jpg
├── audio/
│   ├── page1_en.mp3
│   ├── page1_zh.mp3
│   ├── ...
│   └── page10_zh.mp3
└── .gitignore
```

---

## 3. Theme & Visual Direction

### Aesthetic: Classical Chinese Ink Painting (水墨画)

Inspired by: Dunhuang Mogao murals, Song dynasty landscape painting, and Ming woodblock prints.

| Design Token | Value / Description |
|---|---|
| **Background colour** | `#1a1814` — near-black ink |
| **Paper / scroll colour** | `#f4efe6` — aged rice paper |
| **Ink wash** | `#1a1814` → translucent greys via opacity |
| **Vermillion accent** | `#c23b22` — traditional red seal / cinnabar |
| **Gold** | `#c9a227` — celestial gold |
| **Jade green** | `#2d5a47` — mountaintops, Nuwa's robes |
| **Sky blue** | `#3a6b8c` — celestial sky |
| **Display font (Chinese)** | `Ma Shan Zheng` (Google Fonts) — calligraphic brush style |
| **Serif font (Chinese)** | `Noto Serif SC` — for body Chinese text |
| **Body font (English)** | `Crimson Pro` — refined serif |
| **Pinyin font** | `Crimson Pro` italic — lighter weight |

### Ink Painting Visual Motifs
- Floating mist/cloud layers (CSS gradient animations)
- Vertical calligraphic page numbers
- Red seal chop stamp acting as the page indicator
- Subtle xuan-paper texture (SVG noise filter in CSS)
- Brush-stroke dividers
- Fade-in animations like ink bleeding into paper

---

## 4. Story Content — 10 Pages

### Chinese Style Rule
- Hanzi: six-character idiom rhythm kept where natural, but content always appropriate for ages 5–10
- Vocabulary: simple characters, no classical grammar — vernacular retelling for children

---

### Page 1 — The Peaceful World / 世界的开端

**Title**
- EN: `The Peaceful World`
- ZH: `世界的开端`
- Pinyin: `Shì Jiè De Kāi Duān`

**Content**
- EN: *Long, long ago, before any king or queen ruled the land, a goddess named Nuwa walked across the earth. She shaped rivers out of clay, filled the sky with birds, and planted forests where there had been bare sand. Animals became her friends, and human children ran laughing through every valley. It was the most beautiful world anyone had ever seen.*
- ZH: *很久很久以前，还没有国王和女王统治大地的时候，有一位叫女娲的女神走遍了人间。她用泥土造出河流，让鸟儿填满天空，在荒沙上种出森林。动物们成了她的朋友，人类的孩子在每个山谷里欢笑奔跑。那是人们见过的最美丽的世界。*
- Pinyin: *Hěn jiǔ hěn jiǔ yǐ qián, hái méi yǒu guó wáng hé nǚ wáng tǒng zhì dà dì de shí hou, yǒu yī wèi jiào Nüwa de nǚ shén zǒu biàn le rén jiān. Tā yòng ní tǔ zào chū hé liú, ràng niǎo er tián mǎn tiān kōng, zài huāng shā shàng zhòng chū sēn lín. Dòng wù men chéng le tā de péng you, rén lèi de hái zi zài měi gè shān gǔ lǐ huān xiào bēn pǎo. Nà shì rén men jiàn guò de zuì měi lì de shì jiè.*

**Image scene**: Nuwa (graceful goddess in flowing robes) standing on high ground surveying a lush paradise — rivers, birds, children. Golden morning light.

---

### Page 2 — The Great Clash / 共工怒触不周山

**Title**
- EN: `The Great Clash`
- ZH: `共工怒触不周山`
- Pinyin: `Gòng Gōng Nù Chù Bù Zhōu Shān`

**Content**
- EN: *But far below the clouds, two great gods fought a terrible battle. The fire god Zhu Rong clashed with the water god Gonggong. When Gonggong was defeated, he grew so angry that he charged at the great mountain Buzhou — the mighty pillar holding up the sky — and smashed his head against it with all his might!*
- ZH: *但是在云层下面，两位大神打了一场可怕的大战。火神祝融与水神共工发生了激战。共工被打败后，恼羞成怒，一头撞向不周山——那支撑天空的高大柱子——用尽全力撞了上去！*
- Pinyin: *Dàn shì zài yún céng xià miàn, liǎng wèi dà shén dǎ le yī chǎng kě pà de dà zhàn. Huǒ shén Zhù Róng yǔ shuǐ shén Gòng Gōng fā shēng le jī zhàn. Gòng Gōng bèi dǎ bài hòu, nǎo xiū chéng nù, yī tóu zhuàng xiàng Bù Zhōu Shān — nà zhī chēng tiān kōng de gāo dà zhù zi — yòng jìn quán lì zhuàng le shàng qù!*

**Image scene**: Two giants clashing — fire bursting from one, water surging from the other. Mount Buzhou standing between them, symbolic. Dynamic brushwork.

---

### Page 3 — The Sky Cracks / 天崩地裂

**Title**
- EN: `The Sky Cracks`
- ZH: `天崩地裂`
- Pinyin: `Tiān Bēng Dì Liè`

**Content**
- EN: *CRASH! The pillar shattered. The sky tilted to one side. Stars fell like rain, rivers burst their banks, and terrible fire burst through the crack in the clouds. Wild monsters roamed where friendly animals had been. The beautiful world was breaking apart — and the people had nowhere to hide.*
- ZH: *轰隆！柱子碎了，天空向一边倾斜。星星像雨点一样落下，河流冲垮了堤岸，可怕的大火从云层的裂缝中喷涌而出。凶猛的野兽出没了。那个美丽的世界正在分崩离析——而人们无处藏身。*
- Pinyin: *Hōng lōng! Zhù zi suì le, tiān kōng xiàng yī biān qīng xié. Xīng xing xiàng yǔ diǎn yī yàng luò xià, hé liú chōng kuǎ le dī àn, kě pà de dà huǒ cóng yún céng de liè fèng zhōng pēn yǒng ér chū. Xiōng měng de yě shòu chū mò le. Nà gè měi lì de shì jiè zhèng zài fēn bēng lí xī — ér rén men wú chù cáng shēn.*

**Image scene**: Cracked sky tilting, fire and water pouring from the tear, falling stars. Dramatic chiaroscuro in ink wash. People running in fear below.

---

### Page 4 — Nuwa's Heartbreak / 女娲心痛

**Title**
- EN: `Nuwa's Heartbreak`
- ZH: `女娲心痛`
- Pinyin: `Nǚ Wā Xīn Tòng`

**Content**
- EN: *High on Mount Kunlun, Nuwa looked down at the suffering world. Her heart ached for every child crying, every river overflowing, every bird without a home. Her eyes filled with tears, but then they hardened with determination. "I will fix this," she said softly. "I will mend the sky."*
- ZH: *在昆仑山的高处，女娲向下看着受苦的世界。她为每一个哭泣的孩子、每一条泛滥的河流、每一只无家可归的鸟儿而心痛。她的眼眶里充满了泪水，但随后目光变得坚定。“我要修复这一切，”她轻声说，“我要补天。”*
- Pinyin: *Zài Kūn Lún Shān de gāo chù, Nüwa xiàng xià kàn zhe shòu kǔ de shì jiè. Tā wèi měi yī gè kū qì de hái zi, měi yī tiáo fàn làn de hé liú, měi yī zhī wú jiā kě guī de niǎo er ér xīn tòng. Tā de yǎn kuàng lǐ chōng mǎn le lèi shuǐ, dàn suí hòu mù guāng biàn de jiān dìng. “Wǒ yào xiū fù zhè yī qiè,” tā qīng shēng shuō, “wǒ yào bǔ tiān.”*

**Image scene**: Nuwa turning from the horizon, face showing sadness transforming into resolve. Flowing robes suggest wind and movement. Brushwork is softer here — showing emotion.

---

### Page 5 — The Climb to Kunlun / 登上昆仑山

**Title**
- EN: `The Climb to Kunlun`
- ZH: `登上昆仑山`
- Pinyin: `Dēng Shàng Kūn Lún Shān`

**Content**
- EN: *Nuwa climbed the tallest mountain in all the world — Mount Kunlun. The wind howled around her and the path was steep, but she did not stop. At the summit she found what she needed: five brilliant glowing stones, each a different colour — red like the sun, blue like the sea, yellow like wheat, green like jade, and white like snow.*
- ZH: *女娲爬上了全世界最高的山——昆仑山。风在她身边呼啸，道路陡峭难行，但她没有停留。在山顶，她找到了需要的东西：五块闪闪发光的神奇石头，每一块颜色不同——红色的像太阳，蓝色的像大海，黄色的像麦田，绿色的像翡翠，白色的像雪花。*
- Pinyin: *Nüwa pá shàng le quán shì jiè zuì gāo de shān — Kūn Lún Shān. Fēng zài tā shēn biān hū xiào, dào lù dǒu qiào nán xíng, dàn tā méi yǒu tíng liú. Zài shān dǐng, tā zhǎo dào le xū yào de dōng xī: wǔ kuài shǎn shǎn fā guāng de shén qí shí tou, měi yī kuài yán sè bù tóng — hóng sè de xiàng tài yáng, lán sè de xiàng dà hǎi, huáng sè de xiàng mài tián, lǜ sè de xiàng fěi cuì, bái sè de xiàng xuě huā.*

**Image scene**: Nuwa on a windswept peak, reaching toward five radiant orbs of coloured stone. Mountain rendered in Song dynasty style — sharp peak, mist at base.

---

### Page 6 — Melting the Magic Stones / 熔炼五色石

**Title**
- EN: `Melting the Magic Stones`
- ZH: `熔炼五色石`
- Pinyin: `Róng Liàn Wǔ Sè Shí`

**Content**
- EN: *Back at her forge, Nuwa worked without rest. She heated the five stones until they glowed like molten stars. The heat was fierce — brighter than a hundred suns — but Nuwa held her ground. As the stones melted, a beautiful jewel-liquid formed, pulsing with the colours of dawn and dusk. Now she was ready.*
- ZH: *回到熔炉旁，女娲一刻不停。她把五块石头加热到像熔化的星星一样闪耀。温度高得惊人——比一百个太阳还亮——但女娲坚持着。石头融化后，形成了一种美丽的宝石般的液体，闪耀着黎明和黄昏的色彩。现在她准备好了。*
- Pinyin: *Huí dào róng lú páng, Nüwa yī kè bù tíng. Tā bǎ wǔ kuài shí tou jiā rè dào xiàng róng huà de xīng xing yī yàng shǎn yào. Wēn dù gāo de jīng rén — bǐ yī bǎi gè tài yáng hái liàng — dàn Nüwa jiān chí zhe. Shí tou róng huà hòu, xíng chéng le yī zhǒng měi lì de bǎo shí bān de yè tǐ, shǎn yào zhe lí míng hé huáng hūn de sè cǎi. Xiàn zài tā zhǔn bèi hǎo le.*

**Image scene**: Nuwa at a furnace/cauldron, five coloured stones glowing above. Flames rendered with expressive ink wash. Alchemical feeling — meditative and powerful.

---

### Page 7 — Mending the Sky / 炼石补天

**Title**
- EN: `Mending the Sky`
- ZH: `炼石补天`
- Pinyin: `Liàn Shí Bǔ Tiān`

**Content**
- EN: *Nuwa flew to the place where the sky was broken. She poured the molten stone over the crack, spreading it with a long paddle. Red, blue, yellow, green, white — each colour sealed a part of the wound. The people below watched in wonder as the sky slowly became whole again. The stars stopped falling. Fire cooled to sleep. Water found its riverbeds once more.*
- ZH: *女娲飞到天空破裂的地方。她用长桨把宝石般的液体浇在裂缝上，一点一点涂抹。红色、蓝色、黄色、绿色、白色——每一种颜色都封补了伤口的一部分。下面的人们惊奇地看着天空慢慢恢复如初。星星不再落下。大火安静了下来。河水重新找到了河道。*
- Pinyin: *Nüwa fēi dào tiān kōng pò liè de dì fāng. Tā yòng cháng jiǎng bǎ bǎo shí bān de yè tǐ jiāo zài liè fèng shàng, yī diǎn yī diǎn tú mǒ. Hóng sè, lán sè, huáng sè, lǜ sè, bái sè — měi yī zhǒng yán sè dōu fēng bǔ le shāng kǒu de yī bù fēn. Xià miàn de rén men jīng qí de kàn zhe tiān kōng màn màn huī fù rú chū. Xīng xing bù zài luò xià. Dà huǒ ān jìng le xià lái. Hé shuǐ chóng xīn zhǎo dào le hé dào.*

**Image scene**: Nuwa flying among the clouds at the sky's edge, reaching toward a glowing crack in the heavens, holding a paddle. The crack radiates coloured light against a dark sky. Dramatic vertical composition.

---

### Page 8 — The Turtle's Legs / 巨龟四足撑天

**Title**
- EN: `The Turtle's Legs`
- ZH: `巨龟四足撑天`
- Pinyin: `Jù Guī Sì Zú Chēng Tiān`

**Content**
- EN: *But the sky still tilted — the pillar was gone and nothing could prop it straight again. Nuwa searched far and wide until she found a great turtle swimming in the eastern sea. With a heavy heart, she asked the turtle for a great gift. The turtle understood. Nuwa cut apart its four mighty legs and placed them at the four corners of the sky — north, south, east, and west. The world stood true once more.*
- ZH: *但是天空仍然倾斜——支撑柱子已经碎了，没有什么能把它扶正。女娲四处寻找，终于在东方的海里找到了一只巨大的龟。她怀着沉重的心情，请求巨龟给予一个重大的帮助。巨龟明白了。女娲斩下它四条强壮的腿，把它们安放在天空的四方——北、南、东、西。世界再次恢复了平稳。*
- Pinyin: *Dàn shì tiān kōng réng rán qīng xié — zhī chēng zhù zi yǐ jīng suì le, méi yǒu shén me néng bǎ tā fǔ zhèng. Nüwa sì chù xún zhǎo, zhōng yú zài dōng fāng de hǎi lǐ zhǎo dào le yī zhī jù dà de guī. Tā huái zhe chén zhòng de xīn qíng, qǐng qiú jù guī jǐ yǔ yī gè zhòng dà de bāng zhù. Jù guī míng bai le. Nüwa zhǎn xià tā sì tiáo qiáng zhuàng de tuǐ, bǎ tā men ān fàng zài tiān kōng de sì fāng — běi, nán, dōng, xī. Shì jiè zài cì huī fù le píng wěn.*

**Image scene**: A great turtle in a calm sea, Nuwa bowing in gratitude. Then simultaneously — four turtle legs planted at the four corners of the world, sky stabilised. Show both in composition.

---

### Page 9 — Order Restored / 天地恢复

**Title**
- EN: `Order Restored`
- ZH: `天地恢复`
- Pinyin: `Tiān Dì Huī Fù`

**Content**
- EN: *At last the sky was straight again. Fire cooled into warm sunlight. Floodwaters slowed into gentle rivers. The monsters that had been lurking in the chaos crept back into hiding. And best of all — the people came out of their caves, holding hands, laughing and dancing. Nuwa smiled through her tears. Her world was safe again.*
- ZH: *终于，天空恢复了水平。大火化作了温暖的阳光。洪水变成了缓缓流淌的河流。躲在混乱中的野兽重新藏匿起来。最重要的是——人们走出洞穴，手拉着手，欢歌笑语地跳舞。女娲含泪微笑。她的世界又安全了。*
- Pinyin: *Zhōng yú, tiān kōng huī fù le shuǐ píng. Dà huǒ huà zuò le wēn nuǎn de yáng guāng. Hóng shuǐ biàn chéng le huǎn huǎn liú tǎng de hé liú. Duǒ zài hùn luàn zhōng de yě shòu chóng xīn cáng nì qǐ lái. Zuì zhòng yào de shì — rén men zǒu chū dòng xué, shǒu lā zhe shǒu, huān gē xiào yǔ de tiào wǔ. Nüwa hán lèi wēi xiào. Tā de shì jiè yòu ān quán le.*

**Image scene**: Bright, peaceful landscape. People celebrating, children playing. Warm golden sunlight. Rivers flowing calmly. Nuwa watching from a distance, small figure, gentle smile.

---

### Page 10 — The Legacy of Nuwa / 女娲的遗产

**Title**
- EN: `The Legacy of Nuwa`
- ZH: `女娲的遗产`
- Pinyin: `Nǚ Wā De Yí Chǎn`

**Content**
- EN: *And so the world was saved by the love of one brave goddess. Every time a rainbow appears in the sky after rain, children say it is the five colours of Nuwa's magic stones, still glowing. And whenever someone fixes what is broken, they carry a little piece of Nuwa's courage in their hearts. For the greatest magic of all is not in stones or stars — it is in the love that dares to heal.*
- ZH: *就这样，一位勇敢的女神用她的爱拯救了世界。每当雨后天空出现彩虹，孩子们都说那是女娲五色石的光芒，至今仍在闪耀。每当有人修复破损的东西，他们的心里就带着一份女娲的勇气。因为最伟大的魔法不在石头或星星之中——而在于敢于治愈的爱。*
- Pinyin: *Jiù zhè yàng, yī wèi yǒng gǎn de nǚ shén yòng tā de ài zhěng jiù le shì jiè. Měi dāng yǔ hòu tiān kōng chū xiàn cǎi hóng, hái zi men dōu shuō nà shì Nüwa wǔ sè shí de guāng máng, zhì jīn réng zài shǎn yào. Měi dāng yǒu rén xiū fù pò sǔn de dōng xī, tā men de xīn lǐ jiù dài zhe yī fèn Nüwa de yǒng qì. Yīn wèi zuì wěi dà de mó fǎ bù zài shí tou huò xīng xīng zhī zhōng — ér zài yú gǎn yú zhì yù de ài.*

**Image scene**: Nuwa looking thoughtful as a rainbow spans the sky behind her. The five colours are visible. Children in the foreground pointing up, looking up in wonder. Ink wash with touches of colour.

---

## 5. story.json Structure

```
{
  "title": {
    "en": "Nuwa Mending the Sky",
    "zh": "女娲补天",
    "pinyin": "Nǚ Wā Bǔ Tiān"
  },
  "pages": [
    {
      "id": 1,
      "title": {
        "en": "The Peaceful World",
        "zh": "世界的开端",
        "pinyin": "Shì Jiè De Kāi Duān"
      },
      "content": {
        "en": "Long, long ago...",
        "zh": "很久很久以前……",
        "pinyin": "Hěn jiǔ hěn jiǔ yǐ qián……"
      },
      "image": "page1.jpg"
    },
    ...
  ]
}
```

---

## 6. Technology Summary

| Concern | Detail |
|---|---|
| **Framework** | Pure HTML/CSS/JS (no build step) |
| **Audio** | Edge TTS via Python; `zh-CN-XiaoxiaoNeural` (female, `-8%` speed) and `en-US-GuyNeural` (male, `+0%`) |
| **Images** | Cloudflare Workers AI — `@cf/black-forest-labs/flux-1-schnell` |
| **Images prompt style** | `Traditional Chinese ink wash painting, elegant brushstrokes, soft colours, detailed illustration for children's book, {scene description}, masterpiece quality, classical Chinese art style` |
| **Fonts** | `Ma Shan Zheng` (display/Chinese titles) · `Noto Serif SC` (Chinese body) · `Crimson Pro` (English + Pinyin) |
| **Layout** | Full-viewport ink aesthetic; illustration fills background; story scrolls in centre |
| **Responsiveness** | Mobile-first; breakpoints at 480px and 768px |
| **Hosting** | GitHub Pages-ready (`.nojekyll` file included) |

---

## 7. Implementation Steps

### Step 1 — Create Project Skeleton
- Create all directories: `css/`, `js/`, `images/`, `audio/`
- Create `.gitignore` and `.nojekyll`
- Copy `index.html` boilerplate from journey-to-the-west (adapt theme → Nuwa/jade-blue palette instead of Monkey King/vermillion)

### Step 2 — Write story.json
- Insert all 10 pages with EN / ZH / pinyin content

### Step 3 — Implement CSS
- Create `css/style.css`
  - Root variables: Nuwa theme colour palette
  - Paper texture, mist animations, scroll styling
  - Hanzi + Pinyin display logic (ZH mode shows both blocks)
  - Navigation, controls, responsive breakpoints

### Step 4 — Implement JS (app.js)
- Identical pattern to journey-to-the-west: language toggle, audio playback, autoplay, swipe navigation
- One addition: pinyin block rendered **always visible in ZH mode** (as its own `<div>`, separate from Hanzi)
- Keyboard controls (arrow keys, spacebar)

### Step 5 — Generate Audio
```bash
cd nuwa-mending-sky
pip install edge-tts
python generate_audio.py
```
- Produces `pageN_en.mp3` (en-US-GuyNeural, speed +0%) and `pageN_zh.mp3` (zh-CN-XiaoxiaoNeural, speed -8%)

### Step 6 — Generate Images
```bash
cd nuwa-mending-sky
pip install requests
python generate_images.py
```
- Requires `CLOUDFLARE_ID` and `CLOUDFLARE_API_KEY` in `~/.pi/agent/.env`

### Step 7 — Test
- Open `index.html` in browser (or run a local server: `python -m http.server 8000`)
- Verify: EN mode, ZH mode, pinyin block visibility, audio playback, autoplay, swipe/arrow navigation

### Step 8 — Deploy
- Commit to GitHub
- Enable GitHub Pages

---

## 8. File Checklist

| File | Status | Notes |
|---|---|---|
| `story.json` | To create | 10 pages, tri-lingual |
| `index.html` | To create | Adapted from journey-to-the-west |
| `css/style.css` | To create | Nuwa ink-painting theme |
| `js/app.js` | To adapt/modify | Same logic + pinyin block fix |
| `generate_audio.py` | To adapt | Swap voice voices, check file paths |
| `generate_images.py` | To create | New Nuwa-specific scene prompts |
| `README.md` | To create | Overview, credits, usage |
| `PLAN.md` | ← you are here | Planning document |

---

## 9. Risk & Notes

- **Pinyin accuracy**: Characters like 娲 (wā), 颛 (zhuān), 顼 (xū) and Meng Po need careful pinyin — verify against standard Mandarin dictionaries.
- **Edge TTS voice names**: Confirm `zh-CN-XiaoxiaoNeural` is a female voice; replace if needed (alternatives: `zh-CN-XiaoyiNeural`, `zh-CN-YunxiNeural`).
- **Image generation**: 10 FLUX generations at 4-step, 1024×768 takes ~2–3 minutes total. Provide an offline fallback note if API key unavailable.
- **Audio file size**: Each MP3 ~100–200 KB; 20 files = ~2–4 MB — fine for GitHub Pages.

---

*Plan prepared. Ready to begin implementation.*
