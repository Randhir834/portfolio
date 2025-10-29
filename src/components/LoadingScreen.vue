<template>
  <transition name="fade">
    <div v-if="isLoading" class="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary to-blue-800">
      <div class="text-center">
        <!-- Animated Logo/Icon -->
        <div class="mb-8 animate-bounce-slow">
          <svg class="w-24 h-24 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
          </svg>
        </div>
        
        <!-- Loading Text -->
        <h2 class="text-3xl font-bold text-white mb-4">Loading Portfolio</h2>
        
        <!-- Loading Bar -->
        <div class="w-64 h-2 bg-blue-900 rounded-full overflow-hidden mx-auto">
          <div class="h-full bg-white rounded-full animate-loading-bar"></div>
        </div>
        
        <!-- Dots Animation -->
        <div class="flex justify-center mt-6 space-x-2">
          <div class="w-3 h-3 bg-white rounded-full animate-pulse" style="animation-delay: 0s"></div>
          <div class="w-3 h-3 bg-white rounded-full animate-pulse" style="animation-delay: 0.2s"></div>
          <div class="w-3 h-3 bg-white rounded-full animate-pulse" style="animation-delay: 0.4s"></div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'LoadingScreen',
  setup() {
    const isLoading = ref(true)
    
    onMounted(() => {
      // Simulate loading time
      setTimeout(() => {
        isLoading.value = false
      }, 1500)
    })
    
    return {
      isLoading
    }
  }
}
</script>

<style scoped>
@keyframes loading-bar {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}

.animate-loading-bar {
  animation: loading-bar 1.5s ease-in-out;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
