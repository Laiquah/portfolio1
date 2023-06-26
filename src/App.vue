<template>
  <div>
    <Navbar/>
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Navbar from '@/components/Navbar.vue'
import Home from '@/views/HomeView.vue'
import About from '@/views/AboutView.vue'
import Education from '@/views/EducationandskillsView.vue'
import Project from '@/views/ProjectView.vue'
import Testimonial from './views/TestimonialView.vue'
import Contact from '@/views/ContactView.vue'
  export default {
    components: {
      Navbar,
      Footer,
      Home,
      About,
      Education,
      Project,
      Testimonial,
      Contact
    }
  }
</script>

<style scoped>

</style>
