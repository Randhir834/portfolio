<template>
  <section id="skills" ref="skillsSection" class="py-24 bg-gradient-to-br from-gray-50 via-white to-primary/5 relative overflow-hidden">
    <!-- Background Decorations -->
    <div class="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

    <div class="absolute inset-0 opacity-70">
      <div class="skills-orbit-bg"></div>
    </div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-20" :class="{ 'animate-fade-in-up': isVisible }">
        <div class="inline-block">
          <span class="text-primary font-semibold text-sm uppercase tracking-wider mb-2 block">What I Do Best</span>
          <h2 class="section-title">Skills & Technologies</h2>
        </div>
      </div>

      <!-- Solar System Orbit Layout -->
      <div class="relative flex items-center justify-center min-h-[1000px]">
        <div
          class="solar-system mx-auto"
          :class="{ 'is-visible': isVisible }"
        >
          <!-- Center Core -->
          <div class="orbit-core">
            <div class="orbit-core__inner">
              <span class="orbit-core__text">SK</span>
            </div>
          </div>

          <!-- Orbit Rings -->
          <div
            v-for="(ring, ringIndex) in orbitRings"
            :key="ring.label"
            class="orbit-ring"
            :class="{ 'is-dimmed': activeSkill && !isSkillInRing(activeSkill, ring) }"
            :style="{
              '--orbit-size': ring.size,
              '--orbit-speed': ring.speed,
              '--orbit-direction': ring.direction,
              '--orbit-color': ring.ringColor,
              '--orbit-index': ringIndex
            }"
          >
            <!-- Orbit Line -->
            <div class="orbit-line"></div>

            <!-- Skill Nodes -->
            <div
              v-for="(skill, i) in ring.skills"
              :key="skill.name"
              class="orbit-node"
              :class="{ 'is-active': activeSkill === skill.name }"
              :style="{
                '--node-angle': `${((360 / ring.skills.length) * i) + (ring.angleOffset || 0)}deg`,
                '--node-color': skill.color,
                '--orbit-radius': (parseInt(ring.size) / 2 - 28) + 'px',
                '--orbit-speed': ring.speed,
                '--counter-direction': ring.direction === 'normal' ? 'reverse' : 'normal'
              }"
              @mouseenter="activeSkill = skill.name"
              @mouseleave="activeSkill = null"
              @focus="activeSkill = skill.name"
              @blur="activeSkill = null"
              tabindex="0"
            >
              <div class="orbit-node__bubble">
                <div
                  class="orbit-node__icon"
                  :class="{ 'is-dark': ['Express.js', 'Next.js', 'GitHub Actions'].includes(skill.name) }"
                >
                  <img :src="skill.icon" :alt="skill.name" class="orbit-node__img" />
                </div>
              </div>
              <div class="orbit-node__tooltip">{{ skill.name }}</div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Bottom Stats Section -->
      <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div class="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
          <div class="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">15+</div>
          <div class="text-gray-600 font-medium">Technologies</div>
        </div>
        <div class="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
          <div class="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">20+</div>
          <div class="text-gray-600 font-medium">Projects</div>
        </div>
        <div class="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
          <div class="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">1+</div>
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
import { ref, onMounted, onUnmounted } from 'vue'
import { useAnimations } from '@/composables/useAnimations'

export default {
  name: 'Skills',
  setup() {
    const isVisible = ref(false)
    const skillsSection = ref(null)
    const activeSkill = ref(null)
    let observer = null

    const { fadeInUp, scaleIn, counterUp, scrollTrigger } = useAnimations()

    const orbitRings = ref([
      {
        label: 'Core Frontend',
        size: '320px',
        speed: '25s',
        direction: 'normal',
        ringColor: 'rgba(59, 130, 246, 0.5)',
        angleOffset: 0,
        labelAngle: -45,
        skills: [
          { name: 'React.js', icon: 'https://cdn.simpleicons.org/react/61DAFB', color: '#61DAFB' },
          { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/FFFFFF', color: '#111827' },
          { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E', color: '#F7DF1E' },
          { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4', color: '#06B6D4' },
          { name: 'HTML', icon: 'https://cdn.simpleicons.org/html5/E34F26', color: '#E34F26' },
          { name: 'CSS', icon: 'https://skillicons.dev/icons?i=css&theme=light', color: '#1572B6' }
        ]
      },
      {
        label: 'Backend Layer',
        size: '560px',
        speed: '35s',
        direction: 'reverse',
        ringColor: 'rgba(16, 185, 129, 0.45)',
        angleOffset: 30,
        labelAngle: 135,
        skills: [
          { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/339933', color: '#22C55E' },
          { name: 'Express.js', icon: 'https://cdn.simpleicons.org/express/FFFFFF', color: '#111827' },
          { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB', color: '#3776AB' },
          { name: 'FastAPI', icon: 'https://cdn.simpleicons.org/fastapi/009688', color: '#10B981' }
        ]
      },
      {
        label: 'Data & Cloud',
        size: '800px',
        speed: '45s',
        direction: 'normal',
        ringColor: 'rgba(168, 85, 247, 0.4)',
        angleOffset: -20,
        labelAngle: 200,
        skills: [
          { name: 'C', icon: 'https://cdn.simpleicons.org/c/A8B9CC', color: '#A8B9CC' },
          { name: 'C++', icon: 'https://cdn.simpleicons.org/cplusplus/00599C', color: '#00599C' },
          { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/47A248', color: '#47A248' },
          { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/4169E1', color: '#4169E1' },
          { name: 'MySQL', icon: 'https://cdn.simpleicons.org/mysql/4479A1', color: '#4479A1' },
          { name: 'Firebase', icon: 'https://cdn.simpleicons.org/firebase/FFCA28', color: '#F59E0B' },
          { name: 'AWS', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg', color: '#FF9900' },
          { name: 'Git', icon: 'https://cdn.simpleicons.org/git/F05032', color: '#F05032' },
          { name: 'GitHub Actions', icon: 'https://cdn.simpleicons.org/githubactions/2088FF', color: '#2088FF' }
        ]
      },
      {
        label: 'Tools & DevOps',
        size: '1040px',
        speed: '55s',
        direction: 'reverse',
        ringColor: 'rgba(249, 115, 22, 0.35)',
        angleOffset: 45,
        labelAngle: -90,
        skills: [
          { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/2496ED', color: '#2496ED' },
          { name: 'Linux', icon: 'https://cdn.simpleicons.org/linux/FCC624', color: '#FCC624' },
          { name: 'VS Code', icon: 'https://skillicons.dev/icons?i=vscode&theme=light', color: '#007ACC' },
          { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma/F24E1E', color: '#F24E1E' }
        ]
      }
    ])
    
    const isSkillInRing = (skillName, ring) => {
      return ring.skills.some(s => s.name === skillName)
    }
    
    onMounted(() => {
      // Animate section header
      fadeInUp('.section-title', 0)
      
      // Setup scroll-triggered animations for stats
      observer = scrollTrigger('.mt-16 > div', (element) => {
        scaleIn(element, 0)
        
        // Animate counter numbers
        const counter = element.querySelector('.text-4xl')
        if (counter) {
          const text = counter.textContent
          const number = parseInt(text.replace(/\D/g, ''))
          if (number) {
            counterUp(counter, number, 200, 1500)
            // Add the + back if it exists
            if (text.includes('+')) {
              setTimeout(() => {
                counter.textContent = number + '+'
              }, 1700)
            }
          }
        }
      })
      
      // Trigger visibility for orbit animation
      const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            isVisible.value = true
            // Animate orbit nodes
            setTimeout(() => {
              scaleIn('.orbit-node', 300, 50)
            }, 500)
          }
        })
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      })
      
      if (skillsSection.value) {
        sectionObserver.observe(skillsSection.value)
      }
    })

    onUnmounted(() => {
      if (observer) {
        observer.disconnect()
      }
    })
    
    return {
      orbitRings,
      isVisible,
      skillsSection,
      activeSkill,
      isSkillInRing
    }
  }
}
</script>

<style scoped>
/* Solar System Container */
.solar-system {
  position: relative;
  width: min(1000px, 98vw);
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Center Core */
.orbit-core {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 50;
}

.orbit-core__inner {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2));
  backdrop-filter: blur(10px);
  border: 3px solid rgba(255, 255, 255, 0.9);
  box-shadow:
    0 0 0 4px rgba(99, 102, 241, 0.15),
    0 20px 50px rgba(99, 102, 241, 0.3),
    inset 0 0 30px rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.orbit-core__text {
  font-size: 28px;
  font-weight: 800;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Orbit Rings */
.orbit-ring {
  position: absolute;
  left: 50%;
  top: 50%;
  width: var(--orbit-size);
  height: var(--orbit-size);
  transform: translate(-50%, -50%);
  border-radius: 50%;
  opacity: 0;
  transition: opacity 800ms ease 200ms;
  animation: ringRotate var(--orbit-speed) linear infinite;
  animation-direction: var(--orbit-direction);
}

.solar-system.is-visible .orbit-ring {
  opacity: 1;
}

.orbit-ring.is-dimmed {
  opacity: 0.3 !important;
}

@keyframes ringRotate {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

/* Orbit Line (The circular path) */
.orbit-line {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 1px solid var(--orbit-color);
  box-shadow: 0 0 20px var(--orbit-color);
}

/* Skill Nodes - counter-rotate to stay upright */
.orbit-node {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: rotate(var(--node-angle)) translateX(var(--orbit-radius)) rotate(calc(-1 * var(--node-angle)));
  transform-origin: center;
  z-index: 10;
  cursor: pointer;
  outline: none;
}

.orbit-node__bubble {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.98);
  border: 2px solid rgba(255, 255, 255, 1);
  box-shadow:
    0 10px 40px rgba(0, 0, 0, 0.15),
    0 0 0 1px rgba(99, 102, 241, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 300ms cubic-bezier(0.34, 1.56, 0.64, 1);
  animation: ringRotate var(--orbit-speed) linear infinite;
  animation-direction: var(--counter-direction);
}

.orbit-node__icon {
  width: 42px;
  height: 42px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
  padding: 3px;
  background: rgba(255, 255, 255, 0.5);
}

.orbit-node__icon.is-dark {
  background: #1f2937;
  padding: 10px;
}

.orbit-node__img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

/* Tooltip */
.orbit-node__tooltip {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(8px);
  font-size: 11px;
  font-weight: 600;
  color: #374151;
  background: rgba(255, 255, 255, 0.95);
  padding: 4px 10px;
  border-radius: 6px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: all 200ms ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Hover States */
.orbit-node:hover .orbit-node__bubble,
.orbit-node:focus .orbit-node__bubble,
.orbit-node.is-active .orbit-node__bubble {
  transform: scale(1.25);
  box-shadow:
    0 12px 40px rgba(0, 0, 0, 0.2),
    0 0 0 3px var(--node-color),
    0 0 30px var(--node-color);
}

.orbit-node:hover .orbit-node__tooltip,
.orbit-node:focus .orbit-node__tooltip,
.orbit-node.is-active .orbit-node__tooltip {
  opacity: 1;
  transform: translateX(-50%) translateY(4px);
}

/* Background */
.skills-orbit-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(600px circle at 50% 50%, rgba(99, 102, 241, 0.08), transparent 70%),
    radial-gradient(400px circle at 30% 30%, rgba(139, 92, 246, 0.06), transparent 50%),
    radial-gradient(400px circle at 70% 70%, rgba(16, 185, 129, 0.05), transparent 50%);
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  .orbit-ring {
    transition: none !important;
  }
}

/* Large Desktop (1200px+) */
@media (min-width: 1200px) {
  .solar-system {
    width: min(1100px, 95vw);
  }
  
  .orbit-core__inner {
    width: 90px;
    height: 90px;
  }
  
  .orbit-core__text {
    font-size: 32px;
  }
  
  .orbit-node__bubble {
    width: 60px;
    height: 60px;
  }
  
  .orbit-node__icon {
    width: 44px;
    height: 44px;
    overflow: visible;
    padding: 2px;
  }
  
  .orbit-node__icon.is-dark {
    padding: 10px;
  }
}

/* Desktop (992px - 1199px) */
@media (max-width: 1199px) {
  .solar-system {
    width: min(900px, 95vw);
  }
}

/* Tablet (768px - 991px) */
@media (max-width: 991px) and (min-width: 768px) {
  .orbit-ring {
    --orbit-size-tablet: calc(var(--orbit-size) * 0.75);
    width: var(--orbit-size-tablet) !important;
    height: var(--orbit-size-tablet) !important;
  }
  
  .orbit-node {
    --orbit-radius: calc(var(--orbit-size-tablet) / 2) !important;
  }
  
  .solar-system {
    min-height: 650px;
  }
  
  .orbit-core__inner {
    width: 65px;
    height: 65px;
  }
  
  .orbit-core__text {
    font-size: 24px;
  }
  
  .orbit-node__bubble {
    width: 52px;
    height: 52px;
  }
  
  .orbit-node__icon {
    width: 38px;
    height: 38px;
  }
}

/* Mobile Responsive - Better sizing for all devices */
@media (max-width: 767px) {
  /* Reduce orbit sizes on mobile for better fit */
  .orbit-ring {
    --orbit-size-mobile: calc(var(--orbit-size) * 0.6);
    width: var(--orbit-size-mobile) !important;
    height: var(--orbit-size-mobile) !important;
  }
  
  .orbit-node {
    --orbit-radius: calc(var(--orbit-size-mobile) / 2) !important;
  }
  
  .solar-system {
    width: 100%;
    min-height: 550px;
  }
  
  .orbit-core__inner {
    width: 55px;
    height: 55px;
  }
  
  .orbit-core__text {
    font-size: 20px;
  }
  
  .orbit-node__bubble {
    width: 46px;
    height: 46px;
  }
  
  .orbit-node__icon {
    width: 34px;
    height: 34px;
  }
  
}

/* Small Mobile */
@media (max-width: 480px) {
  .orbit-ring {
    --orbit-size-mobile: calc(var(--orbit-size) * 0.45);
  }
  
  .solar-system {
    min-height: 420px;
  }
  
  .orbit-core__inner {
    width: 48px;
    height: 48px;
  }
  
  .orbit-core__text {
    font-size: 18px;
  }
  
  .orbit-node__bubble {
    width: 44px;
    height: 44px;
  }
  
  .orbit-node__icon {
    width: 32px;
    height: 32px;
    padding: 1px;
  }
  
  .orbit-node__icon.is-dark {
    padding: 6px;
  }
}

/* Extra Small Mobile */
@media (max-width: 360px) {
  .orbit-ring {
    --orbit-size-mobile: calc(var(--orbit-size) * 0.38);
  }
  
  .solar-system {
    min-height: 360px;
  }
  
  .orbit-core__inner {
    width: 42px;
    height: 42px;
  }
  
  .orbit-core__text {
    font-size: 15px;
  }
  
  .orbit-node__bubble {
    width: 40px;
    height: 40px;
  }
  
  .orbit-node__icon {
    width: 30px;
    height: 30px;
  }
}
</style>
