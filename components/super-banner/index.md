# SuperBanner

A super-banner communicates a high-priority state that affects an entire app, experience, process, or system. It is displayed prominently at the very top of the page, above all other content, to ensure maximum visibility for critical messages.

This headless component uses a `<div>` element with `role="alert"` for immediate screen reader announcement of high-priority information.

## Implementation Notes

- Uses `<div>` element with `role="alert"` for immediate screen reader announcement
- `aria-live="assertive"` interrupts current speech to announce the message
- Positioned at the top of the page above all other content
- May include a dismiss button for user-dismissable banners

## Props

- `label`: string (optional) -- accessible label for the super banner
- `dismissable`: boolean (default: false) -- whether the banner can be dismissed
- `ondismiss`: callback (optional) -- handler called when banner is dismissed
- `children`: slot (required) -- banner content
- `...restProps`: Any additional HTML attributes

## Usage

```html
<SuperBanner label="System maintenance">
  Scheduled maintenance will begin at midnight. Save your work.
</SuperBanner>

<SuperBanner dismissable ondismiss={handleDismiss}>
  A new version is available. Please refresh the page.
</SuperBanner>
```

## Keyboard Interactions

- Tab: Focus the dismiss button (if dismissable)
- Enter/Space: Dismiss the banner (if dismissable)

## ARIA

- `role="alert"` -- announces the banner content immediately to screen readers
- `aria-live="assertive"` -- interrupts current speech for high-priority messages
- `aria-label` -- optional description of the banner purpose

## When to Use

- Use for system-wide critical messages such as maintenance, outages, or security alerts.
- Use when the message must be seen by all users immediately.
- Avoid for routine notifications -- use Banner or Alert instead.
- Avoid for form validation -- use ErrorSummary instead.

## Headless

This component provides a `<div>` with `role="alert"` and `aria-live="assertive"` for immediate screen reader announcements, with zero visual styling. The consumer is responsible for all CSS including background color, text color, positioning, dismiss button, and responsive behavior.

## Styles

The consumer provides all CSS styling. The component renders with a `.super-banner` class for targeting. No default styles are included -- this is a fully headless component.

## Testing

- Verify the component renders a `<div>` element with class `super-banner`
- Verify `role="alert"` is present
- Verify `aria-live="assertive"` is present
- Verify dismiss functionality works when dismissable
- Verify pass-through attributes are applied

## Advice

- **Designers**: Use bold, high-contrast colors to distinguish super banners from regular content. Keep the message concise and actionable. Position at the very top of the viewport.
- **Developers**: Use `role="alert"` for critical messages that need immediate attention. Provide a dismiss mechanism for non-persistent messages.
