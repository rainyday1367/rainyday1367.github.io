<script setup>
import { ref, onMounted } from 'vue'

const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  updateTheme()
}

const updateTheme = () => {
  if (isDark.value) {
    document.documentElement.setAttribute('data-theme', 'dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.removeAttribute('data-theme')
    localStorage.setItem('theme', 'light')
  }
}

onMounted(() => {
  // Check local storage or system preference
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDark.value = true
    updateTheme()
  }
})
</script>

<template>
  <div class="app-layout">
    <!-- Navbar Placeholder -->
    <header class="navbar container glass-panel">
      <div class="logo">Portfolio.</div>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <button @click="toggleTheme" class="theme-toggle" :aria-label="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'">
          <!-- Light Mode Icon (Sun) -->
          <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
          <!-- Dark Mode Icon (Moon) -->
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        </button>
      </nav>
    </header>

    <!-- Hero Section -->
    <main id="home" class="container hero section">
      <div class="hero-content animate-fade-in">
        <div class="badge">Available for work</div>
        <h1 class="hero-title">
          Architecting robust systems with <br/>
          <span class="text-gradient">stability</span> & <span class="text-gradient">scale</span>.
        </h1>
        <p class="hero-subtitle">
          사용자 경험과 확장 가능한 시스템 구축을 중시하는 System & Cloud Engineer 입니다.<br/>
          개발 전 과정에 대한 경험을 바탕으로 개발자가 필요로 하는 인프라를 제공하고 원활한 소통을 지향합니다.<br/>
          AWS 아키텍처 설계와 무중단 배포(Blue-Green) 경험을 통해 안정적이고 유연한 환경을 구축합니다.
        </p>
        <div class="hero-actions">
          <button class="btn btn-primary">View My Work</button>
          <button class="btn btn-secondary">Contact Me</button>
        </div>
      </div>
      
      <div class="hero-visual animate-float">
        <!-- Abstract Shape Placeholder -->
        <div class="shape-gradient"></div>
        <div class="shape-glass glass-panel"></div>
      </div>
    </main>

    <!-- About Section -->
    <section id="about" class="container section">
      <h2 class="section-title">About Me</h2>
      <div class="about-grid">
        <div class="profile-card glass-panel">
          <div class="profile-image">
            <img src="./assets/profile.jpg" alt="정동한 사진" class="profile-img" />
          </div>
          <h3>정동한 (Jung Dong Han)</h3>
          <p class="text-muted">System & Cloud Engineer</p>
          <a href="#contact" class="btn btn-primary" style="width: 100%; text-align: center;">Get in Touch</a>
        </div>
        
        <div class="about-content">
          <div class="history-section">
            <h3 class="history-title">💼 Experience & Activities</h3>
            <div class="timeline">
              <div class="timeline-item">
                <div class="timeline-date">2025.12 - 2026.04</div>
                <div class="timeline-content">
                  <h4>용산 새싹 4기 AI 클라우드, 데이터 엔지니어 양성과정</h4>
                  <p>Network, Database, Linux, IaC, Container 양성 과정 수행</p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-date">2024.03 - 2024.12</div>
                <div class="timeline-content">
                  <h4>강원대학교 글로컬 원격 교육 혁신 센터 근로 장학생</h4>
                  <p>원격 강의 영상 촬영 및 편집 업무 수행</p>
                </div>
              </div>
            </div>
          </div>

          <div class="history-section">
            <h3 class="history-title">🎓 Education</h3>
            <div class="timeline">
              <div class="timeline-item">
                <div class="timeline-date">2023.03 - 2025.08</div>
                <div class="timeline-content">
                  <h4>강원대학교</h4>
                  <p>컴퓨터공학과 (학점 3.73 / 4.5)</p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-date">2019.03 - 2023.02</div>
                <div class="timeline-content">
                  <h4>안동대학교</h4>
                  <p>정보통신공학과 (학점 3.76 / 4.5)</p>
                </div>
              </div>
            </div>
          </div>

          <div class="history-section">
            <h3 class="history-title">🏆 Certificates & Awards</h3>
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
            </div>
          </div>

          <!-- Tech Stack Overview -->
          <div class="tech-stack">
            <h3 class="tech-title">Core Technologies</h3>
            <div class="tech-tags">
              <span class="tech-tag">Java Spring Boot</span>
              <span class="tech-tag">Node.js, Express.js</span>
              <span class="tech-tag">Database(MySQL, NoSQL)</span>
              <span class="tech-tag">Linux Admin</span>
              <span class="tech-tag">CI/CD (Github Actions)</span>
              <span class="tech-tag">AWS(EC2, S3, RDS)</span>
              <span class="tech-tag">IaC(Ansible, Terraform)</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="container section">
      <h2 class="section-title">Featured Projects</h2>
      <div class="projects-grid">
        <!-- Project 1 -->
        <article class="project-card glass-panel">
          <div class="project-image" style="background: linear-gradient(135deg, rgba(79, 70, 229, 0.15), rgba(219, 39, 119, 0.15)); display:flex; align-items:center; justify-content:center; color: var(--accent-primary); font-size:4rem; font-weight:900; font-family:var(--font-display);">CF</div>
          <h3>CoreFlow (협업 일정 관리 시스템)</h3>
          <p class="text-muted">
            배포 담당으로 CI/CD, AWS 배포를 수행했습니다.<br/>
            Github Actions와 AWS EC2/S3/Load Balancer 활용해 Blue-Green 무중단 배포 환경을 구축하였습니다.<br/>
            파사드 패턴을 적용하여 CRUD 작업을 수행했습니다.
          </p>
          <div class="project-tags">
            <span class="tag">AWS</span>
            <span class="tag">Github Actions</span>
            <span class="tag">Blue-Green</span>
            <span class="tag">Spring Boot</span>
          </div>
        </article>
        
        <!-- Project 2 -->
        <article class="project-card glass-panel">
          <div class="project-image" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(59, 130, 246, 0.15)); display:flex; align-items:center; justify-content:center; color: #10b981; font-size:4rem; font-weight:900; font-family:var(--font-display);">MD</div>
          <h3>MyLocalDiary</h3>
          <p class="text-muted">
            지도 API를 활용하여 장소를 다이어리 형식으로 공유할 수 있는 SNS 시스템을 구축했습니다.<br/>
            JWT와 Spring Security를 활용해서 로그인 로직을 구현하였습니다.
          </p>
          <div class="project-tags">
            <span class="tag">Spring Boot</span>
            <span class="tag">MariaDB</span>
            <span class="tag">Redis</span>
            <span class="tag">Map APIs</span>
          </div>
        </article>
        
        <!-- Project 3 -->
        <article class="project-card glass-panel">
          <div class="project-image" style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(239, 68, 68, 0.15)); display:flex; align-items:center; justify-content:center; color: #f59e0b; font-size:4rem; font-weight:900; font-family:var(--font-display);">DID</div>
          <h3>블록체인 증명서 관리 시스템 (졸업 작품)</h3>
          <p class="text-muted">
            로컬 Ethereum 네트워크와 Solidity 스마트 컨트랙트를 통해 학생 인증이 완료된 학생은 학생 증명 서류를 PDF로 발급 받을 수 있는 시스템의 기획을 담당했습니다.
          </p>
          <div class="project-tags">
            <span class="tag">Ethereum</span>
            <span class="tag">Solidity</span>
            <span class="tag">Java</span>
          </div>
        </article>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="container contact-section">
      <div class="contact-card">
        <h2 class="contact-heading">Let's Build Something <br/><span class="text-gradient">Amazing Together</span></h2>
        <p class="contact-text">
          Whether you have a technical question, a project proposal, or are looking to hire a dedicated System and Cloud Engineer, I’m always open to discussing new opportunities.
        </p>
        <div class="social-links">
          <a href="mailto:rainyday1367@naver.com" class="social-btn" target="_blank">
            <svg class="social-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            Email Me
          </a>
          <a href="https://github.com/rainyday1367" class="social-btn" target="_blank">
            <svg class="social-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            GitHub
          </a>
          <a href="https://ehdgks0309.tistory.com/" class="social-btn" target="_blank">
            <svg class="social-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
            Tech Blog
          </a>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
}

/* Background effects */
.app-layout::before {
  content: '';
  position: absolute;
  top: -10%;
  left: -10%;
  width: 50vw;
  height: 50vw;
  background: radial-gradient(circle, rgba(79, 70, 229, 0.1) 0%, transparent 70%);
  z-index: -1;
  border-radius: 50%;
}

.app-layout::after {
  content: '';
  position: absolute;
  bottom: -10%;
  right: -10%;
  width: 50vw;
  height: 50vw;
  background: radial-gradient(circle, rgba(219, 39, 119, 0.1) 0%, transparent 70%);
  z-index: -1;
  border-radius: 50%;
}

/* Navbar */
.navbar {
  margin-top: 1.5rem;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: var(--radius-full);
}

.logo {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.25rem;
  color: var(--text-primary);
}

.navbar nav {
  display: flex;
  gap: 2rem;
}

.navbar a {
  font-weight: 500;
  font-size: 0.95rem;
  color: var(--text-secondary);
}

.navbar a:hover {
  color: var(--text-primary);
}

.theme-toggle {
  font-size: 1.25rem;
  padding: 0.25rem 0.5rem;
  border-radius: var(--radius-sm);
  transition: all var(--transition-fast);
  display: flex;
  align-items: center;
  justify-content: center;
}

.theme-toggle:hover {
  background: var(--border-color);
  transform: scale(1.1);
}

/* Hero Section */
.hero {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 4rem;
  padding-top: 4rem;
  padding-bottom: 4rem;
}

.badge {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background: rgba(99, 102, 241, 0.1);
  color: var(--accent-primary);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: var(--radius-full);
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 2rem;
}

.badge::before {
  content: '';
  display: inline-block;
  width: 8px;
  height: 8px;
  background-color: var(--accent-primary);
  border-radius: 50%;
  margin-right: 0.5rem;
  box-shadow: 0 0 8px var(--accent-primary);
}

.hero-title {
  font-size: 3.5rem;
  letter-spacing: -0.02em;
  margin-bottom: 1.5rem;
}

.hero-subtitle {
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 90%;
  margin-bottom: 2.5rem;
}

.hero-actions {
  display: flex;
  gap: 1rem;
}

.btn {
  padding: 0.875rem 1.75rem;
  border-radius: var(--radius-full);
  font-weight: 600;
  font-size: 1rem;
  transition: all var(--transition-fast);
}

.btn-primary {
  background: var(--text-primary);
  color: var(--bg-main);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.btn-secondary {
  background: rgba(0, 0, 0, 0.03);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
}

.btn-secondary:hover {
  background: rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
}

/* Visual Placeholder */
.hero-visual {
  position: relative;
  height: 500px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.shape-gradient {
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  filter: blur(40px);
  opacity: 0.6;
  position: absolute;
  animation: float 8s ease-in-out infinite reverse;
}

.shape-glass {
  width: 60%;
  height: 60%;
  position: relative;
  z-index: 1;
  border-radius: var(--radius-lg);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

@media (max-width: 968px) {
  .hero {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .hero-subtitle {
    margin: 0 auto 2.5rem auto;
  }
  
  .hero-actions {
    justify-content: center;
  }
  
  .navbar {
    display: none; /* Mobile menu needed later */
  }
}
</style>
