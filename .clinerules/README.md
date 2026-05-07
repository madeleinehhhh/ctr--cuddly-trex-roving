# Project Overview

This project is a static site built using Eleventy (11ty) and Nunjucks as the templating language. The CSS follows a design system approach with custom properties for colors, typography, spacing, and motion.

## Stack
- **Framework**: 11ty (Eleventy)
- **Templating Language**: Nunjucks
- **CSS**: Plain CSS with custom properties

### Explicitly Forbidden
- Frameworks: React, Vue, Svelte, Solid, Astro islands, Angular
- CSS frameworks: Tailwind, Bootstrap, Foundation, Bulma, UnoCSS
- Preprocessors: Sass, SCSS, Less, PostCSS (unless already in project)
- Bundlers: Webpack, Vite, Parcel, Rollup, esbuild
- jQuery or any DOM manipulation library
- CSS-in-JS of any kind
- TypeScript (unless explicitly requested)
- CSS Modules
- Any npm package that replicates what native HTML/CSS already does

**JavaScript**: Vanilla JS is fine for progressive enhancement. No frameworks, no jQuery, no bundler required. Prefer a `<script>` tag at the bottom of the page over any module system unless the project specifically requires ES modules.

**Default rule**: if native HTML/CSS/JS can do it, use that.
If you feel the urge to install a package, ask first.

## Key Files and Directories

- **`css/tokens/`**: Contains token files for colors, type, space, and motion.
- **`css/base/`**: Contains base styles for fonts, reset, type, layout, etc.
- **`css/site.css`**: Site-specific styles.
- **`.eleventy.js`**: Configuration file for Eleventy.
- **`src/_data/site.json`**: Global data for the site (name, author, description).
- **`src/_includes/base.njk`**: Base layout template with CSS load order and structure.