<template>
  <section class="py-20 bg-gradient-to-r from-secondary via-primary to-accent text-white relative overflow-hidden">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-10 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
      <div class="absolute top-20 right-10 w-72 h-72 bg-primary/40 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      <div class="absolute bottom-10 left-1/2 w-72 h-72 bg-accent/40 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
    </div>
    
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <h2 class="text-4xl md:text-5xl font-bold mb-6">
        Let's Build Something Amazing Together
      </h2>
      <p class="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto">
        Have a project in mind? I'm always open to discussing new opportunities and creative ideas.
      </p>
      
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <router-link 
          to="/contact" 
          class="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center"
        >
          <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
          Get In Touch
        </router-link>
        
        <a 
          href="#" 
          class="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105 flex items-center"
        >
          <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>
          Download Resume
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, onUnmounted } from 'vue'
import { useAnimations } from '@/composables/useAnimations'

export default {
  name: 'CallToAction',
  setup() {
    let observer = null
    const { fadeInUp, scaleIn } = useAnimations()

    onMounted(() => {
      const section = document.querySelector('section.bg-gradient-to-r.from-secondary')
      if (section) {
        observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              // Animate heading
              fadeInUp('section.bg-gradient-to-r h2', 0)
              
              // Animate description
              fadeInUp('section.bg-gradient-to-r p', 200)
              
              // Animate buttons
              const buttons = document.querySelectorAll('section.bg-gradient-to-r .flex.flex-col > *')
              buttons.forEach((button, index) => {
                scaleIn(button, 400 + (index * 150))
              })
              
              observer.unobserve(entry.target)
            }
          })
        }, { threshold: 0.3 })
        
        observer.observe(section)
      }
    })

    onUnmounted(() => {
      if (observer) {
        observer.disconnect()
      }
    })

    return {}
  }
}
</script>

<style scoped>
@keyframes blob {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

/* Initial hidden state */
section.bg-gradient-to-r h2,
section.bg-gradient-to-r p,
section.bg-gradient-to-r .flex.flex-col > * {
  opacity: 0;
}
</style>
