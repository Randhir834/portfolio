<template>
  <section id="blog" class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="section-title">Latest Blog Posts</h2>
        <p class="text-gray-600 text-lg">Thoughts, tutorials, and insights on web development</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article 
          v-for="post in blogPosts" 
          :key="post.id"
          class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
        >
          <!-- Featured Image -->
          <div class="relative overflow-hidden h-48 bg-gradient-to-br from-blue-400 to-purple-500">
            <div class="absolute inset-0 flex items-center justify-center">
              <svg class="w-20 h-20 text-white opacity-50" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
              </svg>
            </div>
            <div class="absolute top-4 right-4">
              <span class="bg-white text-primary px-3 py-1 rounded-full text-sm font-semibold">
                {{ post.category }}
              </span>
            </div>
          </div>
          
          <!-- Content -->
          <div class="p-6">
            <!-- Meta Info -->
            <div class="flex items-center text-sm text-gray-500 mb-3">
              <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/>
              </svg>
              <span>{{ post.date }}</span>
              <span class="mx-2">•</span>
              <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
              </svg>
              <span>{{ post.readTime }} min read</span>
            </div>
            
            <!-- Title -->
            <h3 class="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors duration-300">
              {{ post.title }}
            </h3>
            
            <!-- Excerpt -->
            <p class="text-gray-600 mb-4 line-clamp-3">
              {{ post.excerpt }}
            </p>
            
            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span 
                v-for="tag in post.tags" 
                :key="tag"
                class="text-xs bg-blue-100 text-primary px-2 py-1 rounded"
              >
                #{{ tag }}
              </span>
            </div>
            
            <!-- Read More Link -->
            <a 
              href="#" 
              class="inline-flex items-center text-primary font-semibold hover:text-blue-700 transition-colors duration-300"
            >
              Read More
              <svg class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </article>
      </div>
      
      <!-- View All Button -->
      <div class="text-center mt-12">
        <a 
          href="#" 
          class="inline-flex items-center btn-primary"
        >
          View All Posts
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'BlogPreview',
  setup() {
    const blogPosts = ref([
      {
        id: 1,
        title: 'Building Scalable Vue.js Applications',
        excerpt: 'Learn best practices for structuring large-scale Vue.js applications with proper state management, routing, and component architecture.',
        date: 'Oct 15, 2025',
        readTime: 8,
        category: 'Tutorial',
        tags: ['Vue.js', 'JavaScript', 'Architecture']
      },
      {
        id: 2,
        title: 'Mastering Tailwind CSS: Tips & Tricks',
        excerpt: 'Discover advanced Tailwind CSS techniques to create beautiful, responsive designs faster and more efficiently.',
        date: 'Oct 10, 2025',
        readTime: 6,
        category: 'Design',
        tags: ['CSS', 'Tailwind', 'UI/UX']
      },
      {
        id: 3,
        title: 'Modern JavaScript ES2024 Features',
        excerpt: 'Explore the latest JavaScript features and how they can improve your code quality and developer experience.',
        date: 'Oct 5, 2025',
        readTime: 10,
        category: 'JavaScript',
        tags: ['JavaScript', 'ES2024', 'WebDev']
      }
    ])
    
    return {
      blogPosts
    }
  }
}
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
