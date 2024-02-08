<template>
  <nav class="nav">
    <div>
      <p class="nav__text">Hey there... display name here</p>
      <p class="nav__text nav__text--email">Current logged in as ... email</p>
    </div>
    <buttonUI @click="handleClick">Loguot</buttonUI>
  </nav>
</template>

<script lang="ts" setup>
import buttonUI from '@/components/UI/Button.ui.vue'
import useLogout from '@/composables/useLogout'
import { routeNames } from '@/router'
import { useRouter } from 'vue-router'

const { error, loguot } = useLogout()
const router = useRouter()

const handleClick = async () => {
  await loguot()
  if (!error.value) {
    router.push({ name: routeNames.Welcome })
  }
}
</script>

<style scoped lang="scss">
.nav {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__text {
    margin: 2px auto;
    font-size: 16px;
    color: #444;
    &--email {
      font-size: 14px;
      color: #999;
    }
  }
}
</style>
