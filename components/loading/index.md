# Loading

A loading indicator communicates that content or an action is being processed, using text, an image, or an animation. Loading indicators help users understand that the system is working and they should wait.

This headless component uses a `<div>` element with `role="status"` and `aria-live="polite"` to announce loading state changes to screen readers.

## Implementation Notes

- Uses `<div>` element with `role="status"` for screen reader announcements
- `aria-live="polite"` announces loading state changes without interrupting
- `aria-label` provides a text description of the loading state
- Content is provided through child elements (text, spinner, animation)

## Props

- `label`: string (default: "Loading") -- accessible label for the loading state
- `children`: slot (optional) -- loading indicator content (text, spinner, etc.)
- `...restProps`: Any additional HTML attributes

## Usage

```html
<Loading>Loading...</Loading>
<Loading label="Fetching results" />
<Loading label="Uploading file">
  <ProgressSpinner />
  <span>Uploading...</span>
</Loading>
```

## Keyboard Interactions

- None -- loading indicators are informational, not interactive

## ARIA

- `role="status"` -- creates an ARIA live region for loading announcements
- `aria-live="polite"` -- announces changes without interrupting current speech
- `aria-label` -- describes the loading state

## When to Use

- Use when content is being fetched, computed, or processed.
- Use to provide feedback during asynchronous operations.
- Avoid for instant operations that complete without noticeable delay.
- Consider Skeleton for placeholder loading states that match the content layout.

## Headless

This component provides `role="status"` with `aria-live="polite"` for accessible loading announcements, with zero visual styling. The consumer is responsible for all CSS including spinner animation, text styling, overlay, positioning, and size.

## Styles

The consumer provides all CSS styling. The component renders with a `.loading` class for targeting. No default styles are included -- this is a fully headless component.

## Testing

- Verify the component renders a `<div>` element with class `loading`
- Verify `role="status"` is present
- Verify `aria-live="polite"` is present
- Verify `aria-label` is applied
- Verify pass-through attributes are applied

## Advice

- **Designers**: Provide clear visual feedback that something is happening. Use consistent loading indicators across the application. Consider skeleton screens for content-heavy pages.
- **Developers**: Use `aria-live="polite"` to avoid interrupting screen reader users. Update the `label` prop to reflect the current loading context.
