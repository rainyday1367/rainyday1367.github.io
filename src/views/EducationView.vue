<template>
  <section class="container section page-view">
    <h2 class="section-title">학력 (Education)</h2>
    <div class="content-wrapper glass-panel p-6">
      <div class="history-section">
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-date">2023.03 - 2025.08</div>
            <div class="timeline-content">
              <h4>강원대학교 본교</h4>
              <p>컴퓨터공학과 (학점 3.73 / 4.5)</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">2019.03 - 2023.02</div>
            <div class="timeline-content">
              <h4>국립 경국대학교</h4>
              <p>정보통신공학과 (학점 3.76 / 4.5)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.page-view {
  padding-top: 2rem;
  animation: fadeIn 0.5s ease;
}
.p-6 {
  padding: 2.5rem;
  border-radius: var(--radius-lg);
  max-width: 800px;
  margin: 0 auto;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
