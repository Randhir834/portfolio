<template>
  <section class="bg-white pt-28 pb-20 md:pt-32 md:pb-32 border-b border-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <!-- Text Content -->
        <div class="text-center md:text-left">
          <p class="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">
            Full Stack Developer & AI Enthusiast
          </p>
          <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Hi, I'm <span class="text-primary">Randhir Kumar</span>
          </h1>
          <p class="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            B.Tech student at Sikkim Manipal Institute of Technology, passionate about building 
            scalable web applications and intelligent systems.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <router-link to="/projects" class="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg">
              View My Work
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </router-link>
            <router-link to="/contact" class="inline-flex items-center justify-center bg-white text-primary border-2 border-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300">
              Get In Touch
            </router-link>
          </div>
        </div>
        
        <!-- Profile Image -->
        <div class="flex justify-center">
          <div class="relative">
            <div class="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-xl border-8 border-white">
              <svg class="w-40 h-40 md:w-48 md:h-48 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  methods: {
    handleImageError(e) {
      // Fallback to a placeholder if image doesn't exist
      e.target.src = 'https://via.placeholder.com/400x400/3B82F6/FFFFFF?text=Your+Photo'
    }
  }
}
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out;
}
</style>
