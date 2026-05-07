# Spacing and Layout

This document outlines the spacing and layout tokens used in this project's design system.

## Spacing Tokens
The spacing scale follows a 4-step em-based scale with optional layout tokens for max-widths and gutters.

```css
/* Spacing Scale */
--space-xs: 0.25rem;
--space-sm: 0.5rem;
--space-md: 1rem;
--space-lg: 2rem;

/* Flow utility */
--space-flow: 3rem;
```

## Layout Tokens
Layout tokens define max-widths and gutters for consistent layout structures.

```css
/* Layout Tokens */
--layout-max-width: 75ch; /* Max width for content */
--layout-gutter-x: var(--space-md); /* Horizontal gutter */
--layout-gutter-y: var(--space-lg); /* Vertical gutter */
```

## Usage
- Use the spacing tokens (`--space-xs`, `--space-sm`, etc.) for margins and paddings to ensure consistency across the site.
- Use the flow utility (`--space-flow`) for larger vertical spacing between blocks of content.
- Use the layout tokens (`--layout-max-width`, `--layout-gutter-x`, etc.) to define consistent container widths and gutters.