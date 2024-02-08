<template>
  <form :class="props.class ?? 'form_default'">
    <slot />
  </form>
</template>

<script setup lang="ts">
const props = defineProps<{ class?: string }>()
</script>

<style scoped module>
.form_default {
  width: 300px;
  margin: 20px auto;
}
</style>
