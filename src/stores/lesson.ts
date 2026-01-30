import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Lesson } from '@/types'
import { lessons as lessonData } from '@/data/lessons'

export const useLessonStore = defineStore('lesson', () => {
  const lessons = ref<Lesson[]>(lessonData)
  const currentLesson = ref<Lesson | null>(null)
  const currentText = ref('')
  const userInput = ref('')
  const startTime = ref<Date | null>(null)
  const endTime = ref<Date | null>(null)
  const errors = ref(0)
  const isActive = ref(false)
  const isCompleted = ref(false)

  const progress = computed(() => {
    if (!currentText.value) return 0
    return Math.round((userInput.value.length / currentText.value.length) * 100)
  })

  const wpm = computed(() => {
    if (!startTime.value || !userInput.value.length) return 0
    const now = isCompleted.value && endTime.value ? endTime.value : new Date()
    const minutes = (now.getTime() - startTime.value.getTime()) / 1000 / 60
    const words = userInput.value.length / 5
    return Math.round(words / minutes)
  })

  const accuracy = computed(() => {
    if (!userInput.value.length) return 100
    const correct = userInput.value.length - errors.value
    return Math.round((correct / userInput.value.length) * 100)
  })

  function getLessonById(id: string) {
    return lessons.value.find(lesson => lesson.id === id)
  }

  function getLessonsByCategory(category: string) {
    return lessons.value.filter(lesson => lesson.category === category)
  }

  function startLesson(lessonId: string) {
    const lesson = getLessonById(lessonId)
    if (!lesson) return

    currentLesson.value = lesson
    currentText.value = lesson.content
    userInput.value = ''
    errors.value = 0
    startTime.value = null
    endTime.value = null
    isActive.value = false
    isCompleted.value = false
  }

  function handleInput(char: string) {
    if (!isActive.value && !isCompleted.value) {
      isActive.value = true
      startTime.value = new Date()
    }

    if (isCompleted.value) return

    const currentIndex = userInput.value.length
    const expectedChar = currentText.value[currentIndex]

    if (char === expectedChar) {
      userInput.value += char
    } else {
      errors.value++
      userInput.value += char
    }

    if (userInput.value.length === currentText.value.length) {
      completeLesson()
    }
  }

  function handleBackspace() {
    if (userInput.value.length > 0 && !isCompleted.value) {
      userInput.value = userInput.value.slice(0, -1)
    }
  }

  function completeLesson() {
    isCompleted.value = true
    isActive.value = false
    endTime.value = new Date()
  }

  function resetLesson() {
    userInput.value = ''
    errors.value = 0
    startTime.value = null
    endTime.value = null
    isActive.value = false
    isCompleted.value = false
  }

  return {
    lessons,
    currentLesson,
    currentText,
    userInput,
    progress,
    wpm,
    accuracy,
    errors,
    isActive,
    isCompleted,
    getLessonById,
    getLessonsByCategory,
    startLesson,
    handleInput,
    handleBackspace,
    resetLesson
  }
})
