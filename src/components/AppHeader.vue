<script setup>
import NetworkStatus from './NetworkStatus.vue'
import InstallButton from './InstallButton.vue'
const logo = `${import.meta.env.BASE_URL}logo.svg`
</script>

<template>
  <header class="header">
    <img :src="logo" alt="" class="header__logo" />
    <h1 class="header__title">Покупки</h1>
    <NetworkStatus />
    <InstallButton />
  </header>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

.header__logo {
  width: 36px;
  height: 36px;
}

.header__title {
  flex: 1;
  margin: 0;
  font-size: 22px;
}
</style>