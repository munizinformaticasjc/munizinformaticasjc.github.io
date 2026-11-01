import { inView, stagger } from 'motion';
import { animate } from 'motion/mini';

declare global {
  interface Window { gtag?: (...args: unknown[]) => void }
}

// ── Analytics: um único evento de lead por clique no WhatsApp ──────────────────
document.addEventListener('click', (event) => {
  const link = (event.target as HTMLElement).closest('a');
  if (!link || typeof window.gtag !== 'function') return;
  if (link.href.includes('wa.me/')) {
    window.gtag('event', 'generate_lead', {
      method: 'whatsapp',
      lead_source: link.dataset.wa ?? 'desconhecido',
      page_path: location.pathname,
    });
  } else if (link.href.startsWith('mailto:')) {
    window.gtag('event', 'clique_email', { page_path: location.pathname });
  }
});

// ── Barra fixa de WhatsApp no celular ─────────────────────────────────────────
const bar = document.querySelector<HTMLElement>('[data-mobile-cta]');
if (bar) {
  const link = bar.querySelector('a')!;
  const update = () => {
    const show = window.scrollY > window.innerHeight * 0.6;
    bar.classList.toggle('translate-y-full', !show);
    link.tabIndex = show ? 0 : -1;
  };
  update();
  window.addEventListener('scroll', update, { passive: true });
}

// ── Entradas ao rolar ─────────────────────────────────────────────────────────
// O conteúdo só é escondido via CSS quando a classe .js existe e o usuário aceita movimento.
// Se este script falhar por qualquer motivo, o fallback mostra tudo em 2,5 s.
const root = document.documentElement;
const fallback = window.setTimeout(() => root.classList.add('reveal-fallback'), 2500);
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduce) {
  inView(
    '[data-reveal]',
    (el) => {
      const children = el.querySelectorAll<HTMLElement>('[data-reveal-item]');
      el.classList.add('is-in');
      animate(el, { opacity: [0, 1], transform: ['translateY(18px)', 'none'] }, { duration: 0.6, ease: [0.25, 1, 0.5, 1] });
      if (children.length) {
        animate(children, { opacity: [0, 1], transform: ['translateY(14px)', 'none'] }, { duration: 0.5, delay: stagger(0.06, { startDelay: 0.1 }), ease: [0.25, 1, 0.5, 1] });
      }
    },
    { margin: '0px 0px -10% 0px' },
  );

  // Traços de circuito em SVG que se desenham ao entrar na tela.
  inView('[data-draw]', (el) => {
    el.querySelectorAll<SVGPathElement>('path').forEach((path, i) => {
      const len = path.getTotalLength();
      path.style.strokeDasharray = `${len}`;
      animate(path, { strokeDashoffset: [String(len), '0'] }, { duration: 1.4, delay: i * 0.12, ease: [0.65, 0, 0.35, 1] });
    });
  });
}
window.clearTimeout(fallback);
