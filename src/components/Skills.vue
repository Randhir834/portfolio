<template>
  <section id="skills" class="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
    <!-- Background Decorations -->
    <div class="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="inline-block">
          <span class="text-primary font-semibold text-sm uppercase tracking-wider mb-2 block">What I Do Best</span>
          <h2 class="section-title">Skills & Technologies</h2>
        </div>
        <p class="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Crafting exceptional digital experiences with modern tools and technologies
        </p>
      </div>
      
      <!-- Skills Grid -->
      <div class="space-y-6">
        <div 
          v-for="(category, index) in skillCategories" 
          :key="category.title"
          class="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary/20"
          :style="{ animationDelay: `${index * 50}ms` }"
        >
          <!-- Category Header -->
          <div class="flex items-center mb-6">
            <h3 class="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
              {{ category.title }}
            </h3>
          </div>
          
          <!-- Skills Grid - Horizontal Layout -->
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            <div v-for="skill in category.skills" :key="skill.name" class="group/skill">
              <div class="flex flex-col items-center justify-center text-center p-4 rounded-xl bg-gray-50 hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5 transition-all duration-300 hover:scale-105">
                <div 
                  class="w-12 h-12 flex items-center justify-center rounded-lg shadow-sm group-hover/skill:shadow-md transition-all duration-300 mb-3"
                  :class="['Express.js', 'Next.js', 'GitHub Actions'].includes(skill.name) ? 'bg-gray-900' : 'bg-white'"
                >
                  <img :src="skill.icon" :alt="skill.name" class="w-8 h-8 object-contain" />
                </div>
                <span class="text-gray-700 font-semibold text-sm group-hover/skill:text-primary transition-colors duration-300 text-center">
                  {{ skill.name }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Bottom Stats Section -->
      <div class="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div class="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
          <div class="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">15+</div>
          <div class="text-gray-600 font-medium">Technologies</div>
        </div>
        <div class="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
          <div class="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">20+</div>
          <div class="text-gray-600 font-medium">Projects</div>
        </div>
        <div class="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
          <div class="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">2+</div>
          <div class="text-gray-600 font-medium">Years Experience</div>
        </div>
        <div class="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
          <div class="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">350+</div>
          <div class="text-gray-600 font-medium">LeetCode Problems</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Skills',
  setup() {
    const skillCategories = ref([
      {
        title: 'Programming Languages',
        icon: 'https://cdn.simpleicons.org/python/3776AB',
        skills: [
          { name: 'Python', level: 90, icon: 'https://cdn.simpleicons.org/python/3776AB' },
          { name: 'JavaScript', level: 90, icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
          { name: 'C++', level: 85, icon: 'https://cdn.simpleicons.org/cplusplus/00599C' },
          { name: 'C', level: 80, icon: 'https://cdn.simpleicons.org/c/A8B9CC' },
          { name: 'SQL', level: 85, icon: 'https://cdn.simpleicons.org/mysql/4479A1' },
          { name: 'Dart', level: 75, icon: 'https://cdn.simpleicons.org/dart/0175C2' }
        ]
      },
      {
        title: 'Frontend',
        icon: 'https://cdn.simpleicons.org/html5/E34F26',
        skills: [
          { name: 'HTML', level: 95, icon: 'https://cdn.simpleicons.org/html5/E34F26' },
          { name: 'CSS', level: 90, icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' },
          { name: 'React.js', level: 90, icon: 'https://cdn.simpleicons.org/react/61DAFB' },
          { name: 'Next.js', level: 85, icon: 'https://cdn.simpleicons.org/nextdotjs/FFFFFF' },
          { name: 'Tailwind CSS', level: 88, icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' }
        ]
      },
      {
        title: 'Backend',
        icon: 'https://cdn.simpleicons.org/nodedotjs/339933',
        skills: [
          { name: 'Node.js', level: 88, icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
          { name: 'Express.js', level: 87, icon: 'https://cdn.simpleicons.org/express/FFFFFF' },
          { name: 'FastAPI', level: 82, icon: 'https://cdn.simpleicons.org/fastapi/009688' }
        ]
      },
      {
        title: 'Databases',
        icon: 'https://cdn.simpleicons.org/mongodb/47A248',
        skills: [
          { name: 'MySQL', level: 85, icon: 'https://cdn.simpleicons.org/mysql/4479A1' },
          { name: 'PostgreSQL', level: 80, icon: 'https://cdn.simpleicons.org/postgresql/4169E1' },
          { name: 'MongoDB', level: 82, icon: 'https://cdn.simpleicons.org/mongodb/47A248' },
          { name: 'Firebase', level: 80, icon: 'https://cdn.simpleicons.org/firebase/FFCA28' }
        ]
      },
      {
        title: 'Cloud & DevOps',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
        skills: [
          { name: 'AWS', level: 75, icon: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
          { name: 'GitHub Actions', level: 80, icon: 'https://cdn.simpleicons.org/githubactions/2088FF' },
          { name: 'Linux CLI', level: 85, icon: 'https://cdn.simpleicons.org/linux/FCC624' },
          { name: 'Postman', level: 88, icon: 'https://cdn.simpleicons.org/postman/FF6C37' }
        ]
      },
      {
        title: 'Data/ML Tools',
        icon: 'https://cdn.simpleicons.org/tensorflow/FF6F00',
        skills: [
          { name: 'TensorFlow', level: 78, icon: 'https://cdn.simpleicons.org/tensorflow/FF6F00' },
          { name: 'Keras', level: 75, icon: 'https://cdn.simpleicons.org/keras/D00000' },
          { name: 'Pandas', level: 82, icon: 'https://cdn.simpleicons.org/pandas/150458' },
          { name: 'NumPy', level: 80, icon: 'https://cdn.simpleicons.org/numpy/013243' },
          { name: 'Matplotlib', level: 75, icon: 'https://cdn.simpleicons.org/plotly/3F4F75' },
          { name: 'Seaborn', level: 75, icon: 'https://cdn.simpleicons.org/python/3776AB' }
        ]
      },
      {
        title: 'Version Control & IDEs',
        icon: 'https://cdn.simpleicons.org/git/F05032',
        skills: [
          { name: 'Git', level: 90, icon: 'https://cdn.simpleicons.org/git/F05032' },
          { name: 'VS Code', level: 95, icon: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg' },
          { name: 'Figma', level: 80, icon: 'https://cdn.simpleicons.org/figma/F24E1E' },
          { name: 'LaTeX', level: 70, icon: 'https://cdn.simpleicons.org/latex/008080' }
        ]
      }
    ])
    
    return {
      skillCategories
    }
  }
}
</script>
