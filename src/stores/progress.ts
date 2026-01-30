import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { LessonResult, UserProgress } from '@/types'

const STORAGE_KEY = 'typefaster_progress'

export const useProgressStore = defineStore('progress', () => {
  const completedLessons = ref<string[]>([])
  const results = ref<LessonResult[]>([])

  const bestWPM = computed(() => {
    if (results.value.length === 0) return 0
    return Math.max(...results.value.map(r => r.wpm))
  })

  const averageAccuracy = computed(() => {
    if (results.value.length === 0) return 0
    const sum = results.value.reduce((acc, r) => acc + r.accuracy, 0)
    return Math.round(sum / results.value.length)
  })

  const averageWPM = computed(() => {
    if (results.value.length === 0) return 0
    const sum = results.value.reduce((acc, r) => acc + r.wpm, 0)
    return Math.round(sum / results.value.length)
  })

  const totalLessons = computed(() => completedLessons.value.length)

  const recentResults = computed(() => {
    return results.value
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 10)
  })

  function addResult(result: LessonResult) {
    results.value.push(result)
    if (!completedLessons.value.includes(result.lessonId) && result.completed) {
      completedLessons.value.push(result.lessonId)
    }
    saveProgress()
  }

  function isLessonCompleted(lessonId: string) {
    return completedLessons.value.includes(lessonId)
  }

  function getLessonResults(lessonId: string) {
    return results.value
      .filter(r => r.lessonId === lessonId)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  }

  function getBestResult(lessonId: string) {
    const lessonResults = getLessonResults(lessonId)
    if (lessonResults.length === 0) return null
    return lessonResults.reduce((best, current) => 
      current.wpm > best.wpm ? current : best
    )
  }

  function saveProgress() {
    const progress: UserProgress = {
      completedLessons: completedLessons.value,
      results: results.value,
      bestWPM: bestWPM.value,
      averageAccuracy: averageAccuracy.value
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
  }

  function loadProgress() {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      try {
        const progress: UserProgress = JSON.parse(stored)
        completedLessons.value = progress.completedLessons || []
        results.value = progress.results || []
      } catch (e) {
        console.error('Failed to load progress:', e)
      }
    }
  }

  function clearProgress() {
    completedLessons.value = []
    results.value = []
    localStorage.removeItem(STORAGE_KEY)
  }

  // Load progress on store initialization
  loadProgress()

  return {
    completedLessons,
    results,
    bestWPM,
    averageAccuracy,
    averageWPM,
    totalLessons,
    recentResults,
    addResult,
    isLessonCompleted,
    getLessonResults,
    getBestResult,
    saveProgress,
    loadProgress,
    clearProgress
  }
})
