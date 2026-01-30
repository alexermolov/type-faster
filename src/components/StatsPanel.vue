<script setup lang="ts">
import { computed } from 'vue'
import { useLessonStore } from '@/stores/lesson'

const lessonStore = useLessonStore()

const stats = computed(() => [
  {
    label: 'WPM',
    value: lessonStore.wpm,
    icon: '⚡',
    color: '#00d4ff'
  },
  {
    label: 'Accuracy',
    value: `${lessonStore.accuracy}%`,
    icon: '🎯',
    color: '#4ade80'
  },
  {
    label: 'Progress',
    value: `${lessonStore.progress}%`,
    icon: '📊',
    color: '#fbbf24'
  },
  {
    label: 'Errors',
    value: lessonStore.errors,
    icon: '❌',
    color: '#f87171'
  }
])
</script>

<template>
  <div class="stats-panel">
    <div v-for="stat in stats" :key="stat.label" class="stat-card">
      <div class="stat-icon">{{ stat.icon }}</div>
      <div class="stat-content">
        <div class="stat-label">{{ stat.label }}</div>
        <div class="stat-value" :style="{ color: stat.color }">{{ stat.value }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.stats-panel {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.stat-card {
  background: linear-gradient(145deg, #2a2a3e, #1f1f2e);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  border-color: rgba(0, 212, 255, 0.3);
}

.stat-icon {
  font-size: 36px;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
}

.stat-content {
  flex: 1;
}

.stat-label {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 5px;
  font-weight: 600;
}

.stat-value {
  font-size: 28px;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}
</style>
