/**
 * ============================================================================
 * ROMANTIC LOVE LETTERS & CUTE TEDDY SANCTUARY - SCRIPT.JS
 * ============================================================================
 */

// 1. DEEP, HEARTFELT LOVE LETTERS DATA (Soulful Hindi & Poetic English)
const LETTERS_DATA = [
  {
    title: "Pehli Nazar Aur Tum • The Spark That Changed Everything",
    subtitle: "The day you gently walked into my quiet world...",
    content: `
      <p>Tumhein yaad hai jab hum pehli baar mile the? Us waqt mujhe pata nahi tha ki meri zindagi ka sabse khoobsurat safar shuru ho raha hai. Tumhare aane se pehle meri duniya aam thi, par jab se tum aayi ho, har lamha ek pyari si ghazal jaisa lagne laga hai.</p>
      
      <div class="poetry-block">
        "Na jaane kaun si aisi dua qubool hui meri,<br>
        Ki khuda ne itni bholi, itni pyari si jaan meri kismat mein likh di."
      </div>
      
      <p>Your smile was the first thing that stole my breath, and your gentle soul was what made my heart realize—<span class="highlight-word">I never want to look at another world again</span>. Tum meri zindagi ki wo dhoop ho jo sardiyon ki subah mein sukoon de jaati hai.</p>
    `
  },
  {
    title: "Teri Choti Choti Baatein • The Little Things I Adore",
    subtitle: "Every small habit of yours that makes me fall in love again...",
    content: `
      <p>Log kehte hain pyaar badi badi baaton mein hota hai, par sach kahoon? Mujhe tumhari sabse choti choti baaton se sabse zyada pyaar hai. Jab tum bina baat ke chidhti ho aur phir khud hi has deti ho, jab tum kisi baat par excited hokar bacchon ki tarah bolti chali jaati ho...</p>
      
      <div class="poetry-block">
        "Tumhara wo gussa bhi kitna pyara hota hai,<br>
        Jisme har lafz mein sirf mera hi zikr hota hai."
      </div>
      
      <p>The way you adjust your hair, the cute face you make when you are sleepy, and the tenderness in your voice when you say <span class="highlight-word">"Apna khayal rakhna..."</span>—these are the irreplaceable treasures of my life. You make ordinary moments feel like poetry.</p>
    `
  },
  {
    title: "Mera Sukoon, Meri Jaan • My Safe Haven In This World",
    subtitle: "In this loud, chaotic world, you are my quiet peace...",
    content: `
      <p>Puri duniya chahe kitni bhi bhaag-daud aur mushkilon se bhari ho, din ke aakhiri pahr mein jab main tumhari aawaaz sunta hoon, toh aisa lagta hai jaise main apne ghar aa gaya hoon. You are my safe place, my comfort person, and the sanctuary where I can take off all my armor.</p>
      
      <div class="poetry-block">
        "Thak haar ke jab bhi sar jhukaya maine,<br>
        Tumhari yaadon ne aake gale se laga liya."
      </div>
      
      <p>Jab tum mere saath hoti ho, toh mujhe kisi cheez ka darr nahi lagta. Tumhari ek jhappi, tumhara ek 'main hoon na' meri har pareshani ko mita deta hai. Meri rooh ko agar koi samajhta hai, toh wo sirf aur sirf <span class="highlight-word">tum ho</span>.</p>
    `
  },
  {
    title: "Kyun Sirf Tum? • Why My Soul Chose You",
    subtitle: "Out of 8 billion people, why it was always you...",
    content: `
      <p>Kabhi kabhi main sochta hoon ki aakhir kyun tumhara hi ehsaas mere dil par itna gehra chha gaya? Shayad isliye kyunki tumne mujhe sirf pasand nahi kiya, tumne meri kamzoriyon ko bhi utne hi pyaar se apnaya. You saw the broken pieces of my heart and made them whole again.</p>
      
      <div class="poetry-block">
        "Hazaron chehre the iss jahan mein dekhne ke liye,<br>
        Par meri aankhon ne ibadat ki tarah sirf tumhein dekha."
      </div>
      
      <p>Tum sirf mera pyaar nahi ho, tum meri aadat, meri zaroorat, aur meri sabse pyari khwahish ho. If I lived a thousand lifetimes, <span class="highlight-word">in every single one of them, I would still look for you, find you, and love you</span> with all my soul.</p>
    `
  },
  {
    title: "Ek Sacchi Baat, Dil Se • Without Any Ego, Just Love",
    subtitle: "Kyunki tumse kuch chhupana nahi chahta, bas apne dil ki sachhayi rakh raha hoon...",
    content: `
      <p>Haan, main maanta hoon mujhse galtiyan hui hain... cheezein kharab hui hain. Kai baar mujhe laga ki jo main kar raha hoon wo bilkul sahi hai, par shayad main galat tha. Wo sab kisi bure irade se nahi hua, balki sirf isliye kyunki main tum par apna haq samajhta tha, tumhein itna apna maanta tha ki bina soche samjhe cheezein kar baitha.</p>
      
      <div class="poetry-block">
        "Galti meri thi ki maine apne haq ko jatane mein jaldbaazi ki,<br>
        Par mera irada kabhi tumhara dil dukhane ka nahi tha."
      </div>
      
      <p>Yeh koi behes ya ladai ka point nahi hai, na hi main koi safai de raha hoon... bas bohot softly aur dil se keh raha hoon. Tumhari nazar mein shayad main galat tha, par meri taraf se sirf be-inteha apnapan tha. Main hamesha tumhein apne paas rakhna chahta hoon. Future kya hoga, aage kya likha hai main nahi jaanta... par at least jo pyaar maine tumhare saath mehsoos kiya hai, use main hamesha apne dil mein sanjo kar rakhna chahta hoon.</p>
      
      <p>Main tumse yeh expect nahi karta ki tum mere liye kya karogi ya kya nahi. Bas tumhari <span class="highlight-word">honesty aur transparency</span> chahta hoon. Pata nahi tum iss baat ko kaise relate karogi, shayad thoda gussa bhi ho jao... par please samjho, yeh koi shart nahi hai, yeh bas ek dil ka waada aur ek sacchi maang hai jo main tumse maang raha hoon.</p>
    `
  },
  {
    title: "Mere Dil Ke Sacche Waade • Promises From My Core",
    subtitle: "Words etched in stone, for today, tomorrow, and a lifetime...",
    content: `
      <p>Main koi taare tod kar laane ka jhootha daawa nahi karunga, par main dil par haath rakh kar yeh sacche waade zaroor karta hoon:</p>
      
      <div class="poetry-block">
        • Jab tum udaas hogi, main tumhein hasaane ke liye bacchon jaisi shararatein karunga.<br>
        • Jab tum gusse mein hogi, main chupchaap tumhara haath pakad kar sununga.<br>
        • Chahe waqt kaisa bhi mod le, main tumhein kabhi akela mehsoos nahi hone dunga.<br>
        • Aur jab hum boode ho jayenge, tab bhi main tumhein utni hi mohabbat se dekhunga jaise aaj dekhta hoon.
      </div>
      
      <p>I promise to cherish you, respect you, protect your soft smile, and be your biggest cheerleader through every storm and every sunshine. <span class="highlight-word">Hamesha tumhara ban kar rahunga.</span></p>
    `
  },
  {
    title: "Mera Hamesha • To Eternity & Beyond",
    subtitle: "The final seal of my forever love for you...",
    content: `
      <p>Yeh letters shayad yahan khatam ho rahe hain, par mera pyaar tumhare liye har naye din ke saath badhta hi chala jayega. Har saans mein, har dua mein, aur meri taqdeer ke har panne par sirf tumhara naam likha hai.</p>
      
      <div class="poetry-block">
        "Meri har subah tumhare khayal se ho,<br>
        Meri har shaam tumhari muskaan par khatam ho,<br>
        Bas itni si khwahish hai meri zindagi ki,<br>
        Ki meri aakhiri saans tak mere haathon mein tumhara haath ho."
      </div>
      
      <p style="text-align: center; font-size: 1.85rem; margin-top: 25px; color: var(--color-primary-dark);">
        💖 Will you hold my hand through all lifetimes? 💖
      </p>
      <div style="text-align: center; margin-top: 15px;">
        <button class="pill-action-btn" id="say-yes-btn" style="max-width: 280px; margin: 0 auto;">
          ❤️ YES, Forever and Always! ❤️
        </button>
      </div>
    `
  }
];

// 2. REASONS WHY I LOVE YOU (JAR DATA)
const REASONS_LIST = [
  "The way your eyes twinkle whenever you laugh with your whole heart.",
  "How you care about small things and check if I've eaten food.",
  "Your soft cute voice notes that instantly melt away all my stress.",
  "The innocent way you pout when you want something cute.",
  "How safe and peaceful my heart feels whenever you are near me.",
  "The sweet little nicknames you whisper just for me.",
  "Because you understand my silence better than anyone understands my words.",
  "The way your warm hand fits so perfectly inside mine.",
  "How you remember tiny details about me that even I forget.",
  "Your pure heart that cares so deeply about the people you love.",
  "The cute funny faces you make when you are trying to cheer me up.",
  "Because in a world full of strangers, you felt like home from day one.",
  "The comforting smell of your hair and the warmth of your hug.",
  "How you support my dreams and believe in me even when I doubt myself.",
  "Because your smile is the sweetest notification my heart ever receives.",
  "The way you get sleepy and talk in the most adorable baby voice.",
  "Because you are not just my love, you are my best friend forever.",
  "How deeply you love, with zero pretenses and pure sincerity.",
  "Because every love song on my playlist finally makes sense because of you."
];

// 3. WHISPERS & QUOTES FOR TEDDY
const TEDDY_WHISPERS = [
  "Humesha mere paas rehna, mere dil ka sukoon ban kar... 🧸",
  "Pata hai? Mera favorite notification tumhara naam hai! 💕",
  "Main duniya se lad sakta hoon, bas tumhara saath chahiye... ✨",
  "Tumhari ek muskaan meri poori din ki thakaan mita deti hai... 🥰",
  "Kitni pyari ho tum, nazar na lage meri jaan ko! 🧿",
  "If loving you was a job, I would be the most hardworking person alive! 💖"
];

// 4. STATE MANAGEMENT
let currentLetterIndex = 0;
let isPaperFolded = false;
let userSettings = {
  herName: "My Love",
  hisName: "Yours Forever & Always",
  specialDate: "FOREVER & ALWAYS"
};

// 5. WEB AUDIO SYNTHESIZER (MUSIC BOX & SWEET CHIMES)
class RomanticAudio {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.melodyInterval = null;
    this.noteIndex = 0;

    // Sweet romantic melody notes (frequencies in Hz: C5, D5, E5, G5, A5, C6...)
    this.melody = [
      523.25, 587.33, 659.25, 783.99, 880.00, 783.99, 659.25, 587.33,
      523.25, 659.25, 783.99, 880.00, 1046.50, 880.00, 783.99, 659.25,
      587.33, 659.25, 783.99, 659.25, 587.33, 523.25, 440.00, 523.25
    ];
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Soft chime note like a music box
  playChime(freq = 659.25, duration = 1.2, volume = 0.15) {
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

    // Warm envelope
    gain.gain.setValueAtTime(0, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(volume, this.ctx.currentTime + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + duration);
  }

  // Play paper rustle or warm pop sound
  playSoftPop() {
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(400, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(120, this.ctx.currentTime + 0.15);

    gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.15);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.16);
  }

  // Start background romantic music box loop
  toggleMusic(onUpdate) {
    this.init();
    if (this.isPlaying) {
      clearInterval(this.melodyInterval);
      this.isPlaying = false;
      if (onUpdate) onUpdate(false);
    } else {
      this.isPlaying = true;
      if (onUpdate) onUpdate(true);
      
      this.noteIndex = 0;
      this.melodyInterval = setInterval(() => {
        const freq = this.melody[this.noteIndex % this.melody.length];
        this.playChime(freq, 1.4, 0.12);
        
        // Occasional soft harmony
        if (this.noteIndex % 3 === 0) {
          setTimeout(() => {
            this.playChime(freq * 0.75, 1.5, 0.08);
          }, 120);
        }
        
        this.noteIndex++;
      }, 550);
    }
  }
}

const audioPlayer = new RomanticAudio();

// 6. CANVAS PARTICLES (FLOATING HEARTS & GOLD SPARKLES)
function initCanvasParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const heartShapes = ['❤️', '💖', '🌸', '✨', '💕'];

  class Particle {
    constructor(x, y, isBurst = false) {
      this.x = x || Math.random() * width;
      this.y = y || (isBurst ? y : height + Math.random() * 40);
      this.shape = heartShapes[Math.floor(Math.random() * heartShapes.length)];
      this.size = isBurst ? Math.random() * 24 + 14 : Math.random() * 18 + 10;
      this.speedY = isBurst ? (Math.random() - 0.7) * 8 : -(Math.random() * 1.5 + 0.6);
      this.speedX = isBurst ? (Math.random() - 0.5) * 8 : Math.sin(Math.random() * Math.PI) * 0.8;
      this.opacity = 1;
      this.fade = isBurst ? Math.random() * 0.015 + 0.01 : Math.random() * 0.003 + 0.002;
      this.rotation = Math.random() * 360;
      this.rotSpeed = (Math.random() - 0.5) * 2;
    }

    update() {
      this.y += this.speedY;
      this.x += this.speedX;
      this.rotation += this.rotSpeed;
      this.opacity -= this.fade;
    }

    draw() {
      ctx.save();
      ctx.globalAlpha = Math.max(0, this.opacity);
      ctx.translate(this.x, this.y);
      ctx.rotate((this.rotation * Math.PI) / 180);
      ctx.font = `${this.size}px serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(this.shape, 0, 0);
      ctx.restore();
    }
  }

  // Populate floating particles
  for (let i = 0; i < 22; i++) {
    const p = new Particle();
    p.y = Math.random() * height;
    particles.push(p);
  }

  function loop() {
    ctx.clearRect(0, 0, width, height);

    if (particles.length < 25 && Math.random() < 0.3) {
      particles.push(new Particle());
    }

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.update();
      p.draw();
      if (p.opacity <= 0 || p.y < -50) {
        particles.splice(i, 1);
      }
    }
    requestAnimationFrame(loop);
  }

  loop();

  // Burst helper on click / tap
  window.burstHearts = function(x, y, count = 18) {
    for (let i = 0; i < count; i++) {
      particles.push(new Particle(x, y, true));
    }
  };

  // Gentle interaction on pointer move
  window.addEventListener('pointermove', (e) => {
    if (Math.random() < 0.12) {
      particles.push(new Particle(e.clientX, e.clientY + 10, true));
    }
  });
}

// 7. RENDER & LETTER NAVIGATION
function renderLetter(index) {
  const data = LETTERS_DATA[index];
  if (!data) return;

  const parchment = document.getElementById('parchment-paper');
  const titleEl = document.getElementById('letter-title');
  const contentEl = document.getElementById('letter-content');
  const counterText = document.getElementById('letter-counter-text');
  const prevBtn = document.getElementById('prev-letter-btn');
  const nextBtn = document.getElementById('next-letter-btn');
  const tabBtns = document.querySelectorAll('.tab-btn');
  const dots = document.querySelectorAll('.dots-progress .dot');

  // Animation folding transition
  parchment.classList.add('folding');
  audioPlayer.playSoftPop();

  setTimeout(() => {
    parchment.classList.remove('folded');
    const sealText = document.querySelector('#seal-toggle-btn .seal-text');
    const sealIcon = document.querySelector('#seal-toggle-btn .seal-icon');
    if (sealText) sealText.textContent = 'Fold Envelope';
    if (sealIcon) sealIcon.textContent = '✉️';
    isPaperFolded = false;

    titleEl.textContent = data.title;
    contentEl.innerHTML = data.content;
    counterText.textContent = `Letter ${index + 1} of ${LETTERS_DATA.length}`;

    // Update buttons
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === LETTERS_DATA.length - 1;

    // Update tabs active state & scroll active tab into view inside container only
    const tabsContainer = document.querySelector('.letters-tabs-bar');
    tabBtns.forEach((btn, idx) => {
      const isActive = idx === index;
      btn.classList.toggle('active', isActive);
      if (isActive && tabsContainer) {
        const targetScroll = btn.offsetLeft - (tabsContainer.clientWidth / 2) + (btn.clientWidth / 2);
        tabsContainer.scrollTo({ left: targetScroll, behavior: 'smooth' });
      }
    });

    // Update dots active state
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === index);
    });

    // Update personalized names in letter
    updatePersonalizedText();

    // Check for "Say YES" button in Letter 6
    const sayYesBtn = document.getElementById('say-yes-btn');
    if (sayYesBtn) {
      sayYesBtn.addEventListener('click', (e) => {
        triggerYesCelebration(e);
      });
    }

    parchment.classList.remove('folding');
  }, 250);
}

// 8. PERSONALIZATION (LOCAL STORAGE)
function loadUserSettings() {
  const saved = localStorage.getItem('romantic_letters_settings');
  if (saved) {
    try {
      userSettings = { ...userSettings, ...JSON.parse(saved) };
    } catch (err) {
      console.error(err);
    }
  }
  updatePersonalizedText();
}

function saveUserSettings(herName, hisName, specialDate) {
  userSettings.herName = herName || "My Love";
  userSettings.hisName = hisName || "Yours Forever & Always";
  userSettings.specialDate = specialDate || "FOREVER & ALWAYS";

  localStorage.setItem('romantic_letters_settings', JSON.stringify(userSettings));
  updatePersonalizedText();
}

function updatePersonalizedText() {
  const herDisplay = document.getElementById('her-name-display');
  if (herDisplay) herDisplay.textContent = userSettings.herName;

  document.querySelectorAll('.her-name-inline').forEach(el => {
    el.textContent = userSettings.herName;
  });

  const hisDisplay = document.getElementById('his-name-display');
  if (hisDisplay) hisDisplay.textContent = userSettings.hisName;

  const postmarkDate = document.getElementById('postmark-date');
  if (postmarkDate) postmarkDate.textContent = userSettings.specialDate;
}

// 9. CELEBRATION WHEN SHE CLICKS "YES" IN LETTER 6
function triggerYesCelebration(event) {
  const rect = event.target.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;

  // Multiple bursts
  window.burstHearts(x, y, 40);
  setTimeout(() => window.burstHearts(window.innerWidth / 2, window.innerHeight / 2, 60), 300);
  setTimeout(() => window.burstHearts(window.innerWidth / 4, window.innerHeight / 3, 50), 600);
  setTimeout(() => window.burstHearts((window.innerWidth * 3) / 4, window.innerHeight / 3, 50), 900);

  // Play joyous chimes
  audioPlayer.playChime(523.25, 0.8, 0.2);
  setTimeout(() => audioPlayer.playChime(659.25, 0.8, 0.2), 150);
  setTimeout(() => audioPlayer.playChime(783.99, 0.8, 0.2), 300);
  setTimeout(() => audioPlayer.playChime(1046.50, 1.8, 0.25), 450);

  event.target.innerHTML = "💖 YOU ARE MY WHOLE UNIVERSE! 💖";
  event.target.style.background = "linear-gradient(135deg, #00b09b 0%, #96c93d 100%)";

  const teddyWhisper = document.getElementById('teddy-whisper');
  if (teddyWhisper) {
    teddyWhisper.textContent = `YAY! ${userSettings.herName} said YES! I am the happiest person in the world! 🧸💍✨`;
  }
}

// 10. SETUP ALL DOM EVENT LISTENERS
document.addEventListener('DOMContentLoaded', () => {
  // Init Particles
  initCanvasParticles();

  // Load user data
  loadUserSettings();

  // Initial letter render
  renderLetter(0);

  // Synced Music Toggle Buttons (Top Nav Pill & Mobile Floating FAB)
  const musicBtn = document.getElementById('music-toggle-btn');
  const floatingMusicFab = document.getElementById('floating-music-fab');

  function updateMusicUI(isPlaying) {
    if (musicBtn) {
      musicBtn.classList.toggle('playing', isPlaying);
      const icon = musicBtn.querySelector('.btn-icon');
      const text = musicBtn.querySelector('.btn-text');
      if (icon) icon.textContent = isPlaying ? '⏸️' : '🎵';
      if (text) text.textContent = isPlaying ? 'Pause Music Box' : 'Play Romantic Melodies';
    }
    if (floatingMusicFab) {
      floatingMusicFab.classList.toggle('playing', isPlaying);
      const fabIcon = floatingMusicFab.querySelector('.fab-icon');
      if (fabIcon) fabIcon.textContent = isPlaying ? '⏸️' : '🎵';
    }
  }

  function handleToggleMusic() {
    audioPlayer.toggleMusic(updateMusicUI);
  }

  if (musicBtn) musicBtn.addEventListener('click', handleToggleMusic);
  if (floatingMusicFab) floatingMusicFab.addEventListener('click', handleToggleMusic);

  // Mobile Touch Swipe Gestures on Parchment Paper
  const parchmentPaperEl = document.getElementById('parchment-paper');
  let touchStartX = 0;
  let touchStartY = 0;

  if (parchmentPaperEl) {
    parchmentPaperEl.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    parchmentPaperEl.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].screenX;
      const touchEndY = e.changedTouches[0].screenY;
      const diffX = touchEndX - touchStartX;
      const diffY = touchEndY - touchStartY;

      // Detect prominent horizontal swipe
      if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX < 0 && currentLetterIndex < LETTERS_DATA.length - 1) {
          // Swipe Left -> Next Letter
          currentLetterIndex++;
          renderLetter(currentLetterIndex);
        } else if (diffX > 0 && currentLetterIndex > 0) {
          // Swipe Right -> Previous Letter
          currentLetterIndex--;
          renderLetter(currentLetterIndex);
        }
      }
    }, { passive: true });
  }

  // Prev / Next Buttons
  document.getElementById('prev-letter-btn').addEventListener('click', () => {
    if (currentLetterIndex > 0) {
      currentLetterIndex--;
      renderLetter(currentLetterIndex);
    }
  });

  document.getElementById('next-letter-btn').addEventListener('click', () => {
    if (currentLetterIndex < LETTERS_DATA.length - 1) {
      currentLetterIndex++;
      renderLetter(currentLetterIndex);
    }
  });

  // Tab Buttons
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-letter'), 10);
      if (!isNaN(idx) && idx !== currentLetterIndex) {
        currentLetterIndex = idx;
        renderLetter(currentLetterIndex);
      }
    });
  });

  // Seal / Wax Button interaction
  const waxSeal = document.getElementById('wax-seal');
  if (waxSeal) {
    waxSeal.addEventListener('click', (e) => {
      audioPlayer.playChime(880, 0.8, 0.2);
      window.burstHearts(e.clientX, e.clientY, 20);
    });
  }

  // Toggle Paper View / Fold
  const sealToggleBtn = document.getElementById('seal-toggle-btn');
  const parchmentPaper = document.getElementById('parchment-paper');
  
  function setFoldedState(folded) {
    isPaperFolded = folded;
    parchmentPaper.classList.toggle('folded', isPaperFolded);
    const sealText = sealToggleBtn.querySelector('.seal-text');
    const sealIcon = sealToggleBtn.querySelector('.seal-icon');
    if (sealText) sealText.textContent = isPaperFolded ? 'Unfold Letter' : 'Fold Envelope';
    if (sealIcon) sealIcon.textContent = isPaperFolded ? '💌' : '✉️';
  }

  sealToggleBtn.addEventListener('click', () => {
    setFoldedState(!isPaperFolded);
    audioPlayer.playSoftPop();
  });

  // Clicking anywhere on folded envelope unfolds it
  parchmentPaper.addEventListener('click', (e) => {
    if (isPaperFolded) {
      setFoldedState(false);
      audioPlayer.playChime(659.25, 0.8, 0.2);
      window.burstHearts(e.clientX, e.clientY, 20);
    }
  });

  // Reaction Buttons on Teddy Card
  const whisperEl = document.getElementById('teddy-whisper');
  document.querySelectorAll('.reaction-badge').forEach(badge => {
    badge.addEventListener('click', (e) => {
      const type = badge.getAttribute('data-reaction');
      const rect = badge.getBoundingClientRect();
      window.burstHearts(rect.left + rect.width / 2, rect.top, 18);
      audioPlayer.playChime(783.99, 0.6, 0.15);

      if (type === 'kiss') {
        whisperEl.textContent = `A sweet kiss for my cute ${userSettings.herName}! Muah! 😘💋`;
      } else if (type === 'blush') {
        whisperEl.textContent = `Aww, she is blushing so cute right now! Look at those rosy cheeks! 🥰`;
      } else if (type === 'cuddle') {
        whisperEl.textContent = `Sending you the softest, tightest teddy cuddle! You're never alone! 🫂`;
      } else if (type === 'sparkle') {
        whisperEl.textContent = `May your life be as radiant and glowing as these fairy lights! ✨🌸`;
      }
    });
  });

  // Reasons Jar Button
  const openJarBtn = document.getElementById('open-jar-btn');
  const jarNoteDisplay = document.getElementById('jar-note-display');
  const jarNoteText = document.getElementById('jar-note-text');

  openJarBtn.addEventListener('click', (e) => {
    const randomReason = REASONS_LIST[Math.floor(Math.random() * REASONS_LIST.length)];
    jarNoteDisplay.classList.remove('hidden');
    jarNoteText.textContent = `“${randomReason}”`;

    const rect = openJarBtn.getBoundingClientRect();
    window.burstHearts(rect.left + rect.width / 2, rect.top, 15);
    audioPlayer.playChime(880, 0.8, 0.15);
  });

  // Love Slider Interaction
  const loveSlider = document.getElementById('love-slider');
  const loveMeterStatus = document.getElementById('love-meter-status');
  const infiniteBtn = document.getElementById('infinite-btn');

  loveSlider.addEventListener('input', (e) => {
    const val = parseInt(e.target.value, 10);
    if (val < 300) {
      loveMeterStatus.textContent = `${val}% — More than the entire ocean! 🌊`;
    } else if (val < 700) {
      loveMeterStatus.textContent = `${val}% — Higher than the moon and stars! 🌙`;
    } else {
      loveMeterStatus.textContent = `${val}% — Overwhelming, pure, endless devotion! 💖`;
    }
  });

  infiniteBtn.addEventListener('click', (e) => {
    loveSlider.value = 1000;
    loveMeterStatus.textContent = `♾️ INFINITY & BEYOND (Error: Heart cannot measure this much love!) ❤️‍🔥`;
    window.burstHearts(window.innerWidth / 2, window.innerHeight / 2, 45);
    audioPlayer.playChime(1046.50, 1.2, 0.2);
  });

  // Soft Chime Note Button
  document.getElementById('play-sweet-chime-btn').addEventListener('click', (e) => {
    audioPlayer.playChime(587.33, 1.5, 0.2);
    setTimeout(() => audioPlayer.playChime(783.99, 1.5, 0.2), 200);
    setTimeout(() => audioPlayer.playChime(1046.5, 2.0, 0.2), 400);

    const rect = e.target.getBoundingClientRect();
    window.burstHearts(rect.left + rect.width / 2, rect.top, 25);
  });

  // Hug Overlay Handlers
  const hugOverlay = document.getElementById('hug-overlay');
  const hugBtn = document.getElementById('hug-btn');
  const closeHugBtn = document.getElementById('close-hug-btn');
  const hugDialogue = document.getElementById('hug-dialogue');

  hugBtn.addEventListener('click', () => {
    hugDialogue.textContent = `"Sab kuch theek ho jayega ${userSettings.herName}, main hamesha tumhare saath hoon. Love you so so much!"`;
    hugOverlay.classList.remove('hidden');
    audioPlayer.playChime(659.25, 1.2, 0.2);
    window.burstHearts(window.innerWidth / 2, window.innerHeight / 2, 35);
  });

  closeHugBtn.addEventListener('click', () => {
    hugOverlay.classList.add('hidden');
  });

  // Customization Modal Handlers
  const customModal = document.getElementById('custom-modal');
  const customizeBtn = document.getElementById('customize-btn');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const saveNamesBtn = document.getElementById('save-names-btn');

  const inputHerName = document.getElementById('input-her-name');
  const inputHisName = document.getElementById('input-his-name');
  const inputSpecialDate = document.getElementById('input-special-date');

  customizeBtn.addEventListener('click', () => {
    inputHerName.value = userSettings.herName;
    inputHisName.value = userSettings.hisName;
    inputSpecialDate.value = userSettings.specialDate;
    customModal.classList.remove('hidden');
  });

  modalCloseBtn.addEventListener('click', () => {
    customModal.classList.add('hidden');
  });

  customModal.addEventListener('click', (e) => {
    if (e.target === customModal) {
      customModal.classList.add('hidden');
    }
  });

  saveNamesBtn.addEventListener('click', () => {
    saveUserSettings(
      inputHerName.value.trim(),
      inputHisName.value.trim(),
      inputSpecialDate.value.trim()
    );
    customModal.classList.add('hidden');
    audioPlayer.playChime(880, 0.8, 0.2);
    window.burstHearts(window.innerWidth / 2, window.innerHeight / 2, 30);
  });
});
