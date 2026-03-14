# Tree Link

A tree link is a navigational anchor element representing one link in a tree navigation structure. It renders as a semantic `<a>` element and is designed to be placed inside a TreeListItem within a TreeList and TreeNav structure.

## Implementation Notes

- Renders as a semantic `<a>` element for tree navigation
- Designed to be used inside a TreeListItem
- Supports an optional `aria-label` override for more descriptive screen reader text
- All link text is provided through the children slot
- Spreads `...restProps` onto the `<a>` element

## Props

- `href`: string (required) -- the URL to navigate to
- `label`: string (optional, default: undefined) -- accessible label override via `aria-label`
- `children`: slot (required) -- the link text/content
- `...restProps`: Any additional HTML attributes spread onto the `<a>`

## Usage

```html
<TreeNav label="Site navigation">
  <TreeList label="Pages">
    <TreeListItem tabindex="0">
      <TreeLink href="/products">Products</TreeLink>
    </TreeListItem>
    <TreeListItem tabindex="-1">
      <TreeLink href="/services">Services</TreeLink>
    </TreeListItem>
    <TreeListItem tabindex="-1">
      <TreeLink href="/about">About</TreeLink>
    </TreeListItem>
  </TreeList>
</TreeNav>
```

## Keyboard Interactions

- Tab: Focus the link
- Enter: Activate the link (browser default)

## ARIA

- Implicit `link` role from the `<a>` element
- `aria-label` -- optional override for descriptive screen reader text, set from the `label` prop

## When to Use

- Use inside a TreeListItem to provide a navigable link within a tree navigation structure.
- Use when tree items need to navigate to pages rather than just expand/collapse subtrees.
- Avoid for tree items that only toggle expand/collapse -- use button-based controls instead.

## Headless

This component provides a semantic `<a>` element with optional `aria-label` override and zero visual styling. The consumer is responsible for all CSS including link color, underline style, hover effects, and focus indicators.

## Styles

The consumer provides all CSS styling. The component renders with a `.tree-link` class for targeting. No default styles are included — this is a fully headless component.

## Testing

- Verify the component renders an `<a>` element with class `tree-link`
- Verify `aria-label` is set from the `label` prop
- Verify keyboard interactions work correctly
- Verify pass-through attributes are applied

## Advice

- **Designers**: Style tree links to be visually consistent with the tree hierarchy. Ensure sufficient indentation and clear visual cues for depth level.
- **Developers**: Use the `label` prop to provide descriptive screen reader text when the visible text needs additional context.

## Composition

TreeLink follows the Nav / List / ListItem composition pattern:

- **TreeNav** -- outer `<nav>` container providing the navigation landmark.
- **TreeList** -- `<ol>` list with `role="tree"` providing keyboard navigation.
- **TreeListItem** -- individual `<li>` items with `role="treeitem"`.
- **TreeLink** -- `<a>` link inside a tree item for navigable nodes.

```html
<TreeNav label="Navigation">
  <TreeList label="Pages">
    <TreeListItem tabindex="0">
      <TreeLink href="/home">Home</TreeLink>
    </TreeListItem>
    <TreeListItem tabindex="-1">
      <TreeLink href="/about">About</TreeLink>
    </TreeListItem>
  </TreeList>
</TreeNav>
```

## References

- WAI-ARIA Tree View Pattern: https://www.w3.org/WAI/ARIA/apg/patterns/treeview/
