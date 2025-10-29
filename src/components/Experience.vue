<template>
  <section id="experience" class="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="inline-block">
          <span class="text-sm font-semibold text-primary uppercase tracking-wider mb-2 block">
            My Journey
          </span>
          <h2 class="section-title">Experience & Education</h2>
        </div>
        <p class="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Building expertise through hands-on experience and continuous learning
        </p>
      </div>
      
      <div class="space-y-16">
        <!-- Work Experience -->
        <div>
          <h3 class="text-2xl font-bold text-secondary mb-8 flex items-center">
            <svg class="w-8 h-8 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            Work Experience
          </h3>
          
          <div class="relative border-l-4 border-primary/30 pl-8 space-y-10">
            <div 
              v-for="(job, index) in workExperience" 
              :key="index"
              class="relative group"
            >
              <!-- Timeline Dot with Pulse Animation -->
              <div class="absolute -left-[42px] top-1/2 -translate-y-1/2">
                <div class="absolute inset-0 w-8 h-8 bg-primary rounded-full animate-ping opacity-20"></div>
                <div class="relative w-8 h-8 bg-gradient-to-br from-primary to-blue-600 rounded-full border-4 border-white shadow-xl group-hover:scale-125 transition-transform duration-300 flex items-center justify-center">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
              
              <!-- Content Card -->
              <div class="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-x-2 border border-gray-100 hover:border-primary/20 group-hover:bg-gradient-to-br group-hover:from-blue-50/50 group-hover:to-white">
                <div class="flex justify-between items-start mb-3 flex-wrap gap-2">
                  <h4 class="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">{{ job.title }}</h4>
                  <span class="text-xs font-semibold text-white bg-gradient-to-r from-primary to-blue-600 px-4 py-1.5 rounded-full shadow-md">{{ job.period }}</span>
                </div>
                <p class="text-primary font-semibold mb-4 flex items-center">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  {{ job.company }}
                </p>
                <p class="text-gray-700 mb-4 leading-relaxed">{{ job.description }}</p>
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="tech in job.technologies" 
                    :key="tech"
                    class="text-xs font-medium bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 px-3 py-1.5 rounded-lg border border-blue-200 hover:shadow-md transition-all duration-300 hover:scale-105"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Education -->
        <div>
          <h3 class="text-2xl font-bold text-secondary mb-8 flex items-center">
            <svg class="w-8 h-8 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M12 14l9-5-9-5-9 5 9 5z"/>
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
            </svg>
            Education
          </h3>
          
          <div class="relative border-l-4 border-accent/30 pl-8 space-y-10">
            <div 
              v-for="(edu, index) in education" 
              :key="index"
              class="relative group"
            >
              <!-- Timeline Dot with Pulse Animation -->
              <div class="absolute -left-[42px] top-1/2 -translate-y-1/2">
                <div class="absolute inset-0 w-8 h-8 bg-accent rounded-full animate-ping opacity-20"></div>
                <div class="relative w-8 h-8 bg-gradient-to-br from-accent to-orange-600 rounded-full border-4 border-white shadow-xl group-hover:scale-125 transition-transform duration-300 flex items-center justify-center">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </div>
              </div>
              
              <!-- Content Card -->
              <div class="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-x-2 border border-gray-100 hover:border-accent/20 group-hover:bg-gradient-to-br group-hover:from-amber-50/50 group-hover:to-white">
                <div class="flex justify-between items-start mb-3 flex-wrap gap-2">
                  <h4 class="text-xl font-bold text-gray-900 group-hover:text-accent transition-colors duration-300">{{ edu.degree }}</h4>
                  <span class="text-xs font-semibold text-white bg-gradient-to-r from-accent to-orange-600 px-4 py-1.5 rounded-full shadow-md">{{ edu.period }}</span>
                </div>
                <p class="text-accent font-semibold mb-4 flex items-center">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  {{ edu.institution }}
                </p>
                <p class="text-gray-700 mb-4 leading-relaxed">{{ edu.description }}</p>
                <div v-if="edu.achievements" class="space-y-2 bg-gradient-to-r from-amber-50/50 to-orange-50/50 p-4 rounded-xl border border-amber-100">
                  <p 
                    v-for="achievement in edu.achievements" 
                    :key="achievement"
                    class="text-sm text-gray-700 flex items-start font-medium"
                  >
                    <svg class="w-5 h-5 mr-2 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    {{ achievement }}
                  </p>
                </div>
              </div>
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
  name: 'Experience',
  setup() {
    const workExperience = ref([
      {
        title: 'Software Engineering Intern',
        company: 'Optare Design Systems Pvt. Ltd.',
        period: 'May 2025 - July 2025',
        description: 'Engineered and released a scalable B2B mobile app using Flutter and Firebase, adopted by 3+ enterprise clients. Developed and deployed the supporting backend with Node.js, automating client engagement.',
        technologies: ['Flutter', 'Firebase', 'Node.js', 'Dash']
      },
      {
        title: 'AI & Backend Intern',
        company: 'Center for Railway Information Systems (CRIS)',
        period: 'Jan 2025 - May 2025',
        description: 'Developed a product-grade intelligent chatbot for Indian Railways, achieving 85%+ intent recognition accuracy. Optimized NLP models and architected scalable pipelines using 50+ utterances and regex patterns.',
        technologies: ['Python', 'NLP', 'ML', 'Rasa']
      }
    ])
    
    const education = ref([
      {
        degree: 'B.Tech in CSE',
        institution: 'Sikkim Manipal Institute of Technology',
        period: '2021 - 2025',
        description: 'Pursuing Bachelor of Technology with focus on software engineering, web development, and artificial intelligence.',
        achievements: [
          'CGPA: 8.0/10',
          'Solved 350+ problems on LeetCode',
          'Active in coding competitions'
        ]
      },
      {
        degree: 'Class XII (CBSE)',
        institution: 'BNS DAV Public School, Giridih, Jharkhand',
        period: '2021',
        description: 'Completed higher secondary education with strong foundation in mathematics and computer science.',
        achievements: [
          'Percentage: 94%',
          'Top performer in Mathematics',
          'Computer Science Excellence'
        ]
      },
      {
        degree: 'Class X (CBSE)',
        institution: 'BNS DAV Public School, Giridih, Jharkhand',
        period: '2019',
        description: 'Completed secondary education with excellent academic performance.',
        achievements: [
          'Percentage: 89.8%',
          'Strong foundation in Science and Mathematics',
          'Academic Excellence Award'
        ]
      },
      {
        degree: 'Certifications',
        institution: 'Online Platforms',
        period: '2023 - 2024',
        description: 'Continuous learning through professional certifications.',
        achievements: [
          'Full-Stack Web Development Bootcamp - Udemy',
          'Data Analytics and Visualization - Accenture (Forage)',
          'Python & SQL Advanced - HackerRank'
        ]
      }
    ])
    
    return {
      workExperience,
      education
    }
  }
}
</script>
