# Lily Design System — Tasks

## Done

- [x] Create canonical component list (332 components)
- [x] Create CSS style sheet template
- [x] Create tools (list-components, test-components, test-implementations)
- [x] Create AGENTS.md with component patterns and composition patterns
- [x] Create all 5 headless subprojects (HTML, Svelte, React, Vue, Blazor)
- [x] Create all 5 example subprojects (HTML JS, SvelteKit, Next.js, Nuxt, Blazor Web)
- [x] Document suffix-to-HTML-element mapping
- [x] Document component name patterns
- [x] Document component composition patterns
- [x] Document accessibility standards (WCAG 2.2 AAA)
- [x] Document internationalization principles
- [x] Fix duplicate entries in AGENTS/components.md (chat-nav, chat-list, chat-list-item, chat-message)
- [x] Fix wrong links in index.md (accordion-link, pagination-link)
- [x] Fix typo in AGENTS/accessibility.md filename (across all 10 subprojects)
- [x] Harmonize component count across plan.md, tasks.md (332)
- [x] Remove "thing" from semantic concepts section (no component exists)
- [x] Create 26 missing component directories with documentation
- [x] Populate 8 empty component files (chat-nav, chat-list, chat-list-item, chat-message, citation, diff, digital-object-identifier-link, mockup-phone)
- [x] Create lily-design-system-blazor-headless subproject files (index.md, README.md, AGENTS.md, CLAUDE.md, plan.md, tasks.md)
- [x] Deduplicate components.csv (325 → 332)
- [x] Create generate-component-demos.js script for demo HTML generation
- [x] Add live component demos to /components/{slug} pages in all 5 example subprojects
  - [x] Generate component-demos.ts for lily-design-system-svelte-sveltekit-examples (332 demos)
  - [x] Generate component-demos.ts for lily-design-system-react-next-examples (332 demos)
  - [x] Generate component-demos.ts for lily-design-system-vue-nuxt-examples (332 demos)
  - [x] Update lily-design-system-svelte-sveltekit-examples /components/[slug] page with live demo via {@html}
  - [x] Update lily-design-system-react-next-examples /components/[slug] page with live demo via dangerouslySetInnerHTML
  - [x] Update lily-design-system-vue-nuxt-examples /components/[slug] page with live demo via v-html
  - [x] Update lily-design-system-blazor-web-examples ComponentData.cs with DemoHtml field + ComponentDetail.razor with MarkupString
  - [x] Update lily-design-system-html-javascript-examples component.html with componentDemos object + innerHTML rendering

- [x] Harmonize all 10 subproject files (index.md, AGENTS.md, plan.md, tasks.md)
  - [x] Fix "316" → "332" component count across all subproject index.md and AGENTS.md
  - [x] Add @AGENTS/examples.md reference to all 5 example subproject AGENTS.md
  - [x] Update plan.md acceptance criteria across all 10 subprojects
  - [x] Update tasks.md to reflect /components route work in all 5 example subprojects

## Backlog

- [ ] Audit CSS style sheet template against all implemented components
- [ ] Verify tools work across all subprojects
- [ ] Verify all subprojects have all 332 canonical components implemented
- [ ] Cross-check component names across all subprojects for consistency
