<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useLessonStore } from '@/stores/lesson'
import { useProgressStore } from '@/stores/progress'
import type { LessonResult } from '@/types'

const router = useRouter()
const lessonStore = useLessonStore()
const progressStore = useProgressStore()

const isPassingGrade = computed(() => {
  const lesson = lessonStore.currentLesson
  if (!lesson) return false
  
  const wpmPass = !lesson.targetWPM || lessonStore.wpm >= lesson.targetWPM
  const accuracyPass = !lesson.targetAccuracy || lessonStore.accuracy >= lesson.targetAccuracy
  
  return wpmPass && accuracyPass
})

const grade = computed(() => {
  if (lessonStore.accuracy >= 98 && lessonStore.wpm >= (lessonStore.currentLesson?.targetWPM || 0) + 10) {
    return { text: 'Excellent!', color: '#4ade80', icon: '🌟' }
  } else if (lessonStore.accuracy >= 95 && lessonStore.wpm >= (lessonStore.currentLesson?.targetWPM || 0)) {
    return { text: 'Great Job!', color: '#00d4ff', icon: '⭐' }
  } else if (isPassingGrade.value) {
    return { text: 'Good Work!', color: '#fbbf24', icon: '👍' }
  } else {
    return { text: 'Keep Practicing!', color: '#f87171', icon: '💪' }
  }
})

onMounted(() => {
  if (!lessonStore.currentLesson || !lessonStore.isCompleted) {
    router.push('/lessons')
    return
  }
  
  // Save result
  const result: LessonResult = {
    lessonId: lessonStore.currentLesson.id,
    wpm: lessonStore.wpm,
    accuracy: lessonStore.accuracy,
    errors: lessonStore.errors,
    correctChars: lessonStore.userInput.length - lessonStore.errors,
    totalChars: lessonStore.currentText.length,
    time: 0, // TODO: calculate actual time
    date: new Date(),
    completed: isPassingGrade.value
  }
  
  progressStore.addResult(result)
})

const tryAgain = () => {
  router.push(`/lesson/${lessonStore.currentLesson?.id}`)
}

const nextLesson = () => {
  // Find next lesson in same category
  const currentLesson = lessonStore.currentLesson
  if (!currentLesson) return
  
  const sameCategoryLessons = lessonStore.getLessonsByCategory(currentLesson.category)
  const currentIndex = sameCategoryLessons.findIndex(l => l.id === currentLesson.id)
  
  if (currentIndex >= 0 && currentIndex < sameCategoryLessons.length - 1) {
    router.push(`/lesson/${sameCategoryLessons[currentIndex + 1].id}`)
  } else {
    router.push('/lessons')
  }
}

const backToLessons = () => {
  router.push('/lessons')
}
</script>

<template>
  <div class="results">
    <div class="results-container">
      <div class="grade-section">
        <div class="grade-icon">{{ grade.icon }}</div>
        <h1 :style="{ color: grade.color }">{{ grade.text }}</h1>
        <p v-if="isPassingGrade" class="pass-message">
          You've successfully completed this lesson!
        </p>
        <p v-else class="retry-message">
          Keep practicing to improve your speed and accuracy!
        </p>
      </div>

      <div class="stats-grid">
        <div class="stat-box">
          <div class="stat-icon">⚡</div>
          <div class="stat-value">{{ lessonStore.wpm }}</div>
          <div class="stat-label">Words Per Minute</div>
          <div v-if="lessonStore.currentLesson?.targetWPM" class="stat-target">
            Target: {{ lessonStore.currentLesson.targetWPM }} WPM
          </div>
        </div>

        <div class="stat-box">
          <div class="stat-icon">🎯</div>
          <div class="stat-value">{{ lessonStore.accuracy }}%</div>
          <div class="stat-label">Accuracy</div>
          <div v-if="lessonStore.currentLesson?.targetAccuracy" class="stat-target">
            Target: {{ lessonStore.currentLesson.targetAccuracy }}%
          </div>
        </div>

        <div class="stat-box">
          <div class="stat-icon">✅</div>
          <div class="stat-value">{{ lessonStore.userInput.length - lessonStore.errors }}</div>
          <div class="stat-label">Correct Characters</div>
        </div>

        <div class="stat-box">
          <div class="stat-icon">❌</div>
          <div class="stat-value">{{ lessonStore.errors }}</div>
          <div class="stat-label">Errors</div>
        </div>
      </div>

      <div class="lesson-info">
        <h3>{{ lessonStore.currentLesson?.title }}</h3>
        <p>{{ lessonStore.currentLesson?.description }}</p>
      </div>

      <div class="actions">
        <button class="btn btn-primary" @click="nextLesson">
          Next Lesson →
        </button>
        <button class="btn btn-secondary" @click="tryAgain">
          Try Again
        </button>
        <button class="btn btn-tertiary" @click="backToLessons">
          All Lessons
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.results {
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.results-container {
  max-width: 900px;
  width: 100%;
}

.grade-section {
  text-align: center;
  margin-bottom: 50px;
}

.grade-icon {
  font-size: 100px;
  margin-bottom: 20px;
  animation: bounce 1s ease infinite;
}

.grade-section h1 {
  font-size: 56px;
  margin-bottom: 15px;
  text-shadow: 0 4px 15px currentColor;
}

.pass-message {
  font-size: 18px;
  color: #4ade80;
}

.retry-message {
  font-size: 18px;
  color: #fbbf24;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.stat-box {
  background: linear-gradient(145deg, #2a2a3e, #1f1f2e);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 30px;
  text-align: center;
  transition: all 0.3s ease;
}

.stat-box:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 212, 255, 0.2);
  border-color: rgba(0, 212, 255, 0.3);
}

.stat-icon {
  font-size: 40px;
  margin-bottom: 15px;
}

.stat-value {
  font-size: 48px;
  font-weight: 700;
  color: #00d4ff;
  margin-bottom: 10px;
  text-shadow: 0 2px 10px rgba(0, 212, 255, 0.3);
}

.stat-label {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 8px;
}

.stat-target {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.4);
  font-style: italic;
}

.lesson-info {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 25px;
  text-align: center;
  margin-bottom: 30px;
}

.lesson-info h3 {
  font-size: 24px;
  color: #fff;
  margin: 0 0 10px 0;
}

.lesson-info p {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
}

.actions {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
}

.btn {
  padding: 16px 32px;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary {
  background: linear-gradient(135deg, #00d4ff 0%, #0099cc 100%);
  color: #1a1a2e;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 212, 255, 0.4);
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

.btn-tertiary {
  background: transparent;
  color: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.btn-tertiary:hover {
  color: #fff;
  border-color: rgba(255, 255, 255, 0.4);
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}
</style>
