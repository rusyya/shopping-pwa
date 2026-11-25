import { ref } from 'vue'

const deferredPrompt = ref(null)
const isInstalled = ref(window.matchMedia('(display-mode: standalone)').matches)

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault()
    deferredPrompt.value = e
})

window.addEventListener('appinstalled', () => {
    deferredPrompt.value = null
    isInstalled.value = true
})

export function useInstall() {
    async function install() {
        if (!deferredPrompt.value) return
        deferredPrompt.value.prompt()
        await deferredPrompt.value.userChoice
        deferredPrompt.value = null
    }

    return { deferredPrompt, isInstalled, install }
}