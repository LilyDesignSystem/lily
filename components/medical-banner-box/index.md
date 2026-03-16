# Medical Banner Box

MedicalBannerBox is a headless layout component designed to be placed inside a MedicalBanner component. It renders a `<div>` with `data-context="medical"` that the consumer styles with flexbox horizontal layout to arrange medical banner content items side by side, such as patient details, identifiers, and action buttons.

This component is useful for structuring medical banner content into a horizontal row, aligning patient information, clinical data, and action buttons within a medical banner message bar.

## Implementation Notes

- Renders a `<div>` element with class `medical-banner-box`
- Intended to be placed inside a MedicalBanner component
- Uses `data-context="medical"` for consumer CSS targeting
- Consumer applies flexbox horizontal styles via the `.medical-banner-box` CSS class
- Uses `children` slot for flexible content rendering
- Spreads `restProps` onto the `<div>` element for consumer extensibility

## Props

- `label`: string (optional) -- accessible name applied via `aria-label` if needed
- `children`: slot (required) -- the medical banner box content
- `...restProps`: unknown -- additional attributes spread onto the `<div>` element

## Usage

```html
<MedicalBanner label="Patient summary">
  <MedicalBannerBox>
    <span>Patient: John Smith</span>
    <span>DOB: 15/03/1985</span>
    <span>NHS: 123 456 7890</span>
  </MedicalBannerBox>
</MedicalBanner>
```

## Keyboard Interactions

- None (passive layout element)

## ARIA

- No additional ARIA attributes required; the parent MedicalBanner provides the landmark role and aria-live region
- Optional `aria-label` via `label` prop if the box needs an accessible name

## Composition

MedicalBannerBox is a child of MedicalBanner:

```
MedicalBanner
  └── MedicalBannerBox (flexbox horizontal row)
        ├── patient details
        ├── clinical identifiers
        └── action buttons
```

## When to Use

- Use inside a MedicalBanner when you need to arrange medical content horizontally.
- Avoid using outside of a MedicalBanner; use BannerBox for generic banners.

## Headless

This headless component provides a `<div>` with `.medical-banner-box` class and `data-context="medical"` for consumer CSS targeting. The consumer is responsible for all flexbox styling.

## Styles

The consumer provides all CSS styling. The component renders with a `.medical-banner-box` class for targeting. Typical consumer styles include `display: flex; flex-direction: row; align-items: center; gap: 1rem;`. No default styles are included -- this is a fully headless component.

## Testing

- Verify the component renders a `<div>` element with class `medical-banner-box`
- Verify `data-context="medical"` is present
- Verify it renders children content
- Verify pass-through attributes are applied to the `<div>`

## Advice

- **Designers**: Use MedicalBannerBox to create horizontal layouts within medical banners for patient details. Consider responsive behavior for narrow screens.
- **Developers**: Apply `display: flex; flex-direction: row;` to `.medical-banner-box` in your CSS.

## References

- Parent component: MedicalBanner
- CSS Flexbox: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout
