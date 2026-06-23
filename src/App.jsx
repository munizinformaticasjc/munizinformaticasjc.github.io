import React, { useState, useEffect } from 'react';
import {
  Menu, X, MessageCircle, Plus, ArrowRight,
  Gauge, RotateCcw, ShieldAlert, Thermometer,
  FolderLock, HelpCircle, RefreshCw, LifeBuoy,
  Wrench, MonitorCog, ShieldCheck, FolderCog, Headphones,
  MapPin, Wifi,
} from 'lucide-react';

const WHATSAPP_NUMBER = '5512991069682';
const DEFAULT_MESSAGE = 'Olá, encontrei o site da Muniz Informática e gostaria de solicitar uma avaliação para meu computador ou notebook.';

function waLink(message = DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const navLinks = [
  { name: 'Início', href: '#inicio' },
  { name: 'Serviços', href: '#servicos' },
  { name: 'Como funciona', href: '#como-funciona' },
  { name: 'Dúvidas', href: '#duvidas' },
  { name: 'Contato', href: '#contato' },
];

const symptoms = [
  {
    label: 'Computador ou notebook lento',
    icon: Gauge,
    message: 'Olá! Meu computador (ou notebook) está muito lento. Gostaria de solicitar uma avaliação.',
  },
  {
    label: 'Trava ou reinicia sozinho',
    icon: RotateCcw,
    message: 'Olá! Meu equipamento está travando e reiniciando sozinho. Gostaria de solicitar uma avaliação.',
  },
  {
    label: 'Aparecem propagandas ou telas estranhas',
    icon: ShieldAlert,
    message: 'Olá! Estão aparecendo propagandas e telas estranhas no meu computador sozinhas. Gostaria de solicitar uma avaliação.',
  },
  {
    label: 'Esquenta ou desliga sozinho',
    icon: Thermometer,
    message: 'Olá! Meu notebook está esquentando muito e desligando sozinho. Gostaria de solicitar uma avaliação.',
  },
  {
    label: 'Tenho medo de perder meus arquivos',
    icon: FolderLock,
    message: 'Olá! Estou com receio de perder meus arquivos e gostaria de saber sobre backup e organização de arquivos.',
  },
  {
    label: 'Não sei instalar ou configurar um programa',
    icon: HelpCircle,
    message: 'Olá! Estou com dificuldade para instalar/configurar um programa. Gostaria de ajuda.',
  },
  {
    label: 'Preciso reinstalar o Windows do zero',
    icon: RefreshCw,
    message: 'Olá! Preciso formatar e reinstalar o Windows no meu computador. Gostaria de solicitar uma avaliação.',
  },
  {
    label: 'Já tentei resolver sozinho e não consegui',
    icon: LifeBuoy,
    message: 'Olá! Já tentei resolver um problema no meu computador sozinho e não consegui. Gostaria de ajuda.',
  },
];

const serviceCategories = [
  {
    id: 'cat-manutencao',
    title: 'Manutenção e desempenho',
    icon: Wrench,
    items: [
      'Avaliação de computadores lentos',
      'Correção de erros e travamentos',
      'Limpeza e otimização do sistema',
      'Limpeza interna de computadores e notebooks',
      'Manutenção preventiva',
      'Avaliação de aquecimento',
      'Verificação do sistema de refrigeração',
    ],
    links: [
      ['Computador lento', '/computador-lento/'],
      ['Limpeza de notebook', '/limpeza-de-notebook/'],
      ['Manutenção de computadores', '/manutencao-de-computadores/'],
      ['Upgrade para SSD', '/upgrade-ssd/'],
    ],
  },
  {
    id: 'cat-sistema',
    title: 'Sistema e instalação',
    icon: MonitorCog,
    items: [
      'Formatação de computadores e notebooks',
      'Instalação e configuração do Windows',
      'Instalação de drivers',
      'Instalação e configuração de programas',
      'Configuração de computadores e notebooks',
    ],
    links: [
      ['Formatação de notebook', '/formatacao-de-notebook/'],
      ['Instalação do Windows', '/instalacao-do-windows/'],
    ],
  },
  {
    id: 'cat-seguranca',
    title: 'Vírus e segurança',
    icon: ShieldCheck,
    items: [
      'Remoção de vírus',
      'Remoção de programas indesejados',
    ],
    links: [
      ['Remoção de vírus', '/remocao-de-virus/'],
    ],
  },
  {
    id: 'cat-backup',
    title: 'Backup e arquivos',
    icon: FolderCog,
    items: [
      'Backup de arquivos',
      'Configuração de backup',
      'Transferência e organização de arquivos',
    ],
    links: [
      ['Backup de arquivos', '/backup-de-arquivos/'],
    ],
  },
  {
    id: 'cat-suporte',
    title: 'Suporte e orientação',
    icon: Headphones,
    items: [
      'Suporte remoto',
      'Suporte presencial',
      'Orientação ao usuário',
    ],
    links: [
      ['Suporte remoto', '/suporte-remoto/'],
      ['Assistência técnica em SJC', '/assistencia-tecnica-em-sao-jose-dos-campos/'],
    ],
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Contato',
    desc: 'Você explica pelo WhatsApp o que está acontecendo e informa os principais sintomas apresentados pelo equipamento.',
  },
  {
    step: '02',
    title: 'Avaliação',
    desc: 'O equipamento ou sistema é analisado para identificar as possíveis causas e definir os próximos passos.',
  },
  {
    step: '03',
    title: 'Orçamento e serviço',
    desc: 'Antes da execução, o serviço recomendado e o valor são explicados. O atendimento prossegue após sua aprovação.',
  },
  {
    step: '04',
    title: 'Finalização',
    desc: 'Após o serviço, são realizados os testes necessários e você recebe uma explicação clara sobre o que foi feito.',
  },
];

const faqs = [
  {
    q: 'Quem realiza o atendimento?',
    a: 'O atendimento é feito diretamente pelo responsável técnico da Muniz Informática, desde a avaliação inicial até a conclusão do serviço.',
  },
  {
    q: 'O atendimento é remoto ou presencial?',
    a: 'As duas modalidades estão disponíveis. Alguns problemas de sistema, configuração e programas podem ser atendidos remotamente. Quando é necessário avaliar o equipamento fisicamente, o atendimento é presencial em São José dos Campos, Jacareí e Região.',
  },
  {
    q: 'Como funciona o orçamento?',
    a: 'Primeiro é feita uma avaliação do problema. Depois, o serviço recomendado e o valor são informados antes da execução, para que você possa decidir com tranquilidade.',
  },
  {
    q: 'É possível recuperar arquivos perdidos?',
    a: 'A possibilidade depende do estado do dispositivo e precisa ser avaliada. Não é possível garantir a recuperação antes da análise. Em formatações, o backup pode ser realizado quando necessário e tecnicamente possível.',
  },
  {
    q: 'Atende pequenas empresas ou só residências?',
    a: 'A Muniz Informática atende usuários residenciais, profissionais autônomos e pequenos negócios que precisam de suporte para computadores e notebooks.',
  },
  {
    q: 'Em quanto tempo recebo retorno?',
    a: 'As mensagens são respondidas de segunda a sexta, em horário comercial, conforme a ordem de atendimento.',
  },
];

function Section({ id, className = '', children }) {
  return (
    <section id={id} className={`scroll-mt-24 reveal ${className}`}>
      {children}
    </section>
  );
}

function Eyebrow({ children }) {
  return (
    <div className="font-display text-xs font-semibold tracking-[3px] text-[var(--steel)] uppercase mb-3">
      {children}
    </div>
  );
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showFloatingCta, setShowFloatingCta] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const heroRef = React.useRef(null);

  const toggleMenu = () => setIsMenuOpen((v) => !v);

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Altera suavemente o fundo do cabeçalho assim que a página começa a rolar.
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mantém o menu móvel preso à viewport, bloqueia a rolagem do conteúdo e permite fechar com Esc.
  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  // O botão flutuante só aparece depois que o Hero (que já tem CTA de WhatsApp) sai de vista,
  // evitando dois botões sobrepostos na mesma tela.
  useEffect(() => {
    if (!heroRef.current) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => setShowFloatingCta(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="font-body text-[var(--ink)] bg-[var(--paper)] min-h-screen">
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-[var(--ink)] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
      >
        Pular para o conteúdo
      </a>

      {/* HEADER */}
      <header
        className={`fixed inset-x-0 top-0 w-full backdrop-blur-xl border-b z-50 transition-[background-color,border-color,box-shadow] duration-300 ${
          isScrolled
            ? 'bg-[var(--hero-blue)]/95 border-[var(--hero-blue-border)] shadow-[0_8px_28px_-22px_rgba(28,66,89,0.65)]'
            : 'bg-[var(--hero-blue)]/95 border-[var(--hero-blue-border)]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-[72px] md:h-[84px]">
            <a
              href="#inicio"
              className="flex-shrink-0 flex items-center"
              aria-label="Muniz Informática & Tecnologia — início"
            >
              <img
                src="/logo.png"
                alt="Muniz Informática & Tecnologia"
                width="271"
                height="129"
                className="w-[98px] sm:w-[114px] lg:w-[128px] h-auto object-contain"
              />
            </a>

            <nav className="hidden md:flex items-center gap-8 text-sm" aria-label="Navegação principal">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[var(--ink)]/70 hover:text-[var(--ink)] font-medium transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:h-px after:w-0 after:bg-[var(--steel)] after:transition-all hover:after:w-full"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="hidden md:block">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[var(--steel)] hover:bg-[var(--steel-deep)] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 active:scale-[0.98]"
              >
                <MessageCircle size={17} />
                Chamar no WhatsApp
              </a>
            </div>

            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 -mr-2 text-[var(--ink)]"
                aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>

      </header>

      {/* MENU MÓVEL — fora do header para não herdar o backdrop-filter nem ficar preso ao cabeçalho */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[70] md:hidden" role="dialog" aria-modal="true" aria-label="Menu de navegação">
          <button
            type="button"
            className="absolute inset-0 bg-black/60"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Fechar menu"
          />

          <aside
            className="absolute inset-y-0 right-0 flex h-[100dvh] w-[88vw] max-w-[340px] flex-col overflow-hidden border-l border-[var(--line)] bg-[#f3f4f3] shadow-2xl"
          >
            <div className="flex min-h-[84px] items-center justify-between border-b border-[var(--line)] px-5">
              <img
                src="/logo.png"
                alt="Muniz Informática & Tecnologia"
                width="271"
                height="129"
                className="w-[110px] h-auto object-contain"
              />
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg p-2 text-[var(--ink)]/70 transition-colors hover:bg-black/5 hover:text-[var(--ink)]"
                aria-label="Fechar menu"
              >
                <X size={25} />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto overscroll-contain px-4 py-5" aria-label="Navegação móvel">
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-[var(--ink)] transition-colors hover:bg-[var(--steel-soft)]"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </nav>

            <div className="shrink-0 border-t border-[var(--line)] bg-[#f3f4f3] p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-[var(--steel)] px-4 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[var(--steel-deep)]"
              >
                <MessageCircle size={20} />
                Falar no WhatsApp
              </a>
              <p className="mt-3 text-center text-xs leading-relaxed text-[var(--ink)]/55">
                São José dos Campos, Jacareí e Região
              </p>
            </div>
          </aside>
        </div>
      )}

      <main id="inicio">
        {/* HERO */}
        <Section className="hero-surface relative pt-[132px] pb-20 md:pt-[168px] md:pb-28 overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-white blur-3xl opacity-45"
          />
          <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              <div className="lg:col-span-7">
                <Eyebrow>Assistência técnica para computadores e notebooks · SJC, Jacareí e Região</Eyebrow>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-[58px] font-semibold leading-[1.05] tracking-tight mb-6">
                  Computador lento, travando ou abrindo propagandas?
                  <span className="text-[var(--steel)]"> A Muniz Informática pode ajudar.</span>
                </h1>
                <p className="text-lg md:text-xl text-[var(--ink)]/70 max-w-xl mb-9 leading-relaxed">
                  Atendimento técnico direto e personalizado para avaliar o problema e indicar a solução mais adequada.
                  Atendimento presencial em São José dos Campos, Jacareí e Região, além de suporte remoto conforme o tipo de serviço.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={waLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[var(--steel)] hover:bg-[var(--steel-deep)] text-white font-semibold text-base px-7 py-4 rounded-xl transition-all active:scale-[0.98]"
                  >
                    <MessageCircle size={19} />
                    Falar pelo WhatsApp
                  </a>
                  <a
                    href="#servicos"
                    className="inline-flex items-center justify-center gap-2 border border-[var(--ink)]/20 hover:bg-[var(--ink)]/5 font-medium text-base px-7 py-4 rounded-xl transition-all"
                  >
                    Conhecer os serviços
                    <ArrowRight size={17} />
                  </a>
                </div>

                <p className="mt-6 text-sm text-[var(--ink)]/55">
                  Avaliação e orçamento antes da execução do serviço · Atendimento de segunda a sexta
                </p>
                <div ref={heroRef} aria-hidden="true" />
              </div>

              {/* Painel de diagnóstico — elemento de assinatura visual do hero */}
              <div className="lg:col-span-5">
                <div className="bg-white border border-[var(--line)] rounded-2xl shadow-[0_20px_50px_-25px_rgba(36,38,43,0.35)] p-6 max-w-sm mx-auto lg:mx-0">
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-display text-xs font-semibold tracking-[2px] uppercase text-[var(--ink)]/50">
                      Exemplo de avaliação
                    </span>
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="status-dot relative inline-flex rounded-full h-2.5 w-2.5 text-[var(--signal)]" />
                    </span>
                  </div>
                  <ul className="space-y-3.5">
                    {[
                      ['Sistema', 'Lento na inicialização'],
                      ['Antivírus', 'Desatualizado'],
                      ['Disco', 'Quase sem espaço livre'],
                      ['Backup', 'Não configurado'],
                    ].map(([label, status]) => (
                      <li key={label} className="flex items-center justify-between text-sm border-b border-[var(--line)] pb-3.5 last:border-0 last:pb-0">
                        <span className="text-[var(--ink)]/60">{label}</span>
                        <span className="font-medium text-[var(--ink)]">{status}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 text-xs text-[var(--ink)]/45 leading-relaxed">
                    Cada equipamento é avaliado individualmente, de acordo com os sintomas apresentados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* SINTOMAS */}
        <Section id="sintomas" className="py-20 md:py-24 bg-white border-y border-[var(--line)]">
          <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <Eyebrow>Comece por aqui</Eyebrow>
              <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight mb-4">
                Qual problema seu computador apresenta?
              </h2>
              <p className="text-lg text-[var(--ink)]/65">
                Selecione a situação que mais se aproxima do problema e envie as informações diretamente pelo WhatsApp.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {symptoms.map((symptom) => (
                <a
                  key={symptom.label}
                  href={waLink(symptom.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-3 bg-[var(--paper)] hover:bg-[var(--steel)] border border-[var(--line)] hover:border-[var(--steel)] rounded-xl p-4 sm:p-5 transition-colors duration-200"
                >
                  <symptom.icon
                    size={22}
                    className="text-[var(--steel)] group-hover:text-white transition-colors"
                    aria-hidden="true"
                  />
                  <span className="text-sm font-medium leading-snug text-[var(--ink)] group-hover:text-white transition-colors">
                    {symptom.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </Section>

        {/* SERVIÇOS */}
        <Section id="servicos" className="py-20 md:py-24">
          <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <Eyebrow>Serviços</Eyebrow>
              <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight mb-4">
                Serviços para computadores e notebooks
              </h2>
              <p className="text-lg text-[var(--ink)]/65">
                Atendimento para manutenção, configuração, segurança, backup e suporte. A modalidade presencial ou remota é definida de acordo com o tipo de problema.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {serviceCategories.map((category) => (
                <div key={category.id} id={category.id} className="scroll-mt-24 bg-white border border-[var(--line)] rounded-2xl p-7">
                  <div className="w-11 h-11 rounded-xl bg-[var(--steel-soft)] flex items-center justify-center text-[var(--steel)] mb-5">
                    <category.icon size={20} />
                  </div>
                  <h3 className="font-display text-xl font-semibold tracking-tight mb-4">{category.title}</h3>
                  <ul className="space-y-2.5">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[15px] text-[var(--ink)]/70 leading-snug">
                        <span className="mt-2 w-1 h-1 rounded-full bg-[var(--steel)] flex-shrink-0" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  {category.links?.length > 0 && (
                    <div className="mt-6 border-t border-[var(--line)] pt-5 space-y-2">
                      {category.links.map(([label, href]) => (
                        <a key={href} href={href} className="flex items-center justify-between gap-3 text-sm font-semibold text-[var(--steel)] hover:text-[var(--steel-deep)]">
                          {label}
                          <ArrowRight size={15} aria-hidden="true" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* COMO FUNCIONA */}
        <Section id="como-funciona" className="py-20 md:py-24 bg-[var(--ink)] text-white">
          <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <div className="font-display text-xs font-semibold tracking-[3px] text-white/50 uppercase mb-3">
                Como funciona
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight">
                Como funciona o atendimento
              </h2>
            </div>

            <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((item) => (
                <li key={item.step} className="border-t border-white/15 pt-5">
                  <div className="font-display text-5xl font-semibold text-white/15 mb-3" aria-hidden="true">
                    {item.step}
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2.5">{item.title}</h3>
                  <p className="text-white/65 leading-relaxed text-[15px]">{item.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </Section>

        {/* SEGURANÇA E ARQUIVOS */}
        <Section className="py-20 md:py-24 bg-white border-b border-[var(--line)]">
          <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-5">
                <Eyebrow>Seus arquivos</Eyebrow>
                <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                  Cuidado com seus arquivos
                </h2>
                <p className="text-lg text-[var(--ink)]/65 leading-relaxed">
                  Antes de formatações ou alterações importantes, confirmo com você quais arquivos precisam ser preservados
                  e explico as opções disponíveis para backup.
                </p>
              </div>

              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
                {[
                  {
                    title: 'Preservação de arquivos',
                    desc: 'Quando necessário e tecnicamente possível, o backup pode ser realizado antes do serviço, após o alinhamento com o cliente.',
                  },
                  {
                    title: 'Transparência no atendimento',
                    desc: 'Você recebe informações claras sobre o serviço recomendado, o que será realizado e os possíveis impactos no equipamento.',
                  },
                  {
                    title: 'Possibilidades e limitações',
                    desc: 'Em casos de perda de dados, as possibilidades de recuperação são explicadas sem garantir resultados antes da análise.',
                  },
                  {
                    title: 'Orientações após o serviço',
                    desc: 'Após o atendimento, você recebe orientações simples para ajudar na utilização e na prevenção de novos problemas.',
                  },
                ].map((item) => (
                  <div key={item.title} className="border border-[var(--line)] rounded-2xl p-6">
                    <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-[15px] text-[var(--ink)]/65 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* ATENDIMENTO */}
        <Section className="py-20 md:py-24">
          <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <Eyebrow>Área de atendimento</Eyebrow>
              <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight">
                Atendimento presencial em São José dos Campos, com suporte remoto quando possível.
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="bg-white border border-[var(--line)] rounded-2xl p-8">
                <div className="w-11 h-11 rounded-xl bg-[var(--steel-soft)] flex items-center justify-center text-[var(--steel)] mb-5">
                  <MapPin size={20} />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2.5">Atendimento presencial</h3>
                <p className="text-[var(--ink)]/65 leading-relaxed">
                  Indicado para limpeza interna, manutenção física, avaliação de aquecimento e problemas relacionados ao hardware.
                </p>
              </div>
              <div className="bg-white border border-[var(--line)] rounded-2xl p-8">
                <div className="w-11 h-11 rounded-xl bg-[var(--steel-soft)] flex items-center justify-center text-[var(--steel)] mb-5">
                  <Wifi size={20} />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2.5">Atendimento remoto</h3>
                <p className="text-[var(--ink)]/65 leading-relaxed">
                  Alguns problemas de sistema, configuração e programas podem ser avaliados e resolvidos remotamente, dependendo do caso.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* FAQ */}
        <Section id="duvidas" className="py-20 md:py-24 bg-white border-y border-[var(--line)]">
          <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mb-12">
              <Eyebrow>Dúvidas frequentes</Eyebrow>
              <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight">
                Perguntas frequentes sobre o atendimento
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map(({ q, a }) => (
                <details key={q} className="faq-item group border border-[var(--line)] rounded-2xl px-6 py-1 open:bg-[var(--paper)]">
                  <summary className="flex items-center justify-between gap-4 py-4 cursor-pointer font-display font-semibold text-lg">
                    {q}
                    <Plus size={20} className="faq-icon flex-shrink-0 text-[var(--steel)]" aria-hidden="true" />
                  </summary>
                  <p className="pb-5 text-[var(--ink)]/65 leading-relaxed">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </Section>

        {/* CONTATO */}
        <Section id="contato" className="py-20 md:py-24">
          <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <Eyebrow>Entre em contato</Eyebrow>
                <h2 className="font-display text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.05] mb-6">
                  Precisa de ajuda com seu computador ou notebook?
                </h2>
                <p className="text-lg text-[var(--ink)]/65 max-w-md leading-relaxed">
                  Conte pelo WhatsApp o que está acontecendo. Você receberá uma orientação inicial sobre a forma
                  de atendimento e os próximos passos.
                </p>
              </div>

              <div className="bg-[var(--ink)] text-white rounded-3xl p-9 lg:p-11">
                <div className="space-y-7">
                  <div>
                    <div className="text-white/45 text-xs font-semibold tracking-[2px] uppercase mb-1.5">WhatsApp</div>
                    <a
                      href={waLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-3xl font-display font-semibold tracking-tight hover:text-[var(--steel)] transition-colors block"
                    >
                      (12) 99106-9682
                    </a>
                  </div>
                  <div>
                    <div className="text-white/45 text-xs font-semibold tracking-[2px] uppercase mb-1.5">E-mail</div>
                    <a
                      href="mailto:muniztecnologia.sjc@gmail.com"
                      className="text-lg hover:text-[var(--steel)] transition-colors break-all"
                    >
                      muniztecnologia.sjc@gmail.com
                    </a>
                  </div>
                  <div>
                    <div className="text-white/45 text-xs font-semibold tracking-[2px] uppercase mb-1.5">Atendimento</div>
                    <div className="text-lg leading-relaxed">
                      São José dos Campos e região · Suporte remoto conforme o tipo de serviço
                    </div>
                  </div>
                </div>

                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-9 flex items-center justify-center gap-2 w-full bg-white hover:bg-white/90 text-[var(--ink)] font-semibold py-4 rounded-xl text-base transition-all active:scale-[0.98]"
                >
                  <MessageCircle size={19} />
                  Iniciar conversa no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </Section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[var(--ink)] text-white/55 pt-14 pb-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:flex-row lg:justify-between gap-y-10">
            <div className="lg:w-1/3">
              <div className="mb-4 inline-flex">
                <img
                  src="/logo.png"
                  alt="Muniz Informática"
                  className="w-[144px] h-auto object-contain brightness-0 invert"
                />
              </div>
              <p className="text-sm max-w-xs mx-auto lg:mx-0">
                Assistência técnica para computadores e notebooks em São José dos Campos e região.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-8 text-sm">
              <div>
                <div className="font-display font-semibold text-white tracking-widest text-xs mb-3.5">NAVEGAÇÃO</div>
                <div className="space-y-2">
                  {navLinks.map((link) => (
                    <a key={link.name} href={link.href} className="block hover:text-white transition-colors">
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <div className="font-display font-semibold text-white tracking-widest text-xs mb-3.5">CONTATO</div>
                <div className="space-y-2">
                  <a href="tel:+5512991069682" className="block hover:text-white transition-colors">
                    (12) 99106-9682
                  </a>
                  <a href="mailto:muniztecnologia.sjc@gmail.com" className="block hover:text-white transition-colors break-all">
                    muniztecnologia.sjc@gmail.com
                  </a>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <div className="font-display font-semibold text-white tracking-widest text-xs mb-3.5">ATENDIMENTO</div>
                <div className="leading-relaxed">
                  São José dos Campos e região<br />
                  Suporte remoto conforme o tipo de serviço<br />
                  Segunda a sexta — horário comercial
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-7 border-t border-white/10 text-center text-xs">
          © {new Date().getFullYear()} Muniz Informática &amp; Tecnologia. Todos os direitos reservados.
        </div>
      </footer>

      {/* WHATSAPP FLUTUANTE — só aparece após o Hero, para não duplicar o CTA já visível */}
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-5 right-5 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-[var(--steel)] hover:bg-[var(--steel-deep)] text-white shadow-lg transition-all duration-300 active:scale-95 ${
          showFloatingCta && !isMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-3 pointer-events-none'
        }`}
        aria-label="Falar no WhatsApp"
        aria-hidden={!showFloatingCta || isMenuOpen}
        tabIndex={showFloatingCta && !isMenuOpen ? 0 : -1}
      >
        <MessageCircle size={26} />
      </a>
    </div>
  );
}
