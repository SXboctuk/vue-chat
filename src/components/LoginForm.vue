<template>
  <FormUI @submit.prevent="handleSubmit">
    <InputUI type="email" required placeholder="email" autocomplete="email" v-model="email" />
    <InputUI
      type="password"
      required
      placeholder="password"
      autocomplete="new-password"
      v-model="password"
    />
    <buttonUI>Log in</buttonUI>
  </FormUI>
</template>

<script lang="ts" setup>
import buttonUI from '@/components/UI/Button.ui.vue'
import FormUI from '@/components/UI/Form.ui.vue'
import InputUI from '@/components/UI/Input.ui.vue'

import { ref } from 'vue'

const email = ref('')
const password = ref('')

const handleSubmit = () => {}
</script>

<style></style>
