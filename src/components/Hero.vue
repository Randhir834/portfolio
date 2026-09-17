<template>
  <section class="bg-white pt-28 pb-20 md:pt-32 md:pb-32 relative overflow-hidden min-h-[calc(100vh-80px)] min-h-[calc(100svh-80px)] flex items-center">
    <!-- Particle Background -->
    <ParticleBackground />
    
    <!-- Background Decorations -->
    <div class="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <!-- Text Content -->
        <div class="text-center md:text-left">
          <p class="hero-subtitle text-primary font-semibold mb-4 tracking-wide uppercase text-sm">
            Full Stack Developer & AI Enthusiast
          </p>
          <h1 class="hero-title text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Hi, I'm <span class="bg-gradient-to-r from-primary via-purple-600 to-accent bg-clip-text text-transparent">Randhir Kumar</span>
          </h1>
          <p class="hero-description text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            B.Tech Computer Science graduate from Sikkim Manipal Institute of Technology (2021-2025), passionate about building 
            scalable web applications and intelligent systems.<br/><br/>
            Currently working as a Software Developer at TPEX Solutions, specializing in Flutter, Firebase, and Node.js.
            Experienced in developing AI-powered chatbots and enterprise mobile applications serving 3+ clients.
          </p>
          <div class="hero-buttons flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <router-link to="/projects" class="inline-flex items-center justify-center bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-xl font-semibold hover:from-accent hover:to-primary transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105">
              View My Work
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </router-link>
            <router-link to="/contact" class="inline-flex items-center justify-center bg-white text-primary border-2 border-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
              Get In Touch
            </router-link>
          </div>
        </div>
        
        <!-- Profile Image -->
        <div class="hero-image-container flex justify-center">
          <div class="relative">
            <!-- Outer Glow Ring -->
            <div class="hero-glow-ring absolute inset-0 rounded-full bg-gradient-to-br from-primary via-purple-500 to-accent opacity-20 blur-2xl scale-110"></div>
            <!-- Profile Circle -->
            <div class="hero-profile-circle w-[26rem] h-[26rem] md:w-[35rem] md:h-[35rem] rounded-full bg-gradient-to-br from-secondary via-primary to-accent flex items-center justify-center shadow-2xl border-8 border-white scale-[1.08] overflow-hidden">
              <img src="@/assets/profilephoto.jpeg" alt="Randhir Kumar" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted } from 'vue'
import { useAnimations } from '@/composables/useAnimations'

export default {
  name: 'Hero',
  setup() {
    const { fadeInUp, fadeInDown, floating, pulse, textReveal } = useAnimations()

    onMounted(() => {
      // Animate the subtitle
      fadeInDown('.hero-subtitle', 0)
      
      // Animate the main heading with typewriter effect for the name
      textReveal('.hero-title', 200)
      
      // Animate description
      fadeInUp('.hero-description', 400)
      
      // Animate buttons
      fadeInUp('.hero-buttons', 600)
      
      // Animate profile image container
      fadeInUp('.hero-image-container', 300)
      
      // Add floating animation to profile image
      floating('.hero-profile-circle', 20)
      
      // Pulse effect on the glow ring
      pulse('.hero-glow-ring')
    })

    return {}
  }
}
</script>

<style scoped>
/* Initial hidden state for animations */
.hero-subtitle,
.hero-title,
.hero-description,
.hero-buttons,
.hero-image-container {
  opacity: 0;
}
</style>
