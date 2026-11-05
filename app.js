/**
 * Toussaint BOCO - Data Scientist Portfolio
 * Interactive client-side script
 */

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
    document.body.classList.add('overflow-hidden'); // Prevent background scrolling
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
      btn.textContent = '✓ Copié !';
      btn.classList.add('bg-emerald-600', 'text-white', 'border-emerald-500');
      btn.classList.remove('text-brand-400');
      
      setTimeout(() => {
        btn.textContent = originalText;
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

