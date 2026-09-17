<template>
  <transition name="fade">
    <div v-if="isLoading" class="fixed inset-0 z-50">
      <div class="absolute inset-0 bg-secondary"></div>

      <img
        :src="splashSrc"
        alt="Portfolio loading"
        class="absolute inset-0 w-full h-full object-cover"
      />

      <div class="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/55 to-secondary/85"></div>

      <div class="relative h-full w-full flex items-center justify-center px-6">
        <div class="w-full max-w-xl text-center">
          <div class="mx-auto w-16 h-1.5 rounded-full bg-white/20 overflow-hidden">
            <div class="h-full bg-accent rounded-full animate-loading-bar"></div>
          </div>
          <div class="mt-5 text-white/85 text-sm tracking-wider">Loading</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'LoadingScreen',
  emits: ['done'],
  setup(props, { emit }) {
    const isLoading = ref(true)
    const splashSrc = require('../assets/main.avif')

    const lockScroll = () => {
      document.documentElement.style.overflow = 'hidden'
      document.body.style.overflow = 'hidden'
      document.body.style.touchAction = 'none'
    }

    const unlockScroll = () => {
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
      document.body.style.touchAction = ''
    }
    
    onMounted(() => {
      lockScroll()
      const minDurationMs = 1100
      const start = Date.now()

      const img = new Image()
      img.src = splashSrc

      const finish = () => {
        const elapsed = Date.now() - start
        const remaining = Math.max(0, minDurationMs - elapsed)
        window.setTimeout(() => {
          isLoading.value = false
          unlockScroll()
          emit('done')
        }, remaining)
      }

      img.onload = finish
      img.onerror = finish
    })

    onUnmounted(() => {
      unlockScroll()
    })
    
    return {
      isLoading,
      splashSrc
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
