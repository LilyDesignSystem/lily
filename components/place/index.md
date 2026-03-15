# Place

A place component displays information about a place, such as its name, address, description, and map or image. It is used in location directories, venue listings, and geographic references.

This headless component uses an `<article>` element for self-contained place content semantics.

## Implementation Notes

- Uses `<article>` element for self-contained place semantics
- `aria-label` describes the place for screen readers
- Contains slots for name, address, description, and image or map

## Props

- `label`: string (optional) -- accessible label for the place
- `children`: slot (required) -- place content
- `...restProps`: Any additional HTML attributes

## Usage

```html
<Place label="Central Park, New York">
  <h3>Central Park</h3>
  <address>New York, NY 10024</address>
  <p>A large public park in the heart of Manhattan.</p>
</Place>
```

## Keyboard Interactions

- None -- place components are informational, not interactive

## ARIA

- Implicit `article` role from `<article>` element
- `aria-label` -- describes the place for screen readers

## When to Use

- Use for displaying place profiles, location details, or venue information.
- Avoid for simple address text -- use an `<address>` element instead.

## Headless

This component provides an `<article>` element with optional `aria-label`, with zero visual styling. The consumer is responsible for all CSS including layout, map placement, and typography.

## Styles

The consumer provides all CSS styling. The component renders with a `.place` class for targeting. No default styles are included -- this is a fully headless component.

## Testing

- Verify the component renders an `<article>` element with class `place`
- Verify `aria-label` is applied when provided
- Verify child content is rendered correctly
- Verify pass-through attributes are applied

## Advice

- **Designers**: Include location name, address, and a visual element (map or photo) for clear identification.
- **Developers**: Use the `label` prop to identify the place for screen readers. Use semantic `<address>` elements for postal addresses.
