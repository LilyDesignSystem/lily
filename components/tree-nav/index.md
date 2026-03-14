# Tree Nav

A tree nav is a hierarchical navigation component with expandable branches, rendering as a `<nav>` element that provides a navigation landmark for tree-structured content. It is commonly used for site navigation menus with nested sections, file browsers, documentation sidebars, and category hierarchies. The component contains a TreeList with TreeListItem children that form the tree structure.

The `<nav>` element provides the navigation landmark, while the nested TreeList provides the `role="tree"` semantics and keyboard navigation. This separation allows screen reader users to identify the navigation region and navigate the tree hierarchy within it.

## Implementation Notes

- Renders as a `<nav>` element to create a navigation landmark for the tree structure
- The `label` prop sets `aria-label` to identify the navigation region
- Consumer provides a TreeList with TreeListItem children inside the nav
- The TreeList manages tree keyboard navigation (arrow keys, Home, End)
- Spreads `...restProps` onto the `<nav>` element for consumer customization
- No internal state -- purely a structural wrapper providing the navigation landmark

## Props

- `label`: string (required) -- accessible name for the navigation landmark via `aria-label`
- `children`: slot (required) -- TreeList with tree navigation items
- `...restProps`: any -- additional HTML attributes spread onto the `<nav>` element

## Usage

```html
<TreeNav label="Documentation">
    <TreeList label="Docs tree">
        <TreeListItem tabindex="0" aria-expanded="true">
            Getting Started
            <ul role="group">
                <TreeListItem tabindex="-1">Installation</TreeListItem>
                <TreeListItem tabindex="-1">Quick Start</TreeListItem>
            </ul>
        </TreeListItem>
        <TreeListItem tabindex="-1" aria-expanded="false">
            Components
        </TreeListItem>
        <TreeListItem tabindex="-1">API Reference</TreeListItem>
    </TreeList>
</TreeNav>
```

```html
<TreeNav label="File browser">
    <TreeList label="Project files">
        <TreeListItem tabindex="0">src</TreeListItem>
        <TreeListItem tabindex="-1">docs</TreeListItem>
        <TreeListItem tabindex="-1">package.json</TreeListItem>
    </TreeList>
</TreeNav>
```

## Keyboard Interactions

- ArrowDown: Moves focus to the next visible tree item (managed by TreeList)
- ArrowUp: Moves focus to the previous visible tree item (managed by TreeList)
- ArrowRight: Expands a collapsed item, or moves to first child
- ArrowLeft: Collapses an expanded item, or moves to parent
- Home: Moves focus to the first tree item
- End: Moves focus to the last visible tree item

## ARIA

- `<nav aria-label="...">` -- creates a navigation landmark with a descriptive label for the tree navigation region
- Tree semantics (`role="tree"`, `role="treeitem"`) are provided by the child TreeList and TreeListItem components

## When to Use

- Use TreeNav for hierarchical site navigation with expandable branches, such as documentation sidebars, file browsers, or category navigation.
- Use when the tree structure serves as a navigation landmark that screen readers should identify.
- Avoid using TreeNav for non-navigation hierarchical displays; use TreeMenu instead.
- Consider a flat NavigationMenu when the hierarchy is only one level deep.

## Headless

This headless component provides a `<nav>` element with `aria-label` for a navigation landmark. Tree semantics and keyboard navigation are provided by the child TreeList component. The consumer provides all visual styling including indentation, expansion indicators, and link styles.


## Styles

The consumer provides all CSS styling. The component renders with a `.tree-nav` class for targeting. No default styles are included — this is a fully headless component.


## Testing


- Verify the component renders a `<nav>` element with class `tree-nav`
- Verify <nav aria-label="...">` -- creates a navigation landmark with a descriptive label for the tree navigation region
- Verify Tree semantics (`role="tree"`, `role="treeitem"`) are provided by the child TreeList and TreeListItem components
- Verify keyboard interactions work correctly
- Verify pass-through attributes are applied

## Advice

- **Designers**: Clearly distinguish expandable branches from leaf nodes using icons (e.g., chevrons for branches). Highlight the current page within the tree.
- **Developers**: Nest TreeList inside TreeNav, with TreeListItem children. The `<nav>` landmark allows screen reader users to quickly jump to the tree navigation region.

## Composition

TreeNav contains a TreeList, which in turn contains TreeListItem children, following the Nav/List/ListItem pattern. TreeNav provides the `<nav>` landmark, TreeList provides `role="tree"` with keyboard navigation, and TreeListItem provides `role="treeitem"` for each node.

## References

- WAI-ARIA Tree View Pattern: https://www.w3.org/WAI/ARIA/apg/patterns/treeview/
- WAI-ARIA Navigation Role: https://www.w3.org/TR/wai-aria-1.2/#navigation
