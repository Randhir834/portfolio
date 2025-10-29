<template>
  <nav 
    :class="[
      'fixed w-full top-0 z-50 transition-all duration-500',
      scrolled 
        ? 'bg-white/80 backdrop-blur-lg shadow-lg border-b border-gray-200/50' 
        : 'bg-white/95 backdrop-blur-md shadow-md'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <!-- Logo/Brand -->
        <div class="flex-shrink-0 group">
          <router-link 
            to="/" 
            class="flex items-center space-x-3 text-2xl font-bold bg-gradient-to-r from-primary via-blue-600 to-accent bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
          >
            <div class="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-primary via-blue-600 to-accent flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:shadow-primary/50 group-hover:rotate-6 transition-all duration-300">
              <span class="text-white text-2xl font-bold">R</span>
              <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div class="hidden sm:flex flex-col">
              <span class="text-xl leading-tight">Randhir</span>
              <span class="text-xs text-gray-500 font-normal">Full Stack Developer</span>
            </div>
          </router-link>
        </div>
        
        <!-- Desktop Menu -->
        <div class="hidden lg:flex items-center space-x-1">
          <component
            :is="item.isRoute ? 'router-link' : 'a'"
            v-for="item in navItems" 
            :key="item.path"
            :to="item.isRoute ? item.path : undefined"
            :href="!item.isRoute ? item.path : undefined"
            @click="!item.isRoute ? handleNavClick(item) : null"
            class="relative px-4 py-2.5 text-sm text-gray-700 hover:text-primary transition-all duration-300 font-medium group cursor-pointer"
          >
            <span class="relative z-10 flex items-center space-x-2">
              <span>{{ item.name }}</span>
            </span>
            <!-- Hover background effect only -->
            <span class="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></span>
          </component>
        </div>
        
        <!-- Mobile Menu Button -->
        <div class="lg:hidden">
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="p-2.5 rounded-xl text-gray-700 hover:text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 focus:outline-none transition-all duration-300 relative"
            :class="mobileMenuOpen ? 'bg-gradient-to-r from-primary/10 to-accent/10 text-primary' : ''"
          >
            <svg class="h-6 w-6 transition-transform duration-300" :class="mobileMenuOpen ? 'rotate-90' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                v-if="!mobileMenuOpen"
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2.5" 
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path 
                v-else
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2.5" 
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    
    <!-- Mobile Menu with Slide Animation -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-if="mobileMenuOpen" class="lg:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200/50 shadow-2xl">
        <div class="px-4 pt-4 pb-6 space-y-1 max-h-[calc(100vh-80px)] overflow-y-auto">
          <component
            :is="item.isRoute ? 'router-link' : 'a'"
            v-for="(item, index) in navItems" 
            :key="item.path"
            :to="item.isRoute ? item.path : undefined"
            :href="!item.isRoute ? item.path : undefined"
            @click="item.isRoute ? (mobileMenuOpen = false) : (handleNavClick(item), mobileMenuOpen = false)"
            class="block px-4 py-3.5 text-gray-700 hover:text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 rounded-xl transition-all duration-300 font-medium transform hover:translate-x-1 relative cursor-pointer"
            :class="item.isRoute && $route.path === item.path ? 'bg-gradient-to-r from-primary/10 to-accent/10 text-primary shadow-md' : ''"
            :style="{ transitionDelay: `${index * 50}ms` }"
          >
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-3">
                <div 
                  class="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300"
                  :class="$route.path === item.path ? 'bg-gradient-to-br from-primary to-accent text-white shadow-lg' : 'bg-gray-100 text-gray-600'"
                >
                  <component :is="getIcon(item.icon)" class="w-4 h-4" />
                </div>
                <span class="text-base">{{ item.name }}</span>
              </div>
              <svg 
                v-if="item.isRoute && $route.path === item.path"
                class="w-5 h-5 transition-all duration-300 opacity-100 scale-100"
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
            </div>
          </component>
          
          <!-- Mobile Menu Footer -->
          <div class="pt-4 mt-4 border-t border-gray-200">
            <p class="text-center text-xs text-gray-500">© 2025 Randhir Kumar</p>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'Navbar',
  setup() {
    const mobileMenuOpen = ref(false)
    const scrolled = ref(false)
    
    const navItems = [
      { name: 'Home', path: '/', icon: 'home', isRoute: true },
      { name: 'About', path: '#about', icon: 'user', isRoute: false },
      { name: 'Skills', path: '#skills', icon: 'code', isRoute: false },
      { name: 'Experience', path: '#experience', icon: 'briefcase', isRoute: false },
      { name: 'Projects', path: '/projects', icon: 'folder', isRoute: true },
      { name: 'Contact', path: '/contact', icon: 'mail', isRoute: true }
    ]
    
    const handleNavClick = (item) => {
      if (!item.isRoute && item.path.startsWith('#')) {
        const element = document.querySelector(item.path)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
    }
    
    const handleScroll = () => {
      scrolled.value = window.scrollY > 50
    }
    
    const getIcon = (iconName) => {
      const icons = {
        home: {
          template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>`
        },
        user: {
          template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>`
        },
        code: {
          template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>`
        },
        briefcase: {
          template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>`
        },
        folder: {
          template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>`
        },
        mail: {
          template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>`
        }
      }
      return icons[iconName]
    }
    
    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })
    
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })
    
    return {
      mobileMenuOpen,
      scrolled,
      navItems,
      getIcon,
      handleNavClick
    }
  }
}
</script>

<style scoped>
/* Additional smooth animations */
nav {
  will-change: background-color, box-shadow;
}

/* Ensure smooth transitions for all interactive elements */
a, button {
  -webkit-tap-highlight-color: transparent;
}
</style>
