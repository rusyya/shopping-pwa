<script setup>
import { useShoppingList } from './composables/useShoppingList'
import AppHeader from './components/AppHeader.vue'
import AddItemForm from './components/AddItemForm.vue'
import ShoppingList from './components/ShoppingList.vue'
import ReloadPrompt from './components/ReloadPrompt.vue'

const { items, boughtCount, leftCount, addItem, toggleItem, removeItem, clearBought } = useShoppingList()
</script>

<template>
  <div class="app">
    <AppHeader />
    <AddItemForm @add="addItem" />
    <ShoppingList
        :items="items"
        :bought="boughtCount"
        :left="leftCount"
        @toggle="toggleItem"
        @remove="removeItem"
        @clear-bought="clearBought"
    />
    <ReloadPrompt />
  </div>
</template>

<style>
:root {
  --accent: #4935F5;
  --accent-light: #EDEBFE;
  --text: #1f2933;
  --muted: #8a94a0;
  --border: #e5e8ec;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Inter, Roboto, sans-serif;
  color: var(--text);
  background: #f6f7f9;
}

.app {
  max-width: 480px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 20px 16px 96px;
  background: #fff;
}

.btn {
  font: inherit;
  padding: 8px 14px;
  border: 1px solid var(--accent);
  border-radius: 8px;
  background: var(--accent);
  color: #fff;
  cursor: pointer;
}

.btn--outline {
  background: #fff;
  color: var(--accent);
}
</style>