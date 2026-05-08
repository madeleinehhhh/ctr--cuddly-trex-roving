# Colors

This document provides a comprehensive list of color tokens used in the project's design system. These tokens follow a three-tier pattern: Primitives, Semantic, and Component slots.

## Primitives
These are raw values named by hue.

```css
/* Primitives */
  --color-primitive-night: #0f3966;
  --color-primitive-midnight: #0a1a2b;
  --color-primitive-darkestnight: #100900;
  --color-primitive-waterblue: #3375fb;
  --color-primitive-warmwhite: #faf8f4;
  --color-primitive-amberglow: #e8a430;
  --color-primitive-eveningsun: #77420a;
  --color-primitive-goldenhour: #e8c87a;
  --color-primitive-dawn: #e9d5d3;
  --color-primitive-dusk: #d4dcec;
```

## Semantic
These are named by role (surface, text, interactive, border, decor).

```css
/* Semantic */
  --color-surface: var(--color-primitive-warmwhite);
  --color-text: var(--color-primitive-midnight);
  --color-text-light: var(--color-primitive-dawn);
  --color-interactive: var(--color-primitive-waterblue);
  --color-border: var(--color-primitive-night);
  --color-decor: var(--color-primitive-goldenhour);
```

## Component Slots
These are defined per component and documented in `css/tokens/color.css`.

```css
/* Component Slots */
--color-button-primary-background: var(--color-primitive-goldenhour);
--color-button-primary-text: var(--color-primitive-eveningsun);
--color-link: var(--color-interactive);
--color-link-hover: var(--color-decor);
```
