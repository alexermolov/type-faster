import type { Lesson } from '@/types'

export const lessons: Lesson[] = [
  // Home Row Lessons
  {
    id: 'hr-001',
    title: 'Home Row Basics',
    description: 'Learn the foundation: A S D F J K L ;',
    category: 'home-row',
    difficulty: 'beginner',
    content: 'aaa sss ddd fff jjj kkk lll ;;; asdf jkl; fdsa ;lkj',
    targetWPM: 20,
    targetAccuracy: 95
  },
  {
    id: 'hr-002',
    title: 'Home Row Words',
    description: 'Simple words using home row keys',
    category: 'home-row',
    difficulty: 'beginner',
    content: 'dad sad lad fad las lass falls fads ads asks flask',
    targetWPM: 25,
    targetAccuracy: 95
  },
  {
    id: 'hr-003',
    title: 'Home Row Practice',
    description: 'Advanced home row combinations',
    category: 'home-row',
    difficulty: 'intermediate',
    content: 'salad Alaska flask glass class falls lassask; desk',
    targetWPM: 30,
    targetAccuracy: 95
  },

  // Top Row Lessons
  {
    id: 'tr-001',
    title: 'Top Row Introduction',
    description: 'Master Q W E R T Y U I O P',
    category: 'top-row',
    difficulty: 'beginner',
    content: 'qqq www eee rrr ttt yyy uuu iii ooo ppp qwert yuiop',
    targetWPM: 20,
    targetAccuracy: 93
  },
  {
    id: 'tr-002',
    title: 'Top Row Words',
    description: 'Practice words with top row letters',
    category: 'top-row',
    difficulty: 'intermediate',
    content: 'type write port tier poet route quote poetry pretty',
    targetWPM: 28,
    targetAccuracy: 93
  },
  {
    id: 'tr-003',
    title: 'Top Row Mastery',
    description: 'Complex top row combinations',
    category: 'top-row',
    difficulty: 'advanced',
    content: 'typewriter repertoire requirement opportunity propriety',
    targetWPM: 35,
    targetAccuracy: 92
  },

  // Bottom Row Lessons
  {
    id: 'br-001',
    title: 'Bottom Row Basics',
    description: 'Practice Z X C V B N M',
    category: 'bottom-row',
    difficulty: 'beginner',
    content: 'zzz xxx ccc vvv bbb nnn mmm zxcv bnm, zxcvbnm',
    targetWPM: 20,
    targetAccuracy: 90
  },
  {
    id: 'br-002',
    title: 'Bottom Row Words',
    description: 'Words using bottom row keys',
    category: 'bottom-row',
    difficulty: 'intermediate',
    content: 'zebra box cab van ban man can maze venom bacon',
    targetWPM: 28,
    targetAccuracy: 92
  },

  // Numbers
  {
    id: 'num-001',
    title: 'Number Row Introduction',
    description: 'Learn to type numbers 1-0',
    category: 'numbers',
    difficulty: 'intermediate',
    content: '111 222 333 444 555 666 777 888 999 000 12345 67890',
    targetWPM: 25,
    targetAccuracy: 93
  },
  {
    id: 'num-002',
    title: 'Numbers Practice',
    description: 'Mixed numbers and letters',
    category: 'numbers',
    difficulty: 'intermediate',
    content: 'room 123 page 456 year 2024 call 555-1234 code 7890',
    targetWPM: 30,
    targetAccuracy: 93
  },

  // Symbols
  {
    id: 'sym-001',
    title: 'Common Symbols',
    description: 'Practice special characters',
    category: 'symbols',
    difficulty: 'intermediate',
    content: '!!! @@@ ### $$$ %%% ^^^ &&& *** ((( ))) ___ +++ ===',
    targetWPM: 20,
    targetAccuracy: 88
  },
  {
    id: 'sym-002',
    title: 'Programming Symbols',
    description: 'Symbols for coding',
    category: 'symbols',
    difficulty: 'advanced',
    content: '{} [] <> () != == && || ++ -- += -= *= /= => -> :: ??',
    targetWPM: 25,
    targetAccuracy: 88
  },

  // Combinations
  {
    id: 'comb-001',
    title: 'Difficult Combinations',
    description: 'Tricky letter sequences',
    category: 'combinations',
    difficulty: 'intermediate',
    content: 'rhythm awkward queue colonel mortgage gnome psychology',
    targetWPM: 30,
    targetAccuracy: 90
  },
  {
    id: 'comb-002',
    title: 'Double Letters',
    description: 'Words with repeated letters',
    category: 'combinations',
    difficulty: 'intermediate',
    content: 'book keep look feel need good wood moon seem coffee',
    targetWPM: 32,
    targetAccuracy: 92
  },
  {
    id: 'comb-003',
    title: 'Triple Letters',
    description: 'Rare triple letter combinations',
    category: 'combinations',
    difficulty: 'advanced',
    content: 'bookkeeper bookselling crosssection roommate committee',
    targetWPM: 28,
    targetAccuracy: 88
  },

  // Words
  {
    id: 'word-001',
    title: 'Common Words',
    description: 'Most frequently used English words',
    category: 'words',
    difficulty: 'beginner',
    content: 'the be to of and a in that have I it for not on with',
    targetWPM: 35,
    targetAccuracy: 95
  },
  {
    id: 'word-002',
    title: 'Business Vocabulary',
    description: 'Professional terminology',
    category: 'words',
    difficulty: 'intermediate',
    content: 'meeting client project deadline budget strategy team',
    targetWPM: 35,
    targetAccuracy: 93
  },
  {
    id: 'word-003',
    title: 'Technical Terms',
    description: 'Technology and programming words',
    category: 'words',
    difficulty: 'advanced',
    content: 'algorithm database interface variable function array',
    targetWPM: 35,
    targetAccuracy: 92
  },

  // Sentences
  {
    id: 'sent-001',
    title: 'Simple Sentences',
    description: 'Short, easy sentences',
    category: 'sentences',
    difficulty: 'beginner',
    content: 'The cat sat on the mat. A dog ran in the park. Birds fly high in the sky. Fish swim in the sea.',
    targetWPM: 35,
    targetAccuracy: 95
  },
  {
    id: 'sent-002',
    title: 'Everyday Sentences',
    description: 'Common phrases and sentences',
    category: 'sentences',
    difficulty: 'intermediate',
    content: 'How are you today? The weather is nice. I like to read books. Please call me later. Have a great day!',
    targetWPM: 40,
    targetAccuracy: 94
  },
  {
    id: 'sent-003',
    title: 'Complex Sentences',
    description: 'Longer, more challenging sentences',
    category: 'sentences',
    difficulty: 'advanced',
    content: 'Although it was raining heavily, they decided to go out. The presentation, which lasted two hours, was very informative.',
    targetWPM: 40,
    targetAccuracy: 92
  },

  // Paragraphs
  {
    id: 'para-001',
    title: 'Short Story',
    description: 'A brief narrative paragraph',
    category: 'paragraphs',
    difficulty: 'intermediate',
    content: 'Once upon a time, in a small village nestled between rolling hills, there lived a young girl named Emma. She loved to explore the nearby forest, where she would discover new plants and animals every day. One sunny morning, Emma found a mysterious path she had never seen before. Curious and excited, she decided to follow it.',
    targetWPM: 45,
    targetAccuracy: 93
  },
  {
    id: 'para-002',
    title: 'Science Article',
    description: 'Scientific text for practice',
    category: 'paragraphs',
    difficulty: 'advanced',
    content: 'The human brain is one of the most complex organs in the body. It contains approximately 86 billion neurons that communicate through trillions of connections called synapses. These neural networks enable us to think, feel, remember, and create. Recent research has shown that the brain remains plastic throughout life, meaning it can form new connections and adapt to new situations even in adulthood.',
    targetWPM: 45,
    targetAccuracy: 92
  },
  {
    id: 'para-003',
    title: 'Historical Text',
    description: 'Historical narrative',
    category: 'paragraphs',
    difficulty: 'advanced',
    content: 'The invention of the printing press by Johannes Gutenberg in the 15th century revolutionized the spread of knowledge throughout Europe. Before this innovation, books were painstakingly copied by hand, making them expensive and rare. The printing press made books more accessible, leading to increased literacy rates and the rapid dissemination of ideas during the Renaissance and Reformation periods.',
    targetWPM: 48,
    targetAccuracy: 93
  },

  // Code Lessons
  {
    id: 'code-001',
    title: 'HTML Basics',
    description: 'Practice typing HTML code',
    category: 'code',
    difficulty: 'intermediate',
    content: '<div class="container"><h1>Hello World</h1><p>Welcome to my website.</p></div>',
    targetWPM: 30,
    targetAccuracy: 90
  },
  {
    id: 'code-002',
    title: 'CSS Practice',
    description: 'Type CSS styling code',
    category: 'code',
    difficulty: 'intermediate',
    content: '.button { background-color: #4CAF50; color: white; padding: 10px 20px; border-radius: 5px; }',
    targetWPM: 28,
    targetAccuracy: 88
  },
  {
    id: 'code-003',
    title: 'JavaScript Functions',
    description: 'Practice JavaScript code',
    category: 'code',
    difficulty: 'advanced',
    content: 'function calculate(a, b) { return a + b; } const result = calculate(5, 10); console.log(result);',
    targetWPM: 32,
    targetAccuracy: 88
  },
  {
    id: 'code-004',
    title: 'Python Code',
    description: 'Type Python programming code',
    category: 'code',
    difficulty: 'advanced',
    content: 'def factorial(n): if n <= 1: return 1 else: return n * factorial(n - 1)',
    targetWPM: 30,
    targetAccuracy: 87
  }
]
