<script setup>
import { ref } from 'vue'

const emit = defineEmits(['add'])
const name = ref('')

function submit() {
  const text = name.value.trim()
  if (!text) return
  emit('add', text)
  name.value = ''
}
</script>

<template>
  <form class="add-form" @submit.prevent="submit">
    <input v-model="name" class="add-form__input" placeholder="Что купить?" />
    <button type="submit" class="btn">Добавить</button>
  </form>
</template>

<style scoped>
.add-form {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}

.add-form__input {
  flex: 1;
  font: inherit;
  padding: 10px 12px;
  border: 1px solid var(--border);
  border-radius: 8px;
}

.add-form__input:focus {
  outline: none;
  border-color: var(--accent);
}
</style>