<template>
  <div class="home">
    <Hero />
    <About />
    <Skills />
    <Experience />
    <ProjectsPreview />
    <BlogPreview />
    <CallToAction />
    <ContactSection />
  </div>
</template>

<script>
import Hero from '../components/Hero.vue'
import About from '../components/About.vue'
import Skills from '../components/Skills.vue'
import Experience from '../components/Experience.vue'
import ProjectsPreview from '../components/ProjectsPreview.vue'
import BlogPreview from '../components/BlogPreview.vue'
import CallToAction from '../components/CallToAction.vue'
import ContactSection from '../components/ContactSection.vue'

export default {
  name: 'Home',
  components: {
    Hero,
    About,
    Skills,
    Experience,
    ProjectsPreview,
    BlogPreview,
    CallToAction,
    ContactSection
  }
}
</script>
