---
title: "Teachings"
description: "Twenty-five years of teaching on reconciliation, ecumenism, and Christian unity — by series, by teacher, and by archive."
layout: "page.njk"
permalink: "/teachings/"
aliases: ["ctr-teachings-index"]
---

%% # Christ the Reconciler — /teachings Page Copy Draft %%

---

%%SECTION: HERO / OPENING%%
### Teachings

Twenty-five years of prayer, practice, and hard-won learning — offered to the wider Church.

CTR's teaching library includes audio and video recordings, written reflections, and a curated reading list. Some of it comes from within the community. Much of it comes from friends and collaborators across the Christian world who have shaped CTR's theology and practice.

None of it is polished for an audience. All of it is the product of a community that has been living this — imperfectly, faithfully — for a long time.

---

%%SECTION: BROWSE BY SERIES%%
### Browse by Series

Thematic series on the theological and practical foundations of reconciliation and ecumenical community.

**[[ctr-teachings-series-foundations|Foundations of Reconciliation →]]**
The theological groundwork. What reconciliation is, why it is necessary, and what it requires.

**[[ctr-teachings-series-boundaries|Boundaries of Reconciliation →]]**
Where reconciliation has limits — and what those limits mean for how we practice it.

**[[ctr-teachings-series-community|Foundations of Community →]]**
What it takes to build and sustain intentional community across genuine difference.

**[[ctr-teachings-series-creed|The Nicene Creed →]]**
A series on the ancient faith that holds the community together — explored from across the traditions represented at CTR.

---

%%SECTION: BROWSE BY TEACHER%%
### Browse by Teacher

Teachings organized by the men and women who have shaped CTR's life and theology.

- [[ctr-teachings-teacher-thomas-cogdell|Thomas Cogdell →]]
- [[ctr-teachings-teacher-amy-cogdell|Amy Cogdell →]]
- [[ctr-teachings-teacher-george-miley|George Miley →]]
- [[ctr-teachings-teacher-marianna-gol|Marianna Gol →]]
- [[ctr-teachings-teacher-mark-kinzer|Mark Kinzer →]]
- [[ctr-teachings-teacher-peter-hocken|Peter Hocken →]]
- [[ctr-teachings-teacher-phillip-caroline-owens|Phillip and Caroline Owens →]]
- [[ctr-teachings-teacher-richard-harvey|Richard Harvey →]]
- [[ctr-teachings-teacher-sandi-pedrotti|Sandi Pedrotti →]]
- [[ctr-teachings-teacher-other-ctrs|Other CTR Community Members →]]
- [[ctr-teachings-teacher-other-friends|Other Friends of CTR →]]

---

%%SECTION: THE WITTENBERG ARCHIVE%%
### The Wittenberg 2017 Archive

In 2017, CTR played a central organizing role in the Wittenberg 2017 initiative — a multi-year series of ecumenical gatherings marking the 500th anniversary of the Reformation, with events in Volkenroda (2013), Trento (2014), Rome (2015), and culminating in Wittenberg, Germany in November 2017. The initiative brought together Catholics, Protestants, Pentecostals, Anabaptists, and others from across Europe and beyond for prayer, repentance, and reconciliation across five centuries of division.

The recordings from these gatherings are a significant historical resource — a document of what was possible when Christians from many traditions chose, together, to end the hostility.

- [[ctr-teachings-wittenberg-volkenroda|Volkenroda 2013 →]]
- [[ctr-teachings-wittenberg-trento|Trento 2014 →]]
- [[ctr-teachings-wittenberg-rome|Rome 2015 →]]
- [[ctr-teachings-wittenberg-500-days|500 Days Before →]]
- [[ctr-teachings-wittenberg-anniversary|The 500th Anniversary →]]

---

%%SECTION: WRITTEN REFLECTIONS%%
### Written Reflections

**[[ctr-teachings-passing-through-baca|Passing Through Baca →]]**
Amy Cogdell's personal reflection series. The name comes from Psalm 84:6 — the valley of weeping that God transforms into a place of springs. [CONFIRM: brief description and whether active]

**[[ctr-teachings-reconciliation-stories|Reconciliation Stories →]]**
Testimonies and narratives of reconciliation in practice — what it looks like when the hostility actually ends. [CONFIRM: brief description and whether active]

---

%%SECTION: LIVING RESOURCES%%
### Updated Regularly

- **Teaching of the Week** [[ctr-practices-teaching-of-the-week|→]]
- **Book of the Month** [[ctr-practices-book-of-the-month|→]]
- **Reading List** [[ctr-teachings-reading-list|→]]

---

%%SECTION: NAVIGATION%%
- [[ctr-practices-formation|Formation — the practice these teachings support →]]
- [[ctr-connect-visit|Visit CTR in person →]]
- [[ctr-about-index|About CTR →]]

---

*End of /teachings page copy*

---
### Editor Notes
- **11ty content model**: Each teaching entry (audio, video, or written) should be a markdown file with front matter including: `title`, `date`, `teacher` (slug), `series` (slug), `type` (audio/video/written), `archive` (boolean — true for Wittenberg 2017), `audio_url`, `video_url`, `podcast_feed` (boolean). The teacher and series index pages are then generated automatically as filtered 11ty collections. This eliminates the manual nav maintenance that made the Squarespace site unwieldy.
- **Teacher pages**: Each teacher index page (`/teachings/teachers/thomas-cogdell` etc.) should be auto-generated from the collection — a simple template that lists all posts tagged with that teacher slug. No manual page needed per teacher.
- **Wittenberg archive labeling**: These five collections should be clearly marked as a historical archive — not ongoing series. A simple `archive: true` flag in front matter and a visual treatment (muted colors, "Archive" label) will distinguish them from active series without burying them.
- **Passing Through Baca and Reconciliation Stories**: Both marked [CONFIRM] pending verification they are active. If either is dormant, consider labeling it as an archive rather than removing it — the content still has value.
- **Brief teacher descriptions**: Each teacher link on this page is bare — just a name. Consider adding a one-line identifier for each (e.g., "George Miley — longtime friend and teacher; author of *Loving the Church*") once those are confirmed. This is especially important for the less well-known teachers, where a newcomer has no context.
- **Podcast feeds**: The existing Squarespace setup pipes these into Apple Podcasts etc. The 11ty rebuild should maintain those feeds via a generated RSS file per series or per teacher, using 11ty's `feedPlugin` or a custom feed template. Confirm with whoever is handling the 11ty build.
