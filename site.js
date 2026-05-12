// ── Header scroll ──
const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 8);
}, { passive: true });

// ── Mobile menu ──
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
}

// ── Active nav link ──
const page = document.body.dataset.page || '';
document.querySelectorAll('[data-page]').forEach(el => {
  if (el.dataset.page === page) el.classList.add('active');
});

// ── Reveal on scroll ──
const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  reveals.forEach(el => el.classList.add('hidden'));
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.remove('hidden');
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0, rootMargin: '0px 0px -30px 0px' });
  reveals.forEach(el => obs.observe(el));
  setTimeout(() => {
    reveals.forEach(el => { el.classList.remove('hidden'); el.classList.add('visible'); });
  }, 1500);
}

// ── Email builder ──
function buildEmail() {
  const e = ['shubham','.','malpani97','@','gmail','.','com'].join('');
  document.querySelectorAll('[data-email]').forEach(el => {
    el.href = 'mailto:' + e;
    if (el.dataset.emailText === 'true') el.textContent = e;
  });
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', buildEmail);
} else { buildEmail(); }
