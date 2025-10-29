<template>
  <section id="projects" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="section-title">Featured Projects</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard 
          v-for="project in featuredProjects" 
          :key="project.id"
          :project="project"
        />
      </div>
      
      <div class="text-center mt-12">
        <router-link to="/projects" class="btn-primary">
          View All Projects
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'
import ProjectCard from './ProjectCard.vue'

export default {
  name: 'ProjectsPreview',
  components: {
    ProjectCard
  },
  setup() {
    const featuredProjects = ref([
      {
        id: 1,
        title: 'Heart Disease Prediction System',
        description: 'ML system with Random Forest, SVM, and Logistic Regression achieving 85%+ accuracy. Built with MLflow and FastAPI.',
        image: 'https://via.placeholder.com/800x500/EEF2FF/1F2937?text=Heart+Disease+Prediction',
        technologies: ['Python', 'scikit-learn', 'Streamlit', 'ZenML'],
        github: 'https://github.com/randhirkumar65',
        link: '#'
      },
      {
        id: 2,
        title: 'MindOne - Document Collaboration',
        description: 'Real-time collaboration platform with Next.js and MongoDB supporting simultaneous document editing.',
        image: '../assets/project-screenshot.png',
        technologies: ['Next.js', 'Node.js', 'MongoDB', 'JWT'],
        github: 'https://github.com/randhirkumar65',
        link: '#'
      },
      {
        id: 3,
        title: 'CRM Application',
        description: 'Feature-rich CRM with lead tracking and role-specific admin dashboard using React and Node.js.',
        image: require('@/assets/crm.png'),
        technologies: ['React.js', 'Node.js', 'MongoDB', 'Redux'],
        github: 'https://github.com/Randhir834/crm-client',
        link: 'https://crm-client-nu.vercel.app/'
      }
      ,
      {
        id: 4,
        title: 'MovieTicket - BookMyShow Clone',
        description: 'React-based ticket booking app with seat selection, auth, and responsive UI.',
        image: require('@/assets/movieticket.png'),
        technologies: ['React.js', 'React Router', 'Tailwind CSS'],
        github: 'https://github.com/Randhir834/movieticket',
        link: 'https://movietickets-eta.vercel.app/'
      }
    ])
    
    return {
      featuredProjects
    }
  }
}
</script>
