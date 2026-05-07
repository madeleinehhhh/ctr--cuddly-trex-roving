# Typography

This document outlines the typographic scale and conventions used in this project's design system.

## Scale
The type scale is based on a fluid base using `clamp()` and power-of-two steps for scalability. The scale is defined from `--type-xs` to `--type-6xl`.

```css
/* Type Scale */
  /* Fluid base — clamps between ~1em and ~1.25em depending on viewport */
  --type-base: clamp(1em, 22px + 1vi, 1.25em);

  /* Scale ratio — increase for a more dramatic hierarchy, decrease for subtler */
  --type-ratio: 1.1;

  /* Negative steps (smaller than body) */
  --type-xs: calc(var(--type-base) * pow(var(--type-ratio), -1));
  --type-sm: calc(var(--type-base) * pow(var(--type-ratio), -.25));

  /* Positive steps (larger than body) */
  --type-lg: calc(var(--type-base) * pow(var(--type-ratio), 1));
  --type-xl: calc(var(--type-base) * pow(var(--type-ratio), 2));
  --type-2xl: calc(var(--type-base) * pow(var(--type-ratio), 3));
  --type-3xl: calc(var(--type-base) * pow(var(--type-ratio), 4));
  --type-4xl: calc(var(--type-base) * pow(var(--type-ratio), 5));
  --type-5xl: calc(var(--type-base) * pow(var(--type-ratio), 6));
  --type-6xl: calc(var(--type-base) * pow(var(--type-ratio), 7));
```

## Leading Tokens
Leading tokens are defined for different line heights to ensure consistency and readability.

```css
/* Leading Tokens */
--leading-tight: 1;
--leading-normal: 1.4;
--leading-loose: 1.6;
```

## Weight Tokens
Weight tokens are defined for different font weights to maintain a consistent typographic hierarchy.

```css
/* Weight Tokens */
--weight-normal: 400;
--weight-bold: 700;
--weight-heading: 800;
```

## Font Pairing
The project uses the following free/system fonts:

- **Primary Font**: Figtree, sans-serif
- **Secondary Font**: Cormorant Garamond, serif
- **Tertiary font**: Tenor Sans

```css
/* Fonts */
/* Fonts are hosting locally, in /public/fonts/ */

:root {
  --font-body: 'Figtree', sans-serif;
  --font-heading: 'Cormorant Garamond', serif;
  --font-special: 'Tenor Sans', var(--font-heading);
}