# Colors

This document provides a comprehensive list of color tokens used in the project's design system. These tokens follow a three-tier pattern: Primitives, Semantic, and Component slots.

## Primitives
These are raw values named by hue.

```css
/* Primitives */
--color-primitive-coral: #ff6b6b;
--color-primitive-cyan: #87ceeb;
--color-primitive-goldenhour: #f0932b;
--color-primitive-forestgreen: #556b2f;
--color-primitive-night: #1e2124;
--color-primitive-snow: #ffffff;
```

## Semantic
These are named by role (surface, text, interactive, border, decor).

```css
/* Semantic */
--color-background-light: var(--color-primitive-snow);
--color-background-dark: var(--color-primitive-night);
--color-text: var(--color-primitive-night);
--color-interactive: var(--color-primitive-coral);
--color-border: var(--color-primitive-forestgreen);
```

## Component Slots
These are defined per component and documented in `color.css`.

```css
/* Component Slots */
--color-button-primary-background: var(--color-primitive-goldenhour);
--color-button-primary-text: var(--color-primitive-snow);
--color-link: var(--color-interactive);
--color-link-hover: var(--color-primitive-cyan);