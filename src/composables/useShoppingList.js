import { ref, computed, watch } from 'vue'

const STORAGE_KEY = 'shopping-list'

const items = ref(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'))

watch(items, (value) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(value))
}, { deep: true })

export function useShoppingList() {
    const boughtCount = computed(() => items.value.filter(item => item.bought).length)
    const leftCount = computed(() => items.value.length - boughtCount.value)

    function addItem(name) {
        items.value.push({ id: Date.now(), name, bought: false })
    }

    function toggleItem(id) {
        const item = items.value.find(item => item.id === id)
        if (item) item.bought = !item.bought
    }

    function removeItem(id) {
        items.value = items.value.filter(item => item.id !== id)
    }

    function clearBought() {
        items.value = items.value.filter(item => !item.bought)
    }

    return { items, boughtCount, leftCount, addItem, toggleItem, removeItem, clearBought }
}