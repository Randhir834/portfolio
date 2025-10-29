<template>
  <div class="home">
    <Hero />
    <Stats />
    <About />
    <Skills />
    <Experience />
    <ProjectsPreview />
    <Testimonials />
    <BlogPreview />
    <CallToAction />
  </div>
</template>

<script>
import Hero from '../components/Hero.vue'
import Stats from '../components/Stats.vue'
import About from '../components/About.vue'
import Skills from '../components/Skills.vue'
import Experience from '../components/Experience.vue'
import ProjectsPreview from '../components/ProjectsPreview.vue'
import Testimonials from '../components/Testimonials.vue'
import BlogPreview from '../components/BlogPreview.vue'
import CallToAction from '../components/CallToAction.vue'

export default {
  name: 'Home',
  components: {
    Hero,
    Stats,
    About,
    Skills,
    Experience,
    ProjectsPreview,
    Testimonials,
    BlogPreview,
    CallToAction
  }
}
</script>
