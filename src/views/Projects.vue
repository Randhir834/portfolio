<template>
  <div class="projects-page pt-20">
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <div class="inline-block">
            <span class="text-sm font-semibold text-primary uppercase tracking-wider mb-2 block">
              My Work
            </span>
            <h2 class="section-title">Projects</h2>
          </div>
        </div>

        <!-- Filter Buttons -->
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            v-for="category in categories" 
            :key="category"
            @click="selectedCategory = category"
            :class="[
              'px-6 py-2 rounded-lg font-semibold transition-colors duration-300',
              selectedCategory === category 
                ? 'bg-primary text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100'
            ]"
          >
            {{ category }}
          </button>
        </div>
        
        <!-- Projects Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard 
            v-for="project in filteredProjects" 
            :key="project.id"
            :project="project"
          />
        </div>
        
        <div v-if="filteredProjects.length === 0" class="text-center text-gray-600 mt-12">
          <p class="text-xl">No projects found in this category.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'

export default {
  name: 'Projects',
  components: {
    ProjectCard
  },
  setup() {
    const selectedCategory = ref('All')
    const categories = ref(['All', 'Web Apps', 'AI/ML', 'Full Stack'])
    
    const projects = ref([
      {
        id: 1,
        title: 'CRM Application',
        description: 'Designed a feature-rich CRM with lead tracking, role-specific admin dashboard. Secured Node.js backend using MongoDB, JWT authentication, and REST APIs.',
        image: require('@/assets/crm.png'),
        technologies: ['React.js', 'Node.js', 'MongoDB', 'Redux', 'JWT'],
        category: 'Web Apps',
        github: 'https://github.com/Randhir834/crm-client',
        link: 'https://crm-client-nu.vercel.app/'
      },
      {
        id: 2,
        title: 'MindOne - Document Collaboration Platform',
        description: 'Created a real-time collaboration platform with Next.js, Node.js, and MongoDB supporting simultaneous document editing with JWT authentication.',
        image: require('@/assets/mindone.png'),
        technologies: ['Next.js', 'Node.js', 'Express', 'MongoDB', 'Mongoose'],
        category: 'Full Stack',
        github: 'https://github.com/Randhir834/backend-mindone',
        link: '#'
      },
      {
        id: 3,
        title: 'MovieTicket - Online Booking Platform',
        description: 'Developed a movie ticket booking system with React, React Router, and Context API. Implemented seat selection, authentication, secure payment processing, and real-time updates.',
        image: require('@/assets/movieticket.png'),
        technologies: ['React.js', 'React Router', 'Context API', 'Tailwind CSS', 'Netlify'],
        category: 'Web Apps',
        github: 'https://github.com/Randhir834/movieticket',
        link: 'https://movietickets-eta.vercel.app/'
      },
      {
        id: 4,
        title: 'Heart Disease Prediction System',
        description: 'Engineered a machine learning system with Random Forest, SVM, and Logistic Regression, achieving 85%+ accuracy. Built with MLflow for training and FastAPI for deployment.',
        image: 'https://via.placeholder.com/800x500/EEF2FF/1F2937?text=Heart+Disease+Prediction',
        technologies: ['Python', 'scikit-learn', 'Seaborn', 'Streamlit', 'ZenML'],
        category: 'AI/ML',
        github: 'https://github.com/randhirkumar65',
        link: '#'
      },
      {
        id: 7,
        title: 'AI Career Navigator',
        description: 'AI-powered resume analyzer with ATS scoring, skill-gap insights, and personalized career roadmaps for smarter transitions.',
        image: require('@/assets/career.png'),
        technologies: ['FastAPI', 'Supabase (PostgreSQL)', 'Next.js', 'React', 'TypeScript', 'Axios'],
        category: 'AI/ML',
        github: '#',
        link: '#'
      }
    ])
    
    const filteredProjects = computed(() => {
      if (selectedCategory.value === 'All') {
        return projects.value
      }
      return projects.value.filter(project => project.category === selectedCategory.value)
    })
    
    return {
      selectedCategory,
      categories,
      projects,
      filteredProjects
    }
  }
}
</script>
