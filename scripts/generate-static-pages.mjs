import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { servicePages } from '../src/serviceData.js';

const distDir = new URL('../dist/', import.meta.url);
const templatePath = new URL('../dist/index.html', import.meta.url);
const template = await readFile(templatePath, 'utf8');
const siteUrl = 'https://munizinformatica.com.br';

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function replaceAttribute(html, selectorPattern, attribute, value) {
  const escaped = escapeHtml(value);
  const regex = new RegExp(`(<${selectorPattern}[^>]*\\s${attribute}=")[^"]*(")`, 'i');
  return html.replace(regex, `$1${escaped}$2`);
}

function renderStaticServiceContent(service) {
  const related = service.relatedSlugs
    .map((slug) => servicePages.find((item) => item.slug === slug))
    .filter(Boolean);

  return `<div id="root">
      <main>
        <nav aria-label="Navegação estrutural">
          <a href="/">Início</a> / <a href="/#servicos">Serviços</a> / ${escapeHtml(service.shortTitle)}
        </nav>
        <article>
          <p>${escapeHtml(service.eyebrow)}</p>
          <h1>${escapeHtml(service.title)}</h1>
          <p>${escapeHtml(service.intro)}</p>
          <p><a href="https://wa.me/5512991069682?text=${encodeURIComponent(service.whatsappMessage)}">Solicitar avaliação pelo WhatsApp</a></p>
          <h2>O atendimento pode incluir</h2>
          <ul>${service.highlights.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
          <h2>${escapeHtml(service.problemTitle)}</h2>
          <ul>${service.problems.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
          <h2>${escapeHtml(service.explanationTitle)}</h2>
          ${service.explanation.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('')}
          <h2>Como funciona o serviço</h2>
          <ol>${service.process.map(([title, description]) => `<li><strong>${escapeHtml(title)}</strong>: ${escapeHtml(description)}</li>`).join('')}</ol>
          <h2>Benefícios</h2>
          <ul>${service.benefits.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
          <h2>Perguntas frequentes</h2>
          ${service.faqs.map(([question, answer]) => `<h3>${escapeHtml(question)}</h3><p>${escapeHtml(answer)}</p>`).join('')}
          <h2>Veja também</h2>
          <ul>${related.map((item) => `<li><a href="/${item.slug}/">${escapeHtml(item.shortTitle)}</a></li>`).join('')}</ul>
        </article>
      </main>
    </div>`;
}

function createSchema(service) {
  const pageUrl = `${siteUrl}/${service.slug}/`;
  const areaServed = [
    { '@type': 'City', name: 'São José dos Campos' },
    { '@type': 'City', name: 'Jacareí' },
    { '@type': 'AdministrativeArea', name: 'Vale do Paraíba' }
  ];
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ComputerRepair',
        '@id': `${siteUrl}/#business`,
        name: 'Muniz Informática & Tecnologia',
        url: siteUrl,
        image: `${siteUrl}/logo.png`,
        logo: `${siteUrl}/logo.png`,
        telephone: '+5512991069682',
        email: 'muniztecnologia.sjc@gmail.com',
        hasMap: 'https://www.google.com/maps/search/?api=1&query=Muniz%20Inform%C3%A1tica%20e%20Tecnologia%2C%20S%C3%A3o%20Jos%C3%A9%20dos%20Campos%20-%20SP',
        sameAs: [
          'https://www.google.com/maps/search/?api=1&query=Muniz%20Inform%C3%A1tica%20e%20Tecnologia%2C%20S%C3%A3o%20Jos%C3%A9%20dos%20Campos%20-%20SP'
        ],
        areaServed,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'São José dos Campos',
          addressRegion: 'SP',
          addressCountry: 'BR'
        }
      },
      service.slug === 'sobre'
        ? {
            '@type': 'AboutPage',
            '@id': `${pageUrl}#about`,
            name: service.title,
            description: service.description,
            url: pageUrl,
            about: { '@id': `${siteUrl}/#business` },
            inLanguage: 'pt-BR'
          }
        : {
            '@type': 'Service',
            '@id': `${pageUrl}#service`,
            name: service.title,
            description: service.description,
            url: pageUrl,
            provider: { '@id': `${siteUrl}/#business` },
            areaServed,
            serviceType: service.shortTitle
          },
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        mainEntity: service.faqs.map(([question, answer]) => ({
          '@type': 'Question',
          name: question,
          acceptedAnswer: { '@type': 'Answer', text: answer }
        }))
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: `${siteUrl}/` },
          { '@type': 'ListItem', position: 2, name: 'Serviços', item: `${siteUrl}/#servicos` },
          { '@type': 'ListItem', position: 3, name: service.shortTitle, item: pageUrl }
        ]
      }
    ]
  };
}

function buildPage(service) {
  const pageUrl = `${siteUrl}/${service.slug}/`;
  let html = template;
  html = html.replace(/<title>[^<]*<\/title>/i, `<title>${escapeHtml(service.seoTitle)}</title>`);
  html = replaceAttribute(html, 'meta[^>]*name="description"', 'content', service.description);
  html = replaceAttribute(html, 'link[^>]*rel="canonical"', 'href', pageUrl);
  html = replaceAttribute(html, 'meta[^>]*property="og:title"', 'content', service.seoTitle);
  html = replaceAttribute(html, 'meta[^>]*property="og:description"', 'content', service.description);
  html = replaceAttribute(html, 'meta[^>]*property="og:url"', 'content', pageUrl);
  html = replaceAttribute(html, 'meta[^>]*name="twitter:title"', 'content', service.seoTitle);
  html = replaceAttribute(html, 'meta[^>]*name="twitter:description"', 'content', service.description);
  html = html.replace(
    /<script type="application\/ld\+json">[\s\S]*?<\/script>/i,
    `<script type="application/ld+json">\n${JSON.stringify(createSchema(service), null, 2)}\n    </script>`
  );
  html = html.replace('<div id="root"></div>', renderStaticServiceContent(service));
  return html;
}

for (const service of servicePages) {
  const pageDir = new URL(`../dist/${service.slug}/`, import.meta.url);
  await mkdir(pageDir, { recursive: true });
  await writeFile(new URL('index.html', pageDir), buildPage(service), 'utf8');
}

const notFound = template
  .replace(/<title>[^<]*<\/title>/i, '<title>Página não encontrada | Muniz Informática</title>')
  .replace('</head>', '    <meta name="robots" content="noindex, follow" />\n  </head>');
await writeFile(new URL('../dist/404.html', import.meta.url), notFound, 'utf8');

console.log(`Geradas ${servicePages.length} páginas de serviço e 404.html.`);
