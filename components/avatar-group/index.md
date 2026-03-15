# AvatarGroup

An avatar group displays a collection of avatar components in a stacked or clustered layout, commonly used to show multiple users, participants, or contributors in a compact space. Avatar groups typically overlap or truncate to indicate the total count.

This headless component uses a `<div>` element with `role="group"` and an `aria-label` to provide accessible grouping semantics for the contained avatar components.

## Implementation Notes

- Uses `<div>` element with `role="group"` to semantically group avatars
- `aria-label` describes the group (e.g., "Team members")
- Renders child avatar components in source order
- Consumer controls overlap, spacing, and truncation via CSS

## Props

- `label`: string (required) -- accessible label for the avatar group
- `children`: slot -- avatar components
- `...restProps`: Any additional HTML attributes

## Usage

```html
<AvatarGroup label="Team members">
  <Avatar>AB</Avatar>
  <Avatar>CD</Avatar>
  <Avatar>EF</Avatar>
</AvatarGroup>
```

## Keyboard Interactions

- None -- avatar groups are informational, not interactive

## ARIA

- `role="group"` -- semantically groups the contained avatars
- `aria-label` -- describes the purpose of the group

## When to Use

- Use to display multiple avatars representing users, participants, or contributors.
- Use when space is limited and a compact representation of multiple people is needed.
- Avoid when each avatar needs independent interactive behavior -- use a list instead.

## Headless

This component provides `role="group"` with `aria-label` for accessible grouping, with zero visual styling. The consumer is responsible for all CSS including overlap positioning, z-index stacking, max visible count, truncation indicator, and spacing.

## Styles

The consumer provides all CSS styling. The component renders with an `.avatar-group` class for targeting. No default styles are included -- this is a fully headless component.

## Testing

- Verify the component renders a `<div>` element with class `avatar-group`
- Verify `role="group"` is present
- Verify `aria-label` is applied
- Verify child avatar components are rendered
- Verify pass-through attributes are applied

## Advice

- **Designers**: Overlap avatars by 25-50% to indicate grouping. Show a "+N" indicator when truncating. Maintain consistent avatar sizing within the group.
- **Developers**: Always provide a descriptive `label` prop that conveys the group's purpose to screen readers.

## Composition

AvatarGroup is a container for Avatar, AvatarImage, and AvatarText components.
