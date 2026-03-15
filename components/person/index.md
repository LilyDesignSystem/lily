# Person

A person component displays information about a person, such as their name, avatar, role, and contact details. It is used in team pages, directories, profiles, and user listings.

This headless component uses an `<article>` element for self-contained person content semantics.

## Implementation Notes

- Uses `<article>` element for self-contained person semantics
- `aria-label` describes the person for screen readers
- Contains slots for avatar, name, role, bio, and contact information

## Props

- `label`: string (optional) -- accessible label for the person
- `children`: slot (required) -- person content
- `...restProps`: Any additional HTML attributes

## Usage

```html
<Person label="Jane Doe, Senior Developer">
  <Avatar>JD</Avatar>
  <h3>Jane Doe</h3>
  <p>Senior Developer</p>
</Person>
```

## Keyboard Interactions

- None -- person components are informational, not interactive

## ARIA

- Implicit `article` role from `<article>` element
- `aria-label` -- describes the person for screen readers

## When to Use

- Use for displaying person profiles, team members, or directory entries.
- Avoid for simple text content -- use a paragraph or Card instead.

## Headless

This component provides an `<article>` element with optional `aria-label`, with zero visual styling. The consumer is responsible for all CSS including layout, avatar placement, and typography.

## Styles

The consumer provides all CSS styling. The component renders with a `.person` class for targeting. No default styles are included -- this is a fully headless component.

## Testing

- Verify the component renders an `<article>` element with class `person`
- Verify `aria-label` is applied when provided
- Verify child content is rendered correctly
- Verify pass-through attributes are applied

## Advice

- **Designers**: Use consistent layouts across person entries. Include avatar, name, and role prominently.
- **Developers**: Use the `label` prop to identify the person for screen readers.
