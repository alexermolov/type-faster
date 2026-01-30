# 🎯 TypeFaster - English Typing Trainer

<div align="center">

![TypeFaster Logo](public/icon.svg)

**A modern, feature-rich typing trainer for mastering touch typing in English**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Electron](https://img.shields.io/badge/Electron-28.x-47848F?logo=electron)](https://www.electronjs.org/)
[![Vue.js](https://img.shields.io/badge/Vue.js-3.x-4FC08D?logo=vue.js)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)](https://www.typescriptlang.org/)

[Features](#-features) • [Quick Start](#-quick-start) • [Documentation](#-documentation) • [Contributing](#-contributing) • [License](#-license)

</div>

---

## ✨ Features

### 📚 **35+ Progressive Lessons**
- **Home Row** - Master the foundation (ASDF JKL;)
- **Top & Bottom Rows** - Complete keyboard coverage
- **Numbers & Symbols** - Special characters and digits
- **Difficult Combinations** - Challenging letter sequences
- **Real Words** - Common vocabulary practice
- **Sentences & Paragraphs** - Natural text practice
- **Code Typing** - HTML, CSS, JavaScript, Python

### ⚡ **Real-Time Performance Tracking**
- **WPM** - Words per minute calculation
- **Accuracy** - Instant percentage feedback
- **Progress** - Visual completion indicator
- **Error Tracking** - Count and highlight mistakes

### 🎨 **Beautiful User Interface**
- Modern dark theme optimized for extended use
- Smooth animations and transitions
- Glass-morphism design effects
- Responsive and intuitive layout

### ⌨️ **Interactive Virtual Keyboard**
- Full QWERTY layout visualization
- Next key highlighting
- Proper finger placement guidance
- Visual feedback for active keys

### 📊 **Comprehensive Statistics**
- Historical performance data
- Best WPM records
- Average accuracy metrics
- Recent activity log
- Per-lesson progress tracking

### 💾 **Data Persistence**
- Automatic progress saving
- Local storage (no account needed)
- Resume practice anytime
- Clear data option

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ ([Download](https://nodejs.org/))
- **npm** (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/type-faster.git
cd type-faster

# Install dependencies
npm install

# Start development mode
npm run electron:dev
```

The application will start automatically with hot-reload enabled.

### Building

```bash
# Build for current platform
npm run build

# Platform-specific builds
npm run build:win    # Windows (NSIS)
npm run build:mac    # macOS (DMG)
npm run build:linux  # Linux (AppImage)
```

Built applications will be in the `release/` directory.

---

## 🎮 How to Use

1. **Launch TypeFaster** from your applications folder or run `npm run electron:dev`

2. **Choose a Lesson**
   - Click "Start Practice"
   - Browse lessons by category
   - Select difficulty level

3. **Start Typing**
   - Click in the typing area
   - Type the displayed text
   - Watch the virtual keyboard for guidance
   - Monitor your WPM and accuracy in real-time

4. **Review Results**
   - Complete the lesson to see your performance
   - Compare with target metrics
   - Track your improvement

5. **Monitor Progress**
   - View statistics dashboard
   - Check your best scores
   - Review recent activity

---

## 📁 Project Structure

```
type-faster/
├── electron/           # Electron main process
│   ├── main.ts        # Application entry
│   └── preload.ts     # Preload script
├── src/
│   ├── components/    # Reusable Vue components
│   │   ├── TypingArea.vue
│   │   ├── VirtualKeyboard.vue
│   │   └── StatsPanel.vue
│   ├── views/         # Page components
│   │   ├── Home.vue
│   │   ├── LessonSelector.vue
│   │   ├── TypingLesson.vue
│   │   ├── Results.vue
│   │   └── Statistics.vue
│   ├── stores/        # Pinia state management
│   │   ├── lesson.ts
│   │   ├── progress.ts
│   │   └── settings.ts
│   ├── data/          # Lesson content
│   │   └── lessons.ts
│   ├── types/         # TypeScript definitions
│   │   └── index.ts
│   ├── styles/        # Global styles
│   │   └── main.css
│   └── router/        # Vue Router
│       └── index.ts
├── public/            # Static assets
└── package.json       # Dependencies & scripts
```

---

## 🛠️ Tech Stack

- **[Electron](https://www.electronjs.org/)** - Cross-platform desktop framework
- **[Vue 3](https://vuejs.org/)** - Progressive JavaScript framework
- **[TypeScript](https://www.typescriptlang.org/)** - Typed superset of JavaScript
- **[Pinia](https://pinia.vuejs.org/)** - Vue state management
- **[Vite](https://vitejs.dev/)** - Next-generation build tool
- **[Vue Router](https://router.vuejs.org/)** - Official Vue.js router

---

## 📖 Documentation

- **[QUICKSTART.md](QUICKSTART.md)** - Fast setup guide
- **[PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)** - Complete project overview
- **[SETUP_COMPLETE.md](SETUP_COMPLETE.md)** - Detailed implementation info
- **[CONTRIBUTING.md](CONTRIBUTING.md)** - Contribution guidelines
- **[START_HERE.md](START_HERE.md)** - Beginner's guide

---

## 🎨 Customization

### Adding Custom Lessons

Edit `src/data/lessons.ts`:

```typescript
{
  id: 'custom-001',
  title: 'Custom Lesson',
  description: 'Your lesson description',
  category: 'words',
  difficulty: 'beginner',
  content: 'Text to type...',
  targetWPM: 30,
  targetAccuracy: 95
}
```

### Modifying Styles

- **Global styles**: `src/styles/main.css`
- **Component styles**: `<style scoped>` sections in Vue files
- **Theme colors**: CSS variables in component styles

---

## 🤝 Contributing

Contributions are welcome! Here's how:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Ideas for Contributions

- 📝 Add more lesson content
- 🔊 Implement sound effects
- 🎨 Create additional themes
- 📊 Enhanced statistics visualizations
- ✍️ Lesson creator/editor
- 🌐 Localization for other languages
- ⌨️ Alternative keyboard layouts (Dvorak, Colemak)
- 🎮 Multiplayer/competitive mode

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

---

## 🌟 Roadmap

- [ ] Sound effects for keypress feedback
- [ ] Light/dark theme toggle
- [ ] Custom lesson creator
- [ ] Import lessons from files
- [ ] Detailed per-key statistics
- [ ] Progress graphs over time
- [ ] Achievements system
- [ ] Export statistics to CSV
- [ ] Mobile/web version
- [ ] Multi-language support

---

## 📊 Project Statistics

- **Total Files**: 30+
- **Lines of Code**: 3,500+
- **Vue Components**: 8
- **Lessons**: 35
- **Categories**: 10
- **Difficulty Levels**: 3

---

## 🐛 Troubleshooting

### Application won't start

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run electron:dev
```

### Build errors

```bash
# Clear build directories
rm -rf dist dist-electron
npm run build
```

### Port already in use

Edit `vite.config.ts` to change the dev server port:

```typescript
export default defineConfig({
  server: {
    port: 3000 // Change to available port
  }
})
```

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Inspired by popular typing trainers like Keybr, TypeRacer, and Monkeytype
- Built with modern open-source technologies
- Community-driven development

---

## 📧 Contact & Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/type-faster/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/type-faster/discussions)

---

<div align="center">

**Made with ❤️ using Electron, Vue 3, and TypeScript**

⭐ Star this repo if you find it helpful!

[Report Bug](https://github.com/yourusername/type-faster/issues) • [Request Feature](https://github.com/yourusername/type-faster/issues) • [Documentation](https://github.com/yourusername/type-faster/wiki)

</div>
