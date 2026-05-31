---
title: "Site Audit and Architecture"
description: "Audit of the existing CTR Squarespace site and proposed 11ty architecture."
layout: "page.njk"
---

%% # Christ the Reconciler — Site Audit & New Architecture %%

## Audit: What's Wrong With the Current Site

### Navigation is a taxonomy problem, not a user problem
The current nav has **5 top-level folders** (Practices, Podcasts, John 17, About) with ~35 items total visible in menus. A first-time visitor immediately faces:
- "John 17" as a nav item with no explanation — means nothing to a newcomer
- "Practices" and "John 17" overlap significantly (Prayer, Reconciliation, Formation, Hospitality all appear under both)
- "Podcasts" is a 20-item mega-menu, not a section — it's a content format buried at the top level
- The calendar, newsletter, visit, donate, and contact are scattered (some under nav, some on homepage, some nowhere obvious)

### No credentialing for new or suspicious visitors
Nothing on the homepage or in the nav signals:
- Who are the recognized leaders/teachers (George Miley, Peter Hocken, Mark Kinzer — serious scholars)
- What denominations/traditions are represented
- That this is mainstream, ecumenical Christianity with serious theological roots
- Any external endorsements (Commendations page exists but is buried)

### The homepage does too much explaining and not enough orienting
It immediately launches into "The Problem is Hostility" — which is good theology but confusing rhetoric for a newcomer who doesn't yet know *who these people are*. The visitor doesn't have enough context to evaluate the argument.

### Content type confusion
Squarespace "blog" posts are being used to power:
- Daily Bridge Prayer (rotating content)
- Teaching of the Week
- Book of the Month
- Podcast episode pages
- Reconciliation Stories
- Passing Through Baca

In 11ty, these map naturally to **collections** with different templates. Each should be its own collection with its own layout, not a single "blog."

### Orphaned, resting, and unclear pages
- "Door of the Day (resting)" and "Reconciliation Stories (resting)" are in the nav — remove or archive
- "Green," "Cielo," "Tiny Forge" — appear to be sub-projects/spaces with no clear relationship to the main community explained on arrival
- "Our JJ Seabrook Testimony" — powerful content, but buried and labeled cryptically
- "Future Plans" — labeled as "Community of Prayer" in the URL, creates confusion

### Missing: a clear path for each visitor type
| Visitor Type | Current Experience |
|---|---|
| Current member | Fine — knows where things are |
| Curious newcomer | Lost immediately |
| Suspicious/skeptical | No reassurance, no credentials |
| Potential resident/candidate | No "what does it mean to live here" path |
| Financial supporter | Donate link buried |
| Distant consumer (podcasts/teaching) | Podcast section is unwieldy |

---

## Proposed New Architecture

### Design Principle
Every page should answer: *Who are you, what do you do, and why does it matter?* — in that order, for a first-time visitor. Regulars can navigate deeper.

### Sitemap

```
/                           Homepage
/about/                     About (landing)
  /about/john-17/           Living Out John 17
  /about/devotion/          Statement of Devotion
  /about/beliefs/           Core Beliefs
  /about/space/             Physical Space (was: Rooms, Cielo, Tiny Forge, Green)
  /about/community/         Community & Relationships (was: Friends/Influences)
  /about/history/           History
  /about/commendations/     Commendations ← KEY for credentialing

/practices/                 Practices (landing)
  /practices/prayer/        Prayer
  /practices/reconciliation/ Reconciliation
  /practices/formation/     Formation
  /practices/hospitality/   Hospitality

/teachings/                 Teachings (landing)
  /teachings/media/         Media
  /teachings/podcasts/      Podcasts (index, replaces mega-menu)
  /teachings/podcasts/[slug]/ Individual podcast series pages
  /teachings/blog/          Blog/Essays (index)
  /teachings/blog/[slug]/   Individual posts

/connect/                   Connect (landing)
  /connect/calendar/        Calendar
  /connect/newsletter/      Newsletter
  /connect/visit/           Visit
  /connect/donate/          Donate
  /connect/contact/         Contact

--- DYNAMIC COLLECTIONS (11ty) ---
/prayer/                    Daily Bridge Prayer (latest + archive)
/teaching-of-the-week/      Teaching of the Week (latest + archive)
/book-of-the-month/         Book of the Month (latest + archive)
/passing-through-baca/      Passing Through Baca (if active)
```

### What changes and why

**"John 17" → moved inside /about/**
John 17 is the *theological foundation* of CTR, not a navigation destination. It belongs as the first page under About, where newcomers will encounter it after they've been oriented. The nav label "John 17" assumed prior knowledge.

**Podcasts demoted from top-level nav to /teachings/podcasts/**
The 20-item podcast mega-menu is overwhelming and makes the site look like a podcast directory, not a community. A /teachings/podcasts/ index page can list all series with descriptions. Individual series get their own pages. This also makes the relationship between blog posts and podcast episodes explicit in 11ty.

**Commendations elevated**
Currently buried under About. Should be prominently linked from the About landing page and possibly the homepage. External voices saying "this is legit" are the most powerful anti-cult signal available.

**Dynamic content as proper 11ty collections**
In 11ty, create separate collections:
- `dailyPrayer` — powers /prayer/, linked from Practices > Prayer
- `teachingOfWeek` — powers /teaching-of-the-week/, linked from Practices > Formation
- `bookOfMonth` — powers /book-of-the-month/, linked from Practices > Formation
- `podcasts` — each episode is a post with `series` frontmatter; index pages group by series
- `blog` — essays, reflections, news

**Physical Space consolidated**
Green, Cielo, Tiny Forge, and Rooms are all aspects of the physical space. They should live as sections of a single /about/space/ page, not as separate nav items.

**"Resting" pages**
Remove Door of the Day and Reconciliation Stories from nav. Either 404 gracefully or redirect to a note that these are on hiatus. Don't show broken/empty nav items to new visitors.

---

## Homepage Structure (New)

The homepage should orient before it argues. Proposed flow:

1. **Hero** — Name, one-line description, location. ("An intentional Christian community in [city]. Protestants, Catholics, Orthodox, and Messianic Jews, living and praying together.")
2. **What we're about** — Brief: the John 17 vision, in plain language. One short paragraph.
3. **What we actually do** — The five practices, visually. Links to /practices/.
4. **Who we are** — A few faces, a sentence each. Humanizes and normalizes.
5. **Featured content** — Latest teaching, current book of the month, upcoming events.
6. **Credentials/trust signals** — Denomination affiliations, notable teachers, link to Commendations.
7. **Connect CTA** — Newsletter, Visit, Donate.

---

## Credentialing Strategy

To answer "is this a cult?" without asking the question:

- **Commendations page** — promote heavily; put a quote or two on the homepage
- **Named teachers with bios and affiliations** — George Miley, Peter Hocken (Catholic ecumenist), Mark Kinzer (Messianic Jewish scholar), etc. Each person's denominational/institutional affiliation signals breadth and legitimacy
- **Nicene Creed** — the podcast series on it is a strong signal; link to it from Core Beliefs with context ("We hold to the ancient faith, shared across the church")
- **Wittenberg 2017** — the pilgrimage series shows engagement with historic, mainstream ecumenical events. Needs better framing on the site.
- **Core Beliefs page** — should explicitly state Trinitarian orthodoxy, affirmation of Scripture, and the ecumenical breadth *up front*, not buried

---

## Content Inventory: What to Preserve, Move, or Cut

| Current Page | Action | New Location |
|---|---|---|
| Home | Rewrite | / |
| Connect | Rewrite | /connect/ |
| Daily Bridge Prayer | Keep as collection | /prayer/ |
| Teaching of the Week | Keep as collection | /teaching-of-the-week/ |
| Book of the Month | Keep as collection | /book-of-the-month/ |
| CTR Calendar | Keep | /connect/calendar/ |
| Passing Through Baca | Keep (if active) | /passing-through-baca/ |
| Door of the Day (resting) | Remove from nav | Archive or 404 |
| Reconciliation Stories (resting) | Remove from nav | Archive or 404 |
| All podcast series | Restructure as collection | /teachings/podcasts/[slug]/ |
| Living Out John 17 | Move | /about/john-17/ |
| Statement of Personal Devotion | Move | /about/devotion/ |
| Prayer, Reconciliation, Formation, Hospitality, Work | Move/keep | /practices/[slug]/ |
| Core Beliefs | Rewrite + move | /about/beliefs/ |
| History | Keep | /about/history/ |
| JJ Seabrook Testimony | Rename + move | /about/history/ or /about/community/ |
| Rooms + Green + Cielo + Tiny Forge | Consolidate | /about/space/ |
| Commendations | Keep, promote | /about/commendations/ |
| Media | Move | /teachings/media/ |
| Future Plans | Rename + move | /about/community/ or /connect/ |
| The CTR App | Move or cut | /connect/ |
| Visit | Move | /connect/visit/ |
| Contact | Move | /connect/contact/ |
| Donate | Move | /connect/donate/ |

---

## 11ty Implementation Notes

### Suggested collections in `.eleventy.js`
```js
eleventyConfig.addCollection("dailyPrayer", col =>
  col.getFilteredByTag("daily-prayer").sort((a,b) => b.date - a.date));

eleventyConfig.addCollection("teachingOfWeek", col =>
  col.getFilteredByTag("teaching-of-week").sort((a,b) => b.date - a.date));

eleventyConfig.addCollection("bookOfMonth", col =>
  col.getFilteredByTag("book-of-month").sort((a,b) => b.date - a.date));

eleventyConfig.addCollection("podcastsBySeries", col => {
  const episodes = col.getFilteredByTag("podcast");
  // group by episode.data.series
  return groupBy(episodes, ep => ep.data.series);
});
```

### Frontmatter convention for podcast episodes
```yaml
---
title: "Episode Title"
tags: [podcast]
series: "Foundations of Reconciliation"
seriesSlug: foundations-of-reconciliation
date: 2024-01-15
audioUrl: https://...
duration: "42:17"
speakers: [Thomas Cogdell]
---
```

### Frontmatter for blog/essay posts
```yaml
---
title: "Post Title"
tags: [blog]
date: 2024-01-15
category: reconciliation   # or: prayer, formation, hospitality, community
---
```

This lets you surface blog posts contextually on Practices pages by filtering `collections.blog` by category.

---

## Open Questions

1. **Work** — currently listed as one of the five practices on the existing site, but not in your proposed architecture. Intentional drop, or moved elsewhere?
2. **The CTR App** — worth keeping as a nav item? Or just a link in Connect?
3. **Future Plans / Community of Prayer** — what's the status? This could be a compelling page for donors and candidates if framed well.
4. **Wittenberg 2017 series** — five podcast collections, significant event. Should these be treated as a special archive section, or just podcast series like the others?
5. **"Friends/Relationships/Influences"** — do you have content for this, or does it need to be written?
6. **Reconciliation Stories** — worth reviving? User-submitted stories of reconciliation could be a powerful trust signal and community builder.
