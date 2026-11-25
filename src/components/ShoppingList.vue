<script setup>
import ShoppingItem from './ShoppingItem.vue'

defineProps({
  items: { type: Array, required: true },
  bought: { type: Number, required: true },
  left: { type: Number, required: true }
})

defineEmits(['toggle', 'remove', 'clear-bought'])
</script>

<template>
  <p v-if="!items.length" class="list__empty">Список пуст. Добавьте первый товар.</p>
  <template v-else>
    <ul class="list">
      <ShoppingItem
          v-for="item in items"
          :key="item.id"
          :item="item"
          @toggle="$emit('toggle', $event)"
          @remove="$emit('remove', $event)"
      />
    </ul>
    <div class="list__footer">
      <span>Осталось: {{ left }}, куплено: {{ bought }}</span>
      <button v-if="bought" class="btn btn--outline" @click="$emit('clear-bought')">
        Убрать купленное
      </button>
    </div>
  </template>
</template>

<style scoped>
.list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.list__empty {
  padding: 32px 0;
  text-align: center;
  color: var(--muted);
}

.list__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  font-size: 14px;
  color: var(--muted);
}
</style>