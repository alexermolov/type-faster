import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface Settings {
  soundEnabled: boolean
  showKeyboard: boolean
  highlightErrors: boolean
  theme: 'dark' | 'light'
}

const STORAGE_KEY = 'typefaster_settings'

export const useSettingsStore = defineStore('settings', () => {
  const settings = ref<Settings>({
    soundEnabled: true,
    showKeyboard: true,
    highlightErrors: true,
    theme: 'dark'
  })

  function updateSettings(newSettings: Partial<Settings>) {
    settings.value = { ...settings.value, ...newSettings }
    saveSettings()
  }

  function saveSettings() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings.value))
  }

  function loadSettings() {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      try {
        settings.value = { ...settings.value, ...JSON.parse(stored) }
      } catch (e) {
        console.error('Failed to load settings:', e)
      }
    }
  }

  function resetSettings() {
    settings.value = {
      soundEnabled: true,
      showKeyboard: true,
      highlightErrors: true,
      theme: 'dark'
    }
    saveSettings()
  }

  // Load settings on initialization
  loadSettings()

  return {
    settings,
    updateSettings,
    saveSettings,
    loadSettings,
    resetSettings
  }
})
