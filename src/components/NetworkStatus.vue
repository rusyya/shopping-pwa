<script setup>
import { useOnline } from '../composables/useOnline'

const { isOnline } = useOnline()
</script>

<template>
  <span class="status" :class="{ 'status--offline': !isOnline }">
    {{ isOnline ? '● Онлайн' : '● Офлайн' }}
  </span>
</template>

<style scoped>
.status {
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 13px;
  color: var(--accent);
  background: var(--accent-light);
}

.status--offline {
  color: #b54708;
  background: #fef0e6;
}
</style>