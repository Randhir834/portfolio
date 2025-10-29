<template>
  <section id="contact" class="py-20 bg-gray-50">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-4xl font-bold text-center text-gray-900 mb-4">Get In Touch</h2>
      <div class="w-20 h-1 bg-primary mx-auto mb-12"></div>
      
      <form @submit.prevent="handleSubmit" class="bg-white p-8 rounded-lg shadow-md border border-gray-200">
        <div class="mb-6">
          <label for="name" class="block text-gray-700 font-semibold mb-2">Name *</label>
          <input 
            type="text" 
            id="name"
            v-model="formData.name"
            required
            minlength="2"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            placeholder="Your Name"
            :class="{ 'border-red-500': errors.name }"
          />
          <p v-if="errors.name" class="text-red-500 text-sm mt-1">{{ errors.name }}</p>
        </div>
        
        <div class="mb-6">
          <label for="email" class="block text-gray-700 font-semibold mb-2">Email *</label>
          <input 
            type="email" 
            id="email"
            v-model="formData.email"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            placeholder="your.email@example.com"
            :class="{ 'border-red-500': errors.email }"
          />
          <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
        </div>
        
        <div class="mb-6">
          <label for="message" class="block text-gray-700 font-semibold mb-2">Message *</label>
          <textarea 
            id="message"
            v-model="formData.message"
            required
            minlength="10"
            rows="5"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none transition-all"
            placeholder="Your message..."
            :class="{ 'border-red-500': errors.message }"
          ></textarea>
          <p v-if="errors.message" class="text-red-500 text-sm mt-1">{{ errors.message }}</p>
          <p class="text-gray-500 text-sm mt-1">{{ formData.message.length }} / 500 characters</p>
        </div>
        
        <button 
          type="submit" 
          class="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg w-full disabled:opacity-50 disabled:cursor-not-allowed"
          :disabled="isSubmitting"
        >
          <span v-if="!isSubmitting">Send Message</span>
          <span v-else class="flex items-center justify-center">
            <svg class="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </span>
        </button>
        
        <div v-if="submitMessage" class="mt-4 p-4 rounded-lg" :class="submitSuccess ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'">
          <div class="flex items-center">
            <svg v-if="submitSuccess" class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <svg v-else class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
            </svg>
            {{ submitMessage }}
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  name: 'ContactForm',
  setup() {
    const formData = reactive({
      name: '',
      email: '',
      message: ''
    })
    
    const errors = reactive({
      name: '',
      email: '',
      message: ''
    })
    
    const isSubmitting = ref(false)
    const submitMessage = ref('')
    const submitSuccess = ref(false)
    
    const validateForm = () => {
      let isValid = true
      
      // Reset errors
      errors.name = ''
      errors.email = ''
      errors.message = ''
      
      // Validate name
      if (formData.name.length < 2) {
        errors.name = 'Name must be at least 2 characters'
        isValid = false
      }
      
      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email)) {
        errors.email = 'Please enter a valid email address'
        isValid = false
      }
      
      // Validate message
      if (formData.message.length < 10) {
        errors.message = 'Message must be at least 10 characters'
        isValid = false
      }
      
      if (formData.message.length > 500) {
        errors.message = 'Message must not exceed 500 characters'
        isValid = false
      }
      
      return isValid
    }
    
    const handleSubmit = async () => {
      if (!validateForm()) {
        return
      }
      
      isSubmitting.value = true
      submitMessage.value = ''
      
      // Simulate form submission
      setTimeout(() => {
        console.log('Form submitted:', formData)
        submitSuccess.value = true
        submitMessage.value = 'Thank you! Your message has been sent successfully. I\'ll get back to you soon!'
        
        // Reset form
        formData.name = ''
        formData.email = ''
        formData.message = ''
        
        isSubmitting.value = false
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          submitMessage.value = ''
        }, 5000)
      }, 1500)
    }
    
    return {
      formData,
      errors,
      isSubmitting,
      submitMessage,
      submitSuccess,
      handleSubmit
    }
  }
}
</script>
