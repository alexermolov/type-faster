<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useProgressStore } from '@/stores/progress'

const router = useRouter()
const progressStore = useProgressStore()

const formatDate = (date: Date) => {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
}

const goBack = () => {
  router.push('/')
}

const clearData = () => {
  if (confirm('Are you sure you want to clear all your progress? This cannot be undone.')) {
    progressStore.clearProgress()
  }
}
</script>

<template>
  <div class="statistics">
    <div class="header">
      <button class="back-btn" @click="goBack">
        ← Back
      </button>
      <h1>Your Statistics</h1>
      <button class="clear-btn" @click="clearData">
        Clear Data
      </button>
    </div>

    <div class="stats-overview">
      <div class="overview-card">
        <div class="overview-icon">🏆</div>
        <div class="overview-content">
          <div class="overview-value">{{ progressStore.bestWPM }}</div>
          <div class="overview-label">Best WPM</div>
        </div>
      </div>

      <div class="overview-card">
        <div class="overview-icon">📊</div>
        <div class="overview-content">
          <div class="overview-value">{{ progressStore.averageWPM }}</div>
          <div class="overview-label">Average WPM</div>
        </div>
      </div>

      <div class="overview-card">
        <div class="overview-icon">🎯</div>
        <div class="overview-content">
          <div class="overview-value">{{ progressStore.averageAccuracy }}%</div>
          <div class="overview-label">Avg Accuracy</div>
        </div>
      </div>

      <div class="overview-card">
        <div class="overview-icon">✅</div>
        <div class="overview-content">
          <div class="overview-value">{{ progressStore.totalLessons }}</div>
          <div class="overview-label">Lessons Completed</div>
        </div>
      </div>

      <div class="overview-card">
        <div class="overview-icon">📝</div>
        <div class="overview-content">
          <div class="overview-value">{{ progressStore.results.length }}</div>
          <div class="overview-label">Total Attempts</div>
        </div>
      </div>
    </div>

    <div class="recent-section">
      <h2>Recent Activity</h2>
      <div v-if="progressStore.recentResults.length === 0" class="empty-state">
        <div class="empty-icon">📭</div>
        <p>No activity yet. Start practicing to see your results here!</p>
      </div>
      <div v-else class="results-table">
        <div class="table-header">
          <div class="col-date">Date</div>
          <div class="col-lesson">Lesson</div>
          <div class="col-wpm">WPM</div>
          <div class="col-accuracy">Accuracy</div>
          <div class="col-status">Status</div>
        </div>
        <div
          v-for="(result, index) in progressStore.recentResults"
          :key="index"
          class="table-row"
        >
          <div class="col-date">{{ formatDate(result.date) }}</div>
          <div class="col-lesson">{{ result.lessonId }}</div>
          <div class="col-wpm">{{ result.wpm }}</div>
          <div class="col-accuracy">{{ result.accuracy }}%</div>
          <div class="col-status">
            <span v-if="result.completed" class="status-badge success">✓ Passed</span>
            <span v-else class="status-badge pending">○ Practice</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.statistics {
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  padding: 40px;
  overflow-y: auto;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
}

.header h1 {
  font-size: 42px;
  color: #fff;
  margin: 0;
  flex: 1;
  text-align: center;
}

.back-btn,
.clear-btn {
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

.clear-btn {
  background: rgba(248, 113, 113, 0.2);
  border-color: rgba(248, 113, 113, 0.3);
  color: #f87171;
}

.clear-btn:hover {
  background: rgba(248, 113, 113, 0.3);
  border-color: #f87171;
}

.stats-overview {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  margin-bottom: 50px;
}

.overview-card {
  background: linear-gradient(145deg, #2a2a3e, #1f1f2e);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 30px;
  display: flex;
  align-items: center;
  gap: 20px;
  transition: all 0.3s ease;
}

.overview-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 212, 255, 0.2);
  border-color: rgba(0, 212, 255, 0.3);
}

.overview-icon {
  font-size: 48px;
}

.overview-content {
  flex: 1;
}

.overview-value {
  font-size: 36px;
  font-weight: 700;
  color: #00d4ff;
  text-shadow: 0 2px 8px rgba(0, 212, 255, 0.3);
}

.overview-label {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 5px;
}

.recent-section {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 30px;
}

.recent-section h2 {
  font-size: 28px;
  color: #fff;
  margin: 0 0 25px 0;
}

.empty-state {
  text-align: center;
  padding: 60px 20px;
}

.empty-icon {
  font-size: 80px;
  margin-bottom: 20px;
  opacity: 0.5;
}

.empty-state p {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.5);
}

.results-table {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.table-header,
.table-row {
  display: grid;
  grid-template-columns: 120px 1fr 100px 100px 120px;
  gap: 15px;
  padding: 15px;
  align-items: center;
}

.table-header {
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: rgba(255, 255, 255, 0.5);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.table-row {
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  font-size: 14px;
  color: #fff;
  transition: all 0.3s ease;
}

.table-row:hover {
  background: rgba(0, 212, 255, 0.1);
  border-color: rgba(0, 212, 255, 0.3);
}

.col-wpm,
.col-accuracy {
  font-weight: 600;
  color: #00d4ff;
}

.status-badge {
  display: inline-block;
  padding: 5px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
}

.status-badge.success {
  background: rgba(74, 222, 128, 0.2);
  color: #4ade80;
  border: 1px solid rgba(74, 222, 128, 0.3);
}

.status-badge.pending {
  background: rgba(251, 191, 36, 0.2);
  color: #fbbf24;
  border: 1px solid rgba(251, 191, 36, 0.3);
}
</style>
