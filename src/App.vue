<template>
  <div id="app">
    <LoadingScreen v-if="isAppLoading" @done="isAppLoading = false" />
    <template v-else>
      <Navbar />
      <main :style="{ minHeight: $route.path === '/' ? 'calc(100vh - 80px)' : '100vh' }" class="flex flex-col flex-grow">
        <router-view v-slot="{ Component }">
          <transition name="page" mode="out-in">
            <component :is="Component" class="flex-grow" />
          </transition>
        </router-view>
      </main>
      <Footer v-if="$route.path === '/'" :showConnect="false" />
      <ScrollToTop />
    </template>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import ScrollToTop from './components/ScrollToTop.vue'
import LoadingScreen from './components/LoadingScreen.vue'
import { ref, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { animate } from 'animejs'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    ScrollToTop,
    LoadingScreen
  },
  setup() {
    const isAppLoading = ref(true)
    const route = useRoute()

    // Page transition animation
    watch(() => route.path, () => {
      nextTick(() => {
        // Animate page content on route change
        animate('main > div', {
          opacity: [0, 1],
          translateY: [20, 0],
          duration: 600,
          easing: 'out(3)'
        })
      })
    })

    return {
      isAppLoading
    }
  }
}
</script>

<style>
#app {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Hide scrollbar for all browsers */
body {
  overflow-y: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}

body::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}

/* Page Transitions */
.page-enter-active, .page-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
