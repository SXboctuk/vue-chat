<template>
  <nav class="nav" v-if="user">
    <div>
      <p class="nav__text">Hey there {{ user.displayName }}</p>
      <p class="nav__text nav__text--email">Current logged in as {{ user.email }} email</p>
    </div>
    <buttonUI @click="handleClick">Loguot</buttonUI>
  </nav>
</template>

<script lang="ts" setup>
import buttonUI from '@/components/UI/Button.ui.vue'
import useLogout from '@/composables/useLogout'
import { routeNames } from '@/router'
import { useRouter } from 'vue-router'
import getUser from '@/composables/getUser'
import { watch } from 'vue'

const { error, loguot } = useLogout()
const { user } = getUser()
const router = useRouter()

const handleClick = async () => {
  await loguot()
}
watch(user, () => {
  if (!error.value) {
    router.push({ name: routeNames.Welcome })
  }
})
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
