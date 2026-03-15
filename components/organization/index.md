# Organization

An organization component displays information about an organization, such as its name, logo, description, and contact details. It is used in directories, profiles, and listings.

This headless component uses an `<article>` element for self-contained organization content semantics.

## Implementation Notes

- Uses `<article>` element for self-contained organization semantics
- `aria-label` describes the organization for screen readers
- Contains slots for name, logo, description, and contact information

## Props

- `label`: string (optional) -- accessible label for the organization
- `children`: slot (required) -- organization content
- `...restProps`: Any additional HTML attributes

## Usage

```html
<Organization label="Acme Corporation">
  <h3>Acme Corporation</h3>
  <p>Leading provider of innovative solutions.</p>
</Organization>
```

## Keyboard Interactions

- None -- organizations are informational, not interactive

## ARIA

- Implicit `article` role from `<article>` element
- `aria-label` -- describes the organization for screen readers

## When to Use

- Use for displaying organization profiles, directory entries, or company information.
- Avoid for simple text content -- use a paragraph or Card instead.

## Headless

This component provides an `<article>` element with optional `aria-label`, with zero visual styling. The consumer is responsible for all CSS including layout, logo placement, and typography.

## Styles

The consumer provides all CSS styling. The component renders with an `.organization` class for targeting. No default styles are included -- this is a fully headless component.

## Testing

- Verify the component renders an `<article>` element with class `organization`
- Verify `aria-label` is applied when provided
- Verify child content is rendered correctly
- Verify pass-through attributes are applied

## Advice

- **Designers**: Use consistent layouts across organization entries. Include logo, name, and key details prominently.
- **Developers**: Use the `label` prop to identify the organization for screen readers.
