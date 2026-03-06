/* main.js — shared across all portfolio pages */

/* ================================================================
   TRANSLATIONS
   ================================================================ */
const translations = {
  en: {
    'title-page-home': 'Álvaro — DevOps & Cloud Engineer',
    'title-page-about': 'Álvaro — About',
    'title-page-projects': 'Álvaro — Projects',
    'title-page-skills': 'Álvaro — Skills',
    'title-page-contact': 'Álvaro — Contact',
    'meta-desc': 'Álvaro — DevOps & Cloud Engineer specializing in AWS, CI/CD, Infrastructure as Code and containers.',
    'nav-home': 'Home', 'nav-about': 'About', 'nav-projects': 'Projects',
    'nav-skills': 'Skills', 'nav-contact': 'Contact',
    'hero-eyebrow': 'Hi, my name is',
    'hero-role': 'DevOps & Cloud Engineer',
    'hero-tagline': 'I build and automate cloud infrastructure on AWS using CI/CD, IaC and containers.',
    'hero-btn-about': 'more about me',
    'hero-btn-projects': 'my projects',
    'label-about': 'Who I am', 'title-about': 'About',
    'about-p1': "I'm a DevOps & Cloud Engineer with 2+ years of experience designing and operating infrastructure on AWS. My day-to-day revolves around automating repetitive work, building reliable CI/CD pipelines, and keeping systems observable and easy to maintain.",
    'about-p2': "I'm passionate about Infrastructure as Code — letting me treat cloud resources the same way developers treat application code: versioned, reviewed and reproducible. I'm actively looking for remote or hybrid roles and international opportunities where I can grow alongside a great engineering team.",
    'fact-location-key': 'Based in', 'fact-location-val': 'Mallorca, Spain',
    'fact-cloud-key': 'Cloud', 'fact-iac-key': 'IaC', 'fact-cicd-key': 'CI/CD',
    'fact-open-key': 'Open to', 'fact-open-val': 'Remote / Hybrid',
    'about-link': 'More about my experience →',
    'label-projects': "What I've built", 'title-projects': 'Projects',
    'projects-intro': 'A selection of infrastructure and automation projects I have built or contributed to.',
    'proj1-name': 'AWS Deployment Pipeline',
    'proj1-desc': 'End-to-end deployment automation using AWS CodePipeline. Pulls source changes, runs validation scripts and automatically updates EC2 Launch Templates and Auto Scaling Groups — eliminating manual deployments entirely.',
    'proj2-name': 'Batch Data & ML Pipeline',
    'proj2-desc': 'Serverless batch workflow that picks up CSV files from S3, triggers inference jobs against a trained ML model and persists structured results to a relational database — all fully automated and monitored via CloudWatch.',
    'proj3-name': 'IaC & Containers Demo',
    'proj3-desc': 'Reference project that provisions a complete AWS environment (VPC, subnets, security groups, ECS cluster) using Terraform, then deploys a containerised application via a fully automated GitHub Actions workflow.',
    'proj-link': 'View on GitHub ↗',
    'label-skills': 'What I work with', 'title-skills': 'Skills',
    'cat-cloud': 'Cloud', 'cat-iac': 'Infrastructure as Code',
    'cat-cicd': 'CI / CD', 'cat-containers': 'Containers & Orchestration',
    'cat-langs': 'Languages & Tools',
    'label-contact': 'Get in touch', 'title-contact': 'Contact',
    'contact-sub': "Interested in working together? Feel free to reach out — I'm open to remote and hybrid opportunities.",
    'footer-text': '© <span id="year"></span> Álvaro. Built with HTML, CSS &amp; a little JS.',
    'footer-top': '↑ Top',
  },
  es: {
    'title-page-home': 'Álvaro — Ingeniero DevOps & Cloud',
    'title-page-about': 'Álvaro — Sobre mí',
    'title-page-projects': 'Álvaro — Proyectos',
    'title-page-skills': 'Álvaro — Habilidades',
    'title-page-contact': 'Álvaro — Contacto',
    'meta-desc': 'Álvaro — Ingeniero DevOps & Cloud especializado en AWS, CI/CD, Infraestructura como Código y contenedores.',
    'nav-home': 'Inicio', 'nav-about': 'Sobre mí', 'nav-projects': 'Proyectos',
    'nav-skills': 'Habilidades', 'nav-contact': 'Contacto',
    'hero-eyebrow': 'Hola, me llamo',
    'hero-role': 'Ingeniero DevOps & Cloud',
    'hero-tagline': 'Construyo y automatizo infraestructura cloud en AWS usando CI/CD, IaC y contenedores.',
    'hero-btn-about': 'más sobre mí',
    'hero-btn-projects': 'mis proyectos',
    'label-about': 'Quién soy', 'title-about': 'Sobre mí',
    'about-p1': 'Soy Ingeniero DevOps & Cloud con más de 2 años de experiencia diseñando y operando infraestructura en AWS. Mi día a día gira en torno a automatizar tareas repetitivas, construir pipelines CI/CD fiables y mantener sistemas observables y fáciles de mantener.',
    'about-p2': 'Me apasiona la Infraestructura como Código — que me permite tratar los recursos cloud igual que los desarrolladores tratan el código de aplicaciones: versionado, revisado y reproducible. Busco activamente roles en remoto o híbrido y oportunidades internacionales donde crecer junto a un gran equipo de ingeniería.',
    'fact-location-key': 'Ubicación', 'fact-location-val': 'Mallorca, España',
    'fact-cloud-key': 'Cloud', 'fact-iac-key': 'IaC', 'fact-cicd-key': 'CI/CD',
    'fact-open-key': 'Disponible para', 'fact-open-val': 'Remoto / Híbrido',
    'about-link': 'Más sobre mi experiencia →',
    'label-projects': 'Lo que he construido', 'title-projects': 'Proyectos',
    'projects-intro': 'Una selección de proyectos de infraestructura y automatización que he construido o en los que he contribuido.',
    'proj1-name': 'Pipeline de Despliegue en AWS',
    'proj1-desc': 'Automatización de despliegues de extremo a extremo con AWS CodePipeline. Detecta cambios en el código, ejecuta scripts de validación y actualiza automáticamente los Launch Templates y Auto Scaling Groups — eliminando los despliegues manuales por completo.',
    'proj2-name': 'Pipeline de Datos & ML por Lotes',
    'proj2-desc': 'Flujo de trabajo serverless que recoge ficheros CSV de S3, lanza inferencias contra un modelo de ML entrenado y persiste los resultados estructurados en una base de datos relacional — totalmente automatizado y monitorizado con CloudWatch.',
    'proj3-name': 'Demo IaC & Contenedores',
    'proj3-desc': 'Proyecto de referencia que provisiona un entorno AWS completo (VPC, subredes, grupos de seguridad, clúster ECS) con Terraform y despliega una aplicación en contenedor mediante un flujo de GitHub Actions totalmente automatizado.',
    'proj-link': 'Ver en GitHub ↗',
    'label-skills': 'Con qué trabajo', 'title-skills': 'Habilidades',
    'cat-cloud': 'Cloud', 'cat-iac': 'Infraestructura como Código',
    'cat-cicd': 'CI / CD', 'cat-containers': 'Contenedores y Orquestación',
    'cat-langs': 'Lenguajes y Herramientas',
    'label-contact': 'Contáctame', 'title-contact': 'Contacto',
    'contact-sub': '¿Interesado en trabajar juntos? No dudes en contactarme — estoy abierto a oportunidades en remoto e híbrido.',
    'footer-text': '© <span id="year"></span> Álvaro. Construido con HTML, CSS y un poco de JS.',
    'footer-top': '↑ Inicio',
  }
};

/* ================================================================
   THEME
   ================================================================ */
const themeToggleBtn = document.getElementById('themeToggle');

function setTheme(theme) {
  if (theme === 'light') {
    document.body.classList.add('light-mode');
    if (themeToggleBtn) themeToggleBtn.setAttribute('aria-label', 'Switch to dark mode');
  } else {
    document.body.classList.remove('light-mode');
    if (themeToggleBtn) themeToggleBtn.setAttribute('aria-label', 'Switch to light mode');
  }
  localStorage.setItem('preferred-theme', theme);
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    const isLight = document.body.classList.contains('light-mode');
    setTheme(isLight ? 'dark' : 'light');
  });
}

// Init: saved preference, default = dark
setTheme(localStorage.getItem('preferred-theme') || 'dark');

/* ================================================================
   I18N ENGINE
   ================================================================ */
function setLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  document.documentElement.lang = lang;

  const page = document.body.dataset.page || 'home';
  const titleKey = `title-page-${page}`;
  if (t[titleKey]) document.title = t[titleKey];

  const metaDesc = document.getElementById('meta-desc');
  if (metaDesc) metaDesc.setAttribute('content', t['meta-desc']);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Re-stamp footer year after innerHTML swap
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
  });

  localStorage.setItem('preferred-lang', lang);
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

// Init: saved → browser → default EN
(function initLang() {
  const saved = localStorage.getItem('preferred-lang');
  const browser = navigator.language.startsWith('es') ? 'es' : 'en';
  setLanguage(saved || browser);
})();

/* ================================================================
   ACTIVE NAV LINK
   ================================================================ */
(function setActiveNav() {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a').forEach(link => {
    link.classList.toggle('active', link.getAttribute('href').split('/').pop() === current);
  });
})();

/* ================================================================
   HEADER — frosted glass on scroll
   ================================================================ */
const header = document.querySelector('.site-header');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

/* ================================================================
   MOBILE HAMBURGER MENU
   ================================================================ */
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

function closeMobileNav() {
  if (mainNav) mainNav.classList.remove('open');
  if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
}

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
  document.addEventListener('click', e => {
    if (!mainNav.contains(e.target) && !navToggle.contains(e.target)) closeMobileNav();
  });
}

/* ================================================================
   SMOOTH SCROLL
   ================================================================ */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    closeMobileNav();
  });
});

/* ================================================================
   SCROLL REVEAL
   ================================================================ */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => revealObserver.observe(el));
