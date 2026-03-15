<script lang="ts">
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import BackLink from "$lib/components/BackLink.svelte";
    import { components } from "$lib/data/components";

    let search = $state("");
    let filtered = $derived(
        components.filter(
            (c) =>
                c.name.toLowerCase().includes(search.toLowerCase()) ||
                c.slug.includes(search.toLowerCase()) ||
                c.description.toLowerCase().includes(search.toLowerCase()),
        ),
    );
</script>

<Header label="Site header">
    <div class="page-wrapper">
        <h1>Components</h1>
        <p>284 headless components</p>
    </div>
</Header>

<main class="page-wrapper">
    <BackLink href="/">Back to examples</BackLink>

    <label for="search">Filter components</label>
    <input
        id="search"
        type="search"
        class="search-input"
        placeholder="Search components..."
        bind:value={search}
    />

    <p>{filtered.length} components</p>

    <div
        style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1rem;"
    >
        {#each filtered as component}
            <article class="card" style="padding: var(--nhs-space-4);">
                <h3>
                    <a href="/components/{component.slug}">{component.name}</a>
                </h3>
                <p>{component.description}</p>
            </article>
        {/each}
    </div>
</main>

<Footer label="Site footer">
    <div class="page-wrapper">
        <p>Lily Design System — MIT or Apache-2.0 or GPL-2.0 or GPL-3.0</p>
    </div>
</Footer>
