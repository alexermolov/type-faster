<script setup lang="ts">
import { computed } from 'vue'
import { useLessonStore } from '@/stores/lesson'
import { useSettingsStore } from '@/stores/settings'

const lessonStore = useLessonStore()
const settingsStore = useSettingsStore()

const displayText = computed(() => {
  return lessonStore.currentText.split('').map((char, index) => {
    const userChar = lessonStore.userInput[index]
    let status = 'pending'
    
    if (userChar !== undefined) {
      status = userChar === char ? 'correct' : 'incorrect'
    } else if (index === lessonStore.userInput.length) {
      status = 'current'
    }
    
    return { char, status }
  })
})

const handleKeyPress = (event: KeyboardEvent) => {
  if (lessonStore.isCompleted) return

  if (event.key === 'Backspace') {
    event.preventDefault()
    lessonStore.handleBackspace()
  } else if (event.key.length === 1) {
    event.preventDefault()
    lessonStore.handleInput(event.key)
  }
}
</script>

<template>
  <div class="typing-area" tabindex="0" @keydown="handleKeyPress">
    <div class="text-display">
      <span
        v-for="(item, index) in displayText"
        :key="index"
        :class="['char', item.status, {
          'highlight-error': item.status === 'incorrect' && settingsStore.settings.highlightErrors
        }]"
      >
        {{ item.char === ' ' ? '\u00A0' : item.char }}
      </span>
    </div>
    <div v-if="!lessonStore.isActive && !lessonStore.isCompleted" class="hint">
      <p>Click here and start typing to begin</p>
    </div>
  </div>
</template>

<style scoped>
.typing-area {
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 40px;
  min-height: 200px;
  cursor: text;
  outline: none;
  transition: all 0.3s ease;
}

.typing-area:focus {
  border-color: #00d4ff;
  box-shadow: 0 0 20px rgba(0, 212, 255, 0.2);
}

.text-display {
  font-family: 'Courier New', monospace;
  font-size: 24px;
  line-height: 1.8;
  letter-spacing: 2px;
  word-wrap: break-word;
}

.char {
  transition: all 0.15s ease;
  border-radius: 3px;
  padding: 2px 1px;
}

.char.pending {
  color: rgba(255, 255, 255, 0.4);
}

.char.current {
  color: #fff;
  background: rgba(0, 212, 255, 0.3);
  animation: pulse 1s infinite;
}

.char.correct {
  color: #4ade80;
}

.char.incorrect {
  color: #f87171;
}

.char.highlight-error {
  background: rgba(248, 113, 113, 0.2);
  text-decoration: underline wavy #f87171;
}

.hint {
  text-align: center;
  margin-top: 20px;
  color: rgba(255, 255, 255, 0.5);
  font-style: italic;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
</style>
