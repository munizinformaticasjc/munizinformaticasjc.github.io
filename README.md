# Muniz Informática & Tecnologia

Site institucional em React + Vite para Muniz Informática (suporte técnico, redes, segurança e manutenção de computadores).

> **Atenção importante**: Este NÃO é um site HTML estático simples. É um projeto que usa o bundler Vite.

## Por que a tela fica branca ao abrir localmente?

Se você simplesmente der **duplo clique no `index.html`** (ou abrir o arquivo diretamente no navegador), vai ver uma tela toda branca.

**Motivo:**
- O navegador abre o arquivo usando o protocolo `file://`.
- O `<script type="module" src="/src/main.jsx">` não consegue carregar.
- O React (e todo o código) depende do Vite para processar imports, JSX e Tailwind.
- Sem servidor, nada é renderizado dentro da `<div id="root">`.

**Isso é comportamento normal** de projetos modernos com Vite/React. Na hospedagem do GitHub o site funciona porque ele é **construído** (`npm run build`) e servido por um servidor HTTP real.

## Como rodar localmente (corretamente)

### 1. Com o servidor de desenvolvimento (recomendado)

```powershell
cd "D:\Alefe H .useacabeça\site daniel\munizinformaticasjc.github.io-main"

npm install
npm run dev
```

Abra o endereço que aparecer no terminal (normalmente `http://localhost:5173`).

---

## Imagem do Hero

O hero agora usa a imagem original (`munizinformatica.jpg`) de forma destacada (visível no celular também).

**Para trocar a imagem:**
1. Coloque sua foto na pasta `public/` (ex: `hero-bg.jpg`)
2. No arquivo `src/App.jsx` procure o `<img src="munizinformatica.jpg"` na seção do Hero e altere o caminho.

A imagem tem um leve efeito de **parallax** (move sutilmente ao rolar a página).

Recomendação: foto profissional, alta resolução, com boa composição para mobile e desktop.

### 2. Ver a versão de produção (igual à que está no ar)

```powershell
npm run build
npm run preview
```

### Observações
- É necessário ter **Node.js** instalado.
- Não use extensões "Live Server" direto na pasta raiz do projeto. Use apenas na pasta `dist/` depois do build.
- Para hospedagem no GitHub Pages já está configurado (usa `gh-pages`).

---

# React + Vite (documentação original)

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

## Páginas de serviços e Google Analytics

O projeto possui páginas individuais para SEO local, geradas automaticamente no build:

- `/formatacao-de-notebook/`
- `/computador-lento/`
- `/limpeza-de-notebook/`
- `/remocao-de-virus/`
- `/upgrade-ssd/`
- `/backup-de-arquivos/`
- `/instalacao-do-windows/`
- `/suporte-remoto/`
- `/manutencao-de-computadores/`
- `/assistencia-tecnica-em-sao-jose-dos-campos/`

O Google Analytics 4 está configurado com o ID `G-GGM5N78WS7`. Além das visualizações de página, cliques nos botões do WhatsApp enviam o evento recomendado `generate_lead`, com o método `whatsapp`.

Ao executar `npm run build`, o script `scripts/generate-static-pages.mjs` cria uma pasta real para cada URL dentro de `dist/`. Isso permite abrir as páginas diretamente pelo Google ou por links externos sem erro 404 no GitHub Pages.

### Publicar no GitHub Pages

```bash
npm install
npm run deploy
```

O arquivo `public/CNAME` preserva o domínio personalizado `munizinformatica.com.br` durante a publicação.
