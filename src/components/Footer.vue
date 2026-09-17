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
        <div class="flex flex-col gap-10">
          <div v-if="showConnect">
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
                <div class="w-12 h-12 rounded-xl bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 border border-gray-700 hover:border-gray-500">
                  <img :src="social.icon" :alt="social.name" class="w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <span class="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {{ social.name }}
                </span>
              </a>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold mb-6 flex items-center">
              <svg class="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 10.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
              </svg>
              Contact
            </h3>
            <div class="space-y-3">
              <div class="flex items-center gap-3 text-gray-300">
                <span class="text-gray-400 text-sm w-16">Email</span>
                <a href="mailto:randhir.grd1122@gmail.com" class="text-primary hover:text-accent transition-colors duration-300 font-medium">
                  randhir.grd1122@gmail.com
                </a>
              </div>
              <div class="flex items-center gap-3 text-gray-300">
                <span class="text-gray-400 text-sm w-16">Based</span>
                <span class="text-gray-300">India</span>
              </div>
              <div class="flex items-center gap-3 pt-2">
                <span class="text-gray-400 text-sm w-16">Profiles</span>
                <div class="flex items-center gap-3">
                  <a
                    href="https://github.com/Randhir834"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="group flex items-center justify-center w-10 h-10 rounded-xl bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-500 transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <svg class="w-5 h-5 text-white opacity-80 group-hover:opacity-100" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/randhir-kumar-4b4ab321a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="group flex items-center justify-center w-10 h-10 rounded-xl bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-500 transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <svg class="w-5 h-5 text-[#0A66C2] opacity-80 group-hover:opacity-100" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a
                    href="https://leetcode.com/u/randhirkumar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="group flex items-center justify-center w-10 h-10 rounded-xl bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-500 transition-all duration-300"
                    aria-label="LeetCode"
                  >
                    <svg class="w-5 h-5 text-[#FFA116] opacity-80 group-hover:opacity-100" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16.2 3.5l-4.5 4.5-4.5-4.5-1.4 1.4 4.5 4.5-4.5 4.5 1.4 1.4 4.5-4.5 4.5 4.5 1.4-1.4-4.5-4.5 4.5-4.5z"/>
                      <path d="M7.8 16.5l-4.5-4.5 4.5-4.5-1.4-1.4-4.5 4.5-1.5 1.5 6 6z"/>
                      <path d="M16.2 16.5l4.5-4.5-4.5-4.5 1.4-1.4 4.5 4.5 1.5 1.5-6 6z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Bottom Bar -->
      <div class="border-t border-gray-700/50 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-gray-400 text-sm">
            &copy; {{ currentYear }} Randhir Kumar. All rights reserved.
          </p>
          <div class="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-400">
            <a href="#" class="hover:text-primary transition-colors duration-300">Privacy Policy</a>
            <span class="text-gray-600">•</span>
            <a href="#" class="hover:text-primary transition-colors duration-300">Terms of Service</a>
            <span class="text-gray-600">•</span>
            <span class="flex items-center">
              Made with 
              <svg class="w-4 h-4 mx-1 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3.172 5.172a4.4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
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
import { computed, onMounted } from 'vue'
import { useAnimations } from '@/composables/useAnimations'

export default {
  name: 'Footer',
  props: {
    showConnect: {
      type: Boolean,
      default: true
    }
  },
  setup() {
    const currentYear = computed(() => new Date().getFullYear())
    const { fadeInUp, fadeInLeft, fadeInRight } = useAnimations()
    
    const navItems = [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Skills', path: '/skills' },
      { name: 'Experience', path: '/experience' },
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

    onMounted(() => {
      // Animate footer sections with scroll trigger
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const footerSections = document.querySelectorAll('footer .grid > div')
            footerSections.forEach((section, index) => {
              if (index === 0) fadeInLeft(section, index * 150)
              else if (index === 1) fadeInUp(section, index * 150)
              else fadeInRight(section, index * 150)
            })

            // Animate bottom bar
            fadeInUp('footer .border-t', 500)
            
            observer.unobserve(entry.target)
          }
        })
      }, { threshold: 0.1 })
      
      const footer = document.querySelector('footer')
      if (footer) {
        observer.observe(footer)
      }
    })
    
    return {
      currentYear,
      navItems,
      socialLinks
    }
  }
}
</script>


<style scoped>
/* Initial hidden state */
footer .grid > div,
footer .border-t {
  opacity: 0;
}
</style>
