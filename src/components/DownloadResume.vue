<template>
  <div class="flex justify-center py-8">
    <button 
      @click="downloadResume"
      class="inline-flex items-center bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
    >
      <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
      </svg>
      Download Resume
    </button>
  </div>
</template>

<script>
export default {
  name: 'DownloadResume',
  methods: {
    downloadResume() {
      // Create a link element
      const link = document.createElement('a')
      link.href = '/resume.pdf' // Place your resume.pdf in the public folder
      link.download = 'Randhir_Kumar_Resume.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      // Show notification
      alert('Resume download started! If the download doesn\'t start automatically, please add your resume.pdf file to the public folder.')
    }
  }
}
</script>
