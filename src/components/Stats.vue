<template>
  <section class="py-16 bg-gradient-to-r from-secondary via-primary to-secondary text-white">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
        <div 
          v-for="(stat, index) in stats" 
          :key="index"
          class="text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm transform hover:scale-110 transition-all duration-300 hover:bg-white/20"
        >
          <div class="mb-3">
            <svg class="w-10 h-10 mx-auto mb-3 opacity-90" fill="currentColor" viewBox="0 0 20 20">
              <path :d="stat.icon"/>
            </svg>
          </div>
          <div class="text-3xl sm:text-4xl md:text-5xl font-bold mb-2" :data-target="stat.value">
            {{ animatedValues[index] }}{{ stat.suffix }}
          </div>
          <div class="text-white/80 text-sm sm:text-base font-medium">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'Stats',
  setup() {
    const stats = ref([
      {
        value: 6,
        suffix: '+',
        label: 'Projects Built',
        icon: 'M9 2a1 1 0 000 2h2a1 1 0 100-2H9z M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z'
      },
      {
        value: 350,
        suffix: '+',
        label: 'LeetCode Problems',
        icon: 'M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z'
      },
      {
        value: 2,
        suffix: '',
        label: 'Internships',
        icon: 'M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z'
      }
    ])
    
    const animatedValues = ref(stats.value.map(() => 0))
    
    const animateValue = (index, start, end, duration) => {
      const range = end - start
      const increment = end > start ? 1 : -1
      const stepTime = Math.abs(Math.floor(duration / range))
      
      let current = start
      const timer = setInterval(() => {
        current += increment
        animatedValues.value[index] = current
        if (current === end) {
          clearInterval(timer)
        }
      }, stepTime)
    }
    
    onMounted(() => {
      // Animate numbers on mount
      setTimeout(() => {
        stats.value.forEach((stat, index) => {
          animateValue(index, 0, stat.value, 2000)
        })
      }, 300)
    })
    
    return {
      stats,
      animatedValues
    }
  }
}
</script>
