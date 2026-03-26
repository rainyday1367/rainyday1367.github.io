<template>
  <section class="container section page-view">
    <h2 class="section-title">{{ $t('resume.title') }}</h2>
    
    <div class="resume-grid">
      <!-- 1. 학력 박스 -->
      <div class="glass-panel resume-box">
        <h3 class="history-title">{{ $t('resume.eduTitle') }}</h3>
        <div class="timeline compact-timeline">
          <div class="timeline-item">
            <div class="timeline-date">2023.03 - 2025.08</div>
            <div class="timeline-content">
              <h4>{{ $t('resume.edu1') }}</h4>
              <p>{{ $t('resume.edu1Desc') }}</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">2019.03 - 2023.02</div>
            <div class="timeline-content">
              <h4>{{ $t('resume.edu2') }}</h4>
              <p>{{ $t('resume.edu2Desc') }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 2. 자격 및 수상 박스 -->
      <div class="glass-panel resume-box">
        <h3 class="history-title">{{ $t('resume.certTitle') }}</h3>
        <div class="timeline compact-timeline">
          <div class="timeline-item">
            <div class="timeline-date">2026.01</div>
            <div class="timeline-content">
              <h4>{{ $t('resume.cert1') }}</h4>
              <p>{{ $t('resume.cert1Desc') }}</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">2025.06</div>
            <div class="timeline-content">
              <h4>{{ $t('resume.cert2') }}</h4>
              <p>{{ $t('resume.cert2Desc') }}</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">2024.12</div>
            <div class="timeline-content">
              <h4>{{ $t('resume.cert3') }}</h4>
              <p>{{ $t('resume.cert3Desc') }}</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">2024.09</div>
            <div class="timeline-content">
              <h4>{{ $t('resume.cert4') }}</h4>
              <p>{{ $t('resume.cert4Desc') }}</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">2019.01</div>
            <div class="timeline-content">
              <h4>{{ $t('resume.cert5') }}</h4>
              <p>{{ $t('resume.cert5Desc') }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 3. 교육 및 활동 박스 -->
      <div class="glass-panel resume-box">
        <h3 class="history-title">{{ $t('resume.expTitle') }}</h3>
        <div class="timeline compact-timeline">
          <div class="timeline-item">
            <div class="timeline-date">2025.12 - 2026.04</div>
            <div class="timeline-content">
              <h4>{{ $t('resume.exp1') }}</h4>
              <p>{{ $t('resume.exp1Desc') }}</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">2025.01 - 2025.06</div>
            <div class="timeline-content">
              <h4>{{ $t('resume.exp2') }}</h4>
              <p>{{ $t('resume.exp2Desc') }}</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">2025.11.22</div>
            <div class="timeline-content">
              <h4>{{ $t('resume.exp3') }}</h4>
              <p>{{ $t('resume.exp3Desc') }}</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">2024.03 - 2024.12</div>
            <div class="timeline-content">
              <h4>{{ $t('resume.exp4') }}</h4>
              <p>{{ $t('resume.exp4Desc') }}</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">2024.01 - 2024.02</div>
            <div class="timeline-content">
              <h4>{{ $t('resume.exp5') }}</h4>
              <p>{{ $t('resume.exp5Desc') }}</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </section>
</template>

<style scoped>
.page-view {
  padding-top: 1rem;
  animation: fadeIn 0.5s ease;
}

.resume-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  align-items: stretch;
}

.resume-box {
  padding: 1.5rem;
  border-radius: var(--radius-lg);
  transition: transform var(--transition-normal);
  display: flex;
  flex-direction: column;
}

.resume-box:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px var(--glass-shadow);
}

.history-title {
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

/* Compact overriding styles to fit height nicely */
.compact-timeline :deep(.timeline) {
  gap: 1.2rem;
}
.compact-timeline .timeline-item {
  margin-bottom: 1.2rem;
}
.compact-timeline .timeline-item:last-child {
  margin-bottom: 0;
}
.compact-timeline .timeline-date {
  font-size: 0.75rem;
  margin-bottom: 0.15rem;
}
.compact-timeline .timeline-content h4 {
  font-size: 0.95rem;
  margin-bottom: 0.15rem;
  line-height: 1.3;
}
.compact-timeline .timeline-content p {
  font-size: 0.85rem;
  line-height: 1.4;
}

.activity-list {
  color: var(--text-secondary);
  font-size: 0.8rem;
  padding-left: 1.2rem;
  margin-top: 0.25rem;
  list-style-type: disc;
}

@media (max-width: 968px) {
  .resume-grid {
    grid-template-columns: 1fr;
    max-width: 600px;
  }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
