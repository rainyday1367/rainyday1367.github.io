<template>
  <section class="container section page-view">
    <h2 class="section-title">{{ $t('skills.title') }}</h2>
    
    <div class="skills-grid">
      <!-- Development -->
      <div class="glass-panel p-6 skill-category">
        <div class="category-header">
          <span class="icon">💻</span>
          <h3 class="history-title">{{ $t('skills.dev') }}</h3>
        </div>
        <div class="tech-tags">
          <span class="tech-tag">SpringBoot</span>
          <span class="tech-tag">Vue.js</span>
          <span class="tech-tag">JWT Auth</span>
          <span class="tech-tag">MariaDB</span>
          <span class="tech-tag">MongoDB</span>
          <span class="tech-tag">Express.js</span>
          <span class="tech-tag">Oracle DB</span>
        </div>
      </div>

      <!-- Infra -->
      <div class="glass-panel p-6 skill-category">
        <div class="category-header">
          <span class="icon">☁️</span>
          <h3 class="history-title">{{ $t('skills.infra') }}</h3>
        </div>
        <div class="tech-tags">
          <span class="tech-tag">Linux Admin</span>
          <span class="tech-tag">VirtualBox</span>
          <span class="tech-tag">Vagrant</span>
          <span class="tech-tag">Network</span>
          <span class="tech-tag">Ansible</span>
          <span class="tech-tag">Terraform</span>
          <span class="tech-tag">AWS</span>
          <span class="tech-tag">Docker</span>
          <span class="tech-tag">Kubernetes</span>
        </div>
      </div>

      <!-- Tool -->
      <div class="glass-panel p-6 skill-category">
        <div class="category-header">
          <span class="icon">🛠️</span>
          <h3 class="history-title">{{ $t('skills.tool') }}</h3>
        </div>
        <div class="tech-tags">
          <span class="tech-tag">VsCode</span>
          <span class="tech-tag">Claude Code</span>
          <span class="tech-tag">Github Actions</span>
          <span class="tech-tag">Jenkins</span>
          <span class="tech-tag">ArgoCD</span>
          <span class="tech-tag">DBeaver</span>
          <span class="tech-tag">MobaXterm</span>
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
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
.p-6 {
  padding: 2.5rem;
  border-radius: var(--radius-lg);
}
.skill-category {
  transition: transform var(--transition-normal);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.skill-category:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px var(--glass-shadow);
}
.category-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
}
.icon {
  font-size: 1.5rem;
}
.history-title {
  margin-bottom: 0;
  font-size: 1.4rem;
}
.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}
.tech-tag {
  font-size: 1rem;
  padding: 0.5rem 1.25rem;
  background: var(--bg-surface-elevated);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-full);
  transition: all var(--transition-fast);
}
.tech-tag:hover {
  background: var(--accent-primary);
  color: white;
  border-color: var(--accent-primary);
  transform: translateY(-2px);
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
