<script setup lang="ts">
import { computed } from 'vue'
import { useLessonStore } from '@/stores/lesson'

const lessonStore = useLessonStore()

const currentChar = computed(() => {
  const index = lessonStore.userInput.length
  return lessonStore.currentText[index]?.toLowerCase()
})

const keyboard = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace'],
  ['tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
  ['caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'enter'],
  ['shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'shift'],
  ['space']
]

const getKeyClass = (key: string) => {
  const classes = ['key']
  
  if (key === currentChar.value || (key === 'space' && currentChar.value === ' ')) {
    classes.push('active')
  }
  
  if (['backspace', 'tab', 'caps', 'enter', 'shift'].includes(key)) {
    classes.push('special')
  }
  
  if (key === 'space') {
    classes.push('space')
  }
  
  return classes.join(' ')
}

const getKeyDisplay = (key: string) => {
  const displayMap: Record<string, string> = {
    'backspace': '⌫',
    'tab': 'Tab',
    'caps': 'Caps',
    'enter': 'Enter',
    'shift': 'Shift',
    'space': ''
  }
  return displayMap[key] || key.toUpperCase()
}
</script>

<template>
  <div class="virtual-keyboard">
    <div v-for="(row, rowIndex) in keyboard" :key="rowIndex" class="keyboard-row">
      <div
        v-for="(key, keyIndex) in row"
        :key="keyIndex"
        :class="getKeyClass(key)"
      >
        {{ getKeyDisplay(key) }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.virtual-keyboard {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 20px;
  margin-top: 30px;
}

.keyboard-row {
  display: flex;
  justify-content: center;
  gap: 6px;
  margin-bottom: 6px;
}

.keyboard-row:last-child {
  margin-bottom: 0;
}

.key {
  background: linear-gradient(145deg, #2a2a3e, #1f1f2e);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  padding: 12px 16px;
  min-width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.key.special {
  background: linear-gradient(145deg, #363650, #2a2a3e);
  min-width: 70px;
  font-size: 11px;
}

.key.space {
  min-width: 300px;
}

.key.active {
  background: linear-gradient(145deg, #00d4ff, #0099cc);
  color: #1a1a2e;
  border-color: #00d4ff;
  box-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
  transform: translateY(-2px);
}

.key:hover {
  border-color: rgba(0, 212, 255, 0.5);
}
</style>
