<template>
  <section id="about" class="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="inline-block">
          <span class="text-sm font-semibold text-primary uppercase tracking-wider mb-2 block">
            Get To Know Me
          </span>
          <h2 class="section-title">About Me</h2>
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <!-- About Text -->
        <div>
          <p class="text-lg text-gray-700 mb-6">
            I'm a B.Tech Computer Science student at Sikkim Manipal Institute of Technology 
            with a strong foundation in full-stack development. I've successfully completed 
            internships at Optare Design Systems and CRIS (Indian Railways), where I built 
            scalable applications and AI-powered solutions.
          </p>
          <p class="text-lg text-gray-700 mb-6">
            My expertise spans across modern web technologies including React, Vue.js, Node.js, 
            and Python. I've developed B2B mobile apps, intelligent chatbots with 85%+ accuracy, 
            and real-time collaboration platforms that serve enterprise clients.
          </p>
          <p class="text-lg text-gray-700">
            I'm passionate about machine learning, having built a Heart Disease Prediction System 
            with 85%+ accuracy. I've solved 350+ problems on LeetCode and continuously strive to 
            learn cutting-edge technologies.
          </p>
        </div>
        
        <!-- Stats/Highlights -->
        <div class="grid grid-cols-2 gap-6">
          <div 
            v-for="stat in stats" 
            :key="stat.label"
            class="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl text-center shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary/20 transform hover:-translate-y-2"
          >
            <div class="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">{{ stat.value }}</div>
            <div class="text-gray-600 text-sm font-semibold">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'About',
  setup() {
    const stats = ref([
      { value: '4', label: 'Years of Study' },
      { value: '6+', label: 'Projects Built' },
      { value: '2', label: 'Internships' },
      { value: '350+', label: 'LeetCode Problems' }
    ])
    
    return {
      stats
    }
  }
}
</script>
