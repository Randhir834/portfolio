<template>
  <section class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-3">Skills & Technologies</h2>
      <div class="w-24 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto mb-16"></div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Frontend Card -->
        <div class="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900">Frontend</h3>
          </div>
          
          <div class="space-y-5">
            <div v-for="skill in frontendSkills" :key="skill.name" class="skill-item">
              <div class="flex justify-between mb-2">
                <span class="text-gray-700 font-medium">{{ skill.name }}</span>
                <span class="text-primary font-bold">{{ skill.level }}%</span>
              </div>
              <div class="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                <div 
                  class="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full transition-all duration-1000 ease-out shadow-sm"
                  :style="{ width: isVisible ? skill.level + '%' : '0%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Backend Card -->
        <div class="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z"/>
                <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z"/>
                <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900">Backend</h3>
          </div>
          
          <div class="space-y-5">
            <div v-for="skill in backendSkills" :key="skill.name" class="skill-item">
              <div class="flex justify-between mb-2">
                <span class="text-gray-700 font-medium">{{ skill.name }}</span>
                <span class="text-primary font-bold">{{ skill.level }}%</span>
              </div>
              <div class="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                <div 
                  class="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full transition-all duration-1000 ease-out shadow-sm"
                  :style="{ width: isVisible ? skill.level + '%' : '0%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tools & Others Card -->
        <div class="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900">Tools & Others</h3>
          </div>
          
          <div class="space-y-5">
            <div v-for="skill in toolsSkills" :key="skill.name" class="skill-item">
              <div class="flex justify-between mb-2">
                <span class="text-gray-700 font-medium">{{ skill.name }}</span>
                <span class="text-primary font-bold">{{ skill.level }}%</span>
              </div>
              <div class="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                <div 
                  class="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full transition-all duration-1000 ease-out shadow-sm"
                  :style="{ width: isVisible ? skill.level + '%' : '0%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Additional Skills Section -->
      <div class="mt-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        <h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">Additional Technical Skills</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <h4 class="font-bold text-gray-900 mb-3 flex items-center">
              <span class="w-2 h-2 bg-primary rounded-full mr-2"></span>
              Programming Languages
            </h4>
            <p class="text-gray-600 text-sm leading-relaxed">Python, JavaScript, C++, C, SQL, Dart</p>
          </div>
          <div>
            <h4 class="font-bold text-gray-900 mb-3 flex items-center">
              <span class="w-2 h-2 bg-primary rounded-full mr-2"></span>
              Databases
            </h4>
            <p class="text-gray-600 text-sm leading-relaxed">MySQL, PL/SQL, MongoDB, Firebase</p>
          </div>
          <div>
            <h4 class="font-bold text-gray-900 mb-3 flex items-center">
              <span class="w-2 h-2 bg-primary rounded-full mr-2"></span>
              Cloud & DevOps
            </h4>
            <p class="text-gray-600 text-sm leading-relaxed">AWS, GitHub Actions, Linux CLI, Postman</p>
          </div>
          <div>
            <h4 class="font-bold text-gray-900 mb-3 flex items-center">
              <span class="w-2 h-2 bg-primary rounded-full mr-2"></span>
              Data/ML Tools
            </h4>
            <p class="text-gray-600 text-sm leading-relaxed">TensorFlow, Keras, Pandas, NumPy, Matplotlib, Seaborn</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'SkillsProgress',
  setup() {
    const isVisible = ref(false)
    
    const frontendSkills = ref([
      { name: 'React.js', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'JavaScript', level: 90 },
      { name: 'Tailwind CSS', level: 88 }
    ])
    
    const backendSkills = ref([
      { name: 'Node.js', level: 88 },
      { name: 'Python', level: 85 },
      { name: 'Express.js', level: 87 },
      { name: 'MongoDB', level: 82 }
    ])
    
    const toolsSkills = ref([
      { name: 'Git', level: 90 },
      { name: 'AWS', level: 75 },
      { name: 'Firebase', level: 80 },
      { name: 'ML/AI', level: 78 }
    ])
    
    onMounted(() => {
      // Trigger animation after component mounts
      setTimeout(() => {
        isVisible.value = true
      }, 100)
    })
    
    return {
      frontendSkills,
      backendSkills,
      toolsSkills,
      isVisible
    }
  }
}
</script>

<style scoped>
.skill-item {
  animation: fadeInUp 0.6s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
