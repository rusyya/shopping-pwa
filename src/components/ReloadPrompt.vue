<script setup>
import { useRegisterSW } from 'virtual:pwa-register/vue'

const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW()

function close() {
  offlineReady.value = false
  needRefresh.value = false
}
</script>

<template>
  <div v-if="offlineReady || needRefresh" class="toast">
    <span>
      {{ needRefresh ? 'Доступна новая версия приложения' : 'Приложение готово к работе без интернета' }}
    </span>
    <div class="toast__actions">
      <button v-if="needRefresh" class="btn" @click="updateServiceWorker()">Обновить</button>
      <button class="btn btn--outline" @click="close">Закрыть</button>
    </div>
  </div>
</template>

<style scoped>
.toast {
  position: fixed;
  left: 50%;
  bottom: 16px;
  transform: translateX(-50%);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  width: calc(100% - 32px);
  max-width: 448px;
  padding: 12px 16px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.12);
}

.toast span {
  flex: 1;
}

.toast__actions {
  display: flex;
  gap: 8px;
}
</style>