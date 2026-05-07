# Design System

This document outlines the file structure, load order, and other conventions for the CSS design system used in this project.

## File Structure
- **`css/tokens/`**: Contains token files for colors, type, space, and motion.
  - `color.css`: Color tokens.
  - `type.css`: Typography tokens.
  - `space.css`: Spacing tokens.
  - `motion.css`: Motion tokens.
- **`css/base/`**: Contains base styles for fonts, reset, type, layout, etc.
  - `fonts.css`: Font definitions and @font-face rules.
  - `reset.css`: Reset styles for consistency across browsers.
  - `type.css`: Typography utilities and styles.
  - `layout.css`: Base layout utilities and structures.
- **`css/site.css`**: Site-specific styles.

## Load Order
The CSS files are loaded in the following order to ensure proper layering of styles:

1. **Tokens**
   - `color.css`
   - `type.css`
   - `space.css`
   - `motion.css`

2. **Base Styles**
   - `fonts.css`
   - `reset.css`
   - `type.css`
   - `layout.css`

3. **Site-Specific Styles**
   - `site.css`

4. **Page-Specific Styles**
   - Loaded conditionally via `{% if pageCss %}` in `src/_includes/base.njk`.

## Conventions
- **Tokens Only**: Use custom properties for colors, typography, spacing, and motion.
- **Component Slots Before Properties**: Define component slots before individual properties.
- **No Transition: All**: Scope transitions to specific properties.
- **No !important**: Avoid using `!important` unless absolutely necessary.
- **CSS Nesting**: CSS nesting is fine for state and child selectors.
- **Color Manipulation**: Prefer `oklch()` for color manipulation.
- **Fluid Values**: Use `clamp()` for fluid values.