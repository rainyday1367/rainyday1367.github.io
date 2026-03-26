<template>
  <section class="container section page-view">
    <h2 class="section-title">{{ $t('projects.title') }}</h2>
    <div class="projects-stack">
      <!-- Project 1 -->
      <article class="project-item glass-panel">
        <div class="project-header">
          <h3>{{ $t('projects.p1Title') }}</h3>
          <a href="https://github.com/rainyday1367/be14-final-Ideality-CoreFlow" target="_blank" class="github-btn" @click.stop>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            Code
          </a>
        </div>
        <p class="text-muted list-desc" v-html="$t('projects.p1Desc')"></p>
        <div class="project-tags">
          <span class="tag">AWS</span>
          <span class="tag">Github Actions</span>
          <span class="tag">Blue-Green</span>
          <span class="tag">Spring Boot</span>
        </div>
      </article>
      
      <!-- Project 2 -->
      <article class="project-item glass-panel">
        <div class="project-header">
          <h3>{{ $t('projects.p2Title') }}</h3>
          <a href="https://github.com/rainyday1367/be14-4th-Ideality-MyLocalDiary" target="_blank" class="github-btn" @click.stop>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            Code
          </a>
        </div>
        <p class="text-muted list-desc" v-html="$t('projects.p2Desc')"></p>
        <div class="project-tags">
          <span class="tag">Spring Boot</span>
          <span class="tag">MariaDB</span>
          <span class="tag">Redis</span>
          <span class="tag">Map APIs</span>
        </div>
      </article>
      
      <!-- Project 3 -->
      <article class="project-item glass-panel static-item">
        <div class="project-header">
          <h3>{{ $t('projects.p3Title') }}</h3>
        </div>
        <p class="text-muted list-desc" v-html="$t('projects.p3Desc')"></p>
        <div class="project-tags">
          <span class="tag">Ethereum</span>
          <span class="tag">Solidity</span>
          <span class="tag">Java</span>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.page-view {
  padding-top: 2rem;
  animation: fadeIn 0.5s ease;
}

.projects-stack {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  max-width: 800px;
  margin: 0 auto;
}

.project-item {
  padding: 2.5rem;
  border-radius: var(--radius-lg);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  transition: transform var(--transition-normal);
}

.project-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px var(--glass-shadow);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.project-header h3 {
  font-size: 1.5rem;
  margin-bottom: 0;
  color: var(--accent-primary);
}

.github-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 1rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-primary);
  background: var(--bg-surface-elevated);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-full);
  transition: all var(--transition-fast);
  text-decoration: none;
}

.github-btn:hover {
  background: var(--text-primary);
  color: var(--bg-main);
  transform: scale(1.02);
  border-color: transparent;
}

.list-desc {
  font-size: 1.05rem;
  line-height: 1.7;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
  .project-item {
    padding: 1.5rem;
    gap: 1rem;
  }
}
</style>
