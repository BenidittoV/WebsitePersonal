import { useEffect } from 'react';
import './App.css';

const assetModules = import.meta.glob('./assets/**/*', {
  eager: true,
  query: '?url',
  import: 'default',
});

const assetMap = Object.fromEntries(
  Object.entries(assetModules).map(([path, url]) => [path.replace('./', ''), url]),
);

const resolveAsset = (path) => {
  const normalized = path.replace(/^\//, '');
  return assetMap[normalized] ?? path;
};

const rawPageMarkup = String.raw`<a class="skip-link" href="#main">Skip to content</a>
<div aria-hidden="true" class="page-noise"></div>
<div aria-hidden="true" class="cursor-glow"></div>
<div aria-hidden="true" class="scroll-progress"><span></span></div>
<header class="site-header" id="top">
<a aria-label="My Portfolio home" class="brand" href="#top">
<span class="brand-mark">BE</span>
<span class="brand-copy"><strong>MY PORTFOLIO</strong><small>SELECTED WORKS</small></span>
</a>
<nav aria-label="Primary navigation" class="desktop-nav">
<a href="#about">About</a>
<a href="#experience">Experience</a>
<a href="#projects">Projects</a>
<a href="#skills">Skills</a>
<a href="#education">Education</a>
<a href="#contact">Contact</a>
</nav>
<div class="header-actions">
<a class="header-link" href="assets/docs/Beniditto-Eka-Viyantyo-CV.pdf" rel="noopener noreferrer" target="_blank">Download CV <span aria-hidden="true">↗</span></a>
<button aria-expanded="false" aria-label="Open navigation" class="menu-button" type="button"><span></span><span></span></button>
</div>
</header>
<div aria-hidden="true" class="mobile-menu">
<nav aria-label="Mobile navigation">
<a href="#about"><span>01</span>About</a>
<a href="#experience"><span>02</span>Experience</a>
<a href="#projects"><span>03</span>Projects</a>
<a href="#skills"><span>04</span>Skills</a>
<a href="#education"><span>05</span>Education</a>
<a href="#contact"><span>06</span>Contact</a>
</nav>
<div class="mobile-menu-links">
<a href="assets/docs/Beniditto-Eka-Viyantyo-CV.pdf" rel="noopener noreferrer" target="_blank">CV</a>
<a href="assets/docs/Beniditto-Eka-Viyantyo-Portfolio.pdf" rel="noopener noreferrer" target="_blank">Portfolio PDF</a>
<a href="https://github.com/BenidittoV" rel="noreferrer" target="_blank">GitHub</a>
</div>
</div>
<main id="main">
<section aria-labelledby="hero-title" class="hero shell">
<div aria-hidden="true" class="hero-grid"></div>
<div class="hero-copy reveal">
<p class="hero-role">FULL-STACK DEVELOPER · DATA &amp; WEB</p>
<h1 id="hero-title">Beniditto<br/><span>Eka Viyantyo</span></h1>
<p class="hero-intro">I build production-minded web and data products, with hands-on internship experience in QC workflows, dashboards, frontend implementation, testing, and data processing. My strongest direction is full-stack development and data engineering.</p>
<div aria-label="Areas of interest" class="hero-domains">
<span>Full-stack development</span>
<span>Data &amp; SQL</span>
<span>Application testing</span>
<span>AI / Web3 projects</span>
</div>
<div class="hero-actions">
<a class="button button--primary" href="#projects">View selected work <span aria-hidden="true">→</span></a>
<a class="button button--ghost" href="#contact">Contact me <span aria-hidden="true">↗</span></a>
</div>
<div aria-label="Social links" class="hero-socials">
<a href="https://github.com/BenidittoV" rel="noreferrer" target="_blank">GitHub</a>
<a href="https://www.linkedin.com/in/benidittoekaviyantyo" rel="noreferrer" target="_blank">LinkedIn</a>
<a href="mailto:beniditto21052004@gmail.com">Email</a>
</div>
</div>
<div class="hero-profile reveal" data-delay="120">
<div class="profile-card" data-tilt="">
<div class="profile-card__top">
<span><i></i> INFORMATICS · UAJY</span>
<small>FULL-STACK + DATA</small>
</div>
<div class="profile-photo-wrap">
<img alt="Portrait of Beniditto Eka Viyantyo" src="assets/images/beniditto-portrait.jpeg"/>
<div aria-hidden="true" class="profile-scan"></div>
</div>
<div class="profile-card__bottom">
<div><small>Current focus</small><strong class="focus-decode" data-decode="">Data engineering &amp; full-stack development</strong></div>
<span>2026</span>
</div>
</div>
<div aria-label="Quick professional facts" class="identity-terminal" data-boot-terminal="">
<div class="terminal-head"><span>profile / quick facts</span><span>● ● ●</span></div>
<p class="terminal-command"><span>&gt;</span> experience</p>
<strong data-terminal-type="">2 internship experiences</strong>
<p class="terminal-command"><span>&gt;</span> focus</p>
<strong data-terminal-type="">Full-stack development · data engineering</strong>
<p class="terminal-command"><span>&gt;</span> working style</p>
<strong data-terminal-type="">Build → test → review → improve</strong>
</div>
</div>
<div aria-hidden="true" class="hero-scroll"><span></span> SCROLL TO KNOW ME</div>
</section>
<section aria-labelledby="about-title" class="about shell" id="about">
<div class="section-index reveal"><span>01</span><p>About Beniditto</p></div>
<div class="about-layout">
<div class="about-copy reveal">
<h2 id="about-title">I learn fastest by building <em>real systems.</em></h2>
<p class="large-copy">I am an Informatics student at Universitas Atma Jaya Yogyakarta with hands-on experience in full-stack web development, data processing, QC workflows, mobile applications, machine learning, and Web3 projects.</p>
<p>My strongest direction is full-stack development and data engineering. I prefer to understand the operational problem first, implement the system, test it with real data, and improve it from feedback.</p>
<div class="about-links">
<a href="assets/docs/Beniditto-Eka-Viyantyo-CV.pdf" rel="noopener noreferrer" target="_blank">Read my CV <span>↗</span></a>
<a href="assets/docs/Beniditto-Eka-Viyantyo-Portfolio.pdf" rel="noopener noreferrer" target="_blank">Open portfolio PDF <span>↗</span></a>
<a href="https://github.com/BenidittoV/WebsitePersonal" rel="noreferrer" target="_blank">Original website repository <span>↗</span></a>
</div>
</div>
<div aria-label="Portfolio statistics" class="stats-grid">
<article class="stat-card"><span class="stat-number" data-decimals="2" data-target="3.61">0.00</span><small>GPA / 4.00</small><p>Bachelor’s Degree in Informatics</p></article>
<article class="stat-card"><span class="stat-number" data-pad="2" data-target="2">00</span><small>Internships</small><p>QC, product interface, testing, and web development</p></article>
<article class="stat-card"><span class="stat-number" data-pad="2" data-target="5">00</span><small>Featured projects</small><p>Web, mobile, machine learning, and Web3</p></article>
<article class="stat-card"><span class="stat-number" data-pad="2" data-target="3">00</span><small>Competition experiences</small><p>Web3, cybersecurity, and game development</p></article>
</div>
</div>
</section>
<section aria-labelledby="experience-title" class="experience shell" id="experience">
<div class="section-index reveal"><span>02</span><p>Where I have worked</p></div>
<div class="section-heading reveal">
<h2 id="experience-title">Experience that connected <em>code</em> with operations.</h2>
<p>My internship work exposed me to quality-control processes, AI-assisted evaluation, frontend implementation, testing, and real workplace constraints.</p>
</div>
<div class="timeline">
<article class="timeline-item">
<div class="timeline-date"><time datetime="2025-09">September 2025</time><span aria-hidden="true"> - </span><time datetime="2026-03">March 2026</time></div>
<div class="timeline-marker"><i></i></div>
<div class="timeline-content">
<p class="company">Astra Credit Companies (ACC) - Berijalan</p>
<h3>QC &amp; Web Development Intern</h3>
<p>Reviewed agent customer conversations, investigated recurring QC issues, and cross-checked AI-generated assessments against manual evaluations. I also built a Team Leader dashboard that consolidated agent performance, customer potential, and QC results into a clearer monitoring workflow.</p>
<ul><li>Operational process analysis</li><li>AI output validation</li><li>Excel data processing</li><li>PostgreSQL dashboard</li></ul>
</div>
</article>
<article class="timeline-item">
<div class="timeline-date"><time datetime="2025-07">July 2025</time><span aria-hidden="true"> - </span><time datetime="2025-12">December 2025</time></div>
<div class="timeline-marker"><i></i></div>
<div class="timeline-content">
<p class="company">PT Sinar Merpati Kreatif</p>
<h3>Web Development Intern</h3>
<p>Implemented frontend features for Yogya Komtek web applications, tested interfaces, fixed defects, and collaborated with the team to improve delivery quality.</p>
<ul><li>Frontend implementation</li><li>Interface testing</li><li>Bug fixing</li><li>Team collaboration</li></ul>
</div>
</article>
</div>
</section>
<section aria-labelledby="projects-title" class="projects shell" id="projects">
<div class="section-index reveal"><span>03</span><p>Selected projects</p></div>
<div class="section-heading section-heading--projects reveal">
<h2 id="projects-title">What I built, <em>what I contributed,</em> and what I learned.</h2>
<p>Each case study summarizes the problem, my role, my contribution, the technology used, and what I learned from building it.</p>
</div>
<div class="project-scroll" id="project-scroll">
<div class="project-pin">
<div aria-hidden="true" class="project-scroll-meta">
<span class="project-scroll-hint">SCROLL TO EXPLORE PROJECTS</span>
<div class="project-scroll-progress"><i></i></div>
<span class="project-scroll-count"><b>01</b> / 05</span>
</div>
<div class="project-viewport">
<div class="project-list" id="project-list"></div>
</div>
</div>
</div>
</section>
<section aria-labelledby="skills-title" class="skills shell" id="skills">
<div class="section-index reveal"><span>04</span><p>Technical toolkit</p></div>
<div class="skills-layout">
<div class="skills-copy reveal">
<h2 id="skills-title">Tools I have used across <em>projects and internships.</em></h2>
<p>I work across interface code, backend logic, databases, data workflows, mobile development, machine-learning experiments, and Web3 integration. I list technologies here because I have used them in coursework, projects, or internship work-not simply because I have encountered them.</p>
</div>
<div class="skill-groups" id="skill-groups"></div>
</div>
</section>
<section aria-labelledby="education-title" class="education shell" id="education">
<div class="section-index reveal"><span>05</span><p>Education &amp; activities</p></div>
<div class="education-grid">
<article class="education-main reveal">
<figure class="education-photo">
<a aria-label="Open the Kompas.com source for the UAJY campus photo" href="https://www.kompas.com/edu/read/2023/06/14/143102271/pts-terbaik-di-indonesia-versi-sir-2023-uajy-peringkat-3" rel="noopener noreferrer" target="_blank">
<img alt="Universitas Atma Jaya Yogyakarta campus building" loading="lazy" src="assets/images/uajy-campus-kompas.jpg"/>
</a>
</figure>
<div class="education-summary">
<p class="education-label">Bachelor’s Degree in Informatics</p>
<h2 id="education-title">Universitas Atma Jaya Yogyakarta</h2>
<div aria-label="GPA 3.61 out of 4.00" class="education-score">
<strong>3.61</strong><span>GPA / 4.00</span>
</div>
</div>
</article>
<div class="activity-list reveal" data-delay="100">
<article><time datetime="2026">2026</time><div><h3>Chainlink Web3 Competition</h3><p>Built OmniOracle, a decentralized prediction-market prototype.</p></div></article>
<article><time datetime="2025">2025</time><div><h3>NETCOMP Cyber Security Competition</h3><p>Solved OSINT, digital forensics, reverse-engineering, and security challenges.</p></div></article>
<article><time datetime="2024">2024</time><div><h3>GEMASTIK Game Development</h3><p>Built an educational game focused on waste sorting.</p></div></article>
<article><time>2023–2024</time><div><h3>Kelompok Studi Linux - Secretary</h3><p>Managed correspondence and introductory Linux materials.</p></div></article>
<article><time>2022–2023</time><div><h3>Marching Band UAJY - Battery Division Leader</h3><p>Led the battery division; the team placed second at Hamengkubuwono Cup.</p></div></article>
</div>
</div>
</section>
<section aria-labelledby="contact-title" class="contact shell" id="contact">
<div aria-hidden="true" class="contact-grid"></div>
<div class="contact-content reveal">
<p class="contact-label">LET’S BUILD SOMETHING USEFUL</p>
<h2 id="contact-title">Have a project, internship, or collaboration in mind?</h2>
<a class="contact-email" href="mailto:beniditto21052004@gmail.com">beniditto21052004@gmail.com <span>↗</span></a>
<div class="contact-meta">
<span>Yogyakarta, Indonesia</span>
<a href="tel:+6285369406838">+62 853-6940-6838</a>
</div>
</div>
<div class="contact-links reveal contact-sequence" data-delay="100">
<a href="https://github.com/BenidittoV" rel="noreferrer" target="_blank"><span>GitHub</span><small>Code &amp; repositories</small><i>↗</i></a>
<a href="https://www.linkedin.com/in/benidittoekaviyantyo" rel="noreferrer" target="_blank"><span>LinkedIn</span><small>Professional profile</small><i>↗</i></a>
<a href="assets/docs/Beniditto-Eka-Viyantyo-CV.pdf" rel="noopener noreferrer" target="_blank"><span>Curriculum Vitae</span><small>Download PDF</small><i>↗</i></a>
<a href="assets/docs/Beniditto-Eka-Viyantyo-Portfolio.pdf" rel="noopener noreferrer" target="_blank"><span>Project Portfolio</span><small>Open PDF</small><i>↗</i></a>
</div>
</section>
</main>
<footer class="site-footer shell">
<div><strong>BENIDITTO EKA VIYANTYO</strong><span>Personal portfolio · <span id="year"></span></span></div>
<p>Building useful systems, learning through real projects, and documenting the work honestly.</p>
<a href="#top">Back to top ↑</a>
</footer>`;

const pageMarkup = rawPageMarkup.replace(
  /(src|href)="(assets\/[^"]+)"/g,
  (_, attribute, path) => `${attribute}="${resolveAsset(path)}"`,
);

const resolvePortfolioDataAssets = () => {
  const data = window.portfolioData;
  if (!data) return;

  data.projects?.forEach((project) => {
    project.images = project.images.map(resolveAsset);
  });

  data.skills?.forEach((group) => {
    group.items.forEach((item) => {
      item.icon = resolveAsset(item.icon);
    });
  });
};

export default function App() {
  useEffect(() => {
    let active = true;

    const bootLegacyPortfolio = async () => {
      await import('./legacy/content.js');
      if (!active) return;
      resolvePortfolioDataAssets();
      await import('./legacy/app.js');
    };

    bootLegacyPortfolio().catch((error) => {
      console.error('Portfolio initialization failed:', error);
    });

    return () => {
      active = false;
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: pageMarkup }} />;
}
