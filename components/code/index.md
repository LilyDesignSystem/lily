# Code

A code component displays an inline code span for showing short code snippets, variable names, file paths, or commands within surrounding text. It visually distinguishes code from prose to improve readability.

This headless component uses the native HTML `<code>` element for semantic correctness, ensuring assistive technologies can identify inline code content.

## Implementation Notes

- Uses native `<code>` element for semantic inline code
- Content is provided through child elements
- No interactive behavior -- purely presentational
- Consumer styles the code appearance (font, background, padding)

## Props

- `children`: slot (required) -- the code text content
- `...restProps`: Any additional HTML attributes

## Usage

```html
<p>Use the <Code>console.log()</Code> function for debugging.</p>
<p>Set the <Code>--primary-color</Code> CSS variable.</p>
```

## Keyboard Interactions

- None -- code spans are informational, not interactive

## ARIA

- No additional ARIA attributes needed -- the `<code>` element provides semantic meaning natively

## When to Use

- Use for inline code snippets, variable names, file paths, or terminal commands within text.
- Avoid for multi-line code -- use CodeBlock instead.
- Avoid for non-code emphasized text -- use standard text formatting instead.

## Headless

This component provides a semantic `<code>` element with zero visual styling. The consumer is responsible for all CSS including font family, background color, padding, border radius, and text color.

## Styles

The consumer provides all CSS styling. The component renders with a `.code` class for targeting. No default styles are included -- this is a fully headless component.

## Testing

- Verify the component renders a `<code>` element with class `code`
- Verify child content is rendered correctly
- Verify pass-through attributes are applied

## Advice

- **Designers**: Use a monospace font to distinguish code from prose. A subtle background color helps code stand out within paragraphs.
- **Developers**: Use Code for inline snippets and CodeBlock for multi-line code. No ARIA attributes are needed beyond the semantic `<code>` element.

## References

- MDN `<code>` element: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code
