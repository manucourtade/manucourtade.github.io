/*
 * Portfolio interactions
 * ---------------------
 * Dependencies are intentionally avoided: projects/translations live here,
 * while small handlers power controls, navigation, and motion details.
 */

const projects = [
  {
    category: 'backend', title: { en: 'Library management API', es: 'API de gestión de biblioteca' },
    description: {
      en: 'REST API with JPA relationships, JWT authentication, roles, permissions, and a containerized deployment workflow.',
      es: 'API REST con relaciones JPA, autenticación JWT, roles, permisos y un flujo de despliegue en contenedores.'
    },
    stack: 'JAVA · SPRING BOOT · POSTGRESQL · DOCKER · AWS',
    href: 'https://github.com/manucourtade/library-management-api',
    label: { en: 'View repository', es: 'Ver repositorio' }, visual: 'library', word: 'LIBRARY'
  },
  {
    category: 'web', title: { en: 'Library management — web app', es: 'Sistema de gestión bibliotecario — web' },
    description: {
      en: 'Responsive frontend for a library system, built with Tailwind CSS and paired with a Spring backend. In progress.',
      es: 'Interfaz adaptable para un sistema de biblioteca, hecha con Tailwind CSS e integrada con un backend Spring. En desarrollo.'
    },
    stack: 'TAILWIND CSS · JAVA · SPRING · VERCEL · RENDER',
    href: 'https://library-mngt.vercel.app/index.html',
    label: { en: 'Open live site', es: 'Ver sitio' }, visual: 'web', word: 'WEB / APP'
  },
  {
    category: 'web', title: { en: 'Bar Laurino website', es: 'Sitio web de Bar Laurino' },
    description: {
      en: 'A responsive website concept for a local business, built to practice layout, visual hierarchy, and Bootstrap.',
      es: 'Sitio web adaptable para un negocio local, creado para practicar composición, jerarquía visual y Bootstrap.'
    },
    stack: 'HTML · CSS · BOOTSTRAP 5 · VERCEL',
    href: 'https://bar-laurino.vercel.app/',
    label: { en: 'Open live site', es: 'Ver sitio' }, visual: 'bar', word: 'LAURINO'
  },
  {
    category: 'backend', title: { en: 'Kiosco 24/7 API', es: 'API Kiosco 24/7' },
    description: {
      en: 'REST API with CRUD operations, partial PATCH updates, data integrity rules, and custom exceptions.',
      es: 'API REST con operaciones CRUD, actualizaciones PATCH parciales, reglas de integridad y excepciones personalizadas.'
    },
    stack: 'JAVA · SPRING BOOT · MYSQL',
    href: 'https://github.com/manucourtade/kiosco-24-7-spring',
    label: { en: 'View repository', es: 'Ver repositorio' }, visual: 'api', word: 'API'
  },
  {
    category: 'games', title: { en: 'Generala GO', es: 'Generala GO' },
    description: {
      en: 'Team-built dice game with a graphical interface, turns, scoring, custom assets, and a PyInstaller executable.',
      es: 'Juego de dados hecho en equipo, con interfaz gráfica, turnos, puntajes, recursos propios y ejecutable con PyInstaller.'
    },
    stack: 'PYTHON · PYGAME · PYINSTALLER',
    href: 'https://github.com/manucourtade/Generala-GO',
    label: { en: 'View repository', es: 'Ver repositorio' }, visual: 'game', word: 'ROLL!'
  },
  {
    category: 'data', title: { en: 'API data pipeline', es: 'Pipeline de datos desde APIs' },
    description: {
      en: 'An extraction and cleanup pipeline with Pandas, layered storage, Delta Lake, and S3-compatible object storage.',
      es: 'Pipeline de extracción y limpieza con Pandas, almacenamiento por capas, Delta Lake y objetos compatibles con S3.'
    },
    stack: 'PYTHON · PANDAS · DELTA LAKE · MINIO',
    href: 'https://github.com/manucourtade/extract-api-data',
    label: { en: 'View repository', es: 'Ver repositorio' }, visual: 'data', word: 'DATA / FLOW'
  },
  {
    category: 'backend', title: { en: 'Gym management with persistence', es: 'Sistema de gestión con persistencia' },
    description: {
      en: 'Java CRUD application backed by a relational database for creating, listing, searching, and deleting records.',
      es: 'Aplicación CRUD en Java con base relacional para crear, listar, buscar y eliminar registros.'
    },
    stack: 'JAVA · MYSQL · JDBC',
    href: 'https://github.com/manucourtade/Gimnasio_DB',
    label: { en: 'View repository', es: 'Ver repositorio' }, visual: 'database', word: 'CRUD'
  }
];

// Interface copy is kept together so language changes stay consistent.
const translations = {
  en: {
    skip: 'Skip to content', navWork: 'Work', navAbout: 'About', navStack: 'Stack', navContact: 'Contact',
    resume: 'Resume ↗', heroKicker: 'Backend developer · UTN Avellaneda · Buenos Aires',
    heroTitle: 'I build the<br><span class="outlined">logic behind</span><br>great products<span class="accent">.</span>',
    heroBody: 'Backend developer focused on clear APIs, thoughtful data models, and systems that are easy to maintain.',
    exploreWork: 'Explore my work', sayHello: 'Say hello', basedIn: 'BASED IN', openTo: 'OPEN TO OPPORTUNITIES',
    scrollToExplore: 'SCROLL TO EXPLORE', selectedWork: 'SELECTED WORK',
    reelLabel: 'PORTFOLIO IN MOTION', reelTitle: 'A look at my work<span class="accent">.</span>',
    reelPause: 'Pause carousel', reelResume: 'Resume carousel', reelVideoCaption: 'MANUEL COURTADE · BACKEND DEVELOPER',
    reelNote: 'Clear APIs.<br>Thoughtful data.<br>Reliable systems.',
    workAside: 'A selection of things I’ve built and learned from.',
    workTitle: 'Selected projects<span class="accent">.</span>', projectsLabel: 'PROJECTS',
    filterAll: 'All', filterBackend: 'Backend', filterWeb: 'Web', filterData: 'Data', filterGames: 'Games',
    aboutLabel: 'A LITTLE ABOUT ME', aboutTitle: 'Curious by nature.<br><span class="outlined">Builder by choice.</span>',
    aboutLead: 'I’m Manuel, a developer and computer science student who enjoys turning complex ideas into useful, dependable software.',
    aboutBody: 'I’m especially interested in APIs, relational databases, layered architecture, testing, and repeatable cloud deployments. I value clear code, steady learning, and working with people who care about what they build.',
    moreOnGithub: 'More about my work on GitHub', statProjects: 'FEATURED PROJECTS',
    statTools: 'TOOLS & TECHNOLOGIES', statFocus: 'FOCUS: BACKEND', toolkitLabel: 'MY TOOLKIT',
    stackAside: 'Tools I use to bring ideas to life.', stackTitle: 'Tools of the trade<span class="accent">.</span>',
    stackBackend: 'Backend', stackData: 'Data & storage', stackFrontend: 'Frontend', stackOther: 'Other',
    learningLabel: 'ALWAYS LEARNING', credentialsAside: 'Learning is part of the process.',
    credentialsTitle: 'Learning & credentials<span class="accent">.</span>', certData: 'Data Engineering',
    certTwo: 'Professional development', certThree: 'Technical training', certUdemy: 'Udemy course',
    certificate: 'Certificate', education: 'Student at UTN Avellaneda', contactLabel: 'LET’S CONNECT',
    contactTitle: 'Have a good project<br>in mind<span class="accent">?</span>',
    contactBody: 'Open to internships, junior opportunities, and thoughtful collaborations.',
    footerMade: '· Made with curiosity in Argentina', backTop: 'Back to top', openMenu: 'Open menu',
    closeMenu: 'Close menu', darkMode: 'Switch to dark mode', lightMode: 'Switch to light mode',
    navLabel: 'Main navigation', filterLabel: 'Filter projects'
  },
  es: {
    skip: 'Saltar al contenido', navWork: 'Proyectos', navAbout: 'Sobre mí', navStack: 'Tecnologías', navContact: 'Contacto',
    resume: 'CV ↗', heroKicker: 'Desarrollador backend · UTN Avellaneda · Buenos Aires',
    heroTitle: 'Construyo la<br><span class="outlined">lógica detrás</span><br>de grandes ideas<span class="accent">.</span>',
    heroBody: 'Desarrollador backend enfocado en APIs claras, modelos de datos bien pensados y sistemas fáciles de mantener.',
    exploreWork: 'Ver proyectos', sayHello: 'Hablemos', basedIn: 'UBICACIÓN', openTo: 'ABIERTO A OPORTUNIDADES',
    scrollToExplore: 'DESLIZÁ PARA EXPLORAR', selectedWork: 'TRABAJOS SELECCIONADOS',
    reelLabel: 'PORTFOLIO EN MOVIMIENTO', reelTitle: 'Un vistazo a mi trabajo<span class="accent">.</span>',
    reelPause: 'Pausar carrusel', reelResume: 'Reanudar carrusel', reelVideoCaption: 'MANUEL COURTADE · DESARROLLADOR BACKEND',
    reelNote: 'APIs claras.<br>Datos con sentido.<br>Sistemas confiables.',
    workAside: 'Una selección de proyectos y aprendizajes.',
    workTitle: 'Proyectos destacados<span class="accent">.</span>', projectsLabel: 'PROYECTOS',
    filterAll: 'Todos', filterBackend: 'Backend', filterWeb: 'Web', filterData: 'Datos', filterGames: 'Juegos',
    aboutLabel: 'UN POCO SOBRE MÍ', aboutTitle: 'Curioso por naturaleza.<br><span class="outlined">Constructor por elección.</span>',
    aboutLead: 'Soy Manuel, desarrollador y estudiante de sistemas. Disfruto convertir ideas complejas en software útil y confiable.',
    aboutBody: 'Me interesan especialmente las APIs, las bases de datos relacionales, la arquitectura en capas, las pruebas y los despliegues reproducibles en la nube. Valoro el código claro, aprender con constancia y trabajar con personas apasionadas por lo que hacen.',
    moreOnGithub: 'Conocé más de mi trabajo en GitHub', statProjects: 'PROYECTOS DESTACADOS',
    statTools: 'HERRAMIENTAS Y TECNOLOGÍAS', statFocus: 'ENFOQUE: BACKEND', toolkitLabel: 'MIS HERRAMIENTAS',
    stackAside: 'Tecnologías que uso para convertir ideas en realidad.', stackTitle: 'Herramientas de trabajo<span class="accent">.</span>',
    stackBackend: 'Backend', stackData: 'Datos y almacenamiento', stackFrontend: 'Frontend', stackOther: 'Otras',
    learningLabel: 'SIEMPRE APRENDIENDO', credentialsAside: 'Aprender también es parte del proceso.',
    credentialsTitle: 'Aprendizaje y certificados<span class="accent">.</span>', certData: 'Ingeniería de datos',
    certTwo: 'Desarrollo profesional', certThree: 'Formación técnica', certUdemy: 'Curso de Udemy',
    certificate: 'Certificado', education: 'Estudiante en UTN Avellaneda', contactLabel: 'CONECTEMOS',
    contactTitle: '¿Tenés un proyecto<br>interesante en mente<span class="accent">?</span>',
    contactBody: 'Abierto a pasantías, oportunidades junior y colaboraciones.',
    footerMade: '· Hecho con curiosidad en Argentina', backTop: 'Volver arriba', openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú', darkMode: 'Cambiar a modo oscuro', lightMode: 'Cambiar a modo claro',
    navLabel: 'Navegación principal', filterLabel: 'Filtrar proyectos'
  }
};

const root = document.documentElement;
const projectGrid = document.querySelector('#project-grid');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');

// Preferences are optional; the portfolio still works if storage is unavailable.
function readPreference(key, fallback) {
  try {
    return localStorage.getItem(key) || fallback;
  } catch {
    return fallback;
  }
}

function savePreference(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Private browsing or strict browser settings can disable local storage.
  }
}

let language = readPreference(
  'portfolio-language',
  navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en'
);
let activeFilter = 'all';

// Reveal each section once as it enters the viewport; fall back to visible content.
const revealObserver = 'IntersectionObserver' in window
  ? new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -32px 0px' })
  : null;

function observeReveal(elements) {
  elements.forEach(element => {
    if (revealObserver) revealObserver.observe(element);
    else element.classList.add('visible');
  });
}

document.querySelectorAll('.reveal').forEach(element => element.classList.add('will-reveal'));
observeReveal(document.querySelectorAll('.reveal'));
document.querySelector('#year').textContent = new Date().getFullYear();

// Render cards from one data list so filters and translations stay in sync.
function renderProjects() {
  const visibleProjects = projects.filter(project => (
    activeFilter === 'all' || project.category === activeFilter
  ));

  projectGrid.innerHTML = visibleProjects.map((project, index) => {
    const projectNumber = String(projects.indexOf(project) + 1).padStart(2, '0');
    const title = project.title[language];
    const action = project.label[language];

    return `
      <article class="project-card reveal" style="--card-index: ${index}">
        <a class="project-visual visual-${project.visual}" href="${project.href}"
          target="_blank" rel="noopener noreferrer" aria-label="${title} — ${action}">
          <span class="visual-index">${projectNumber} / 07</span>
          <span class="visual-shape" aria-hidden="true"></span>
          <span class="visual-word" aria-hidden="true">${project.word}</span>
          <span class="visual-arrow" aria-hidden="true">↗</span>
        </a>
        <div class="project-info">
          <p class="eyebrow project-stack">${project.stack}</p>
          <div class="project-title-row">
            <h3>${title}</h3>
            <a class="project-link" href="${project.href}" target="_blank" rel="noopener noreferrer">
              <span>${action}</span><span aria-hidden="true">↗</span>
            </a>
          </div>
          <p class="project-description">${project.description[language]}</p>
        </div>
      </article>`;
  }).join('');

  observeReveal(projectGrid.querySelectorAll('.reveal'));
}

// Update translated labels and page metadata together.
function applyLanguage() {
  const text = translations[language];
  root.lang = language;

  document.querySelectorAll('[data-i18n]').forEach(element => {
    const translation = text[element.dataset.i18n];
    if (translation) element.innerHTML = translation;
  });

  document.querySelector('.nav').setAttribute('aria-label', text.navLabel);
  document.querySelector('.filters').setAttribute('aria-label', text.filterLabel);
  document.title = language === 'en'
    ? 'Manuel Courtade — Backend developer'
    : 'Manuel Courtade — Desarrollador backend';
  document.querySelector('meta[name="description"]').content = text.heroBody;

  const languageButton = document.querySelector('#language-toggle');
  languageButton.textContent = language === 'en' ? 'ES' : 'EN';
  languageButton.setAttribute('aria-label', language === 'en'
    ? 'Cambiar idioma a español'
    : 'Change language to English');

  const menuButton = document.querySelector('.menu-toggle');
  menuButton.setAttribute('aria-label', menuButton.getAttribute('aria-expanded') === 'true'
    ? text.closeMenu
    : text.openMenu);

  updateThemeButtonLabel();
  savePreference('portfolio-language', language);
  renderProjects();
  updateReelToggle();
}

const reelSection = document.querySelector('.reel-section');
const reelToggle = document.querySelector('.reel-toggle');

function updateReelToggle() {
  const isPaused = reelSection.classList.contains('is-paused');
  reelToggle.setAttribute('aria-pressed', String(isPaused));
  reelToggle.textContent = translations[language][isPaused ? 'reelResume' : 'reelPause'];
}

reelToggle.addEventListener('click', () => {
  reelSection.classList.toggle('is-paused');
  updateReelToggle();
});

function updateThemeButtonLabel() {
  const button = document.querySelector('#theme-toggle');
  const isDark = root.dataset.theme === 'dark';
  const text = translations[language];

  button.querySelector('.theme-glyph').textContent = isDark ? '☼' : '◐';
  button.setAttribute('aria-label', isDark ? text.lightMode : text.darkMode);
  button.title = button.getAttribute('aria-label');
}

// Theme and language persist between visits without blocking initial rendering.
function applyTheme(theme) {
  root.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]').content = theme === 'dark'
    ? '#151b18'
    : '#f3f1ea';
  updateThemeButtonLabel();
  savePreference('portfolio-theme', theme);
}

// Keep the filter's visual state and accessible pressed state aligned.
document.querySelectorAll('.filter-button').forEach(button => {
  button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;

    document.querySelectorAll('.filter-button').forEach(filter => {
      const isActive = filter === button;
      filter.classList.toggle('active', isActive);
      filter.setAttribute('aria-pressed', String(isActive));
    });

    renderProjects();
  });
});

document.querySelector('#language-toggle').addEventListener('click', () => {
  language = language === 'en' ? 'es' : 'en';
  applyLanguage();
});

document.querySelector('#theme-toggle').addEventListener('click', () => {
  applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
});

// Mobile navigation exposes its open state to assistive technology.
const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('#nav-links');

function closeMenu(returnFocus = false) {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', translations[language].openMenu);
  navLinks.classList.remove('is-open');
  if (returnFocus) menuButton.focus();
}

menuButton.addEventListener('click', () => {
  const isOpening = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(isOpening));
  menuButton.setAttribute('aria-label', translations[language][isOpening ? 'closeMenu' : 'openMenu']);
  navLinks.classList.toggle('is-open', isOpening);
});

navLinks.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', () => closeMenu());
});

document.addEventListener('keydown', event => {
  const menuIsOpen = menuButton.getAttribute('aria-expanded') === 'true';
  if (event.key === 'Escape' && menuIsOpen) closeMenu(true);
});

// Highlight the navigation link for the section in the center of the viewport.
const sceneTargets = document.querySelectorAll('[data-scroll-scene]');
if (reducedMotion.matches || !('IntersectionObserver' in window)) {
  sceneTargets.forEach(scene => scene.classList.add('is-in-view'));
} else {
  document.documentElement.classList.add('has-scroll-scenes');
  const sceneObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-in-view');
      const motionLayers = entry.target.matches('.shell')
        ? [entry.target]
        : entry.target.querySelectorAll(':scope > .shell, :scope > .contact-inner, .reel-heading, .reel-viewport');
      motionLayers
        .forEach(layer => layer.addEventListener('transitionend', () => { layer.style.willChange = 'auto'; }, { once: true }));
      sceneObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  sceneTargets.forEach(scene => sceneObserver.observe(scene));
}

// Highlight the navigation link for the section in the center of the viewport.
const sectionObserver = 'IntersectionObserver' in window
  ? new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => {
          link.classList.toggle('is-active', link.hash === `#${entry.target.id}`);
        });
      });
    }, { rootMargin: '-35% 0px -55% 0px' })
  : null;

document.querySelectorAll('main section[id]').forEach(section => {
  sectionObserver?.observe(section);
});

// Scroll progress and the small hero parallax share one animation frame.
const progressFill = document.querySelector('#scroll-progress-fill');
const hero = document.querySelector('.hero');
let scrollFramePending = false;

function updateScrollMotion() {
  const scrollableDistance = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollableDistance > 0 ? window.scrollY / scrollableDistance : 0;
  progressFill.style.transform = `scaleX(${progress})`;

  if (!reducedMotion.matches) {
    const heroDistance = Math.max(0, window.scrollY - hero.offsetTop);
    hero.style.setProperty('--parallax-y', `${-Math.min(heroDistance * 0.035, 24)}px`);
  }

  scrollFramePending = false;
}

window.addEventListener('scroll', () => {
  if (scrollFramePending) return;
  scrollFramePending = true;
  window.requestAnimationFrame(updateScrollMotion);
}, { passive: true });
updateScrollMotion();

// Fine-pointer devices get subtle movement; touch and reduced-motion users do not.
if (finePointer.matches && !reducedMotion.matches) {
  hero.addEventListener('pointermove', event => {
    const bounds = hero.getBoundingClientRect();
    const offsetX = (event.clientX - bounds.left) / bounds.width - 0.5;
    const offsetY = (event.clientY - bounds.top) / bounds.height - 0.5;

    hero.style.setProperty('--pointer-x', `${offsetX * 12}px`);
    hero.style.setProperty('--pointer-y', `${offsetY * 12}px`);
  });

  hero.addEventListener('pointerleave', () => {
    hero.style.setProperty('--pointer-x', '0px');
    hero.style.setProperty('--pointer-y', '0px');
  });
}

// Restore saved choices before the user interacts with the controls.
applyTheme(readPreference('portfolio-theme', 'light'));
applyLanguage();
