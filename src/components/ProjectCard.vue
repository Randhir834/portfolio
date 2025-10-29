<template>
  <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200 group">
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
      <p class="text-gray-600 mb-4 leading-relaxed">{{ project.description }}</p>
      
      <div class="flex flex-wrap gap-2">
        <span 
          v-for="tech in project.technologies" 
          :key="tech"
          class="bg-blue-50 text-primary px-3 py-1 rounded-md text-sm font-medium border border-blue-100"
        >
          {{ tech }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleImageError(e) {
      e.target.src = 'https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Project+Image'
    }
  }
}
</script>
