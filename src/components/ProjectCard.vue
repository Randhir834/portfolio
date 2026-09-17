<template>
  <div 
    ref="cardRef"
    class="project-card bg-white rounded-lg overflow-hidden shadow-md border border-gray-200 group cursor-pointer"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div class="relative overflow-hidden h-48">
      <img 
        :src="project.image" 
        :alt="project.title"
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        @error="handleImageError"
      />
      <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center gap-4">
        <a 
          v-if="project.link"
          :href="project.link" 
          target="_blank"
          rel="noopener noreferrer"
          class="opacity-0 group-hover:opacity-100 bg-white text-primary px-4 py-2 rounded-lg font-semibold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary hover:text-white"
        >
          View Live
        </a>
        <a 
          v-if="project.github"
          :href="project.github" 
          target="_blank"
          rel="noopener noreferrer"
          class="opacity-0 group-hover:opacity-100 bg-white text-primary px-4 py-2 rounded-lg font-semibold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75 hover:bg-primary hover:text-white"
        >
          GitHub
        </a>
      </div>
    </div>
    
    <div class="p-6">
      <h3 class="text-xl font-bold text-gray-900 mb-2">{{ project.title }}</h3>
      <p class="text-gray-600 mb-4 leading-relaxed line-clamp-3">{{ project.description }}</p>
      
      <div class="flex flex-wrap gap-2">
        <span 
          v-for="tech in project.technologies" 
          :key="tech"
          class="bg-primary/5 text-primary px-3 py-1 rounded-md text-sm font-medium border border-primary/15"
        >
          {{ tech }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useAnimations } from '@/composables/useAnimations'

export default {
  name: 'ProjectCard',
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  setup() {
    const { cardHover } = useAnimations()
    const cardRef = ref(null)

    const handleMouseEnter = (e) => {
      cardHover(e.currentTarget, true)
    }

    const handleMouseLeave = (e) => {
      cardHover(e.currentTarget, false)
    }

    return {
      cardRef,
      handleMouseEnter,
      handleMouseLeave
    }
  },
  methods: {
    handleImageError(e) {
      e.target.src = 'https://via.placeholder.com/400x300/2563EB/FFFFFF?text=Project+Image'
    }
  }
}
</script>

<style scoped>
 .line-clamp-3 {
   display: -webkit-box;
   -webkit-line-clamp: 3;
   -webkit-box-orient: vertical;
   overflow: hidden;
 }
</style>
