# Shagun Associates

A responsive real-estate portfolio site built with React, TypeScript, Vite and Tailwind CSS.

The site has a home page and locally routed project pages at `/projects/<project-slug>`. Project content is maintained in `src/data/projects.ts`; shared navigation, footer, and project cards live in `src/components/`.

## Getting started

```sh
npm install
npm run dev
```

## Build

```sh
npm run typecheck
npm run build
```

The images bundled with the site are selected from the supplied original site assets. Project pages use source details where available; for listings without descriptions, they ask visitors to contact Shagun Associates rather than making unverified claims.
