# Quick Start Guide

## Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Development Mode**
   ```bash
   npm run electron:dev
   ```
   This will start both the Vite dev server and Electron application.

3. **Build for Production**
   ```bash
   npm run build        # Build for current platform
   npm run build:win    # Build for Windows
   npm run build:mac    # Build for macOS
   npm run build:linux  # Build for Linux
   ```

## Project Commands

- `npm run dev` - Start Vite dev server only (for web development)
- `npm run electron:dev` - Start Electron app in development mode
- `npm run build` - Build the complete application
- `npm run preview` - Preview the production build

## Development Tips

### Hot Module Replacement (HMR)
The application supports HMR. Changes to Vue components will be reflected immediately without full reload.

### Debugging
- The dev tools are opened automatically in development mode
- Main process logs appear in the terminal
- Renderer process logs appear in the Electron DevTools

### Adding New Lessons
Edit `src/data/lessons.ts` and add new lesson objects following the existing pattern.

### Modifying Styles
- Global styles: `src/styles/main.css`
- Component styles: Use `<style scoped>` in Vue components

## Troubleshooting

### Application won't start
- Ensure all dependencies are installed: `npm install`
- Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Clear Vite cache: `rm -rf node_modules/.vite`

### Build errors
- Check that all imports are correct
- Ensure TypeScript types are valid: `npm run build` (without electron)
- Check electron-builder configuration in `package.json`

### Icon not showing
- Place a 256x256 PNG file at `public/icon.png`
- Rebuild the application

## Platform-Specific Notes

### Windows
- Builds as NSIS installer
- Requires Windows 7 or later

### macOS
- Builds as DMG
- Requires macOS 10.13 or later
- Code signing recommended for distribution

### Linux
- Builds as AppImage
- Works on most modern Linux distributions

## File Structure Reference

```
src/
├── components/     # Reusable Vue components
├── views/          # Page-level components
├── stores/         # Pinia state management
├── data/           # Static data (lessons)
├── types/          # TypeScript type definitions
├── styles/         # Global CSS
└── router/         # Vue Router configuration

electron/
├── main.ts         # Electron main process
└── preload.ts      # Preload script
```
