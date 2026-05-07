# 11ty Starter

Minimal Eleventy starter for new sites. The plumbing is done —
Cline handles everything from here.

## Setup

```bash
npm install
npm run dev
```

Site runs at `http://localhost:8080`.

## Structure

```
src/
  _includes/
    base.njk      base layout — modify as needed per project
  _data/
    site.json     global site data — fill in before briefing Cline
  css/
    tokens/       Cline builds these in step 3
    base/         Cline builds these in step 3
    site.css      Cline populates this as pages are built
  fonts/          drop self-hosted font files here
  images/         site images
  index.njk       home page
_site/            build output — do not edit
.eleventy.js      11ty config — do not modify unless asked
```

## Starting a new project

1. Copy this starter into a new repo
2. Fill in `src/_data/site.json`
3. Open Cline, point it at `.clinerules/new-site.md`
4. Say: "Start a new site. Read new-site.md and then ask me about the project."

## Adding to .eleventy.js

The only reasons to modify `.eleventy.js`:
- Adding a new passthrough directory
- Registering a new content collection
- Adding an 11ty plugin

Ask Cline to do this rather than editing manually.
