# Typography

This document outlines the typographic scale and conventions used in this project's design system.

## Scale
The type scale is based on a fluid base using `clamp()` and power-of-two steps for scalability. The scale is defined from `--type-xs` to `--type-6xl`.

```css
/* Type Scale */
--type-base: clamp(1rem, 0.923vw + 0.75rem, 1.125rem);
--type-step-ratio: 1.125;
--type-xs: calc(--type-base / (var(--type-step-ratio) * var(--type-step-ratio)));
--type-sm: calc(--type-base / var(--type-step-ratio));
--type-md: --type-base;
--type-lg: calc(--type-base * var(--type-step-ratio));
--type-xl: calc(--type-base * (var(--type-step-ratio) * var(--type-step-ratio)));
--type-2xl: calc(--type-base * (var(--type-step-ratio) * var(--type-step-ratio) * var(--type-step-ratio)));
--type-3xl: calc(--type-base * (var(--type-step-ratio) * var(--type-step-ratio) * var(--type-step-ratio) * var(--type-step-ratio)));
--type-4xl: calc(--type-base * (var(--type-step-ratio) * var(--type-step-ratio) * var(--type-step-ratio) * var(--type-step-ratio) * var(--type-step-ratio)));
--type-5xl: calc(--type-base * (var(--type-step-ratio) * var(--type-step-ratio) * var(--type-step-ratio) * var(--type-step-ratio) * var(--type-step-ratio) * var(--type-step-ratio)));
--type-6xl: calc(--type-base * (var(--type-step-ratio) * var(--type-step-ratio) * var(--type-step-ratio) * var(--type-step-ratio) * var(--type-step-ratio) * var(--type-step-ratio) * var(--type-step-ratio)));
```

## Leading Tokens
Leading tokens are defined for different line heights to ensure consistency and readability.

```css
/* Leading Tokens */
--leading-tight: 1.2;
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

- **Primary Font**: Inter (system-ui fallback)
- **Secondary Font**: Arial, sans-serif (fallback)

```css
/* Fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap');

body {
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
}