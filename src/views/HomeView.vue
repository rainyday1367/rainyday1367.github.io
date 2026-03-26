<template>
  <main class="container hero section page-view">
    
    <!-- Left Column: Visual (Picture and Name) -->
    <div class="hero-visual animate-float">
      <div class="profile-hero-card">
        <div class="profile-avatar-large">
          <img src="../assets/profile.jpg" alt="Profile avatar" class="profile-img" />
        </div>
        <div class="profile-name-large">
          <h2>{{ $t('home.name') }}</h2>
        </div>
      </div>
    </div>

    <!-- Right Column: Main Text Content -->
    <div class="hero-content animate-fade-in">
      <h1 class="hero-title" style="font-size: 3.5rem; line-height: 1.2;">
        {{ $t('home.title1') }} <br/>
        <span class="text-gradient">{{ $t('home.title2') }}</span>
      </h1>
      <p class="hero-subtitle" v-html="$t('home.subtitle')"></p>
      <div class="hero-actions">
        <router-link to="/projects" class="btn btn-primary" style="text-decoration: none; display: inline-block;">{{ $t('home.viewWork') }}</router-link>
        <router-link to="/contact" class="btn btn-secondary" style="text-decoration: none; display: inline-block;">{{ $t('home.contactMe') }}</router-link>
      </div>
    </div>
    
  </main>
</template>

<style scoped>
.page-view {
  animation: fadeIn 0.5s ease;
}

.profile-hero-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  transition: transform var(--transition-normal);
}

.profile-hero-card:hover {
  transform: translateY(-10px);
}

.profile-avatar-large {
  width: 280px;
  height: 280px;
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 4px solid var(--glass-bg);
  box-shadow: 0 20px 40px var(--glass-shadow);
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-surface);
}

.profile-avatar-large .profile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.profile-hero-card:hover .profile-img {
  transform: scale(1.05);
}

.profile-name-large {
  text-align: center;
}

.profile-name-large h2 {
  font-size: 2rem;
  margin-bottom: 0.25rem;
  color: var(--text-primary);
  font-weight: 700;
  letter-spacing: -0.02em;
}

.profile-name-large span {
  font-size: 1.1rem;
  color: var(--text-muted);
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 968px) {
  .container.hero {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }
  .hero-content {
    align-items: center;
  }
  .hero-actions {
    justify-content: center;
  }
  .profile-avatar-large {
    width: 200px;
    height: 200px;
  }
  .hero-title {
    font-size: 2.5rem !important;
  }
}
</style>
