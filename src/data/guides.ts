// Guias de conteúdo (/guias/<slug>/). O texto de cada guia fica na própria página em src/pages/guias/;
// aqui ficam os dados usados no topo, no SEO, na listagem e nos links a partir das páginas de serviço.

export interface Guide {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  eyebrow: string;
  lead: string;
  /** Página de serviço principal do guia (cartão lateral e serviço relacionado). */
  service: string;
  /** Páginas de serviço que mostram um link para este guia. */
  showOn: string[];
  /** Outras páginas de serviço sugeridas no final do guia. */
  related: string[];
  wa: string;
  /** Datas no formato AAAA-MM-DD. */
  published: string;
  updated: string;
}

export const guides: Guide[] = [
  {
    slug: 'vale-a-pena-trocar-hd-por-ssd',
    title: 'Vale a pena trocar o HD por SSD?',
    seoTitle: 'Vale a Pena Trocar HD por SSD? Guia para Notebook e PC',
    description:
      'Quando a troca de HD por SSD faz diferença, como saber se o computador usa HD, qual SSD é compatível e o que acontece com os seus arquivos.',
    eyebrow: 'Guia · Upgrade de armazenamento',
    lead:
      'Na maioria dos computadores e notebooks que ainda usam HD, sim: a troca costuma ser o upgrade que mais muda o dia a dia. Mas há casos em que ela sozinha não resolve. Este guia ajuda a entender a diferença antes de comprar a peça.',
    service: 'upgrade-ssd',
    showOn: ['upgrade-ssd', 'computador-lento', 'notebook-demora-para-ligar', 'manutencao-de-computadores'],
    related: ['upgrade-memoria-ram', 'computador-lento', 'manutencao-de-computadores'],
    wa: 'Olá! Li o guia sobre SSD no site e gostaria de avaliar um upgrade.\nModelo do computador/notebook:',
    published: '2026-11-20',
    updated: '2026-11-20',
  },
  {
    slug: 'quanto-de-memoria-ram-preciso',
    title: 'Quanto de memória RAM eu preciso?',
    seoTitle: 'Quanto de Memória RAM Eu Preciso? Guia para Notebook e PC',
    description:
      'Quanta memória RAM faz sentido para o seu uso, como conferir quanto o computador tem e quanto usa, e o que verificar antes de comprar um pente.',
    eyebrow: 'Guia · Upgrade de memória',
    lead:
      'A memória RAM é o espaço de trabalho do computador: é onde ficam os programas e as abas abertas no momento. Quando ela acaba, o Windows passa a usar o disco no lugar, e tudo fica mais lento. A quantidade certa depende do que você faz.',
    service: 'upgrade-memoria-ram',
    showOn: ['upgrade-memoria-ram', 'computador-lento', 'manutencao-de-computadores'],
    related: ['upgrade-ssd', 'computador-lento', 'manutencao-de-computadores'],
    wa: 'Olá! Li o guia sobre memória RAM no site e gostaria de avaliar um upgrade.\nModelo do computador/notebook:',
    published: '2026-11-20',
    updated: '2026-11-20',
  },
];

export const guideBySlug: Record<string, Guide> = Object.fromEntries(guides.map((g) => [g.slug, g]));

/** Guias que devem aparecer na página de um serviço. */
export const guidesForService = (slug: string) => guides.filter((g) => g.showOn.includes(slug));
