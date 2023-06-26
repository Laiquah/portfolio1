<template>
    <div>
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
              <a class="navbar-brand" href="#"><img src="" loading="lazy" class="img-fluid" alt="logo"></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="../views/HomeView.vue">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page"><router-link to="../views/AboutView.vue">About</router-link></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page" href=""><router-link to="../views/EducationandskillsView.vue">Education</router-link></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#"><router-link to="../views/ProjectView.vue">Project</router-link></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#"><router-link to="../views/TestimonialView.vue">Testimonial</router-link></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#"><router-link to="../views/ContactView.vue">Contact</router-link></a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>