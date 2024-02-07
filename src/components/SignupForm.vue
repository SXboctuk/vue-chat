<template>
  <h2>Sign Up</h2>
  <FormUI @submit.prevent="handleSubmit">
    <InputUI
      type="text"
      required
      placeholder="display name"
      autocomplete="nickname"
      v-model="displayName"
    />
    <InputUI type="email" required placeholder="email" autocomplete="email" v-model="email" />
    <InputUI
      type="password"
      required
      placeholder="password"
      autocomplete="new-password"
      v-model="password"
    />
    <FormError v-if="!error">{{ error }}</FormError>
    <buttonUI>Sign Up</buttonUI>
  </FormUI>
</template>

<script lang="ts" setup>
import buttonUI from '@/components/UI/Button.ui.vue'
import FormUI from '@/components/UI/Form.ui.vue'
import InputUI from '@/components/UI/Input.ui.vue'
import FormError from '@/components/UI/FormError.ui.vue'
import useSignup from '@/composables/useSignup'

import { ref } from 'vue'

const { error, signup } = useSignup()

const displayName = ref('')
const email = ref('')
const password = ref('')

const handleSubmit = async () => {
  await signup(email.value, password.value, displayName.value)
}
</script>

<style></style>
