<template>
  <div class="welcome container">
    Welcome
    <template v-if="showLogin">
      <login-form @login="enterChat" />
      <p class="bottom-text">
        No account yet? <span class="span-button" @click="showLogin = false"> Sign up </span>
        instead
      </p>
    </template>
    <template v-else>
      <signup-form @signup="enterChat" />
      <p class="bottom-text">
        Already registered?
        <span class="span-button" @click="showLogin = true"> Log in </span>
        instead
      </p>
    </template>
  </div>
</template>

<script lang="ts" setup>
import SignupForm from '@/components/SignupForm.vue'
import LoginForm from '@/components/LoginForm.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { routeNames } from '@/router'

const showLogin = ref(false)

const router = useRouter()

const enterChat = () => {
  router.push({ name: routeNames.Chatroom })
}
</script>

<style scoped lang="scss">
.welcome {
  text-align: center;
  padding: 20px 0;
}
.span-button {
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #5ae4ca;
  }
}
.bottom-text {
  margin-top: 12px;
}
</style>
