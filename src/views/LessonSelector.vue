<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useLessonStore } from '@/stores/lesson'
import { useProgressStore } from '@/stores/progress'
import type { LessonCategory } from '@/types'

const router = useRouter()
const lessonStore = useLessonStore()
const progressStore = useProgressStore()

const categories: { name: string; id: LessonCategory; icon: string; color: string }[] = [
  { name: 'Home Row', id: 'home-row', icon: '🏠', color: '#4ade80' },
  { name: 'Top Row', id: 'top-row', icon: '⬆️', color: '#60a5fa' },
  { name: 'Bottom Row', id: 'bottom-row', icon: '⬇️', color: '#f472b6' },
  { name: 'Numbers', id: 'numbers', icon: '🔢', color: '#fbbf24' },
  { name: 'Symbols', id: 'symbols', icon: '✨', color: '#a78bfa' },
  { name: 'Combinations', id: 'combinations', icon: '🔗', color: '#fb923c' },
  { name: 'Words', id: 'words', icon: '📝', color: '#34d399' },
  { name: 'Sentences', id: 'sentences', icon: '💬', color: '#38bdf8' },
  { name: 'Paragraphs', id: 'paragraphs', icon: '📄', color: '#c084fc' },
  { name: 'Code', id: 'code', icon: '💻', color: '#22d3ee' }
]

const selectLesson = (lessonId: string) => {
  router.push(`/lesson/${lessonId}`)
}

const goBack = () => {
  router.push('/')
}

const getDifficultyColor = (difficulty: string) => {
  const colors: Record<string, string> = {
    beginner: '#4ade80',
    intermediate: '#fbbf24',
    advanced: '#f87171'
  }
  return colors[difficulty] || '#fff'
}

const isCompleted = (lessonId: string) => {
  return progressStore.isLessonCompleted(lessonId)
}
</script>

<template>
  <div class="lesson-selector">
    <div class="header">
      <button class="back-btn" @click="goBack">
        ← Back
      </button>
      <h1>Choose Your Lesson</h1>
    </div>

    <div class="categories">
      <div
        v-for="category in categories"
        :key="category.id"
        class="category-card"
        :style="{ borderColor: category.color }"
      >
        <div class="category-icon">{{ category.icon }}</div>
        <div class="category-name">{{ category.name }}</div>
        <div class="lesson-count">
          {{ lessonStore.getLessonsByCategory(category.id).length }} lessons
        </div>
        
        <div class="lesson-list">
          <div
            v-for="lesson in lessonStore.getLessonsByCategory(category.id)"
            :key="lesson.id"
            class="lesson-item"
            @click="selectLesson(lesson.id)"
          >
            <div class="lesson-header">
              <span class="lesson-title">{{ lesson.title }}</span>
              <span v-if="isCompleted(lesson.id)" class="completed-badge">✓</span>
            </div>
            <div class="lesson-description">{{ lesson.description }}</div>
            <div class="lesson-meta">
              <span
                class="difficulty-badge"
                :style="{ color: getDifficultyColor(lesson.difficulty) }"
              >
                {{ lesson.difficulty }}
              </span>
              <span v-if="lesson.targetWPM" class="target">
                Target: {{ lesson.targetWPM }} WPM
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.lesson-selector {
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  padding: 40px;
  overflow-y: auto;
}

.header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px;
}

.back-btn {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.back-btn:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: #00d4ff;
}

.header h1 {
  font-size: 42px;
  color: #fff;
  margin: 0;
}

.categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

.category-card {
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid;
  border-radius: 16px;
  padding: 25px;
  transition: all 0.3s ease;
}

.category-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.category-icon {
  font-size: 48px;
  margin-bottom: 10px;
}

.category-name {
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 5px;
}

.lesson-count {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 20px;
}

.lesson-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.lesson-item {
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.lesson-item:hover {
  background: rgba(0, 212, 255, 0.1);
  border-color: #00d4ff;
  transform: translateX(5px);
}

.lesson-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.lesson-title {
  font-size: 16px;
  font-weight: 600;
  color: #fff;
}

.completed-badge {
  background: #4ade80;
  color: #1a1a2e;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
}

.lesson-description {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 10px;
}

.lesson-meta {
  display: flex;
  gap: 15px;
  align-items: center;
  font-size: 12px;
}

.difficulty-badge {
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;
}

.target {
  color: rgba(255, 255, 255, 0.5);
}
</style>
