<template>
  <section class="py-20 bg-gray-50">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-4xl font-bold text-center text-gray-900 mb-4">Experience Timeline</h2>
      <div class="w-20 h-1 bg-primary mx-auto mb-12"></div>
      
      <div class="relative">
        <!-- Timeline line -->
        <div class="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300 hidden md:block"></div>
        
        <div v-for="(item, index) in timelineItems" :key="index" class="mb-12 relative">
          <div class="flex flex-col md:flex-row items-center">
            <!-- Left side (even) -->
            <div class="w-full md:w-5/12" :class="index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:order-2 md:pl-8'">
              <div class="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <span class="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold mb-2">
                  {{ item.period }}
                </span>
                <h3 class="text-xl font-bold text-gray-900 mb-2">{{ item.title }}</h3>
                <p class="text-primary font-semibold mb-2">{{ item.company }}</p>
                <p class="text-gray-600">{{ item.description }}</p>
                <div class="flex flex-wrap gap-2 mt-3" :class="index % 2 === 0 ? 'md:justify-end' : ''">
                  <span 
                    v-for="tech in item.technologies" 
                    :key="tech"
                    class="bg-blue-50 text-primary px-2 py-1 rounded text-xs font-medium border border-blue-100"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
            
            <!-- Center dot -->
            <div class="hidden md:flex w-2/12 justify-center my-4 md:my-0">
              <div class="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg z-10"></div>
            </div>
            
            <!-- Right side (odd) -->
            <div class="w-full md:w-5/12" :class="index % 2 === 1 ? 'md:text-right md:pr-8' : 'md:order-2 md:pl-8'">
              <!-- Empty space for alternating layout -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Timeline',
  setup() {
    const timelineItems = ref([
      {
        title: 'Software Engineering Intern',
        company: 'Optare Design Systems Pvt. Ltd.',
        period: 'May 2025 - July 2025',
        description: 'Engineered scalable B2B mobile app using Flutter and Firebase, adopted by 3+ enterprise clients.',
        technologies: ['Flutter', 'Firebase', 'Node.js', 'Dash']
      },
      {
        title: 'AI & Backend Intern',
        company: 'Center for Railway Information Systems (CRIS)',
        period: 'Jan 2025 - May 2025',
        description: 'Developed intelligent chatbot for Indian Railways with 85%+ intent recognition accuracy.',
        technologies: ['Python', 'NLP', 'ML', 'Rasa']
      },
      {
        title: 'B.Tech in Computer Science',
        company: 'Sikkim Manipal Institute of Technology',
        period: '2021 - 2025',
        description: 'CGPA: 8.0/10. Focus on software engineering, web development, and artificial intelligence.',
        technologies: ['DSA', 'Web Dev', 'AI/ML', 'DBMS']
      }
    ])
    
    return {
      timelineItems
    }
  }
}
</script>
