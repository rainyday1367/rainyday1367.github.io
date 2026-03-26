<template>
  <section class="container section page-view">
    <h2 class="section-title">교육 및 활동 (Education & Activities)</h2>
    <div class="content-wrapper glass-panel p-6" style="margin-bottom: 2rem;">
      <div class="history-section">
        <h3 class="history-title">💼 Experience & Activities</h3>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-date">2025.12 - 2026.04</div>
            <div class="timeline-content">
              <h4>용산 새싹 4기 AI 클라우드, 데이터 엔지니어 양성과정</h4>
              <p>Network, Database, Linux, IaC, Docker, k8s 양성 과정 수행 중</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">2025.11.22</div>
            <div class="timeline-content">
              <h4>강원대학교 본교 AWS Hackathon 참가</h4>
              <p>AI 페르소나로 상황별 연인 대화 대처 러브리허설 개발 (Lambda 함수 백엔드 개발 수행)</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">2024.03 - 2024.12</div>
            <div class="timeline-content">
              <h4>강원대학교 본교 글로컬 원격 교육 혁신 센터 근로 장학생</h4>
              <p>원격 강의 영상 촬영 및 편집 업무 수행</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">2024.01 - 2024.02</div>
            <div class="timeline-content">
              <h4>주식회사 로보그램 인공지능 로봇연구소</h4>
              <ul style="color: var(--text-secondary); font-size: 0.95rem; padding-left: 1.2rem; margin-top: 0.5rem; list-style-type: disc;">
                <li>로보미 교재 검토 및 교재에 따른 앱 오류 점검</li>
                <li>Shell Script로 특정 프로세스가 겹치지 않게 하는 스크립트 작성</li>
                <li>라즈베리파이에 Python으로 Open API 연동을 통해 음성 인식 연동 작업</li>
                <li>리눅스 공부 및 Shell Script 기본 공부</li>
                <li>Open API에 대한 가격 시장 조사 및 비교</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Tech Stack Overview -->
    <div class="tech-stack glass-panel p-6">
      <h3 class="tech-title">Core Technologies</h3>
      <div class="tech-tags mt-4">
        <span class="tech-tag">Java Spring Boot</span>
        <span class="tech-tag">Node.js, Express.js</span>
        <span class="tech-tag">Database(MySQL, NoSQL)</span>
        <span class="tech-tag">Linux Admin</span>
        <span class="tech-tag">CI/CD (Github Actions)</span>
        <span class="tech-tag">AWS(EC2, S3, RDS)</span>
        <span class="tech-tag">IaC(Ansible, Terraform)</span>
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
.mt-4 {
  margin-top: 1.5rem;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
