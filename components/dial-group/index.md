# DialGroup

A dial group is a container for multiple dial components, providing semantic grouping for related rotary controls. Dial groups are used when several dials need to be presented and operated together, such as audio mixing controls or multi-parameter adjustments.

This headless component uses a `<div>` element with `role="group"` and an `aria-label` to provide accessible grouping semantics for the contained dial components.

## Implementation Notes

- Uses `<div>` element with `role="group"` to semantically group dials
- `aria-label` describes the group purpose
- Renders child dial components in source order
- Consumer controls layout and spacing via CSS

## Props

- `label`: string (required) -- accessible label for the dial group
- `children`: slot -- dial components
- `...restProps`: Any additional HTML attributes

## Usage

```html
<DialGroup label="Audio controls">
  <Dial label="Volume" value={75} />
  <Dial label="Bass" value={50} />
  <Dial label="Treble" value={60} />
</DialGroup>
```

## Keyboard Interactions

- None at the group level -- individual dials handle their own keyboard interactions

## ARIA

- `role="group"` -- semantically groups the contained dials
- `aria-label` -- describes the purpose of the group

## When to Use

- Use to group related dial controls that share a common purpose.
- Use when multiple dials need to be visually and semantically associated.
- Avoid for a single dial -- use Dial directly without a group wrapper.

## Headless

This component provides `role="group"` with `aria-label` for accessible grouping, with zero visual styling. The consumer is responsible for all CSS including layout direction, spacing, alignment, and responsive behavior.

## Styles

The consumer provides all CSS styling. The component renders with a `.dial-group` class for targeting. No default styles are included -- this is a fully headless component.

## Testing

- Verify the component renders a `<div>` element with class `dial-group`
- Verify `role="group"` is present
- Verify `aria-label` is applied
- Verify child dial components are rendered
- Verify pass-through attributes are applied

## Advice

- **Designers**: Arrange dials in a logical order that reflects their relationship. Use consistent sizing and spacing within the group.
- **Developers**: Always provide a descriptive `label` prop that conveys the group's purpose to screen readers.

## Composition

DialGroup is a container for Dial components.
