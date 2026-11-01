# Muniz Informática

Código-fonte do site [munizinformatica.com.br](https://munizinformatica.com.br): suporte técnico remoto para computadores em todo o Brasil e serviços de informática em São José dos Campos (SP), para pessoas e pequenas empresas.

## Tecnologias

- [Astro](https://astro.build): site estático, uma página por serviço
- [Tailwind CSS 4](https://tailwindcss.com): estilos
- [Motion](https://motion.dev): animações, respeitando `prefers-reduced-motion`
- [Lucide](https://lucide.dev): ícones, renderizados no build
- GitHub Pages com domínio próprio

## Como rodar

Requer Node.js 22.23.4 ou mais recente.

```bash
npm install
npm run dev       # desenvolvimento em http://localhost:4321
npm run build     # verifica tipos e gera o site em dist/
npm run preview   # serve o build localmente
```

## Estrutura

| Pasta / arquivo | Conteúdo |
|---|---|
| `src/config/site.ts` | Dados de contato, área de atendimento e ID do Analytics |
| `src/data/services.ts` | Textos das páginas de serviço |
| `src/pages/` | Páginas; `[...slug].astro` gera uma página para cada serviço |
| `src/components/` | Cabeçalho, rodapé, cartões, FAQ e diagnóstico rápido |
| `src/layouts/BaseLayout.astro` | SEO, Open Graph e dados estruturados (Schema.org) |
| `src/styles/global.css` | Cores, fontes e estilos base |
| `src/scripts/site.ts` | Animações de entrada e eventos do Analytics |
| `public/` | Arquivos servidos como estão (ícones, `robots.txt`, `CNAME`) |

Cada serviço em `services.ts` vira uma página em `/<slug>/`, com title, description, canonical, Schema.org (Service, FAQPage e BreadcrumbList) e entrada no sitemap gerado no build.

## Publicação

```bash
npm run deploy    # gera o build e publica dist/ na branch gh-pages
```

A branch `main` guarda o código-fonte e a `gh-pages` guarda o site gerado que o GitHub Pages serve.

## Medição

Cada clique em um link de WhatsApp envia o evento `generate_lead` ao Google Analytics 4, com o parâmetro `lead_source` indicando o botão de origem.

## Direitos

Textos, marca e imagens são da Muniz Informática & Tecnologia. As fontes seguem as próprias licenças (SIL Open Font License).
