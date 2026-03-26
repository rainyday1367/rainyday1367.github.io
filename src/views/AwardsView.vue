<template>
  <section class="container section page-view">
    <h2 class="section-title">수상 및 자격증 (Awards & Certificates)</h2>
    <div class="content-wrapper glass-panel p-6">
      <div class="history-section">
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-date">2026.01</div>
            <div class="timeline-content">
              <h4>RHCSA 자격증 취득</h4>
              <p>Red Hat 시스템 관리자 자격증(RHCSA) 취득.</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">2025.06</div>
            <div class="timeline-content">
              <h4>BEYOND SW CAMP 최종 프로젝트 1위</h4>
              <p>일정 관리 시스템 'Core Flow' 아키텍처 구축 및 CI/CD 성과로 우승 수상.</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">2024.12</div>
            <div class="timeline-content">
              <h4>강원대 IT대학 졸업작품 경진대회 우수상</h4>
              <p>Ethereum/Solidity 블록체인 기반의 기숙사 입퇴사 증명서 시스템 구축.</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">2024.09</div>
            <div class="timeline-content">
              <h4>정보처리기사</h4>
              <p>정보처리기사 국가공인 자격 취득.</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">2019.01</div>
            <div class="timeline-content">
              <h4>운전면허 1종 보통</h4>
              <p>제 1종 보통 자동차운전면허 취득.</p>
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
