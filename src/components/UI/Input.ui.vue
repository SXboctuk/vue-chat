<template>
  <input type="text" class="input" v-model="defaultModel" />
</template>

<script setup lang="ts">
const defaultModel = defineModel({ default: '' })
</script>
<style scoped>
.input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #eee;
  outline: none;
  color: #999;
  margin: 10px auto;
}
</style>
