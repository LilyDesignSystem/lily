# Accordion Link

An accordion link is a navigational anchor element representing one link within an accordion navigation structure. It renders as a semantic `<a>` element and is designed to be placed inside an AccordionListItem within an AccordionList and AccordionNav structure.

## Implementation Notes

- Renders as a semantic `<a>` element for accordion navigation
- Designed to be used inside an AccordionListItem
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
<AccordionNav label="Navigation">
  <AccordionList>
    <AccordionListItem summary="Products">
      <AccordionLink href="/products/widgets">Widgets</AccordionLink>
      <AccordionLink href="/products/gadgets">Gadgets</AccordionLink>
    </AccordionListItem>
    <AccordionListItem summary="Services">
      <AccordionLink href="/services/consulting">Consulting</AccordionLink>
      <AccordionLink href="/services/support">Support</AccordionLink>
    </AccordionListItem>
  </AccordionList>
</AccordionNav>
```

## Keyboard Interactions

- Tab: Focus the link
- Enter: Activate the link (browser default)

## ARIA

- Implicit `link` role from the `<a>` element
- `aria-label` -- optional override for descriptive screen reader text, set from the `label` prop

## When to Use

- Use inside an AccordionListItem to provide navigable links within expandable accordion sections.
- Use when accordion sections contain links to other pages or resources.
- Avoid for non-navigational content within accordions -- use plain text or other elements instead.

## Headless

This component provides a semantic `<a>` element with optional `aria-label` override and zero visual styling. The consumer is responsible for all CSS including link color, underline style, hover effects, and focus indicators.

## Styles

The consumer provides all CSS styling. The component renders with an `.accordion-link` class for targeting. No default styles are included — this is a fully headless component.

## Testing

- Verify the component renders an `<a>` element with class `accordion-link`
- Verify `aria-label` is set from the `label` prop
- Verify keyboard interactions work correctly
- Verify pass-through attributes are applied

## Advice

- **Designers**: Style accordion links consistently within expanded sections. Ensure links are visually distinct from the accordion summary text.
- **Developers**: Use the `label` prop to provide descriptive screen reader text when the visible text needs additional context.

## Composition

AccordionLink follows the Nav / List / ListItem composition pattern:

- **AccordionNav** -- outer `<nav>` container providing the navigation landmark.
- **AccordionList** -- `<ol>` list grouping the collapsible items.
- **AccordionListItem** -- individual `<details>` / `<summary>` sections.
- **AccordionLink** -- `<a>` link inside an accordion item for navigable content.

```html
<AccordionNav label="Navigation">
  <AccordionList>
    <AccordionListItem summary="Products">
      <AccordionLink href="/products/widgets">Widgets</AccordionLink>
    </AccordionListItem>
  </AccordionList>
</AccordionNav>
```

## References

- WAI-ARIA Accordion Pattern: https://www.w3.org/WAI/ARIA/apd/patterns/accordion/
