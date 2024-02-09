<template>
  <div class="chat-window">
    <div v-if="error">{{ error }}</div>
    <div v-if="documents" class="chat-window__messages" ref="messages">
      <div v-for="doc in formatDocuments" :key="doc.id" class="message">
        <span class="message__createdAt">{{ doc.creatAt }}</span>
        <span class="message__name">{{ doc.name }}: </span>
        <span class="message__body">{{ doc.message }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import getCollections from '@/composables/getCollections'
import { computed, onUnmounted, onUpdated, ref, watch } from 'vue'
import { formatDistanceToNow } from 'date-fns'

const { error, documents } = getCollections('messages')
const messages = ref<HTMLDivElement | null>(null)

const formatDocuments = computed(() => {
  if (documents.value) {
    return documents.value.map((doc) => {
      return { ...doc, creatAt: formatDistanceToNow(doc.creatAt.toDate()) }
    })
  }
  return []
})

const scrollingToBottom = ref<boolean>(true)
const scrollBehavior = () => {
  if (messages.value) {
    if (
      messages.value.scrollHeight - (messages.value.scrollTop + messages.value.clientHeight) ===
      0
    ) {
      scrollingToBottom.value = true
    } else {
      scrollingToBottom.value = false
    }
  }
}

watch(messages, () => {
  if (messages.value) {
    messages.value.removeEventListener('scrollend', scrollBehavior)
    messages.value.addEventListener('scrollend', scrollBehavior)
  }
})

onUnmounted(() => {
  if (messages.value) {
    messages.value.removeEventListener('scrollend', scrollBehavior)
  }
})

onUpdated(() => {
  if (messages.value && scrollingToBottom.value) {
    messages.value.scrollTop = messages.value.scrollHeight
  }
})
</script>

<style scoped lang="scss">
.chat-window {
  background: #fafafa;
  padding: 20px 20px;

  &__messages {
    max-height: 400px;
    overflow: auto;
    &::-webkit-scrollbar {
      background-color: inherit;
      width: 10px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 20px;
      width: 6px;
      background-color: rgba(90, 228, 202, 0.4);
    }
  }
}
.message {
  margin: 18px 0;
  &__createdAt {
    display: block;
    color: #999;
    font-size: 12px;
    margin-bottom: 4px;
  }
  &__name {
    font-weight: bold;
    margin-right: 6px;
  }
  &__body {
  }
}
</style>
