import React, { useEffect, useState } from 'react';
import {
  ArrowRight, Check, ChevronRight, Home, Menu, MessageCircle,
  MapPin, Plus, ShieldCheck, Wrench, X
} from 'lucide-react';
import { serviceBySlug, servicePages } from './serviceData.js';

const WHATSAPP_NUMBER = '5512991069682';
const SITE_URL = 'https://munizinformatica.com.br';

function waLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function updateMeta(service) {
  document.title = service.seoTitle;
  const pairs = [
    ['meta[name="description"]', 'content', service.description],
    ['link[rel="canonical"]', 'href', `${SITE_URL}/${service.slug}/`],
    ['meta[property="og:title"]', 'content', service.seoTitle],
    ['meta[property="og:description"]', 'content', service.description],
    ['meta[property="og:url"]', 'content', `${SITE_URL}/${service.slug}/`],
    ['meta[property="og:type"]', 'content', 'article'],
    ['meta[name="twitter:title"]', 'content', service.seoTitle],
    ['meta[name="twitter:description"]', 'content', service.description],
  ];
  pairs.forEach(([selector, attribute, value]) => {
    const element = document.querySelector(selector);
    if (element) element.setAttribute(attribute, value);
  });
}

function Header({ onMenuChange }) {
  const [open, setOpen] = useState(false);
  const setMenu = (value) => {
    setOpen(value);
    onMenuChange?.(value);
  };

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--hero-blue-border)] bg-[var(--hero-blue)]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 md:h-[84px] lg:px-8">
          <a href="/" aria-label="Muniz Informática — página inicial">
            <img src="/logo.png" alt="Muniz Informática & Tecnologia" width="271" height="129" className="h-auto w-[98px] sm:w-[114px] lg:w-[128px]" />
          </a>
          <nav className="hidden items-center gap-7 text-sm md:flex" aria-label="Navegação principal">
            <a href="/" className="font-medium hover:text-[var(--steel)]">Início</a>
            <a href="/#servicos" className="font-medium hover:text-[var(--steel)]">Serviços</a>
            <a href="/#como-funciona" className="font-medium hover:text-[var(--steel)]">Como funciona</a>
            <a href="/#duvidas" className="font-medium hover:text-[var(--steel)]">Dúvidas</a>
            <a href="/sobre/" className="font-medium hover:text-[var(--steel)]">Sobre</a>
          </nav>
          <a href={waLink('Olá! Encontrei o site da Muniz Informática e gostaria de solicitar uma avaliação.')} target="_blank" rel="noopener noreferrer" className="hidden items-center gap-2 rounded-lg bg-[var(--steel)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[var(--steel-deep)] md:inline-flex">
            <MessageCircle size={17} /> Chamar no WhatsApp
          </a>
          <button type="button" onClick={() => setMenu(true)} className="p-2 md:hidden" aria-label="Abrir menu"><Menu size={26} /></button>
        </div>
      </header>
      {open && (
        <div className="fixed inset-0 z-[70] md:hidden" role="dialog" aria-modal="true" aria-label="Menu de navegação">
          <button className="absolute inset-0 bg-black/60" onClick={() => setMenu(false)} aria-label="Fechar menu" />
          <aside className="absolute inset-y-0 right-0 flex h-[100dvh] w-[88vw] max-w-[340px] flex-col bg-[var(--paper)] shadow-2xl">
            <div className="flex min-h-[84px] items-center justify-between border-b border-[var(--line)] px-5">
              <img src="/logo.png" alt="Muniz Informática & Tecnologia" className="h-auto w-[110px]" />
              <button onClick={() => setMenu(false)} className="p-2" aria-label="Fechar menu"><X size={25} /></button>
            </div>
            <nav className="flex-1 space-y-1 overflow-y-auto p-4">
              {[['Início', '/'], ['Serviços', '/#servicos'], ['Como funciona', '/#como-funciona'], ['Dúvidas', '/#duvidas'], ['Sobre', '/sobre/'], ['Contato', '/#contato']].map(([name, href]) => (
                <a key={name} href={href} onClick={() => setMenu(false)} className="block rounded-xl px-4 py-3 font-medium hover:bg-[var(--steel-soft)]">{name}</a>
              ))}
            </nav>
            <div className="border-t border-[var(--line)] p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
              <a href={waLink('Olá! Gostaria de solicitar uma avaliação.')} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-xl bg-[var(--steel)] px-4 py-3.5 font-semibold text-white">
                <MessageCircle size={20} /> Falar no WhatsApp
              </a>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[var(--ink)] pb-8 pt-14 text-white/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <div className="mb-4 inline-flex"><img src="/logo.png" alt="Muniz Informática" className="h-auto w-[144px] brightness-0 invert" /></div>
          <p className="max-w-sm text-sm">Assistência técnica para computadores e notebooks em São José dos Campos, Jacareí e região.</p>
        </div>
        <div>
          <h2 className="mb-4 font-display text-xs font-semibold tracking-[2px] text-white">SERVIÇOS</h2>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            {servicePages.map((service) => <a key={service.slug} href={`/${service.slug}/`} className="hover:text-white">{service.shortTitle}</a>)}
          </div>
        </div>
        <div>
          <h2 className="mb-4 font-display text-xs font-semibold tracking-[2px] text-white">CONTATO</h2>
          <div className="space-y-2 text-sm">
            <a href="tel:+5512991069682" className="block hover:text-white">(12) 99106-9682</a>
            <a href="mailto:muniztecnologia.sjc@gmail.com" className="block break-all hover:text-white">muniztecnologia.sjc@gmail.com</a>
            <p>São José dos Campos, Jacareí e região</p>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 px-5 pt-7 text-center text-xs">© {new Date().getFullYear()} Muniz Informática &amp; Tecnologia. Todos os direitos reservados.</div>
    </footer>
  );
}

export function ServicePage({ slug }) {
  const service = serviceBySlug[slug];
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    updateMeta(service);
    window.scrollTo(0, 0);
  }, [service]);

  const related = service.relatedSlugs.map((item) => serviceBySlug[item]).filter(Boolean);
  const whatsapp = waLink(service.whatsappMessage);

  return (
    <div className="min-h-screen bg-[var(--paper)] text-[var(--ink)]">
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:rounded-lg focus:bg-[var(--ink)] focus:px-4 focus:py-2 focus:text-white">Pular para o conteúdo</a>
      <Header onMenuChange={setMenuOpen} />
      <main id="conteudo">
        <section className="hero-surface relative overflow-hidden pb-20 pt-[130px] md:pb-24 md:pt-[160px]">
          <div aria-hidden="true" className="absolute -right-32 -top-40 h-[520px] w-[520px] rounded-full bg-white/60 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <nav aria-label="Navegação estrutural" className="mb-8 flex flex-wrap items-center gap-2 text-sm text-[var(--ink)]/60">
              <a href="/" className="inline-flex items-center gap-1 hover:text-[var(--steel)]"><Home size={14} /> Início</a>
              <ChevronRight size={14} aria-hidden="true" />
              <a href="/#servicos" className="hover:text-[var(--steel)]">Serviços</a>
              <ChevronRight size={14} aria-hidden="true" />
              <span aria-current="page">{service.shortTitle}</span>
            </nav>
            <div className="grid items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <div className="mb-3 font-display text-xs font-semibold uppercase tracking-[3px] text-[var(--steel)]">{service.eyebrow}</div>
                <h1 className="mb-6 max-w-4xl font-display text-4xl font-semibold leading-[1.06] tracking-tight sm:text-5xl lg:text-[58px]">{service.title}</h1>
                <p className="mb-8 max-w-3xl text-lg leading-relaxed text-[var(--ink)]/70 md:text-xl">{service.intro}</p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--steel)] px-7 py-4 font-semibold text-white hover:bg-[var(--steel-deep)]"><MessageCircle size={19} /> Solicitar uma avaliação</a>
                  <a href="#como-funciona" className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--ink)]/20 px-7 py-4 font-medium hover:bg-white/40">Como funciona <ArrowRight size={17} /></a>
                </div>
              </div>
              <div className="lg:col-span-4">
                <div className="rounded-2xl border border-[var(--line)] bg-white p-6 shadow-[0_20px_50px_-25px_rgba(36,38,43,0.35)]">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--steel-soft)] text-[var(--steel)]"><Wrench size={21} /></div>
                  <h2 className="mb-4 font-display text-xl font-semibold">O atendimento pode incluir</h2>
                  <ul className="space-y-3">
                    {service.highlights.map((item) => <li key={item} className="flex items-start gap-3 text-sm text-[var(--ink)]/70"><Check className="mt-0.5 shrink-0 text-[var(--steel)]" size={17} />{item}</li>)}
                  </ul>
                  <div className="mt-6 border-t border-[var(--line)] pt-5 text-sm text-[var(--ink)]/60"><MapPin className="mr-2 inline text-[var(--steel)]" size={16} />São José dos Campos, Jacareí e região</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[var(--line)] bg-white py-20 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-12 lg:px-8">
            <div className="lg:col-span-5">
              <div className="mb-3 font-display text-xs font-semibold uppercase tracking-[3px] text-[var(--steel)]">Quando procurar ajuda</div>
              <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">{service.problemTitle}</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
              {service.problems.map((problem) => <div key={problem} className="flex gap-3 rounded-xl border border-[var(--line)] bg-[var(--paper)] p-5 text-[15px] leading-relaxed text-[var(--ink)]/70"><Check className="mt-0.5 shrink-0 text-[var(--steel)]" size={18} />{problem}</div>)}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-[var(--ink)] p-8 text-white md:p-12">
              <div className="mb-3 font-display text-xs font-semibold uppercase tracking-[3px] text-white/50">Avaliação responsável</div>
              <h2 className="mb-7 max-w-3xl font-display text-3xl font-semibold tracking-tight md:text-4xl">{service.explanationTitle}</h2>
              <div className="grid gap-6 text-lg leading-relaxed text-white/70 md:grid-cols-2">
                {service.explanation.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </div>
          </div>
        </section>

        <section id="como-funciona" className="scroll-mt-24 border-y border-[var(--line)] bg-white py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
            <div className="mb-12 max-w-2xl">
              <div className="mb-3 font-display text-xs font-semibold uppercase tracking-[3px] text-[var(--steel)]">Etapas do atendimento</div>
              <h2 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">Como funciona o serviço</h2>
            </div>
            <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {service.process.map(([title, description], index) => <li key={title} className="rounded-2xl border border-[var(--line)] p-6"><div className="mb-3 font-display text-4xl font-semibold text-[var(--steel)]/20">{String(index + 1).padStart(2, '0')}</div><h3 className="mb-2 font-display text-xl font-semibold">{title}</h3><p className="text-[15px] leading-relaxed text-[var(--ink)]/65">{description}</p></li>)}
            </ol>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <div className="mb-3 font-display text-xs font-semibold uppercase tracking-[3px] text-[var(--steel)]">Benefícios</div>
                <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">O que você pode esperar do atendimento</h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
                {service.benefits.map((benefit) => <div key={benefit} className="flex items-center gap-3 rounded-xl bg-[var(--steel-soft)] p-5 font-medium"><ShieldCheck className="shrink-0 text-[var(--steel)]" size={21} />{benefit}</div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[var(--line)] bg-white py-20 md:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
            <div className="mb-10">
              <div className="mb-3 font-display text-xs font-semibold uppercase tracking-[3px] text-[var(--steel)]">Dúvidas frequentes</div>
              <h2 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">Perguntas sobre {service.shortTitle.toLowerCase()}</h2>
            </div>
            <div className="space-y-3">
              {service.faqs.map(([question, answer]) => <details key={question} className="faq-item rounded-2xl border border-[var(--line)] px-6 py-1 open:bg-[var(--paper)]"><summary className="flex cursor-pointer items-center justify-between gap-4 py-4 font-display text-lg font-semibold">{question}<Plus className="faq-icon shrink-0 text-[var(--steel)]" size={20} /></summary><p className="pb-5 leading-relaxed text-[var(--ink)]/65">{answer}</p></details>)}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
            <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div><div className="mb-3 font-display text-xs font-semibold uppercase tracking-[3px] text-[var(--steel)]">Outros serviços</div><h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">Veja também</h2></div>
              <a href="/#servicos" className="inline-flex items-center gap-2 font-semibold text-[var(--steel)]">Todos os serviços <ArrowRight size={17} /></a>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {related.map((item) => <a key={item.slug} href={`/${item.slug}/`} className="group rounded-2xl border border-[var(--line)] bg-white p-6 transition hover:-translate-y-1 hover:border-[var(--steel)]"><h3 className="mb-2 font-display text-xl font-semibold">{item.shortTitle}</h3><p className="mb-4 text-sm leading-relaxed text-[var(--ink)]/65">{item.description}</p><span className="inline-flex items-center gap-1 font-semibold text-[var(--steel)]">Saiba mais <ArrowRight className="transition group-hover:translate-x-1" size={16} /></span></a>)}
            </div>
          </div>
        </section>

        <section className="bg-[var(--steel)] py-16 text-white">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-7 px-5 text-center sm:px-6 md:flex-row md:text-left lg:px-8">
            <div><h2 className="mb-2 font-display text-3xl font-semibold">Precisa de ajuda com seu equipamento?</h2><p className="text-white/75">Explique o problema pelo WhatsApp e receba uma orientação inicial.</p></div>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-4 font-semibold text-[var(--ink)] hover:bg-white/90"><MessageCircle size={19} /> Falar no WhatsApp</a>
          </div>
        </section>
      </main>
      <Footer />
      <a href={whatsapp} target="_blank" rel="noopener noreferrer" className={`fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--steel)] text-white shadow-lg transition hover:bg-[var(--steel-deep)] ${menuOpen ? 'pointer-events-none opacity-0' : 'opacity-100'}`} aria-label="Falar no WhatsApp"><MessageCircle size={26} /></a>
    </div>
  );
}

export function NotFoundPage() {
  useEffect(() => { document.title = 'Página não encontrada | Muniz Informática'; }, []);
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--paper)] px-5 text-center">
            <div><img src="/logo.png" alt="Muniz Informática" className="mx-auto mb-8 h-auto w-[176px]" /><div className="mb-3 font-display text-sm font-semibold tracking-[3px] text-[var(--steel)]">ERRO 404</div><h1 className="mb-4 font-display text-4xl font-semibold">Página não encontrada</h1><p className="mb-8 text-[var(--ink)]/65">O endereço acessado não existe ou foi alterado.</p><a href="/" className="inline-flex items-center gap-2 rounded-xl bg-[var(--steel)] px-6 py-4 font-semibold text-white">Voltar para o início <ArrowRight size={17} /></a></div>
    </div>
  );
}
