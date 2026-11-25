<script setup>
import { useInstall } from '../composables/useInstall'

const { deferredPrompt, isInstalled, install } = useInstall()
</script>

<template>
  <button v-if="deferredPrompt && !isInstalled" class="btn" @click="install">
    Установить
  </button>
</template>