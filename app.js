/**
 * Toussaint BOCO - Data Scientist Portfolio
 * Interactive client-side script with Bilingual (FR / EN) Internationalization
 */

// Helper to safely retrieve the translations dictionary
function getTranslations() {
  if (typeof window !== 'undefined' && window.translations) return window.translations;
  if (typeof translations !== 'undefined') return translations;
  return null;
}

// Current Language State (Default: 'fr', safely read from localStorage)
let currentLang = 'fr';
try {
  const saved = localStorage.getItem('portfolio_lang');
  if (saved === 'fr' || saved === 'en') {
    currentLang = saved;
  }
} catch (e) {
  currentLang = 'fr';
}

/**
 * Switch Application Language (FR / EN)
 * Updates all texts, titles, meta tags, and toggles active button states.
 */
function switchLanguage(lang) {
  const allT = getTranslations();
  if (!allT || !allT[lang]) {
    console.warn(`Translations for language '${lang}' not found.`);
    return;
  }

  currentLang = lang;
  try {
    localStorage.setItem('portfolio_lang', lang);
  } catch (e) {}
  document.documentElement.lang = lang;

  const t = allT[lang];

  // Update Page Title & Meta Description
  if (t.meta_title) document.title = t.meta_title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && t.meta_desc) metaDesc.setAttribute('content', t.meta_desc);

  // Update Text Content (Plain Text)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });

  // Update HTML Content (Formatted Text with bold / badges / spans)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  // Update Language Switcher Buttons Style (Desktop & Mobile)
  updateLanguageButtons(lang);
}

// Expose globally so inline onclick always reaches it
window.switchLanguage = switchLanguage;

/**
 * Updates UI styling for all FR / EN language toggle pills
 */
function updateLanguageButtons(lang) {
  const activeClasses = ['bg-brand-600', 'text-white', 'shadow-sm'];
  const inactiveClasses = ['text-slate-400', 'hover:text-white'];

  const buttonPairs = [
    ['langBtnFR', 'langBtnEN'],
    ['mobileLangFR', 'mobileLangEN'],
    ['mobileTopLangFR', 'mobileTopLangEN']
  ];

  buttonPairs.forEach(([idFR, idEN]) => {
    const btnFR = document.getElementById(idFR);
    const btnEN = document.getElementById(idEN);
    if (btnFR && btnEN) {
      if (lang === 'fr') {
        btnFR.classList.add(...activeClasses);
        btnFR.classList.remove(...inactiveClasses);
        btnEN.classList.remove(...activeClasses);
        btnEN.classList.add(...inactiveClasses);
      } else {
        btnEN.classList.add(...activeClasses);
        btnEN.classList.remove(...inactiveClasses);
        btnFR.classList.remove(...activeClasses);
        btnFR.classList.add(...inactiveClasses);
      }
    }
  });
}

// Mobile navigation toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
}

// Header dynamic shadow on scroll
const mainHeader = document.getElementById('mainHeader');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    mainHeader.classList.add('shadow-xl', 'bg-dark-bg/95');
  } else {
    mainHeader.classList.remove('shadow-xl', 'bg-dark-bg/95');
  }
});

// Modal Management
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
    const content = modal.querySelector('div');
    if (content) {
      content.classList.add('modal-enter');
    }
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }
}

// Close modal when clicking outside of the inner dialog
document.querySelectorAll('[id^="modal-"]').forEach(modal => {
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal(modal.id);
    }
  });
});

// Close modal on Escape key
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    document.querySelectorAll('[id^="modal-"]').forEach(modal => {
      if (!modal.classList.contains('hidden')) {
        closeModal(modal.id);
      }
    });
  }
});

// Email Copy to Clipboard with Visual Confirmation
function copyEmail() {
  const email = 'sejroboco9@gmail.com';
  navigator.clipboard.writeText(email).then(() => {
    const btn = document.getElementById('copyEmailBtn');
    if (btn) {
      const originalText = btn.textContent;
      const t = window.translations ? window.translations[currentLang] : null;
      btn.textContent = (t && t.contact_copied) ? t.contact_copied : '✓ Copié !';
      btn.classList.add('bg-emerald-600', 'text-white', 'border-emerald-500');
      btn.classList.remove('text-brand-400');
      
      setTimeout(() => {
        btn.textContent = (t && t.contact_btn_copy) ? t.contact_btn_copy : originalText;
        btn.classList.remove('bg-emerald-600', 'text-white', 'border-emerald-500');
        btn.classList.add('text-brand-400');
      }, 2500);
    }
  }).catch(err => {
    console.error('Erreur lors de la copie de l\'email : ', err);
    window.location.href = `mailto:${email}`;
  });
}

// Smart photo fallback handler (checks .jpeg, .jpg, .png, generated path, then placeholder)
let photoAttempt = 0;
function handlePhotoError(imgElement) {
  if (!imgElement) return;

  photoAttempt++;
  if (photoAttempt === 1) {
    imgElement.src = 'photo.jpg';
    return;
  } else if (photoAttempt === 2) {
    imgElement.src = 'photo.png';
    return;
  } else if (photoAttempt === 3) {
    // Attempt to load the newly generated dark anthracite portrait from local storage
    imgElement.src = 'file:///C:/Users/HP/.gemini/antigravity/brain/5596594c-e769-4129-a710-61629cdc7a2e/photo_toussaint_boco_dark_bg_1793826080929.jpg';
    return;
  }

  // If all file formats failed, display the stylized monogram placeholder
  imgElement.style.display = 'none';
  const placeholder = document.getElementById('photoPlaceholder');
  if (placeholder) {
    placeholder.classList.remove('hidden');
    placeholder.classList.add('flex');
  }
}

// Initialize Language on Page Load (Safe for fast or cached loads)
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    switchLanguage(currentLang);
  });
} else {
  switchLanguage(currentLang);
}
