<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useProgressStore } from '@/stores/progress'

const router = useRouter()
const progressStore = useProgressStore()

const startTyping = () => {
  router.push('/lessons')
}

const viewStats = () => {
  router.push('/statistics')
}
</script>

<template>
  <div class="home">
    <div class="hero">
      <div class="logo">
        <span class="logo-icon">⌨️</span>
        <h1 class="logo-text">TypeFaster</h1>
      </div>
      <p class="tagline">Master Touch Typing with Interactive Lessons</p>
      
      <div class="stats-preview">
        <div class="stat-item">
          <div class="stat-number">{{ progressStore.totalLessons }}</div>
          <div class="stat-label">Lessons Completed</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">{{ progressStore.bestWPM }}</div>
          <div class="stat-label">Best WPM</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">{{ progressStore.averageAccuracy }}%</div>
          <div class="stat-label">Avg Accuracy</div>
        </div>
      </div>

      <div class="actions">
        <button class="btn btn-primary" @click="startTyping">
          <span class="btn-icon">🚀</span>
          Start Practice
        </button>
        <button class="btn btn-secondary" @click="viewStats">
          <span class="btn-icon">📊</span>
          View Statistics
        </button>
      </div>
    </div>

    <div class="features">
      <div class="feature-card">
        <div class="feature-icon">🎯</div>
        <h3>Progressive Learning</h3>
        <p>Start from basics and advance through structured lessons</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">⚡</div>
        <h3>Real-time Feedback</h3>
        <p>See your WPM and accuracy update as you type</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">🎨</div>
        <h3>Visual Keyboard</h3>
        <p>Interactive keyboard guide helps you learn proper finger placement</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">📈</div>
        <h3>Track Progress</h3>
        <p>Monitor your improvement over time with detailed statistics</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  padding: 40px;
  overflow-y: auto;
}

.hero {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 60px;
  padding: 60px 0;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
}

.logo-icon {
  font-size: 72px;
  filter: drop-shadow(0 4px 12px rgba(0, 212, 255, 0.3));
}

.logo-text {
  font-size: 64px;
  font-weight: 800;
  background: linear-gradient(135deg, #00d4ff 0%, #0099cc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 4px 20px rgba(0, 212, 255, 0.3);
}

.tagline {
  font-size: 24px;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 40px;
}

.stats-preview {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-bottom: 40px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 36px;
  font-weight: 700;
  color: #00d4ff;
  text-shadow: 0 2px 8px rgba(0, 212, 255, 0.3);
}

.stat-label {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 5px;
}

.actions {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.btn {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px 32px;
  font-size: 18px;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.btn-icon {
  font-size: 24px;
}

.btn-primary {
  background: linear-gradient(135deg, #00d4ff 0%, #0099cc 100%);
  color: #1a1a2e;
  box-shadow: 0 4px 15px rgba(0, 212, 255, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 212, 255, 0.4);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  border: 2px solid rgba(255, 255, 255, 0.2);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: #00d4ff;
  transform: translateY(-2px);
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 30px;
  text-align: center;
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  border-color: rgba(0, 212, 255, 0.3);
  box-shadow: 0 10px 30px rgba(0, 212, 255, 0.2);
}

.feature-icon {
  font-size: 48px;
  margin-bottom: 15px;
  filter: drop-shadow(0 2px 8px rgba(0, 212, 255, 0.2));
}

.feature-card h3 {
  font-size: 22px;
  margin-bottom: 10px;
  color: #fff;
}

.feature-card p {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.6;
}
</style>
