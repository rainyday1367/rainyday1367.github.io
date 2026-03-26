<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { i18n } from './i18n'

const isDark = ref(false)
const router = useRouter()
const route = useRoute()
const transitionName = ref('slide-up')

const routesOrder = ['/', '/resume', '/skills', '/projects', '/contact']

watch(() => route.path, (to, from) => {
  const toIndex = routesOrder.indexOf(to)
  const fromIndex = routesOrder.indexOf(from)
  transitionName.value = toIndex > fromIndex ? 'slide-up' : 'slide-down'
})

// Enable page-to-page scrolling
let isTransitioning = false
let touchStartY = 0

const navigate = (direction) => {
  if (isTransitioning) return
  
  const currentIndex = routesOrder.indexOf(route.path)
  if (currentIndex === -1) return

  const isAtBottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 10
  const isAtTop = window.scrollY <= 10

  if (direction === 'down' && isAtBottom && currentIndex < routesOrder.length - 1) {
    isTransitioning = true
    router.push(routesOrder[currentIndex + 1])
    setTimeout(() => { isTransitioning = false }, 1000)
  } else if (direction === 'up' && isAtTop && currentIndex > 0) {
    isTransitioning = true
    router.push(routesOrder[currentIndex - 1])
    setTimeout(() => { isTransitioning = false }, 1000)
  }
}

onMounted(() => {
  window.addEventListener('wheel', (e) => {
    if (e.deltaY > 50) navigate('down')
    else if (e.deltaY < -50) navigate('up')
  }, { passive: true })

  window.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY
  }, { passive: true })

  window.addEventListener('touchend', (e) => {
    const touchEndY = e.changedTouches[0].clientY
    const deltaY = touchStartY - touchEndY
    if (deltaY > 50) navigate('down')
    else if (deltaY < -50) navigate('up')
  }, { passive: true })
})

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
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDark.value = true
    updateTheme()
  }
})
</script>

<template>
  <div class="app-layout">
    <header class="navbar container glass-panel">
      <div class="logo">Portfolio.</div>
      <nav>
        <router-link to="/">{{ $t('nav.about') }}</router-link>
        <router-link to="/resume">{{ $t('nav.resume') }}</router-link>
        <router-link to="/skills">{{ $t('nav.skills') }}</router-link>
        <router-link to="/projects">{{ $t('nav.projects') }}</router-link>
        <router-link to="/contact">{{ $t('nav.contact') }}</router-link>
        
        <select v-model="i18n.global.locale.value" class="lang-switcher">
          <option value="ko">KO</option>
          <option value="en">EN</option>
          <option value="ja">JA</option>
        </select>
        <button @click="toggleTheme" class="theme-toggle" :aria-label="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'">
          <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        </button>
      </nav>
    </header>

    <router-view v-slot="{ Component }">
      <transition :name="transitionName" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style scoped>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
}
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
  align-items: center;
}
.navbar a {
  font-weight: 500;
  font-size: 0.95rem;
  color: var(--text-secondary);
}
.navbar a.router-link-active {
  color: var(--accent-primary);
  font-weight: 600;
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

.slide-up-enter-active,
.slide-up-leave-active,
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.6s cubic-bezier(0.8, 0, 0.2, 1);
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(100px);
}
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}

.slide-down-enter-from {
  opacity: 0;
  transform: translateY(-100px);
}
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(100px);
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    margin-top: 0.5rem;
  }
  .navbar nav {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
}
.lang-switcher {
  background: var(--bg-surface-elevated);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  padding: 0.3rem 0.5rem;
  font-size: 0.9rem;
  cursor: pointer;
  outline: none;
  font-family: inherit;
  transition: all var(--transition-fast);
}

.lang-switcher:hover {
  border-color: var(--accent-primary);
}
</style>
