<template>
  <button class="button">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.button {
  text-decoration: none;
  background-color: #5ae4ca;
  color: white;
  font-weight: bold;
  border: 0;
  border-radius: 20px;
  padding: 10px 20px;

  &:hover {
    background-color: #33be85;
  }
}
</style>
