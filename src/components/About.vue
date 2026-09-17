<template>
  <section id="about" ref="aboutSection" class="py-20 bg-gradient-to-br from-gray-50 via-white to-primary/5">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16" :class="{ 'animate-fade-in-up': isVisible }">
        <div class="inline-block">
          <span class="text-sm font-semibold text-primary uppercase tracking-wider mb-2 block">
            Get To Know Me
          </span>
          <h2 class="section-title">About Me</h2>
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <!-- About Text -->
        <div :class="{ 'animate-fade-in-left': isVisible }">
          <p class="text-lg text-gray-700 mb-6">
            I'm a B.Tech Computer Science graduate from Sikkim Manipal Institute of Technology (2021-2025)
            and currently building impactful solutions as a Software Developer at TPEX Solutions. I specialize
            in crafting cross-platform mobile and web applications, including Swami Vaishnav and TPEx Healthcare,
            where I implement real-time features and enterprise-grade security using Flutter, Firebase, and Node.js.
          </p>
          <p class="text-lg text-gray-700 mb-6">
            My journey includes hands-on internships at Optare Design Systems and CRIS (Indian Railways).
            At Optare, I engineered a scalable B2B mobile platform that was adopted by 3+ enterprise clients.
            At CRIS, I architected an AI-powered chatbot for Indian Railways, achieving 85%+ intent recognition
            accuracy using Python and advanced NLP techniques.
          </p>
          <p class="text-lg text-gray-700">
            I bring expertise across the Flutter ecosystem, Firebase services, Node.js, Python, and machine learning.
            With 350+ LeetCode problems solved, I combine strong algorithmic thinking with clean code practices
            to deliver robust, scalable solutions that drive real business value.
          </p>
        </div>
        
        <!-- Stats/Highlights -->
        <div class="grid grid-cols-2 gap-4" :class="{ 'animate-fade-in-right': isVisible }">
          <div 
            v-for="(stat, index) in stats" 
            :key="stat.label"
            class="group bg-white/90 backdrop-blur-sm p-6 rounded-2xl text-center shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary/30 transform hover:-translate-y-2"
            :class="{ 'bg-gradient-to-br': true, 'from-primary/5 to-white': index === 0, 'from-accent/5 to-white': index === 1, 'from-primary/5 to-white': index === 2, 'from-accent/5 to-white': index === 3 }"
            :style="{ animationDelay: `${index * 100}ms` }"
          >
            <div class="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">{{ stat.value }}</div>
            <div class="text-gray-600 text-sm font-semibold">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import { useAnimations } from '@/composables/useAnimations'

export default {
  name: 'About',
  setup() {
    const isVisible = ref(false)
    const aboutSection = ref(null)
    let observer = null
    
    const { fadeInUp, fadeInLeft, scaleIn, counterUp } = useAnimations()
    
    const stats = ref([
      { value: '2025', label: 'B.Tech Graduate' },
      { value: '6+', label: 'Projects Built' },
      { value: '3', label: 'Work Experiences' },
      { value: '350+', label: 'LeetCode Problems' }
    ])
    
    onMounted(() => {
      const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !isVisible.value) {
            isVisible.value = true
            
            // Animate section header
            fadeInUp('.section-title', 0)
            
            // Animate about text
            fadeInLeft('div.text-lg', 300, 150)
            
            // Animate stats cards with stagger
            const statCards = document.querySelectorAll('.group')
            statCards.forEach((card, index) => {
              setTimeout(() => {
                scaleIn(card, index * 100)
                
                // Animate counter numbers
                const counter = card.querySelector('.text-4xl')
                if (counter) {
                  const text = counter.textContent
                  const number = parseInt(text.replace(/\D/g, ''))
                  if (number) {
                    counterUp(counter, number, index * 100 + 200, 1500)
                    // Add the + back if it exists
                    if (text.includes('+')) {
                      setTimeout(() => {
                        counter.textContent = number + '+'
                      }, index * 100 + 1700)
                    }
                  }
                }
              }, 400)
            })
          }
        })
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      })
      
      if (aboutSection.value) {
        sectionObserver.observe(aboutSection.value)
      }
      
      observer = sectionObserver
    })

    onUnmounted(() => {
      if (observer) {
        observer.disconnect()
      }
    })
    
    return {
      stats,
      isVisible,
      aboutSection
    }
  }
}
</script>

<style scoped>
/* Initial hidden state */
.section-title,
div.text-lg,
.group {
  opacity: 0;
}
</style>
