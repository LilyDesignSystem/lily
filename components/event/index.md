# Event

An event component displays event-related information such as the event title, date, time, location, and description. Events are used in calendars, schedules, timelines, and event listing pages.

This headless component uses an `<article>` element for self-contained event content semantics, with appropriate ARIA attributes for accessible event identification.

## Implementation Notes

- Uses `<article>` element for self-contained event semantics
- `aria-label` describes the event for screen readers
- Contains slots for title, date, time, location, and description
- Supports structured event metadata

## Props

- `label`: string (optional) -- accessible label for the event
- `children`: slot (required) -- event content including title, date, location, etc.
- `...restProps`: Any additional HTML attributes

## Usage

```html
<Event label="Annual Conference 2025">
  <h3>Annual Conference 2025</h3>
  <time datetime="2025-06-15">June 15, 2025</time>
  <p>Convention Center, Main Hall</p>
  <p>Join us for our annual conference featuring keynote speakers and workshops.</p>
</Event>
```

## Keyboard Interactions

- None -- events are informational, not interactive

## ARIA

- Implicit `article` role from `<article>` element
- `aria-label` -- describes the event for screen readers

## When to Use

- Use for displaying event information in calendars, schedules, or listings.
- Use when event metadata (date, time, location) needs structured presentation.
- Avoid for simple text content -- use a paragraph or Card instead.

## Headless

This component provides an `<article>` element with optional `aria-label` for accessible event identification, with zero visual styling. The consumer is responsible for all CSS including layout, date/time formatting, location styling, and visual hierarchy.

## Styles

The consumer provides all CSS styling. The component renders with an `.event` class for targeting. No default styles are included -- this is a fully headless component.

## Testing

- Verify the component renders an `<article>` element with class `event`
- Verify `aria-label` is applied when provided
- Verify child content slots are rendered correctly
- Verify pass-through attributes are applied

## Advice

- **Designers**: Clearly distinguish event date, time, and location from the description. Use consistent formatting across event listings.
- **Developers**: Use semantic `<time>` elements with `datetime` attributes for machine-readable dates. Provide descriptive `label` props for screen readers.
