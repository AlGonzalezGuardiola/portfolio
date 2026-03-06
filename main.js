/* main.js — portfolio interactions + i18n (EN / ES) */

/* ================================================================
   TRANSLATIONS
   ================================================================ */
const translations = {
  en: {
    /* Page meta */
    'page-title': 'Álvaro — DevOps & Cloud Engineer',
    'meta-desc': 'Álvaro — DevOps & Cloud Engineer specializing in AWS, CI/CD, Infrastructure as Code and containers.',

    /* Nav */
    'nav-about': 'About',
    'nav-projects': 'Projects',
    'nav-skills': 'Skills',
    'nav-contact': 'Contact',

    /* Hero */
    'hero-intro': 'Hi, my name is',
    'hero-role': 'DevOps & Cloud Engineer',
    'hero-desc': 'I build and automate cloud infrastructure on AWS — from CI/CD pipelines and Launch Templates to containerised microservices.',
    'hero-cta': 'More about me ↓',

    /* About */
    'label-about': 'Who I am',
    'title-about': 'About',
    'about-p1': "I'm a DevOps & Cloud Engineer with 2+ years of experience designing and operating infrastructure on AWS. My day-to-day revolves around automating repetitive work, building reliable CI/CD pipelines, and keeping systems observable and easy to maintain.",
    'about-p2': "I'm passionate about Infrastructure as Code — letting me treat cloud resources the same way developers treat application code: versioned, reviewed and reproducible. I'm actively looking for remote or hybrid roles and international opportunities where I can grow alongside a great engineering team.",
    'fact-location-key': 'Based in',
    'fact-location-val': 'Mallorca, Spain',
    'fact-cloud-key': 'Cloud',
    'fact-iac-key': 'IaC',
    'fact-cicd-key': 'CI/CD',
    'fact-open-key': 'Open to',
    'fact-open-val': 'Remote / Hybrid',
    'about-link': 'More about my experience →',

    /* Projects */
    'label-projects': "What I've built",
    'title-projects': 'Projects',
    'proj1-name': 'AWS Deployment Pipeline',
    'proj1-desc': 'End-to-end deployment automation using AWS CodePipeline. Pulls source changes, runs validation scripts and automatically updates EC2 Launch Templates and Auto Scaling Groups — eliminating manual deployments entirely.',
    'proj2-name': 'Batch Data & ML Pipeline',
    'proj2-desc': 'Serverless batch workflow that picks up CSV files from S3, triggers inference jobs against a trained ML model and persists structured results to a relational database — all fully automated and monitored via CloudWatch.',
    'proj3-name': 'IaC & Containers Demo',
    'proj3-desc': 'Reference project that provisions a complete AWS environment (VPC, subnets, security groups, ECS cluster) using Terraform, then deploys a containerised application via a fully automated GitHub Actions workflow.',
    'proj-github-link': 'View on GitHub ↗',

    /* Skills */
    'label-skills': 'What I work with',
    'title-skills': 'Skills',
    'cat-cloud': 'Cloud',
    'cat-iac': 'Infrastructure as Code',
    'cat-cicd': 'CI / CD',
    'cat-containers': 'Containers & Orchestration',
    'cat-langs': 'Languages & Tools',

    /* Contact */
    'label-contact': 'Get in touch',
    'title-contact': 'Contact',
    'contact-sub': "Interested in working together? Feel free to reach out — I'm open to remote and hybrid opportunities.",

    /* Footer */
    'footer-text': '© <span id="year"></span> Álvaro. Built with HTML, CSS &amp; a little JS.',
    'footer-top': '↑ Top',
  },

  es: {
    /* Page meta */
    'page-title': 'Álvaro — Ingeniero DevOps & Cloud',
    'meta-desc': 'Álvaro — Ingeniero DevOps & Cloud especializado en AWS, CI/CD, Infraestructura como Código y contenedores.',

    /* Nav */
    'nav-about': 'Sobre mí',
    'nav-projects': 'Proyectos',
    'nav-skills': 'Habilidades',
    'nav-contact': 'Contacto',

    /* Hero */
    'hero-intro': 'Hola, me llamo',
    'hero-role': 'Ingeniero DevOps & Cloud',
    'hero-desc': 'Construyo y automatizo infraestructura cloud en AWS — desde pipelines CI/CD y Launch Templates hasta microservicios en contenedores.',
    'hero-cta': 'Más sobre mí ↓',

    /* About */
    'label-about': 'Quién soy',
    'title-about': 'Sobre mí',
    'about-p1': 'Soy Ingeniero DevOps & Cloud con más de 2 años de experiencia diseñando y operando infraestructura en AWS. Mi día a día gira en torno a automatizar tareas repetitivas, construir pipelines CI/CD fiables y mantener sistemas observables y fáciles de mantener.',
    'about-p2': 'Me apasiona la Infraestructura como Código — que me permite tratar los recursos cloud igual que los desarrolladores tratan el código de aplicaciones: versionado, revisado y reproducible. Busco activamente roles en remoto o híbrido y oportunidades internacionales donde crecer junto a un gran equipo de ingeniería.',
    'fact-location-key': 'Ubicación',
    'fact-location-val': 'Mallorca, España',
    'fact-cloud-key': 'Cloud',
    'fact-iac-key': 'IaC',
    'fact-cicd-key': 'CI/CD',
    'fact-open-key': 'Disponible para',
    'fact-open-val': 'Remoto / Híbrido',
    'about-link': 'Más sobre mi experiencia →',

    /* Projects */
    'label-projects': 'Lo que he construido',
    'title-projects': 'Proyectos',
    'proj1-name': 'Pipeline de Despliegue en AWS',
    'proj1-desc': 'Automatización de despliegues de extremo a extremo con AWS CodePipeline. Detecta cambios en el código, ejecuta scripts de validación y actualiza automáticamente los Launch Templates y Auto Scaling Groups — eliminando los despliegues manuales por completo.',
    'proj2-name': 'Pipeline de Datos & ML por Lotes',
    'proj2-desc': 'Flujo de trabajo serverless que recoge ficheros CSV de S3, lanza inferencias contra un modelo de ML entrenado y persiste los resultados estructurados en una base de datos relacional — totalmente automatizado y monitorizado con CloudWatch.',
    'proj3-name': 'Demo IaC & Contenedores',
    'proj3-desc': 'Proyecto de referencia que provisiona un entorno AWS completo (VPC, subredes, grupos de seguridad, clúster ECS) con Terraform y despliega una aplicación en contenedor mediante un flujo de GitHub Actions totalmente automatizado.',
    'proj-github-link': 'Ver en GitHub ↗',

    /* Skills */
    'label-skills': 'Con qué trabajo',
    'title-skills': 'Habilidades',
    'cat-cloud': 'Cloud',
    'cat-iac': 'Infraestructura como Código',
    'cat-cicd': 'CI / CD',
    'cat-containers': 'Contenedores y Orquestación',
    'cat-langs': 'Lenguajes y Herramientas',

    /* Contact */
    'label-contact': 'Contáctame',
    'title-contact': 'Contacto',
    'contact-sub': '¿Interesado en trabajar juntos? No dudes en contactarme — estoy abierto a oportunidades en remoto e híbrido.',

    /* Footer */
    'footer-text': '© <span id="year"></span> Álvaro. Construido con HTML, CSS y un poco de JS.',
    'footer-top': '↑ Inicio',
  }
};

/* ================================================================
   I18N ENGINE
   ================================================================ */
function setLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  /* Update <html lang> */
  document.documentElement.lang = lang;

  /* Update <title> and <meta description> */
  document.title = t['page-title'];
  const metaDesc = document.getElementById('meta-desc');
  if (metaDesc) metaDesc.setAttribute('content', t['meta-desc']);

  /* Swap all [data-i18n] elements */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  /* Re-inject the year (innerHTML wipes the span) */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* Update lang-btn pressed state */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const active = btn.dataset.lang === lang;
    btn.setAttribute('aria-pressed', String(active));
  });

  /* Persist choice */
  localStorage.setItem('preferred-lang', lang);
}

/* ── Wire up language buttons ── */
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

/* ── Apply saved / browser language on load ── */
(function initLang() {
  const saved = localStorage.getItem('preferred-lang');
  const browser = navigator.language.startsWith('es') ? 'es' : 'en';
  setLanguage(saved || browser);
})();

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
   MOBILE HAMBURGER MENU
   ================================================================ */
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

function closeMobileNav() {
  mainNav.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
}

navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

document.addEventListener('click', e => {
  if (!mainNav.contains(e.target) && !navToggle.contains(e.target)) {
    closeMobileNav();
  }
});

/* ================================================================
   HEADER — reveal on scroll
   ================================================================ */
const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ================================================================
   ACTIVE NAV LINK
   ================================================================ */
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');

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

/* ================================================================
   SCROLL-REVEAL ANIMATION
   ================================================================ */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => {
  revealObserver.observe(el);
});
