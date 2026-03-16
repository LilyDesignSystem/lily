<script setup lang="ts">

    // IrelandIndividualHealthIdentifierView component

    withDefaults(defineProps<{
        label: string;
        value?: string;
    }>(), {
        value: "",
    });

</script>

<template>
    <!-- IrelandIndividualHealthIdentifierView.vue -->
    <span
        class="ireland-individual-health-identifier-view"
        :aria-label="label"
    >{{ value }}</span>
</template>
