# 11ty Starter

A new site.

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

ad new-site.md and then ask me about the project."

## Adding to .eleventy.js

The only reasons to modify `.eleventy.js`:
- Adding a new passthrough directory
- Registering a new content collection
- Adding an 11ty plugin
