# New Site — Rules & Process

Read this at the start of every new site project, before touching any file.

## Stack

- **11ty** (Eleventy) — always, unless the brief explicitly says otherwise
- **Nunjucks** — default templating language
- **Plain CSS** — custom properties, no preprocessors, no frameworks
- **No build step beyond 11ty** — no bundler, no transpiler

### Explicitly forbidden — never suggest, never install

```
Frameworks:     React, Vue, Svelte, Solid, Astro islands, Angular
CSS frameworks: Tailwind, Bootstrap, Foundation, Bulma, UnoCSS
Preprocessors:  Sass, SCSS, Less, PostCSS (unless already in project)
Bundlers:       Webpack, Vite, Parcel, Rollup, esbuild
jQuery or any DOM manipulation library
CSS-in-JS of any kind
TypeScript (unless explicitly requested)
CSS Modules
Any npm package that replicates what native HTML/CSS already does
```

**JavaScript:** vanilla JS is fine for progressive enhancement. No frameworks, no jQuery, no bundler required. Prefer a `<script>` tag at the bottom of the page over any module system unless the project specifically requires ES modules.

**Default rule:** if native HTML/CSS/JS can do it, use that.
If you feel the urge to install a package, ask first.


## Process — follow this order every time

### Step 1 — Read the starter

The project starts from a minimal 11ty starter. Read these files first:
- `.eleventy.js` — understand what's configured
- `package.json` — understand available scripts
- `src/_includes/base.njk` — understand the base layout
- `src/_data/site.json` — understand available global data

Do not modify `.eleventy.js` or `package.json` unless explicitly asked.

### Step 2 — Brief the project

Before writing any CSS or templates, ask the following if not already
provided in the prompt. Write answers to `docs/projectbrief.md`.

```
- What is this site for? Who is it for?
- What pages does it need? (list them)
- What is the tone? (examples: warm, professional, playful, minimal)
- Are there reference sites or visual directions?
- Is there existing content to work with, or placeholder content?
- Any explicit constraints? (no JS, must be accessible, etc.)
```

Show the brief and wait for approval before proceeding to step 3.

### Step 3 — Build the design system

Every new site gets its own design system. Follow this process:

#### 3a. Define the direction
Based on the brief, propose:
- A color palette (4–6 colors max to start)
- Font pairing (suggest free/system options unless brief specifies)
- Typographic tone (dramatic scale vs subtle, heavy vs light weight)
- Overall spacing feel (tight/dense vs open/airy)

Write the proposal to `docs/design-direction.md`. Wait for approval.

#### 3b. Build token files

Once approved, create the token layer:

```
css/tokens/color.css
css/tokens/type.css
css/tokens/space.css
css/tokens/motion.css
```

Follow the three-tier color pattern:
1. Primitives — raw values, named by hue
2. Semantic — named by role (surface, text, interactive, border, decor)
3. Component slots — documented in color.css, defined per component

Follow the spacing pattern:
- 4-step em-based scale: --space-xs, --space-sm, --space-md, --space-lg
- Layout tokens separately: --layout-max-width, --layout-gutter-*, etc.
- --space-flow for the .flow utility

Follow the type pattern:
- Fluid base via clamp()
- Scale steps via pow(): --type-xs through --type-6xl
- Leading tokens: --leading-tight, --leading-normal, --leading-loose
- Weight tokens: --weight-normal, --weight-bold, --weight-heading

#### 3c. Build base files

```
css/base/fonts.css      @font-face, @view-transition if needed
css/base/reset.css      body, img, media, a11y utilities
css/base/type.css       headings, links, .flow utility
css/base/layout.css     .container, header, nav, footer
```

Only add `css/base/animation.css` if the design calls for animation.

#### 3d. Create site.css

```
css/site.css            site-specific styles only
```

Start nearly empty — add to it as pages are built.

#### 3e. Document the system

Create `.clinerules/` with:
```
README.md           project overview, stack, hard rules
design-system.md    file structure, load order
colors.md           full token reference
typography.md       scale, families, decisions
spacing-layout.md   scale steps, layout tokens
components.md       component pattern and checklist
```

Write these before building any templates. They are your reference
for the rest of the project.

### Step 4 — Build the base layout

Update `src/_includes/base.njk`:
- Wire up correct CSS load order in `<head>`
- Set page title pattern using `site.json` data
- Add skip link and visually-hidden utility
- Add container, header, nav structure
- Add meta tags (description, og:*)

### Step 5 — Build pages

Build one page at a time. For each page:
1. Create the `.njk` template in `src/`
2. Add any page-specific styles to `css/site.css` (or a new component file)
3. Update nav in base layout if needed

For content collections (blog posts, projects, etc.):
- Create the collection folder in `src/`
- Add front matter conventions to `docs/projectbrief.md`
- Create list and detail templates


## HTML conventions

```html
<!-- Page structure -->
<div class="container">
  <header>
    <p class="site-title"><a href="/">{{ site.name }}</a></p>
    <nav>
      <ul class="nav">
        <li><a href="/">Home</a></li>
        <li class="current-page"><a href="/about">About</a></li>
      </ul>
    </nav>
  </header>
  <main id="main" class="flow">
    ...
  </main>
  <footer>
    <p>© {{ site.author }}</p>
  </footer>
</div>
```

- Always include a skip link: `<a href="#main" id="skip-link" class="visually-hidden">Skip to content</a>`
- `lang` attribute always on `<html>`
- Always include viewport meta tag
- Semantic elements over divs — `<article>`, `<section>`, `<nav>`, `<aside>`
- `id="main"` on the main element (skip link target)


## CSS conventions

- Tokens only — no raw hex, px, or magic numbers
- Component slots before properties (see .clinerules/components.md)
- No `transition: all` — scope to specific properties
- No `!important`
- CSS nesting is fine for state and child selectors
- `oklch()` preferred for color manipulation
- `clamp()` for fluid values


## 11ty conventions

- Input dir: `src/`, output dir: `_site/`
- Layouts in `src/_includes/`
- Global data in `src/_data/`
- Passthrough: `css/`, `fonts/`, `images/`
- Collections defined in `.eleventy.js`, not in templates
- Front matter: `title`, `description`, `layout` minimum


## Accessibility baseline

Every site must have:
- Skip link (in base layout)
- `lang` on `<html>`
- All images have `alt` text
- Color contrast checked against WCAG AA
- Focus styles visible (don't suppress outline without replacement)
- Semantic heading hierarchy (one `h1` per page)
- No empty links or buttons


## When you're unsure

- Unsure about a design decision → ask, show options
- Unsure about a technical approach → pick the simpler one
- Want to install a package → ask first, explain why native won't work
- Finding the brief too vague to proceed → ask the specific question
  rather than making assumptions
