<template>
  <h2>Sign Up</h2>
  <FormUI @submit.prevent="handleSubmit">
    <FormInputContainer>
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
    </FormInputContainer>

    <FormError v-if="error">{{ error }}</FormError>
    <buttonUI type="submit">Sign Up</buttonUI>
  </FormUI>
</template>

<script lang="ts" setup>
import buttonUI from '@/components/UI/Button.ui.vue'
import FormUI from '@/components/UI/Form.ui.vue'
import InputUI from '@/components/UI/Input.ui.vue'
import FormError from '@/components/UI/FormError.ui.vue'
import FormInputContainer from '@/components/UI/FormInputContainer.ui.vue'
import useSignup from '@/composables/useSignup'

import { ref } from 'vue'

const { error, signup } = useSignup()

const displayName = ref('')
const email = ref('')
const password = ref('')

const emits = defineEmits<{ signup: [] }>()

const handleSubmit = async () => {
  await signup(email.value, password.value, displayName.value)
  if (!error.value) {
    emits('signup')
  }
}
</script>

<style scoped></style>
