# Christ the Reconciler — 11ty Site

An 11ty site for [christthereconciler.org](https://www.christthereconciler.org).

## Setup

```bash
npm install
npm run dev
```

Site runs at `http://localhost:8080`.

## Ubuntu Setup

Getting 11ty running on Ubuntu is straightforward:

### 1. Install Node.js

Ubuntu's default `apt` Node.js is often outdated. Use `nvm` instead:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc   # or ~/.zshrc if you use zsh
nvm install --lts
nvm use --lts
```

### 2. Install dependencies

```bash
cd ~/path/to/your-site
npm install
```

### 3. Start the dev server

```bash
npm run dev
```

### Ubuntu-specific things to watch for

**Port access** — 11ty defaults to port `8080`. Change it if needed:

```bash
npx @11ty/eleventy --serve --port=3000
```

**Firewall** — to access the dev server from another machine on your network:

```bash
sudo ufw allow 8080
```

**File watching** — if you hit a "too many open files" error on a large site:

```bash
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
sudo sysctl -p
```

---

## Structure

```
src/
  _includes/
    base.njk              base layout
    nav.njk               navigation macro (renders pageTree collection)
  _data/
    site.json             global site data
  css/
    tokens/               design tokens
    base/                 base styles
    site.css              site-wide styles
  fonts/                  self-hosted font files
  images/                 site images
  index.njk               home page (or index.md)
  about/
    index.md              /about/
    what-we-believe.md    /about/what-we-believe/
    community.md          /about/community/
    friends.md            /about/friends/
    history.md            /about/history/
  practices/
    index.md              /practices/
    john-17.md            /practices/john-17/
    statement-of-devotion.md
    prayer.md
    reconciliation.md
    formation.md
    hospitality.md
    work.md
  teachings/
    index.md              /teachings/
    reading-list.md       /teachings/reading-list/
    writings/             written reflections (Passing Through Baca, etc.)
    series/               auto-generated series indexes
    teachers/             auto-generated teacher indexes
  connect/
    index.md              /connect/
    visit.md              /connect/visit/
    newsletter.md         /connect/newsletter/
    donate.md             /connect/donate/
    contact.md            /connect/contact/
_site/                    build output — do not edit
eleventy.config.js        11ty config
```

---

## Plugins

### @photogabble/eleventy-plugin-interlinker

Resolves Obsidian-style wiki links (`[[filename|display text]]`) in markdown files.

**Install:**
```bash
npm install @photogabble/eleventy-plugin-interlinker
```

**How it works:** The plugin resolves links by filename stem. `[[ctr-about-index|About →]]` resolves to whichever page has the file `ctr-about-index.md` in `src`. No path prefix needed — just the filename.

**Dead links:** During build, unresolved wiki links are reported to the console. Change `deadLinkReport: 'console'` to `'none'` in `eleventy.config.js` to silence them, or `'json'` to write them to `.dead-links.json`.

**Aliases:** To allow a page to be referenced by a short name, add an `aliases` array to its front matter:
```yaml
aliases: ["John 17", "John17"]
```

---

## Obsidian Integration

The `src/` directory can be opened directly as an Obsidian vault. Wiki links (`[[filename|text]]`) work in both Obsidian and the 11ty build via the interlinker plugin.

### Recommended Obsidian settings

- **Files and Links → Excluded files:** add `_site`, `node_modules`, `.git`
- **`_internal/`** — add this folder to Obsidian's excluded files if you don't want internal docs appearing in search, or leave it included to use Obsidian's graph and search across all docs
- **Files and Links → Default location for new notes:** `src` or a specific subfolder
- **Files and Links → Default location for attachments:** `src/images`

### Editorial conventions in markdown files

Section markers (`%%SECTION: ...%%`) are used to label structural sections during editing. They are visible in Obsidian edit mode and invisible in Obsidian preview. They are stripped from HTML output during the 11ty build by the `strip-section-markers` transform in `eleventy.config.js`.

All other Obsidian comments (`%% ... %%`) are also stripped from HTML output by the `strip-obsidian-comments` transform.

---

## Front Matter

Every content page uses the following front matter fields:

```yaml
---
title: "Page Title"           # used in nav, <title>, og:title
description: "One sentence."  # used in meta description, og:description
layout: "page.njk"            # layout template (or home.njk for homepage)
permalink: "/about/"          # explicit permalink — drives URL and nav tree
---
```

Internal/reference pages (content framework, site audit) use:
```yaml
eleventyExcludeFromCollections: true
```
This excludes them from the `pageTree` nav collection so they don't appear in the site navigation.

---

## Collections

| Collection | Description |
|---|---|
| `pageTree` | Nested tree of all pages by URL — drives the main nav. Built from `title` front matter. |
| `practices` | All practice pages (non-index) under `src/practices/`. |
| `teachings` | All teaching posts under `src/teachings/`. Sorted newest-first. Used to generate series and teacher indexes. |

### Teachings content model

Each teaching post (audio, video, or written) is a markdown file with this front matter:

```yaml
---
title: "Teaching Title"
date: 2021-03-14
teacher: thomas-cogdell        # slug — drives /teachings/teachers/ index
series: foundations-of-reconciliation  # slug — drives /teachings/series/ index
type: audio                    # audio | video | written
archive: false                 # true for Wittenberg 2017 and other closed collections
audio_url: https://...
video_url: https://...
podcast_feed: true             # whether this post feeds the Apple Podcasts RSS
layout: teaching.njk
permalink: /teachings/{{ series }}/{{ title | slug }}/
---
```

Teacher and series index pages are generated via 11ty pagination over the `teachings` collection, filtered by `teacher` or `series` slug. No manual page needed per teacher or series.

---

## Nav

The nav is driven by the `pageTree` collection in `src/_includes/nav.njk`. It builds a nested tree from the URL structure of all pages in `src`. The display name for each node comes from `page.data.title`.

To control nav order, prefix filenames or use a `navOrder` front matter field (requires adding a sort to the `pageTree` collection in `eleventy.config.js`).

To exclude a page from the nav entirely, add `eleventyExcludeFromCollections: true` to its front matter.

---

## Modifying eleventy.config.js

**Ignoring files and folders:** 11ty automatically ignores `_includes` and `_data` folders, but does NOT automatically ignore other `_`-prefixed folders. To exclude `_internal/` from the build, create a `.eleventyignore` file in your project root containing:

```
src/_internal
```

This is equivalent to `.gitignore` — 11ty will skip any path listed there entirely.

Valid reasons to modify `eleventy.config.js`:

- Adding a new passthrough directory
- Registering a new content collection
- Adding an 11ty plugin
- Adding a transform (e.g. for output processing)

The config is ESM (`export default async function`). The interlinker plugin is loaded via dynamic `import()` because it is a CommonJS package.
  _internal/              internal reference docs — excluded via .eleventyignore
    ctr-content-framework.md
    ctr-site-audit-and-architecture.md
