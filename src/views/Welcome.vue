<template>
  <div class="welcome container">
    Welcome
    <signup-form />
    <login-form />
  </div>
</template>

<script lang="ts" setup>
import SignupForm from '@/components/SignupForm.vue'
import LoginForm from '@/components/LoginForm.vue'
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}
</style>
