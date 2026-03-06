/* main.js — vanilla JS for portfolio interactions */

/* ── 1. Smooth scroll (also handles Edge/FF without CSS scroll-behavior) ── */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // close mobile nav if open
    closeMobileNav();
  });
});

/* ── 2. Mobile hamburger menu ── */
const navToggle = document.getElementById('navToggle');
const mainNav   = document.getElementById('mainNav');

function closeMobileNav() {
  mainNav.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
}

navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

/* Close if user clicks outside the nav */
document.addEventListener('click', e => {
  if (!mainNav.contains(e.target) && !navToggle.contains(e.target)) {
    closeMobileNav();
  }
});

/* ── 3. Header shadow on scroll ── */
const header = document.querySelector('.site-header');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* ── 4. Active nav link highlight on scroll ── */
const sections = document.querySelectorAll('main section[id]');
const navLinks  = document.querySelectorAll('.main-nav a[href^="#"]');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => sectionObserver.observe(s));

/* ── 5. Scroll-reveal animation ── */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target); // animate once
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => {
  revealObserver.observe(el);
});

/* ── 6. Footer year ── */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
