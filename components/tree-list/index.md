# Tree List

TreeList is a headless hierarchical list component that uses the ARIA `tree` role with full keyboard navigation. It provides an accessible container for displaying nested or flat tree structures such as file browsers, organizational charts, or navigation menus.

This component manages keyboard navigation between tree items using ArrowDown, ArrowUp, Home, and End keys with wrapping behavior. Consumers provide the tree items as children with `role="treeitem"` and `tabindex` attributes, and bring their own styling for indentation, expansion indicators, and visual hierarchy.

## Help

Use TreeList when you need a hierarchical list with keyboard navigation. Common scenarios include file browsers, folder trees, organizational charts, nested navigation menus, and category selectors. Pair with TreeListItem for individual items.

## Syntax

```html
<TreeList label="...">
  <!-- TreeListItem children -->
</TreeList>
```

## Usage

```html
<TreeList label="File browser">
  <TreeListItem tabindex="0">Documents</TreeListItem>
  <TreeListItem tabindex="-1">Photos</TreeListItem>
</TreeList>
```

## Props

| Prop           | Type            | Default    | Description                                                         |
| -------------- | --------------- | ---------- | ------------------------------------------------------------------- |
| `label`        | `string`        | (required) | Accessible name for the tree via `aria-label`                       |
| `children`     | `slot`          | (required) | Tree item elements with `role="treeitem"` to render inside the list |
| `...restProps` | HTML attributes |            | Additional attributes spread onto the `<ul>` element                |

## Examples

File browser with nesting:

```html
<TreeList label="Project files">
  <TreeListItem tabindex="0" aria-expanded="true">
    src
    <ul role="group">
      <TreeListItem tabindex="-1">index.ts</TreeListItem>
      <TreeListItem tabindex="-1">app.svelte</TreeListItem>
    </ul>
  </TreeListItem>
  <TreeListItem tabindex="-1">package.json</TreeListItem>
</TreeList>
```

## Keyboard Interactions

- ArrowDown: Moves focus to the next tree item; wraps to the first item after the last
- ArrowUp: Moves focus to the previous tree item; wraps to the last item before the first
- Home: Moves focus to the first tree item
- End: Moves focus to the last tree item

## ARIA

- `role="tree"` -- identifies the container as a tree widget for hierarchical data
- `aria-label={label}` -- provides an accessible name describing the purpose of the tree

## When to Use

- Use TreeList as the tree container inside a TreeNav navigation landmark, providing `role="tree"` and keyboard navigation for hierarchical items.
- Use when you need arrow key navigation between tree items with wrapping behavior.
- Avoid using TreeList without a parent TreeNav when the tree serves as site navigation; the `<nav>` landmark is important for accessibility.

## Headless

This headless component provides a `<ul>` with `role="tree"`, `aria-label`, and built-in keyboard navigation (ArrowDown, ArrowUp, Home, End with wrapping). It queries `[role="treeitem"]` descendants for focus management. The consumer provides TreeListItem children and all visual styling.

## Styles

The consumer provides all CSS styling. The component renders with a `.tree-list` class for targeting. No default styles are included — this is a fully headless component.

## Testing

- Verify the component renders a `<ol>` element with class `tree-list`
- Verify role="tree"` -- identifies the container as a tree widget for hierarchical data
- Verify aria-label={label}` -- provides an accessible name describing the purpose of the tree
- Verify keyboard interactions work correctly
- Verify pass-through attributes are applied

## Advice

- **Designers**: Use consistent indentation to show hierarchy depth. Provide visual cues for focused and selected items.
- **Developers**: Ensure each child uses `role="treeitem"` and `tabindex` attributes. Use nested `<ul role="group">` for subtrees within expandable items.

## Composition

TreeList is a child of TreeNav and contains TreeListItem children, following the Nav/List/ListItem pattern. TreeList provides `role="tree"` with keyboard navigation, while its parent TreeNav provides the `<nav>` landmark and its children TreeListItem provide individual `role="treeitem"` nodes.

## References

- WAI-ARIA Tree View Pattern: https://www.w3.org/WAI/ARIA/apg/patterns/treeview/
- WAI-ARIA tree role: https://www.w3.org/TR/wai-aria-1.2/#tree
