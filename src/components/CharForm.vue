<template>
  <FormUi class="form">
    <textarea
      placeholder="Type message and hit enter"
      v-model="message"
      @keypress.enter.prevent="handleSubmit"
      class="textarea"
    >
    </textarea>
    <FormErrorUi v-if="error">{{ error }}</FormErrorUi>
  </FormUi>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import FormUi from './UI/Form.ui.vue'
import getUser from '@/composables/getUser'
import { timestamp } from '@/firebase/config'
import useCollections from '@/composables/useCollections'
import FormErrorUi from './UI/FormError.ui.vue'
import type { chatMessageType } from '@/types'

const { user } = getUser()
const { error, addMessage } = useCollections('messages')

const message = ref('')

const handleSubmit = async () => {
  if (user.value && user.value.displayName !== null) {
    const outgoingMessage: chatMessageType = {
      name: user.value.displayName,
      message: message.value
    }
    await addMessage(outgoingMessage)
    if (!error.value) {
      message.value = ''
    }
  }
}
</script>

<style scoped>
:deep(.form) {
  margin: 10px;
}

.textarea {
  width: 100%;
  max-width: 99%;
  margin-bottom: 6px;
  padding: 10px;
  border: none;
  border-radius: 20px;
  font-family: inherit;
  outline: none;
}
</style>
