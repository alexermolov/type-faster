<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useLessonStore } from '@/stores/lesson'
import { useSettingsStore } from '@/stores/settings'
import TypingArea from '@/components/TypingArea.vue'
import VirtualKeyboard from '@/components/VirtualKeyboard.vue'
import StatsPanel from '@/components/StatsPanel.vue'

const route = useRoute()
const router = useRouter()
const lessonStore = useLessonStore()
const settingsStore = useSettingsStore()

onMounted(() => {
  const lessonId = route.params.id as string
  lessonStore.startLesson(lessonId)
})

onUnmounted(() => {
  if (lessonStore.isCompleted) {
    // Results will be saved when navigating to results page
  }
})

const restartLesson = () => {
  lessonStore.resetLesson()
}

const exitLesson = () => {
  router.push('/lessons')
}

const finishLesson = () => {
  router.push('/results')
}
</script>

<template>
  <div class="typing-lesson">
    <div class="lesson-header">
      <div class="lesson-info">
        <h2>{{ lessonStore.currentLesson?.title }}</h2>
        <p>{{ lessonStore.currentLesson?.description }}</p>
      </div>
      <div class="lesson-actions">
        <button class="btn btn-secondary" @click="restartLesson">
          🔄 Restart
        </button>
        <button class="btn btn-danger" @click="exitLesson">
          ✕ Exit
        </button>
      </div>
    </div>

    <div class="lesson-content">
      <StatsPanel />
      <TypingArea />
      <VirtualKeyboard v-if="settingsStore.settings.showKeyboard" />
      
      <div v-if="lessonStore.isCompleted" class="completion-overlay">
        <div class="completion-card">
          <div class="completion-icon">🎉</div>
          <h2>Lesson Complete!</h2>
          <div class="final-stats">
            <div class="final-stat">
              <div class="final-stat-value">{{ lessonStore.wpm }}</div>
              <div class="final-stat-label">WPM</div>
            </div>
            <div class="final-stat">
              <div class="final-stat-value">{{ lessonStore.accuracy }}%</div>
              <div class="final-stat-label">Accuracy</div>
            </div>
          </div>
          <div class="completion-actions">
            <button class="btn btn-primary" @click="finishLesson">
              View Results
            </button>
            <button class="btn btn-secondary" @click="restartLesson">
              Try Again
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.typing-lesson {
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  padding: 40px;
  overflow-y: auto;
}

.lesson-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.lesson-info h2 {
  font-size: 32px;
  color: #fff;
  margin: 0 0 10px 0;
}

.lesson-info p {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
}

.lesson-actions {
  display: flex;
  gap: 12px;
}

.btn {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: #00d4ff;
}

.btn-danger {
  background: rgba(248, 113, 113, 0.2);
  color: #f87171;
  border: 1px solid rgba(248, 113, 113, 0.3);
}

.btn-danger:hover {
  background: rgba(248, 113, 113, 0.3);
  border-color: #f87171;
}

.btn-primary {
  background: linear-gradient(135deg, #00d4ff 0%, #0099cc 100%);
  color: #1a1a2e;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 212, 255, 0.3);
}

.lesson-content {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}

.completion-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;
}

.completion-card {
  background: linear-gradient(145deg, #2a2a3e, #1f1f2e);
  border: 2px solid #00d4ff;
  border-radius: 20px;
  padding: 50px;
  text-align: center;
  max-width: 500px;
  box-shadow: 0 20px 60px rgba(0, 212, 255, 0.3);
  animation: slideUp 0.4s ease;
}

.completion-icon {
  font-size: 80px;
  margin-bottom: 20px;
  animation: bounce 1s ease infinite;
}

.completion-card h2 {
  font-size: 36px;
  color: #fff;
  margin-bottom: 30px;
}

.final-stats {
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-bottom: 30px;
}

.final-stat {
  text-align: center;
}

.final-stat-value {
  font-size: 48px;
  font-weight: 700;
  color: #00d4ff;
  text-shadow: 0 2px 10px rgba(0, 212, 255, 0.5);
}

.final-stat-label {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 5px;
}

.completion-actions {
  display: flex;
  gap: 15px;
  justify-content: center;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
</style>
