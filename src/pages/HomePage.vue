<template>
  <div class="w-full">

    <!-- HERO SECTION -->
    <section class="hero">
      <Banner/>
    </section>

    <!-- FEATURES SECTION -->
    <section class="py-20 bg-base-100">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold text-center mb-12">Why Choose Us?</h2>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

          <div class="card bg-base-200 shadow-xl p-6 text-center">
            <h3 class="text-2xl font-bold mb-2">Fast</h3>
            <p>Optimized performance with modern UI tools.</p>
          </div>

          <div class="card bg-base-200 shadow-xl p-6 text-center">
            <h3 class="text-2xl font-bold mb-2">Responsive</h3>
            <p>Looks clean and perfect on all screen sizes.</p>
          </div>

          <div class="card bg-base-200 shadow-xl p-6 text-center">
            <h3 class="text-2xl font-bold mb-2">Beautiful</h3>
            <p>Crafted with DaisyUI components for great visuals.</p>
          </div>

        </div>
      </div>
    </section>

    <!-- INFO SECTION -->
    <section class="py-20 bg-base-200">
      <div class="container mx-auto px-6 flex flex-col lg:flex-row gap-12 items-center">

        <div class="flex-1">
          <h2 class="text-4xl font-bold mb-4">Modern UI Built Effortlessly</h2>
          <p class="text-lg leading-relaxed">
            With Vue and DaisyUI, building beautiful interfaces becomes easier than ever.
            Reusable components, customizable themes, and Tailwind utilities give you full control
            of your design.
          </p>
          <button class="btn btn-secondary mt-6">Learn More</button>
        </div>

        <div class="flex-1">
          <div class="skeleton h-64 w-full rounded-2xl"></div>
        </div>

      </div>
    </section>

    <!-- CTA SECTION -->
    <section class="py-20 bg-gradient-to-r from-primary to-secondary text-white text-center">
      <h2 class="text-4xl font-bold mb-4">Start Building Beautiful Websites Today</h2>
      <p class="text-lg opacity-90 mb-8">
        Vue + Tailwind + DaisyUI = perfect combination for fast, modern web design.
      </p>
      <button class="btn btn-outline btn-lg text-white border-white">
        Join Now
      </button>
    </section>

  </div>
</template>

<script>
import Banner from '../components/Banner.vue';

export default {
  name: 'HomePage',
  components : {Banner}
}
</script>

<style scoped>
/* Optional: custom 3D hover effect if you're really using it */
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
