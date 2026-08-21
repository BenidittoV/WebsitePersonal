(() => {
  'use strict';

  const data = window.portfolioData;
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));

  const imageLayout = project => {
    const images = project.images
      .map((src, index) => `<img src="${src}" alt="${project.title} project screenshot ${index + 1}" loading="lazy" />`)
      .join('');

    return `
      <div class="project-visual visual-${project.layout}">
        <span class="visual-label">PROJECT VISUAL / ${project.number}</span>
        <span class="orb" aria-hidden="true"></span>
        ${images}
      </div>`;
  };

  function renderProjects() {
    const list = $('#project-list');
    list.innerHTML = data.projects.map((project, index) => `
      <article class="project-case${index === 0 ? ' is-active' : ''}" data-project-index="${index}" data-accent="${project.accent}">
        <div class="project-info">
          <div class="project-kicker"><span>${project.number} / ${project.eyebrow}</span><span>${project.year}</span></div>
          <h3>${project.title}</h3>
          <p class="project-role">${project.role}</p>
          <p class="project-summary">${project.summary}</p>
          <details class="project-detail">
            <summary>Read my contribution</summary>
            <div>
              <h4>Contribution & impact</h4>
              <p>${project.contribution}</p>
              <h4>What I learned</h4>
              <p>${project.learned}</p>
            </div>
          </details>
          <ul class="project-tags">${project.stack.map(item => `<li>${item}</li>`).join('')}</ul>
          <div class="project-links">
            ${project.links.map(link => `<a href="${link.href}" target="_blank" rel="noreferrer">${link.label} <span aria-hidden="true">↗</span></a>`).join('')}
          </div>
        </div>
        ${imageLayout(project)}
      </article>
    `).join('');
  }

  function renderSkills() {
    $('#skill-groups').innerHTML = data.skills.map((group, index) => `
      <article class="skill-group reveal" data-delay="${index * 70}">
        <h3>${String(index + 1).padStart(2, '0')} / ${group.title}</h3>
        <div class="skill-logo-grid">
          ${group.items.map((item, itemIndex) => `
            <span class="skill-logo" tabindex="0" role="img" aria-label="${item.name}" title="${item.name}" style="--logo-color:${item.color};--logo-delay:${index * 190 + itemIndex * 58}ms">
              <img src="${item.icon}" alt="" aria-hidden="true" loading="lazy" />
              <small>${item.name}</small>
            </span>
          `).join('')}
        </div>
      </article>
    `).join('');
  }

  function setupReveal() {
    const elements = $$('.reveal');
    if (reduceMotion || !('IntersectionObserver' in window)) {
      elements.forEach(element => element.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const delay = Number(entry.target.dataset.delay || 0);
        window.setTimeout(() => entry.target.classList.add('is-visible'), delay);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -55px' });

    elements.forEach(element => observer.observe(element));
  }

  function setupOpeningCodeSequence() {
    const terminal = $('[data-boot-terminal]');
    const typedValues = terminal ? $$('[data-terminal-type]', terminal) : [];
    const commands = terminal ? $$('.terminal-command', terminal) : [];
    const focus = $('[data-decode]');
    const focusPanel = focus?.closest('.profile-card__bottom');

    if (!terminal && !focus) return;

    if (reduceMotion) {
      commands.forEach(command => command.classList.add('is-terminal-visible'));
      typedValues.forEach(value => value.classList.add('is-terminal-visible'));
      return;
    }

    // Prime the opening state before the first rendered frame so there is no
    // flash of fully resolved text before the boot/decrypt sequence begins.
    terminal?.classList.add('is-booting');
    if (focus) {
      const target = focus.textContent.trim();
      focus.dataset.decodeTarget = target;
      const seedGlyphs = '01<>/{}[]#@$%&*+-=';
      focus.textContent = [...target].map((character, index) =>
        character === ' ' ? ' ' : seedGlyphs[(index * 7) % seedGlyphs.length]
      ).join('');
      focus.classList.add('is-decoding');
    }

    const sleep = ms => new Promise(resolve => window.setTimeout(resolve, ms));

    const typeText = async (element, speed = 16) => {
      const text = element.textContent.trim();
      element.textContent = '';
      element.classList.add('is-terminal-visible', 'is-typing');
      for (let index = 0; index < text.length; index += 1) {
        element.textContent += text[index];
        await sleep(speed + (index % 5 === 0 ? 8 : 0));
      }
      element.classList.remove('is-typing');
    };

    const decodeText = async element => {
      const target = element.dataset.decodeTarget || element.textContent.trim();
      const glyphs = '01<>/{}[]#@$%&*+-=';
      const frames = 24;
      element.classList.add('is-decoding');
      focusPanel?.classList.add('is-focus-decoding');

      for (let frame = 0; frame <= frames; frame += 1) {
        const settled = Math.floor((frame / frames) * target.length);
        element.textContent = [...target].map((character, index) => {
          if (character === ' ') return ' ';
          if (index < settled) return target[index];
          return glyphs[(index * 7 + frame * 3) % glyphs.length];
        }).join('');
        await sleep(28);
      }

      element.textContent = target;
      element.classList.remove('is-decoding');
      element.classList.add('is-decoded');
      window.setTimeout(() => focusPanel?.classList.remove('is-focus-decoding'), 260);
    };

    const runTerminal = async () => {
      await sleep(260);

      for (let index = 0; index < typedValues.length; index += 1) {
        const command = commands[index];
        if (command) {
          command.classList.add('is-terminal-visible');
          await sleep(90);
        }
        await typeText(typedValues[index], index === 0 ? 18 : 14);
        await sleep(115);
      }

      await sleep(180);
      terminal.classList.remove('is-booting');
    };

    window.setTimeout(() => {
      runTerminal();
      if (focus) window.setTimeout(() => decodeText(focus), 420);
    }, 320);
  }

  function setupCounters() {
    const section = $('#about');
    const frame = $('.stats-grid', section);
    const counters = $$('.stat-number', frame);
    const animationIds = new WeakMap();

    const finalText = element => {
      const target = Number(element.dataset.target || 0);
      const decimals = Number(element.dataset.decimals || 0);
      const pad = Number(element.dataset.pad || 0);
      const raw = decimals ? target.toFixed(decimals) : String(Math.round(target));
      return decimals ? raw : raw.padStart(pad, '0');
    };

    const animate = element => {
      const previous = animationIds.get(element);
      if (previous) cancelAnimationFrame(previous);

      if (reduceMotion) {
        element.textContent = finalText(element);
        return;
      }

      const target = Number(element.dataset.target || 0);
      const decimals = Number(element.dataset.decimals || 0);
      const pad = Number(element.dataset.pad || 0);
      const duration = 760;
      const start = performance.now();

      const frame = now => {
        const progress = clamp((now - start) / duration);
        const eased = 1 - Math.pow(1 - progress, 4);
        const value = target * eased;
        const raw = decimals ? value.toFixed(decimals) : String(Math.round(value));
        element.textContent = decimals ? raw : raw.padStart(pad, '0');

        if (progress < 1) {
          animationIds.set(element, requestAnimationFrame(frame));
        } else {
          element.textContent = finalText(element);
          animationIds.delete(element);
        }
      };

      animationIds.set(element, requestAnimationFrame(frame));
    };

    const activate = () => {
      frame.classList.add('is-inview');
      counters.forEach((counter, index) => {
        window.setTimeout(() => animate(counter), reduceMotion ? 0 : index * 105);
      });
    };

    if (reduceMotion || !('IntersectionObserver' in window)) {
      activate();
      return;
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        activate();
        observer.unobserve(frame);
      });
    }, { threshold: 0.22, rootMargin: '0px 0px -12%' });

    observer.observe(frame);
  }

  function setupTimelineMarkerSync() {
    const section = $('#experience');
    if (!section) return;

    const activate = () => section.classList.add('is-marker-active');

    if (reduceMotion || !('IntersectionObserver' in window)) {
      activate();
      return;
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        activate();
        observer.unobserve(section);
      });
    }, { threshold: 0.18, rootMargin: '0px 0px -10%' });

    observer.observe(section);
  }

  function setupSectionEntrances() {
    const frames = $$('.timeline-item, .skill-group');

    if (reduceMotion || !('IntersectionObserver' in window)) {
      frames.forEach(frame => frame.classList.add('is-inview'));
      return;
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-inview');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.18, rootMargin: '0px 0px -10%' });

    frames.forEach(frame => observer.observe(frame));
  }


  function setupProjectScroller() {
    const scroller = $('#project-scroll');
    const pin = $('.project-pin', scroller);
    const viewport = $('.project-viewport', scroller);
    const track = $('#project-list');
    const progressBar = $('.project-scroll-progress i', scroller);
    const currentLabel = $('.project-scroll-count b', scroller);
    const cards = $$('.project-case', track);
    const media = window.matchMedia('(min-width: 981px)');

    let horizontal = false;
    let travel = 0;
    let start = 0;
    let frame = 0;

    const setActiveCard = viewportCenter => {
      let activeIndex = 0;
      let nearest = Number.POSITIVE_INFINITY;

      cards.forEach((card, index) => {
        const center = card.offsetLeft + card.offsetWidth / 2;
        const distance = Math.abs(center - viewportCenter);
        if (distance < nearest) {
          nearest = distance;
          activeIndex = index;
        }
      });

      cards.forEach((card, index) => card.classList.toggle('is-active', index === activeIndex));
      currentLabel.textContent = String(activeIndex + 1).padStart(2, '0');
    };

    const update = () => {
      frame = 0;
      if (!horizontal || travel <= 0) return;

      const progress = clamp((window.scrollY - start) / travel);
      const offset = travel * progress;
      track.style.transform = `translate3d(${-offset}px, 0, 0)`;
      progressBar.style.transform = `scaleX(${progress})`;
      setActiveCard(offset + viewport.clientWidth / 2);
    };

    const requestUpdate = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    const measure = () => {
      horizontal = media.matches && !reduceMotion;
      scroller.classList.toggle('is-horizontal', horizontal);

      if (!horizontal) {
        scroller.style.height = '';
        track.style.transform = '';
        progressBar.style.transform = '';
        cards.forEach((card, index) => card.classList.toggle('is-active', index === 0));
        currentLabel.textContent = '01';
        return;
      }

      travel = Math.max(0, track.scrollWidth - viewport.clientWidth);
      const stickyTop = Number.parseFloat(getComputedStyle(pin).top) || 0;
      scroller.style.height = `${pin.offsetHeight + travel}px`;
      start = scroller.getBoundingClientRect().top + window.scrollY - stickyTop;
      update();
    };

    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', measure);
    media.addEventListener?.('change', measure);
    $$('img', track).forEach(image => image.addEventListener('load', measure, { once: true }));
    $$('details', track).forEach(details => details.addEventListener('toggle', measure));

    if ('ResizeObserver' in window) {
      const resizeObserver = new ResizeObserver(measure);
      resizeObserver.observe(viewport);
      resizeObserver.observe(track);
    }

    requestAnimationFrame(measure);
  }

  function setupContactSequence() {
    const section = $('#contact');
    const block = $('.contact-sequence', section);
    if (!section || !block) return;

    const play = () => block.classList.add('is-playing');

    if (reduceMotion || !('IntersectionObserver' in window)) {
      play();
      return;
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        play();
        observer.unobserve(section);
      });
    }, { threshold: 0.22, rootMargin: '0px 0px -10%' });

    observer.observe(section);
  }

  function setupHeader() {
    const header = $('.site-header');
    const progress = $('.scroll-progress span');
    const navLinks = $$('.desktop-nav a');
    const sections = $$('main section[id]');

    const updateScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progressValue = max > 0 ? window.scrollY / max : 0;
      progress.style.transform = `scaleX(${progressValue})`;
      header.classList.toggle('is-scrolled', window.scrollY > 28);
    };

    updateScroll();
    window.addEventListener('scroll', updateScroll, { passive: true });

    if ('IntersectionObserver' in window) {
      const sectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          navLinks.forEach(link => link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`));
        });
      }, { rootMargin: '-34% 0px -56%' });
      sections.forEach(section => sectionObserver.observe(section));
    }
  }

  function setupMobileMenu() {
    const button = $('.menu-button');
    const menu = $('.mobile-menu');

    const setOpen = open => {
      button.setAttribute('aria-expanded', String(open));
      button.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
      menu.setAttribute('aria-hidden', String(!open));
      document.body.classList.toggle('is-locked', open);
    };

    button.addEventListener('click', () => setOpen(button.getAttribute('aria-expanded') !== 'true'));
    $$('a', menu).forEach(link => link.addEventListener('click', () => setOpen(false)));
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1180) setOpen(false);
    });
  }

  function setupPointerEffects() {
    if (reduceMotion || !window.matchMedia('(pointer: fine)').matches) return;
    const glow = $('.cursor-glow');
    window.addEventListener('pointermove', event => {
      document.documentElement.style.setProperty('--pointer-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--pointer-y', `${event.clientY}px`);
      glow.classList.add('is-visible');
    }, { passive: true });
    document.documentElement.addEventListener('mouseleave', () => glow.classList.remove('is-visible'));

    const card = $('[data-tilt]');
    if (card) {
      card.addEventListener('pointermove', event => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(1100px) rotateY(${x * 4}deg) rotateX(${-y * 4}deg)`;
      });
      card.addEventListener('pointerleave', () => { card.style.transform = ''; });
    }
  }

  renderProjects();
  renderSkills();
  setupReveal();
  setupOpeningCodeSequence();
  setupCounters();
  setupTimelineMarkerSync();
  setupSectionEntrances();
  setupProjectScroller();
  setupContactSequence();
  setupHeader();
  setupMobileMenu();
  setupPointerEffects();
  $('#year').textContent = new Date().getFullYear();
})();
