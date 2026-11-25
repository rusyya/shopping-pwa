<script setup>
defineProps({
  item: { type: Object, required: true }
})

defineEmits(['toggle', 'remove'])
</script>

<template>
  <li class="item" :class="{ 'item--bought': item.bought }">
    <label class="item__label">
      <input
          type="checkbox"
          class="item__check"
          :checked="item.bought"
          @change="$emit('toggle', item.id)"
      />
      <span class="item__name">{{ item.name }}</span>
    </label>
    <button class="item__remove" title="Удалить" @click="$emit('remove', item.id)">×</button>
  </li>
</template>

<style scoped>
.item {
  display: flex;
  align-items: center;
  padding: 12px 4px;
  border-bottom: 1px solid var(--border);
}

.item__label {
  display: flex;
  flex: 1;
  align-items: center;
  gap: 12px;
  cursor: pointer;
}

.item__check {
  width: 20px;
  height: 20px;
  accent-color: var(--accent);
}

.item--bought .item__name {
  text-decoration: line-through;
  color: var(--muted);
}

.item__remove {
  font-size: 22px;
  line-height: 1;
  border: none;
  background: none;
  color: #c4c9cf;
  cursor: pointer;
}

.item__remove:hover {
  color: #e5484d;
}
</style>