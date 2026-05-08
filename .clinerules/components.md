# Components

This document outlines the conventions and checklist for creating components in this project's design system.

## Component Pattern
Components are reusable building blocks that follow a consistent pattern. Each component should:

- **Use semantic HTML**: Use appropriate HTML elements to convey meaning.
- **Define styles with custom properties**: Use tokens defined in `css/tokens/` for colors, typography, spacing, and motion.
- **Ensure accessibility**: Include all necessary ARIA attributes and ensure components are keyboard navigable.
- **Provide flexibility through props/data attributes**: Allow customization via data attributes or classes.

## Checklist
When creating a new component, follow this checklist to ensure consistency:

1. **Define the structure**:
   - Use semantic HTML elements where possible (e.g., `<button>`, `<input>`).
   - Add necessary ARIA attributes for accessibility (e.g., `aria-label`).

2. **Style with tokens**:
   - Use color, typography, spacing, and motion tokens from `css/tokens/`.
   - Define any component-specific slots in `color.css`.

3. **Ensure flexibility**:
   - Provide customization options via data attributes or classes.
   - Ensure the component can be easily reused across different parts of the site.

4. **Document the component**:
   - Add documentation for usage and customization options to this file.
   - Include any relevant examples or code snippets.

5. **Test the component**:
   - Test in various browsers to ensure consistency.
   - Verify accessibility using tools like Lighthouse or WAVE.

## Example Component
Here's an example of a button component:

```html
<!-- Button Component -->
<button class="btn" data-style="primary">
  Click Me
</button>
```

```css
/* Button Styles */
