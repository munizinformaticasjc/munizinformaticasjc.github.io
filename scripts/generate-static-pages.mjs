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

function createSchema(service) {
  const pageUrl = `${siteUrl}/${service.slug}/`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ComputerRepair',
        '@id': `${siteUrl}/#business`,
        name: 'Muniz Informática & Tecnologia',
        url: siteUrl,
        image: `${siteUrl}/logo.png`,
        telephone: '+5512991069682',
        email: 'muniztecnologia.sjc@gmail.com',
        areaServed: [
          { '@type': 'City', name: 'São José dos Campos' },
          { '@type': 'City', name: 'Jacareí' }
        ],
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'São José dos Campos',
          addressRegion: 'SP',
          addressCountry: 'BR'
        }
      },
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        name: service.title,
        description: service.description,
        url: pageUrl,
        provider: { '@id': `${siteUrl}/#business` },
        areaServed: { '@type': 'City', name: 'São José dos Campos' },
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
