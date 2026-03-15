<script setup lang="ts">
import { ref, computed } from "vue";
import { components } from "~/data/components";

const search = ref("");
const filtered = computed(() =>
    components.filter(c =>
        c.name.toLowerCase().includes(search.value.toLowerCase()) ||
        c.slug.includes(search.value.toLowerCase()) ||
        c.description.toLowerCase().includes(search.value.toLowerCase())
    )
);
</script>

<template>
    <main class="page-wrapper">
        <h1>Components</h1>
        <p>284 headless components</p>

        <label for="search">Filter components</label>
        <input id="search" type="search" class="search-input" placeholder="Search components..." v-model="search" />

        <p>{{ filtered.length }} components</p>

        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1rem;">
            <article v-for="c in filtered" :key="c.slug" class="card" style="padding: var(--nhs-space-4);">
                <h3><NuxtLink :to="`/components/${c.slug}`">{{ c.name }}</NuxtLink></h3>
                <p>{{ c.description }}</p>
            </article>
        </div>
    </main>
</template>
