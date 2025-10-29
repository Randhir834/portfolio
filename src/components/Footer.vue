<template>
  <footer class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 relative overflow-hidden">
    <!-- Background Decoration -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
    </div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <!-- About Section -->
        <div>
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg mr-3">
              <span class="text-white text-2xl font-bold">R</span>
            </div>
            <div>
              <h3 class="text-xl font-bold">Randhir Kumar</h3>
              <p class="text-sm text-gray-400">Full Stack Developer</p>
            </div>
          </div>
          <p class="text-gray-400 leading-relaxed">
            Passionate about building scalable web applications and intelligent systems. Turning ideas into reality through code.
          </p>
        </div>
        
        <!-- Quick Links -->
        <div>
          <h3 class="text-xl font-bold mb-6 flex items-center">
            <svg class="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Quick Links
          </h3>
          <ul class="space-y-3">
            <li v-for="item in navItems" :key="item.path">
              <router-link 
                :to="item.path" 
                class="text-gray-400 hover:text-primary transition-all duration-300 flex items-center group"
              >
                <svg class="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                {{ item.name }}
              </router-link>
            </li>
          </ul>
        </div>
        
        <!-- Social Links -->
        <div>
          <h3 class="text-xl font-bold mb-6 flex items-center">
            <svg class="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
            Connect With Me
          </h3>
          <div class="flex flex-wrap gap-4">
            <a 
              v-for="social in socialLinks" 
              :key="social.name"
              :href="social.url" 
              target="_blank"
              rel="noopener noreferrer"
              class="group relative"
              :aria-label="social.name"
            >
              <div class="w-12 h-12 rounded-xl bg-gray-800 hover:bg-gradient-to-br hover:from-primary hover:to-accent flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-110 border border-gray-700 hover:border-transparent">
                <img :src="social.icon" :alt="social.name" class="w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <span class="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {{ social.name }}
              </span>
            </a>
          </div>
          <div class="mt-8">
            <p class="text-sm text-gray-400 mb-2">Email me at:</p>
            <a href="mailto:randhir.grd1122@gmail.com" class="text-primary hover:text-accent transition-colors duration-300 font-medium">
              randhir.grd1122@gmail.com
            </a>
          </div>
        </div>
      </div>
      
      <!-- Bottom Bar -->
      <div class="border-t border-gray-700/50 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-gray-400 text-sm">
            &copy; {{ currentYear }} Randhir Kumar. All rights reserved.
          </p>
          <div class="flex items-center gap-6 text-sm text-gray-400">
            <a href="#" class="hover:text-primary transition-colors duration-300">Privacy Policy</a>
            <span class="text-gray-600">•</span>
            <a href="#" class="hover:text-primary transition-colors duration-300">Terms of Service</a>
            <span class="text-gray-600">•</span>
            <span class="flex items-center">
              Made with 
              <svg class="w-4 h-4 mx-1 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
              </svg>
              in India
            </span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'Footer',
  setup() {
    const currentYear = computed(() => new Date().getFullYear())
    
    const navItems = [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/#about' },
      { name: 'Skills', path: '/#skills' },
      { name: 'Experience', path: '/#experience' },
      { name: 'Projects', path: '/projects' },
      { name: 'Contact', path: '/contact' }
    ]
    
    const socialLinks = [
      {
        name: 'GitHub',
        url: 'https://github.com/Randhir834',
        icon: 'https://cdn.simpleicons.org/github/FFFFFF'
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/randhir-kumar-4b4ab321a/',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png'
      },
      {
        name: 'LeetCode',
        url: 'https://leetcode.com/u/randhirkumar/',
        icon: 'https://cdn.simpleicons.org/leetcode/FFA116'
      },
      {
        name: 'Email',
        url: 'mailto:randhir.grd1122@gmail.com',
        icon: 'https://cdn.simpleicons.org/gmail/EA4335'
      }
    ]
    
    return {
      currentYear,
      navItems,
      socialLinks
    }
  }
}
</script>
