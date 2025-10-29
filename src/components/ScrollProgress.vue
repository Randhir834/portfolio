<template>
  <div class="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
    <div 
      class="h-full bg-gradient-to-r from-primary to-blue-700 transition-all duration-300"
      :style="{ width: scrollPercentage + '%' }"
    ></div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'ScrollProgress',
  setup() {
    const scrollPercentage = ref(0)
    
    const updateScrollProgress = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      
      const scrollableHeight = documentHeight - windowHeight
      const percentage = (scrollTop / scrollableHeight) * 100
      
      scrollPercentage.value = Math.min(100, Math.max(0, percentage))
    }
    
    onMounted(() => {
      window.addEventListener('scroll', updateScrollProgress)
      updateScrollProgress()
    })
    
    onUnmounted(() => {
      window.removeEventListener('scroll', updateScrollProgress)
    })
    
    return {
      scrollPercentage
    }
  }
}
</script>
