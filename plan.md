# Lily Design System — Implementation Plan

## Goal

Maintain the canonical component list, design tokens, and CSS style sheet template for the Lily Design System. Coordinate across 5 headless component library subprojects and 5 example application subprojects. Each example subproject demonstrates every component with working demos.

## Approach

1. Maintain canonical component list (321 components) in AGENTS.md and AGENTS/components.md
2. Maintain CSS style sheet template for component class names
3. Provide tools for listing, testing, and verifying components
4. Ensure all subprojects stay in sync with the canonical list
5. Document design principles, accessibility standards, and patterns
6. Each subproject has: index.md, README.md (symlink), AGENTS.md, CLAUDE.md, plan.md, tasks.md
7. Each example subproject has `/components` route listing all components
8. Each example subproject has `/components/{slug}` route demonstrating one component
9. Component demos render the actual headless HTML with NHS CSS styling
10. Use `componentDemos` data mapping slug → demo HTML for each component

## Component Demo Strategy

Each `/components/{slug}` page shows:
- Component metadata (name, slug, description)
- **Live demo** rendering the actual component with sample data and NHS CSS
- Usage code snippet
- Import statement

Demo HTML is generated based on component suffix patterns:
- `*-input` → labeled input element with appropriate type attribute
- `*-button` → button element with sample text
- `*-nav` → nav element with aria-label
- `*-list` → ordered list with sample items
- `*-list-item` → list item with sample content
- `*-table` → table with head/body/row structure
- `*-table-head/body/foot/col/row/data` → table sub-elements
- `*-view` → span with role="img" and sample data
- `*-picker` → div with role="radiogroup" and sample options
- `*-picker-button` → button within a picker
- `*-link` → anchor element with href
- `*-menu` → div with role="menu"
- `*-menu-item` → div with role="menuitem"
- Standalone components → semantic HTML based on component type

Rendering approach per framework:
- HTML/JS: innerHTML injection
- Svelte: {@html demo}
- React: dangerouslySetInnerHTML
- Vue: v-html directive
- Blazor: MarkupString

## Acceptance Criteria

- [x] All 321 components documented in canonical list
- [x] CSS style sheet template covers all component class names
- [x] Tools (list-components, test-components, test-implementations) work correctly
- [x] Component naming patterns documented and consistent
- [x] Suffix-to-HTML-element mapping documented and accurate
- [x] Composition patterns documented (Form, Navigation, Table, Grail Layout, VitalSign)
- [x] All subprojects have required files (index.md, README.md symlink, AGENTS.md, CLAUDE.md, plan.md, tasks.md)
- [x] All 321 components have directories with documentation
- [x] All 5 example subprojects have `/components` route listing all components
- [x] All 5 example subprojects have `/components/{slug}` route with live demo for each component
- [x] Component data files include `html` demo field for all 321 components
- [x] Each component demo renders actual headless HTML with NHS CSS styling
- [x] All subprojects harmonized: component count 321, acceptance criteria updated, tasks accurate
- [x] All example subprojects reference AGENTS/examples.md for route requirements
