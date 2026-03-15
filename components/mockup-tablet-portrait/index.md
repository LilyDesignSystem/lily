# MockupTabletPortrait

A mockup tablet portrait is a decorative container that visually resembles a tablet computer in portrait orientation, used to frame content in documentation, demos, or marketing pages.

This headless component uses a `<div>` element with `role="img"` and `aria-label` to present the mockup as a decorative image to assistive technologies.

## Implementation Notes

- Uses `<div>` element with `role="img"` for decorative presentation
- `aria-label` describes the mockup content for screen readers
- Contains a slot for the tablet screen content area
- Consumer styles the tablet chrome (bezel, home button, screen area)

## Props

- `label`: string (required) -- accessible label describing the mockup content
- `children`: slot (required) -- the content displayed inside the tablet screen
- `...restProps`: Any additional HTML attributes

## Usage

```html
<MockupTabletPortrait label="Reading app in portrait mode">
  <Image src="reader-portrait.png" alt="Reading app screenshot in portrait" />
</MockupTabletPortrait>
```

## Keyboard Interactions

- None -- mockups are decorative, not interactive

## ARIA

- `role="img"` -- presents the mockup as a single image to assistive technologies
- `aria-label` -- describes the mockup content for screen readers

## When to Use

- Use to showcase tablet-optimized designs in portrait orientation.
- Use in documentation or marketing pages to frame tablet content.
- Consider MockupTabletLandscape for landscape-oriented tablet content.

## Headless

This component provides a `<div>` with `role="img"` and `aria-label` for accessible decorative presentation, with zero visual styling. The consumer is responsible for all CSS including tablet frame appearance, bezel, screen area, and portrait aspect ratio.

## Styles

The consumer provides all CSS styling. The component renders with a `.mockup-tablet-portrait` class for targeting. No default styles are included -- this is a fully headless component.

## Testing

- Verify the component renders a `<div>` element with class `mockup-tablet-portrait`
- Verify `role="img"` is present
- Verify `aria-label` is applied
- Verify child content is rendered
- Verify pass-through attributes are applied

## Advice

- **Designers**: Use a portrait aspect ratio (e.g., 3:4 or 10:16) that matches common tablet displays. Include visible bezel for device recognition.
- **Developers**: Always provide a descriptive `label` prop so screen readers can convey the mockup's purpose.
