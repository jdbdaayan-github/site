<template>
  <div class="w-full bg-base-100 text-base-content">

    <!-- HERO SECTION (Banner stays) -->
    <section class="hero">
      <Banner />
    </section>

    <!-- FEATURES SECTION -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold text-center mb-12 text-primary">Why GAD Matters</h2>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

          <div class="card bg-white shadow-lg p-6 text-center border border-gray-200 hover:shadow-2xl transition-all">
            <h3 class="text-2xl font-bold mb-2 text-primary">Inclusivity</h3>
            <p>Promoting equal opportunities for all genders in the workplace and community.</p>
          </div>

          <div class="card bg-white shadow-lg p-6 text-center border border-gray-200 hover:shadow-2xl transition-all">
            <h3 class="text-2xl font-bold mb-2 text-primary">Empowerment</h3>
            <p>Providing knowledge, skills, and resources to support gender equality initiatives.</p>
          </div>

          <div class="card bg-white shadow-lg p-6 text-center border border-gray-200 hover:shadow-2xl transition-all">
            <h3 class="text-2xl font-bold mb-2 text-primary">Awareness</h3>
            <p>Sharing activities, policies, and programs to strengthen GAD understanding.</p>
          </div>

        </div>
      </div>
    </section>

    <!-- INFO SECTION -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-6 flex flex-col lg:flex-row gap-12 items-center">

        <div class="flex-1">
          <h2 class="text-4xl font-bold mb-4 text-primary">Access All GAD Resources Easily</h2>
          <p class="text-lg leading-relaxed text-gray-700">
            Explore our directories, activities, and resources designed to promote Gender and Development initiatives.
            Our platform helps offices, staff, and the public stay informed and engaged with GAD programs.
          </p>
          <button class="btn btn-primary mt-6">Learn More</button>
        </div>

        <div class="flex-1">
          <!-- Optional illustration placeholder -->
          <div class="skeleton h-64 w-full rounded-2xl bg-primary/10 flex items-center justify-center text-primary text-lg font-semibold">
            GAD Illustration
          </div>
        </div>

      </div>
    </section>

    <!-- CTA SECTION -->
    <section class="py-20 bg-gradient-to-r from-primary/80 to-secondary/80 text-white text-center">
      <h2 class="text-4xl font-bold mb-4">Join Our GAD Initiatives</h2>
      <p class="text-lg opacity-90 mb-8">
        Stay updated on events, trainings, and programs to promote Gender and Development in our organization.
      </p>
      <button class="btn btn-outline btn-lg text-white border-white">
        Get Involved
      </button>
    </section>

  </div>
</template>

<script>
import Banner from '../components/Banner.vue';

export default {
  name: 'HomePage',
  components: { Banner }
}
</script>

<style scoped>
.hover-3d {
  position: relative;
  perspective: 1200px;
}
.hover-3d:hover figure {
  transform: rotateY(10deg) rotateX(5deg);
  transition: 0.3s ease;
}
.hover-3d div {
  position: absolute;
  inset: 0;
}
</style>
