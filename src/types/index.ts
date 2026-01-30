export interface Lesson {
  id: string
  title: string
  description: string
  category: LessonCategory
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  content: string
  targetWPM?: number
  targetAccuracy?: number
}

export type LessonCategory = 
  | 'home-row'
  | 'top-row'
  | 'bottom-row'
  | 'numbers'
  | 'symbols'
  | 'combinations'
  | 'words'
  | 'sentences'
  | 'paragraphs'
  | 'code'

export interface TypingStats {
  wpm: number
  accuracy: number
  errors: number
  correctChars: number
  totalChars: number
  time: number
}

export interface LessonResult extends TypingStats {
  lessonId: string
  date: Date
  completed: boolean
}

export interface UserProgress {
  completedLessons: string[]
  results: LessonResult[]
  bestWPM: number
  averageAccuracy: number
}
