<template>
  <section id="projects" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <div class="inline-block">
          <span class="text-sm font-semibold text-primary uppercase tracking-wider mb-2 block">
            My Work
          </span>
          <h2 class="section-title">Featured Projects</h2>
        </div>
        <p class="mt-6 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          A few highlights from the projects I’ve built recently
        </p>
      </div>
      
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
import { ref, onMounted, onUnmounted } from 'vue'
import ProjectCard from './ProjectCard.vue'
import { useAnimations } from '@/composables/useAnimations'

export default {
  name: 'ProjectsPreview',
  components: {
    ProjectCard
  },
  setup() {
    let observer = null
    const { fadeInUp, staggeredGrid } = useAnimations()

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
        image: require('@/assets/mindone.png'),
        technologies: ['Next.js', 'Node.js', 'MongoDB', 'JWT'],
        github: 'https://github.com/Randhir834/backend-mindone',
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
        description: 'React-based ticket booking app with seat selection, auth, responsive UI, and secure payment integration.',
        image: require('@/assets/movieticket.png'),
        technologies: ['React.js', 'React Router', 'Tailwind CSS'],
        github: 'https://github.com/Randhir834/movieticket',
        link: 'https://movietickets-eta.vercel.app/'
      },
      {
        id: 5,
        title: 'AI Career Navigator',
        description: 'AI-powered resume analyzer with ATS scoring, skill-gap insights, and personalized career roadmaps for smarter transitions.',
        image: require('@/assets/career.png'),
        technologies: ['FastAPI', 'Supabase', 'Next.js', 'React', 'TypeScript'],
        github: '#',
        link: '#'
      }
    ])
    
    onMounted(() => {
      // Animate section header
      observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            fadeInUp('.section-title', 0)
            fadeInUp('section#projects p.mt-6', 200)
            
            // Animate project cards in a staggered grid pattern
            setTimeout(() => {
              staggeredGrid('.project-card', 400)
            }, 400)
            
            // Animate the button
            fadeInUp('.btn-primary', 800)
            
            observer.unobserve(entry.target)
          }
        })
      }, {
        threshold: 0.1
      })
      
      const section = document.querySelector('section#projects')
      if (section) {
        observer.observe(section)
      }
    })

    onUnmounted(() => {
      if (observer) {
        observer.disconnect()
      }
    })
    
    return {
      featuredProjects
    }
  }
}
</script>


<style scoped>
/* Initial hidden state */
.section-title,
.mt-6,
.project-card,
.btn-primary {
  opacity: 0;
}
</style>
