Based on the brief, here is a proposed direction for the design system:

- **Color Palette**
  - `--color-primitive-night`: #0f3966
  - `--color-primitive-midnight`: #0a1a2b
  - `--color-primitive-darkestnight`: #100900
  - `--color-primitive-waterblue`: #3375fb
  - `--color-primitive-warmwhite`: #faf8f4
  - `--color-primitive-amberglow`: #e8a430
  - `--color-primitive-eveningsun`: #77420a
  - `--color-primitive-goldenhour`: #e8c87a
  - `--color-primitive-dawn`: #e9d5d3
  - `--color-primitive-dusk`: #d4dcec

- **Font Pairing**
  - Primary Font: Figtree (system fallback if needed)
  - Secondary Font: Cormorant Garamond (for headings) (system fallback if needed)
  - Tertiary Font: Tenor Sans (for brand name)

- **Typographic Tone**
  - Big and warm, with a touch of professionalism. The font sizes should be fluid to ensure readability across devices.

- **Overall Spacing Feel**
  - Open and airy, with ample spacing between elements for clarity and ease of reading.

- **Type scale**
  - refer to the following:
```
/* =============================================================================
   2. TYPE SCALE
   Fluid base via clamp(), all other steps derived via pow().
   Reference: https://codepen.io/miriamsuzanne/pen/QwEXomP

   Steps named by distance from base:
     negative steps → smaller than body copy
     --type-base    → base/medium (body copy)
     positive steps → larger than body copy

   Usage:
     font-size: var(--type-base);     body copy
     font-size: var(--type-sm);       captions, meta, nav
     font-size: var(--type-xs);       fine print
     font-size: var(--type-lg);       large body, intro text
     font-size: var(--type-xl);       h6
     font-size: var(--type-2xl);      h5
     font-size: var(--type-3xl);      h4
     font-size: var(--type-4xl);      h3
     font-size: var(--type-5xl);      h2
     font-size: var(--type-6xl);      h1
   ============================================================================= */

:root {

  /* Fluid base — clamps between ~1em and ~1.25em depending on viewport */
  --type-base:   clamp(1em, 22px + 1vi, 1.25em);

  /* Scale ratio — increase for a more dramatic hierarchy, decrease for subtler */
  --type-ratio:  1.1;

  /* Negative steps (smaller than body) */
  --type-xs:     calc(var(--type-base) * pow(var(--type-ratio), -1));
  --type-sm:     calc(var(--type-base) * pow(var(--type-ratio), -.25));

  /* Positive steps (larger than body) */
  --type-lg:     calc(var(--type-base) * pow(var(--type-ratio), 1));
  --type-xl:     calc(var(--type-base) * pow(var(--type-ratio), 2));
  --type-2xl:    calc(var(--type-base) * pow(var(--type-ratio), 3));
  --type-3xl:    calc(var(--type-base) * pow(var(--type-ratio), 4));
  --type-4xl:    calc(var(--type-base) * pow(var(--type-ratio), 5));
  --type-5xl:    calc(var(--type-base) * pow(var(--type-ratio), 6));
  --type-6xl:    calc(var(--type-base) * pow(var(--type-ratio), 7));

}
```