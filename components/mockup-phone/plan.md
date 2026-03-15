# Mockup Phone -- Implementation Plan

## Goal

Implement the MockupPhone component: a box area that looks like a mobile phone.

## HTML Tag and CSS Class

- HTML tag: <div>
- CSS class: .mockup-phone

## Approach

1. Use <div> element with class="mockup-phone" and role="img"
2. Add ARIA attributes for accessibility
3. Implement keyboard navigation
4. Add vanilla JavaScript for interactive behavior
5. Implement in HTML headless (plain HTML + vanilla JS)
6. Implement in Svelte headless (Svelte 5 + runes)
7. Implement in React, Vue, Blazor headless
8. Create tests for each implementation

## Acceptance Criteria

- [ ] Renders <div> with class="mockup-phone"
- [ ] `role="img"` with `aria-label` identifies the phone frame
- [ ] Keyboard: Tab: Focus moves to interactive elements within the phone content
- [ ] WCAG 2.2 AAA compliant
- [ ] Zero CSS -- fully headless
- [ ] Tests pass in all implementations
