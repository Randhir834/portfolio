<template>
  <transition name="fade">
    <button
      v-if="isVisible"
      @click="scrollToTop"
      class="fixed bottom-8 right-8 z-50 bg-primary text-white p-4 rounded-full shadow-2xl hover:bg-accent transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-primary/30"
      aria-label="Scroll to top"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
      </svg>
    </button>
  </transition>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { animate } from 'animejs'

export default {
  name: 'ScrollToTop',
  setup() {
    const isVisible = ref(false)
    const route = useRoute()
    let bounceAnimation = null
    
    const handleScroll = () => {
      // Only show on home page
      if (route.path !== '/') {
        isVisible.value = false
        return
      }
      
      const shouldShow = window.scrollY > 300
      if (shouldShow && !isVisible.value) {
        isVisible.value = true
        // Add entrance animation
        setTimeout(() => {
          const button = document.querySelector('button[aria-label="Scroll to top"]')
          if (button && !bounceAnimation) {
            bounceAnimation = animate(button, {
              translateY: [20, 0],
              scale: [0.8, 1],
              opacity: [0, 1],
              duration: 500,
              easing: 'outElastic(1, 0.6)'
            })
          }
        }, 50)
      } else if (!shouldShow) {
        isVisible.value = false
        if (bounceAnimation) {
          bounceAnimation.pause()
          bounceAnimation = null
        }
      }
    }
    
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
    
    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })
    
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
      if (bounceAnimation) {
        bounceAnimation.pause()
      }
    })
    
    return {
      isVisible,
      scrollToTop
    }
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
