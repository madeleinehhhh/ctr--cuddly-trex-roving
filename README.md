# 11ty Starter

A new site.

## Setup

```bash
npm install
npx @11ty/eleventy --serve
```

### ubuntu set up
Getting 11ty running on Ubuntu is pretty straightforward. Here's what to do:

#### 1. Install Node.js

Ubuntu's default `apt` Node.js is often outdated. Use NodeSource or `nvm` instead:

**Option A — nvm (recommended, matches your Mac workflow easily):**
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc   # or ~/.zshrc if you use zsh
nvm install --lts
nvm use --lts
```

**Option B — NodeSource apt repo (system-wide):**
```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install -y nodejs
```

#### 2. Install dependencies

```bash
cd ~/path/to/your-site
npm install
```

This reads your `package.json` and pulls in 11ty and everything else — same as on your Mac.

#### 3. Start the dev server

```bash
npx @11ty/eleventy --serve
```

Exactly the same command as your Mac. Done.

---

###S# A few Ubuntu-specific things to watch for

**Port access** — 11ty defaults to port `8080`. If something's blocking it, you can change it:
```bash
npx @11ty/eleventy --serve --port=3000
```

**Firewall** — if you want to access the dev server from another machine on your network, open the port:
```bash
sudo ufw allow 8080
```

**File watching** — 11ty's watcher uses inotify on Linux. If you hit a "too many open files" error on a large site:
```bash
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
sudo sysctl -p
```

**Line endings** — if your repo has a `.gitattributes` or was edited on Windows at any point, make sure line endings aren't mangled. Usually not an issue Mac→Ubuntu.

**`npx` vs local install** — if you have `eleventy` in your `package.json` devDependencies (you likely do), `npm run` scripts and `npx` both work fine without a global install. No need to `npm install -g @11ty/eleventy`.



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
