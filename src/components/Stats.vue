<template>
  <section class="py-16 bg-gradient-to-r from-primary to-blue-800 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div 
          v-for="(stat, index) in stats" 
          :key="index"
          class="text-center transform hover:scale-110 transition-transform duration-300"
        >
          <div class="mb-2">
            <svg class="w-12 h-12 mx-auto mb-3 opacity-80" fill="currentColor" viewBox="0 0 20 20">
              <path :d="stat.icon"/>
            </svg>
          </div>
          <div class="text-4xl md:text-5xl font-bold mb-2" :data-target="stat.value">
            {{ animatedValues[index] }}{{ stat.suffix }}
          </div>
          <div class="text-blue-100 text-sm md:text-base font-medium">{{ stat.label }}</div>
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
      },
      {
        value: 85,
        suffix: '%',
        label: 'ML Model Accuracy',
        icon: 'M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'
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
