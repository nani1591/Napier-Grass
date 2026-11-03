import { useEffect } from 'react';
import './scroll-fx.css';
import './scroll-fx-highlight.css';

// Remember which groups were already prepared / played (survives re-runs)
const armed = new WeakSet();
const played = new WeakSet();
const groupItems = new WeakMap();

function arm(items, el, variant, delay = 0) {
  if (!el) return;
  variant.split(' ').forEach((v) => el.classList.add(`sa-${v}`));
  el.classList.add('sa');
  el.style.setProperty('--d', `${delay}ms`);
  items.push(el);
}

// Wrap every word of a heading so words can rise one by one
function splitWords(heading, baseDelay) {
  heading.setAttribute(
    'aria-label',
    heading.textContent.replace(/\s+/g, ' ').trim()
  );
  const counter = { n: 0 };

  const walk = (node, extra) => {
    Array.from(node.childNodes).forEach((child) => {
      if (child.nodeType === 3) {
        const frag = document.createDocumentFragment();
        child.textContent.split(/(\s+)/).forEach((part) => {
          if (!part) return;
          if (/^\s+$/.test(part)) {
            frag.appendChild(document.createTextNode(' '));
            return;
          }
          const outer = document.createElement('span');
          outer.className = 'sa-w';
          outer.setAttribute('aria-hidden', 'true');
          const inner = document.createElement('span');
          inner.className = 'sa-wi';
          inner.textContent = part;
          inner.style.setProperty('--i', counter.n + extra);
          counter.n += 1;
          outer.appendChild(inner);
          frag.appendChild(outer);
        });
        child.replaceWith(frag);
      } else if (child.nodeType === 1 && child.tagName !== 'BR') {
        // the green line arrives a beat after the dark line
        walk(child, child.classList.contains('green-text') ? 3 : extra);
      }
    });
  };

  walk(heading, 0);
  heading.classList.add('sa-words');
  heading.style.setProperty('--d', `${baseDelay}ms`);
}

// Wrap key phrases in <mark> so a highlighter sweep can be drawn over them
function highlightPhrases(el, phrases, baseDelay) {
  if (!el || el.querySelector('mark.sa-mark')) return;
  const escaped = phrases.map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const re = new RegExp(`(${escaped.join('|')})`, 'i');
  const lower = phrases.map((p) => p.toLowerCase());
  let n = 0;

  Array.from(el.childNodes).forEach((node) => {
    if (node.nodeType !== 3 || !re.test(node.textContent)) return;
    const frag = document.createDocumentFragment();
    node.textContent.split(new RegExp(`(${escaped.join('|')})`, 'gi')).forEach((part) => {
      if (!part) return;
      if (lower.includes(part.toLowerCase())) {
        const mark = document.createElement('mark');
        mark.className = 'sa-mark';
        mark.textContent = part;
        mark.style.setProperty('--m', `${baseDelay + n * 380}ms`);
        n += 1;
        frag.appendChild(mark);
      } else {
        frag.appendChild(document.createTextNode(part));
      }
    });
    node.replaceWith(frag);
  });
}

function prepareGroup(group, build) {
  if (!group || armed.has(group)) return;
  const items = [];
  build(items);
  groupItems.set(group, items);
  armed.add(group);
}

export default function useScrollAnimations(deps = []) {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const q = (sel) => Array.from(document.querySelectorAll(sel));
    const groups = [];

    // 1. WHY NAPIER GRASS
    q('.intro-section').forEach((g) => {
      prepareGroup(g, (items) => {
        arm(items, g.querySelector('.eyebrow'), 'eyebrow', 0);
        const h2 = g.querySelector('h2');
        if (h2) { splitWords(h2, 150); items.push(h2); }
        const copy = g.querySelector('.intro-copy');
        arm(items, copy, 'up bar', 650);
        highlightPhrases(
          copy,
          ['energy crop', 'biomass yield', 'water needs', 'conversion technology'],
          1300
        );
      });
      groups.push(g);
    });

    // 2. WHAT WE DO heading + 3. HOW IT WORKS heading
    q('.solutions-section .section-heading, .process-section .section-heading').forEach((g) => {
      prepareGroup(g, (items) => {
        arm(items, g.querySelector('.eyebrow'), 'eyebrow', 0);
        const h2 = g.querySelector('h2');
        if (h2) { splitWords(h2, 150); items.push(h2); }
        const sub = g.querySelector(':scope > p');
        arm(items, sub, 'up', 500);
        if (sub && g.closest('.solutions-section')) {
          highlightPhrases(
            sub,
            ['crop cultivation', 'biogas production', 'compressed Bio-CNG'],
            1200
          );
        }
        arm(items, g.querySelector('.outline-btn'), 'right', 500);
      });
      groups.push(g);
    });

    // Solution cards
    q('.solutions-section .grid > .card').forEach((card, i) => {
      const base = (i % 3) * 160;
      prepareGroup(card, (items) => {
        arm(items, card, 'rise', base);
        arm(items, card.querySelector('.card-image-wrap'), 'wipe', base + 250);
        arm(items, card.querySelector('.card-img'), 'zoom', base + 250);
        arm(items, card.querySelector('.image-number'), 'pop', base + 850);
        Array.from(card.querySelectorAll('.card-content > *')).forEach((c, k) =>
          arm(items, c, 'up', base + 600 + k * 90)
        );
      });
      groups.push(card);
    });

    // Process steps: circle -> line -> next circle ...
    q('.process-section .process-card').forEach((card, i) => {
      const base = (i % 3) * 380;
      prepareGroup(card, (items) => {
        arm(items, card.querySelector('.step'), 'pop', base);
        const line = card.querySelector('.process-line');
        if (line) {
          // the arrow pieces are positioned inside the line
          if (getComputedStyle(line).position === 'static') {
            line.style.position = 'relative';
          }
          arm(items, line, 'wipex', base + 300);
        }
        arm(items, card.querySelector('h3'), 'up', base + 250);
        arm(items, card.querySelector('p'), 'up', base + 400);
      });
      groups.push(card);
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const group = entry.target;
          (groupItems.get(group) || []).forEach((el) => el.classList.add('sa-in'));
          played.add(group);
          io.unobserve(group);
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -8% 0px' }
    );

    groups.forEach((g) => { if (!played.has(g)) io.observe(g); });

    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}