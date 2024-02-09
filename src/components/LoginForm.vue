<template>
  <h2>LOGIN</h2>
  <FormUI @submit.prevent="handleSubmit">
    <FormInputContainer>
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
    <buttonUI type="submit">Log in</buttonUI>
  </FormUI>
</template>

<script lang="ts" setup>
import buttonUI from '@/components/UI/Button.ui.vue'
import FormUI from '@/components/UI/Form.ui.vue'
import InputUI from '@/components/UI/Input.ui.vue'
import FormError from '@/components/UI/FormError.ui.vue'
import FormInputContainer from '@/components/UI/FormInputContainer.ui.vue'

import useLogin from '@/composables/useLogin'

import { ref } from 'vue'

const { error, login } = useLogin()

const email = ref('')
const password = ref('')

const emits = defineEmits<{ login: [] }>()
const handleSubmit = async () => {
  await login(email.value, password.value)
  if (!error.value) {
    emits('login')
  }
}
</script>

<style></style>
