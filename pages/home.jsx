
import React, { useEffect, useState } from 'react';
import { fetchSolutions, fetchProcessSteps } from '../data/api';
import './home-ux.css';
   import useScrollAnimations from './useScrollAnimations';
   import './scroll-fx-highlight.css';

const gallery = [
  {
    title: 'Growing Napier Grass for energy',
    text: 'Assessing crop yield, harvest cycles and biomass supply for a reliable feedstock plan.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4eQB6q2ACihYtjiH41CE9cOSuDivcxP8y0mbqUWrYvA2XeyK2P5azRLQ&s=10',
  },
  {
    title: 'Compressed Bio Gas plants',
    text: 'Biogas upgrading and compression can turn suitable raw gas into Bio-CNG/CBG.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlAckeXrA_YEw79tGiyrqd5U9g6QjXq-eaLOzVxVZm3A&s=10',
  },
  {
    title: 'Farm-to-energy circularity',
    text: 'Connect sustainable biomass cultivation with responsible plant operation and resource recovery.',
    image:
      'https://blog.driiv.co.in/wp-content/uploads/2025/12/ChatGPT-Image-Dec-24-2025-11_12_56-AM-1024x682.jpg',
  },
];
function NapierCbgProcess() {
  const steps = [
    { t: 'Grow & cut', d: 'Harvested every 45–60 days or so' },
    { t: 'Chop', d: 'Shredded small for faster breakdown' },
    { t: 'Digest', d: 'Sealed tank, no air: biogas 50–60% CH₄' },
    { t: 'Purify', d: 'CO₂, H₂S and moisture removed' },
    { t: 'Compress', d: 'Squeezed to about 250 bar' },
    { t: 'Bio-CNG', d: '≥ 90% CH₄, filled into cylinders', end: true },
  ];

  return (
    <div className="cbg-card">
      <h3 className="cbg-title">Napier grass to compressed biogas</h3>

      <svg
        className="cbg-svg"
        viewBox="0 76 820 200"
        role="img"
        aria-label="Grass, chopper, digester, purifier, compressor and cylinder connected in sequence"
      >
        <defs>
          <linearGradient id="cbgGas" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#3fd6c3" />
            <stop offset="1" stopColor="#1b8f84" />
          </linearGradient>
          <linearGradient id="cbgSlurry" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#5d7a1d" />
            <stop offset="1" stopColor="#34480f" />
          </linearGradient>
        </defs>

        <line x1="10" y1="210" x2="810" y2="210" stroke="#2a4a3a" strokeWidth="2" />

        {/* 1 Grass */}
        <g transform="translate(20 110)" strokeLinecap="round">
          <path d="M10 100C8 70 2 50 0 30M22 100C22 62 20 38 24 8M34 100C38 70 46 50 54 28M46 100C50 80 60 68 68 60" stroke="#52d96b" strokeWidth="6" fill="none" />
          <path d="M16 100C14 78 10 66 6 54M40 100C42 84 48 72 54 64" stroke="#2f9e4a" strokeWidth="5" fill="none" />
        </g>

        {/* 2 Chopper */}
        <g transform="translate(125 148)">
          <path d="M0 0H70L58 26H12Z" fill="#14271e" stroke="#7fa08d" strokeWidth="2" />
          <rect x="6" y="26" width="52" height="36" rx="5" fill="#14271e" stroke="#7fa08d" strokeWidth="2" />
          <circle cx="32" cy="44" r="10" fill="none" stroke="#9be564" strokeWidth="2.5" />
          <path d="M32 34V54M22 44H42" stroke="#9be564" strokeWidth="2" />
        </g>

        {/* 3 Digester */}
        <g transform="translate(250 90)">
          <path d="M0 50Q0 0 90 0T180 50" fill="#103f38" stroke="#3fd6c3" strokeWidth="2.5" />
          <rect y="50" width="180" height="70" rx="8" fill="#12251c" stroke="#7fa08d" strokeWidth="2" />
          <path d="M2 74q22-12 44 0t44 0t44 0t42 0V118H2Z" fill="url(#cbgSlurry)" />
          <g fill="#b6e36a">
            <circle className="cbg-bubble" cx="40" cy="100" r="4" />
            <circle className="cbg-bubble cbg-b2" cx="95" cy="104" r="3" />
            <circle className="cbg-bubble" cx="140" cy="98" r="4" />
          </g>
          <text x="90" y="34" textAnchor="middle" fontSize="12" fill="#3fd6c3" fontFamily="ui-monospace,monospace">biogas</text>
        </g>

        {/* 4 Purifier */}
        <g transform="translate(486 100)">
          <rect width="46" height="110" rx="14" fill="#0e1c15" stroke="#7fa08d" strokeWidth="2" />
          <path d="M8 30H38M8 55H38M8 80H38" stroke="#2a4a3a" strokeWidth="1.5" strokeDasharray="3 4" />
          <circle cx="23" cy="42" r="4" fill="#3fd6c3" />
          <circle cx="23" cy="92" r="4" fill="#ffb627" />
        </g>

        {/* 5 Compressor */}
        <g transform="translate(580 140)">
          <rect width="70" height="56" rx="10" fill="#14271e" stroke="#7fa08d" strokeWidth="2" />
          <path d="M14 38L26 18L38 38L50 18L58 30" stroke="#ffb627" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        {/* 6 Cylinder */}
        <g transform="translate(715 82)">
          <rect x="20" y="0" width="30" height="12" rx="4" fill="#9bb5a5" />
          <rect y="10" width="70" height="120" rx="30" fill="#0d1d1a" stroke="#3fd6c3" strokeWidth="2.5" />
          <rect x="14" y="34" width="42" height="12" rx="4" fill="url(#cbgGas)" />
          <rect x="14" y="54" width="42" height="12" rx="4" fill="url(#cbgGas)" />
          <rect x="14" y="74" width="42" height="12" rx="4" fill="url(#cbgGas)" />
          <rect x="14" y="94" width="42" height="12" rx="4" fill="#2a4a46" />
        </g>

        {/* pipes + animated flow */}
        <g fill="none" strokeLinejoin="round">
          <path d="M95 200V176H125" stroke="#2c4438" strokeWidth="9" />
          <path className="cbg-flow" d="M95 200V176H125" stroke="#9be564" strokeWidth="2.5" />
          <path d="M190 178H250" stroke="#2c4438" strokeWidth="9" />
          <path className="cbg-flow" d="M190 178H250" stroke="#9be564" strokeWidth="2.5" />
          <path d="M430 150H486" stroke="#2c4438" strokeWidth="9" />
          <path className="cbg-flow" d="M430 150H486" stroke="#ffb627" strokeWidth="2.5" />
          <path d="M532 168H580" stroke="#2c4438" strokeWidth="9" />
          <path className="cbg-flow" d="M532 168H580" stroke="#3fd6c3" strokeWidth="2.5" />
          <path d="M650 168H715" stroke="#2c4438" strokeWidth="9" />
          <path className="cbg-flow" d="M650 168H715" stroke="#3fd6c3" strokeWidth="2.5" />
          <path d="M340 210V232H410" stroke="#2c4438" strokeWidth="7" />
          <path className="cbg-flow" d="M340 210V232H410" stroke="#b6e36a" strokeWidth="2" />
        </g>
        <text x="418" y="236" fontSize="12" fill="#b6e36a" fontFamily="ui-monospace,monospace">digestate</text>
        {/* labels under each stage */}
<g
  textAnchor="middle"
  fontSize="13"
  fontWeight="600"
  fontFamily="system-ui, sans-serif"
  fill="#163b2b"
>
  <text className="cbg-label" x="55"  y="262" style={{ animationDelay: '0.2s' }}>Napier grass</text>
  <text className="cbg-label" x="160" y="262" style={{ animationDelay: '0.5s' }}>Chopper</text>
  <text className="cbg-label" x="340" y="262" style={{ animationDelay: '0.8s' }}>Digester</text>
  <text className="cbg-label" x="509" y="262" style={{ animationDelay: '1.1s' }}>Purifier</text>
  <text className="cbg-label" x="615" y="262" style={{ animationDelay: '1.4s' }}>Compressor</text>
  <text className="cbg-label" x="750" y="262" style={{ animationDelay: '1.7s' }}>Bio-CNG cylinder</text>
</g>
      </svg>

      <ol className="cbg-steps">
        {steps.map((s, i) => (
          <li key={s.t} className={s.end ? 'cbg-end' : ''}>
            <span className="cbg-n">{i + 1}</span>
            <b>{s.t}</b>
            {s.d}
          </li>
        ))}
      </ol>

      <div className="cbg-foot">
        <span className="cbg-amber">UP TO ~250 M³ CH₄ / TON ORGANIC MATTER</span>
        <span className="cbg-lime">DIGESTATE ⟶ ORGANIC MANURE</span>
      </div>
    </div>
  );
}

export default function Home({ setCurrentPage }) {
  const [solutions, setSolutions] = useState([]);
  const [steps, setSteps] = useState([]);
  useScrollAnimations([solutions, steps]);
// Section entrance animations (fx-animations.css)
useEffect(() => {
  if (!('IntersectionObserver' in window)) return;

  const root = document.documentElement;
  root.classList.add('fx-armed');

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fx-go');
          io.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -12% 0px', threshold: 0 }
  );

  document
    .querySelectorAll('.intro-section, .solutions-section, .process-section')
    .forEach((el) => io.observe(el));

  return () => {
    io.disconnect();
    root.classList.remove('fx-armed');
  };
}, []);
  // Load solutions and process steps
  useEffect(() => {
    fetchSolutions()
      .then(setSolutions)
      .catch((error) =>
        console.error('Error loading solutions:', error)
      );

    fetchProcessSteps()
      .then(setSteps)
      .catch((error) =>
        console.error('Error loading process steps:', error)
      );
  }, []);

  // Animated green particle background
  useEffect(() => {
    const container = document.getElementById('hero-particles');

    if (!container) return;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    canvas.setAttribute('aria-hidden', 'true');

    canvas.style.cssText = `
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      display: block;
      pointer-events: none;
    `;

    container.appendChild(canvas);

    let animationFrame;
    let width = 0;
    let height = 0;
    let particles = [];

    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = rect.width;
      height = rect.height;

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(
        65,
        Math.max(25, Math.floor((width * height) / 14000))
      );

      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        alpha: Math.random() * 0.4 + 0.2,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > width) {
          particle.vx *= -1;
        }

        if (particle.y < 0 || particle.y > height) {
          particle.vy *= -1;
        }

        // Draw each particle
        ctx.beginPath();
        ctx.arc(
          particle.x,
          particle.y,
          particle.radius,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = `rgba(36, 121, 78, ${particle.alpha})`;
        ctx.fill();

        // Connect nearby particles
        for (let j = index + 1; j < particles.length; j++) {
          const other = particles[j];
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 115) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(67, 166, 108, ${
              0.16 * (1 - distance / 115)
            })`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      });

      animationFrame = requestAnimationFrame(draw);
    };

    resizeCanvas();
    draw();

    const resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(container);

    return () => {
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      canvas.remove();
    };
  }, []);

  // Reveal elements when they enter the screen
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) =>
        element.classList.add('is-visible')
      );
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [solutions, steps]);

  return (
    <main>
      {/* HERO SECTION */}
      <section className="hero">
        {/* Animated particle background */}
        <div
          id="hero-particles"
          className="hero-particles"
          aria-hidden="true"
        />

        <div className="hero-grid container">
          <div className="hero-copy">
            <img
                  loading="lazy"
                  decoding="async"
              className="home-company-logo"
              src="/images/sri%20aishwarya%20lakshmi%20logo.jpg"
              alt="Sri Aishwarya Lakshmi Green Energies LLP"
              onError={(event) => {
                event.currentTarget.style.display = 'none';
              }}
            />

            <span className="eyebrow hero-badge">
              <span className="eyebrow-dot" />
              NAPIER GRASS · RENEWABLE ENERGY
            </span>

            <h1 className="hero-title">
              Napier Grass to
              <br />
              <span className="animated-heading">Compressed</span>
              <br />
              Bio Gas.
            </h1>

            <h2 className="hero-subtitle">
              Growing Napier Grass.{' '}
              <span>Generating clean energy.</span>
            </h2>

            <p className="hero-description">
              Discover how high-yield Napier Grass can be evaluated as
              a feedstock for biogas and Compressed Bio Gas (CBG), with
              project planning shaped around crop yield, water
              availability, land, and plant requirements.
            </p>

            <div className="hero-actions">
              <button
                className="btn"
                onClick={() => setCurrentPage('contact')}
              >
                Discuss Your Project ↗
              </button>

              <button
                className="secondary-btn"
                onClick={() => setCurrentPage('process')}
              >
                Explore Process →
              </button>
            </div>

            <div className="hero-proof">
              <span className="hero-proof-icon">♻</span>
              <div>
                <strong>Grass to gas</strong>
                <small>Napier Grass to Compressed Bio Gas</small>
              </div>
            </div>
          </div>

          {/* YouTube video */}
          {/* Napier grass to CBG process animation */}
<div className="hero-visual">
  <div className="hero-image-frame cbg-frame">
    <NapierCbgProcess />
  </div>

  <div className="image-orbit orbit-one" />
  <div className="image-orbit orbit-two" />

  <div className="floating-card">
    <span className="floating-card-icon">♻</span>
    <div>
      <strong>From grass to gas</strong>
      <small>A cleaner tomorrow starts today</small>
    </div>
  </div>
</div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="section intro-section">
        <div className="container intro-grid reveal">
          <div>
            <span className="eyebrow">WHY NAPIER GRASS?</span>
            <span class="footer-underline"></span>
            <h2>
              From green fields
              <br />
              <span className="green-text">to cleaner energy.</span>
            </h2>
          </div>

          <p className="intro-copy">
            Napier Grass is a potential energy crop for biogas
            production. A successful project starts with assessing local
            growing conditions, biomass yield, harvesting logistics,
            water needs and the right conversion technology.
          </p>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="section solutions-section">
        <div className="container">
          <div className="section-heading reveal">
            <div>
              <span className="eyebrow">What we do</span>
              <span class="footer-underline"></span>
              <h2>
                Napier Grass to
                <br />
                renewable gas
              </h2>
            </div>

            <p>
              Explore the journey from crop cultivation and biomass
              preparation to biogas production, gas upgrading and
              compressed Bio-CNG.
            </p>
          </div>

          <div className="grid">
            {solutions.map((item, index) => (
              <article
                className="card reveal"
                style={{ '--delay': `${index * 100}ms` }}
                key={item.id ?? index}
              >
                <div className="card-image-wrap">
                  <img
                  loading="lazy"
                  decoding="async"
                    src={item.image}
                    alt={item.title?.replace(/^[^A-Za-z]+/, '') || 'Renewable energy solution'}
                    className="card-img"
                    
                  />
                  <span className="image-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="card-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>

                  <button
                    className="text-link"
                    onClick={() => setCurrentPage('solutions')}
                  >
                    Explore solution <span>↗</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section process-section soft">
        <div className="container">
          <div className="section-heading reveal">
            <div>
              <span className="eyebrow">How it works</span>
              <h2>From Napier Grass to Compressed Bio Gas</h2>
            </div>

            <button
              className="outline-btn"
              onClick={() => setCurrentPage('process')}
            >
              View the process ↗
            </button>
          </div>

          <div className="grid process-grid">
            {steps.map((step, index) => (
              <article
                className="process-card reveal"
                style={{ '--delay': `${index * 100}ms` }}
                key={step.step ?? index}
              >
                <span className="step">
                  {String(step.step ?? index + 1).padStart(2, '0')}
                </span>
                <div className="process-line" />
                
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section gallery-section">
        <div className="container">
          <div className="section-heading reveal">
            <div>
              <span className="eyebrow">A greener tomorrow</span>
              <h2>A crop with energy potential.</h2>
              <span class="footer-underline"></span>
            </div>

            <p>
              Discover the landscapes, systems and communities that
              inspire a cleaner renewable gas.
            </p>
          </div>

          <div className="gallery-grid">
            {gallery.map((item, index) => (
              <article
                className={`gallery-card gallery-card-${index + 1} reveal`}
                style={{ '--delay': `${index * 120}ms` }}
                key={item.title}
              >
                <img
                  loading="lazy"
                  decoding="async"
                  src={item.image}
                  alt={item.title}
                  
                />

                <div className="gallery-overlay">
                  <span>NAPIER GRASS ENERGY</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="section impact-section">
        <div className="container impact-panel reveal">
          <div>
            <span className="eyebrow light-eyebrow">
              Make your next project count
            </span>
            <h2>Planning a Napier Grass Bio-CBG project?</h2>
            <p>
              Tell us about your land, expected biomass availability,
              water source and project location so the feasibility of
              your Napier Grass-to-CBG project can be explored.
            </p>
          </div>

          <button
            className="btn light-btn"
            onClick={() => setCurrentPage('contact')}
          >
            Start an Enquiry ↗
          </button>

          <div className="impact-decoration">♻</div>
        </div>
      </section>
    </main>
  );
}
