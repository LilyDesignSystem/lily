# Lily Design System

Based on https://github.com/LilyDesignSystem/lily

IMPORTANT: Read file components.csv

[CSS style sheet template](css-style-sheet-template.css)

Subprojects for headless components:

- [Lily Design System: HTML headless](lily-design-system-html-headless)
- [Lily Design System: Svelte headless](lily-design-system-svelte-headless)
- [Lily Design System: Blazor headless](lily-design-system-blazor-headless)
- [Lily Design System: React headless](lily-design-system-react-headless)
- [Lily Design System: Vue headless](lily-design-system-vue-headless)

Subprojects for web app examples:

- [Lily Design System: HTML JavaScript examples](lily-design-system-html-javascript-examples)
- [Lily Design System: Svelte SvelteKit examples](lily-design-system-svelte-sveltekit-examples)
- [Lily Design System: Blazor Web examples](lily-design-system-blazor-web-examples)
- [Lily Design System: React Next.js examples](lily-design-system-react-next-examples)
- [Lily Design System: Vue Nuxt.js examples](lily-design-system-vue-nuxt-examples)

NHS UK Design System References:

- [NHS UK - Design system](https://service-manual.nhs.uk/design-system)
- [NHS UK - Design system - Styles - Focus State](https://service-manual.nhs.uk/design-system/styles/focus-state)
- [NHS UK - Design system - Styles - Icons](https://service-manual.nhs.uk/design-system/styles/icons)
- [NHS UK - Design system - Styles - Layout](https://service-manual.nhs.uk/design-system/styles/layout)
- [NHS UK - Design system - Styles - Page Template](https://service-manual.nhs.uk/design-system/styles/page-template)
- [NHS UK - Design system - Styles - Spacing](https://service-manual.nhs.uk/design-system/styles/spacing)
- [NHS UK - Design system - Styles - Typography](https://service-manual.nhs.uk/design-system/styles/typography)
- [NHS UK - Design system - Styles - Use Frutiger Font](https://service-manual.nhs.uk/design-system/styles/use-frutiger-font)
- [NHS UK - Accessibility - Design](https://service-manual.nhs.uk/accessibility/design)
- [NHS UK - NHS Identity - Identity Guidelines - Colours](https://www.england.nhs.uk/nhsidentity/identity-guidelines/colours/)

Tools:

- [list-components](bin/list-components): List components
- [list-implementation-basenames](bin/list-implementation-basenames): List implementation basenames
- [list-implementation-paths](bin/list-implementation-paths): List implementation paths
- [test](bin/test): Test everything
- [test-components](bin/test-components): Test components
- [test-implementations](bin/test-implementations)

Color palette:

- primary #2563eb
- NHS blue #005eb8
- danger #dc2626
- warning #f59e0b
- success #16a34a
- page background #f9fafb
- card background #ffffff

## For each component directory

Files:

- index.md
- symlink from index.md to README.md
- AGENTS.md
- CLAUDE.md
- plan.md
- tasks.md

## Verify

Run $(bin/test)
