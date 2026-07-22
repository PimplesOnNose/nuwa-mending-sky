/**
 * 女娲补天 — Nuwa Mending the Sky
 * "Celestial Tapestry" edition — cosmos on canvas
 */
class StoryApp {
  constructor() {
    this.currentPage = 1;
    this.totalPages = 10;
    this.currentLang = 'en';
    this.storyData = null;
    this.audio = null;
    this.isPlaying = false;
    this.isAutoPlay = false;
    this.isTransitioning = false;

    this.el = {
      painting:        document.getElementById('storyImage'),
      titleEn:         document.getElementById('storyTitle'),
      titleZhGroup:    document.getElementById('titleZhGroup'),
      titleHanzi:      document.getElementById('storyTitleHanzi'),
      titlePinyin:     document.getElementById('storyTitlePinyin'),
      storyText:       document.getElementById('storyText'),
      pinyinWrap:      document.getElementById('contentPinyinWrap'),
      pinyinBlock:     document.getElementById('storyContentPinyin'),
      pageCurr:        document.getElementById('currentPage'),
      pageTotal:       document.getElementById('totalPages'),
      chapterNum:      document.getElementById('chapterNum'),
      prevBtn:         document.getElementById('prevBtn'),
      nextBtn:         document.getElementById('nextBtn'),
      playBtn:         document.getElementById('playBtn'),
      autoBtn:         document.getElementById('autoBtn'),
      progressFill:    document.getElementById('progressFill'),
      progressTrack:   document.getElementById('progressTrack'),
      paintingLayer:   document.querySelector('.painting-layer'),
      storyPanel:      document.getElementById('storyPanel'),
      iconPlay:        document.querySelector('.icon-play'),
      iconPause:       document.querySelector('.icon-pause'),
      langEn:          document.getElementById('langEn'),
      langZh:          document.getElementById('langZh'),
    };

    this.init();
  }

  async init() {
    await this.loadStory();
    this.setupAudio();
    this.bindEvents();
    this.updateView();
  }

  async loadStory() {
    try {
      const res = await fetch('story.json');
      this.storyData = await res.json();
      this.totalPages = this.storyData.pages.length;
      this.el.pageTotal.textContent = this.toChineseNum(this.totalPages);
    } catch (err) {
      console.error('Failed to load story.json:', err);
    }
  }

  // Arabic numeral → Chinese character (壹 贰 叁 … 拾)
  toChineseNum(n) {
    const chars = ['零','壹','贰','叁','肆','伍','陆','柒','捌','玖','拾'];
    return n <= 10 ? chars[n] : String(n);
  }

  /* ── Audio ─────────────────────────────────────────────── */
  setupAudio() {
    this.audio = new Audio();
    this.audio.addEventListener('timeupdate', () => this.onTimeUpdate());
    this.audio.addEventListener('ended',     () => this.onAudioEnd());
  }

  /* ── Events ────────────────────────────────────────────── */
  bindEvents() {
    this.el.prevBtn.addEventListener('click',  () => this.prev());
    this.el.nextBtn.addEventListener('click',  () => this.next());

    // Edge-zone click: within 36px of screen edge → navigate
    document.addEventListener('click', (e) => {
      const w = window.innerWidth;
      if (e.clientX < 36)            this.prev();
      else if (e.clientX > w - 36)   this.next();
    });

    this.el.langEn.addEventListener('click', () => this.setLang('en'));
    this.el.langZh.addEventListener('click', () => this.setLang('zh'));

    this.el.playBtn.addEventListener('click', () => this.togglePlay());
    this.el.autoBtn.addEventListener('click', () => this.toggleAuto());

    this.el.progressTrack.addEventListener('click', (e) => {
      const r = e.currentTarget.getBoundingClientRect();
      if (this.audio.duration) this.audio.currentTime = ((e.clientX - r.left) / r.width) * this.audio.duration;
    });

    document.addEventListener('keydown', (e) => this.onKey(e));
    this.setupSwipe();
  }

  setupSwipe() {
    let sx = 0, sy = 0;
    this.el.storyPanel.addEventListener('touchstart', (e) => {
      sx = e.touches[0].clientX;
      sy = e.touches[0].clientY;
    }, { passive: true });
    this.el.storyPanel.addEventListener('touchend', (e) => {
      const dx = e.changedTouches[0].clientX - sx;
      const dy = e.changedTouches[0].clientY - sy;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) dx > 0 ? this.prev() : this.next();
    }, { passive: true });
  }

  onKey(e) {
    if (['ArrowLeft','ArrowUp'].includes(e.key))   { e.preventDefault(); this.prev(); }
    if (['ArrowRight','ArrowDown'].includes(e.key)) { e.preventDefault(); this.next(); }
    if (e.key === ' ')                              { e.preventDefault(); this.togglePlay(); }
  }

  /* ── Navigation ────────────────────────────────────────── */
  prev() { if (this.currentPage > 1 && !this.isTransitioning) this.goTo(this.currentPage - 1); }
  next() { if (this.currentPage < this.totalPages && !this.isTransitioning) this.goTo(this.currentPage + 1); }

  goTo(page) {
    if (page === this.currentPage || this.isTransitioning) return;
    this.isTransitioning = true;
    this.stopAudio(false);

    this.el.storyPanel.classList.add('transitioning');
    this.el.paintingLayer.classList.add('fading');

    setTimeout(() => {
      this.currentPage = page;
      this.updateView();
      setTimeout(() => {
        this.el.storyPanel.classList.remove('transitioning');
        this.el.paintingLayer.classList.remove('fading');
        this.isTransitioning = false;
      }, 120);
    }, 320);
  }

  /* ── View Update ───────────────────────────────────────── */
  updateView() {
    if (!this.storyData) return;
    const page = this.storyData.pages[this.currentPage - 1];

    // Painting
    this.el.painting.src = `images/${page.image}`;

    // Page number (Chinese numeral)
    this.el.pageCurr.textContent = this.toChineseNum(this.currentPage);

    // Chapter label
    const roman = ['I','II','III','IV','V','VI','VII','VIII','IX','X'];
    this.el.chapterNum.textContent = `Chapter ${roman[this.currentPage - 1]}`;

    // Buttons
    this.el.prevBtn.disabled = this.currentPage === 1;
    this.el.nextBtn.disabled = this.currentPage === this.totalPages;

    // ── Language ────────────────────────────────────────────
    const zh = this.currentLang === 'zh';

    if (zh) {
      // Chinese: show HANZI + PINYIN title group, hide English title
      this.el.titleEn.style.display   = 'none';
      this.el.titleZhGroup.style.display = 'block';
      this.el.titleHanzi.textContent     = page.title.zh;
      this.el.titlePinyin.textContent    = page.title.pinyin;

      // Pinyin block (full paragraph — separate block)
      this.el.pinyinWrap.style.display    = 'block';
      this.el.pinyinBlock.textContent     = page.content.pinyin;

      // Body: Hanzi
      this.el.storyText.textContent       = page.content.zh;
      this.el.storyText.style.fontFamily  = 'var(--font-cn)';
    } else {
      // English: show English title, hide zh group + pinyin block
      this.el.titleEn.style.display      = 'block';
      this.el.titleZhGroup.style.display = 'none';
      this.el.titleEn.textContent        = page.title.en;

      this.el.pinyinWrap.style.display   = 'none';
      this.el.storyText.textContent      = page.content.en;
      this.el.storyText.style.fontFamily = 'var(--font-body)';
    }

    this.loadAudio();
    this.el.progressFill.style.width = '0%';
    this.el.storyPanel.scrollTop = 0;

    // Re-trigger reveal animation
    this.el.storyText.style.animation = 'none';
    void this.el.storyText.offsetWidth;
    this.el.storyText.style.animation = '';
  }

  /* ── Language ──────────────────────────────────────────── */
  setLang(lang) {
    if (lang === this.currentLang) return;
    this.currentLang = lang;
    this.el.langEn.classList.toggle('active', lang === 'en');
    this.el.langZh.classList.toggle('active', lang === 'zh');
    this.updateView();
  }

  /* ── Audio ─────────────────────────────────────────────── */
  loadAudio() {
    this.audio.src = `audio/page${this.currentPage}_${this.currentLang}.mp3`;
    this.audio.load();
  }

  togglePlay() { this.isPlaying ? this.stopAudio() : this.playAudio(); }

  async playAudio() {
    try {
      await this.audio.play();
      this.isPlaying = true;
      this.updatePlayIcon();
    } catch (e) { console.warn('Playback failed', e); }
  }

  stopAudio(reset = true) {
    this.audio.pause();
    this.audio.currentTime = 0;
    this.isPlaying = false;
    this.updatePlayIcon();
    if (reset) this.el.progressFill.style.width = '0%';
  }

  updatePlayIcon() {
    this.el.iconPlay.style.display  = this.isPlaying ? 'none'  : 'block';
    this.el.iconPause.style.display = this.isPlaying ? 'block' : 'none';
  }

  toggleAuto() {
    this.isAutoPlay = !this.isAutoPlay;
    this.el.autoBtn.classList.toggle('active', this.isAutoPlay);
  }

  onTimeUpdate() {
    if (!this.audio.duration) return;
    this.el.progressFill.style.width = `${(this.audio.currentTime / this.audio.duration) * 100}%`;
  }

  onAudioEnd() {
    this.isPlaying = false;
    this.updatePlayIcon();
    if (this.isAutoPlay && this.currentPage < this.totalPages) {
      setTimeout(() => {
        this.next();
        setTimeout(() => this.playAudio(), 650);
      }, 900);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => new StoryApp());
