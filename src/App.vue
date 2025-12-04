<template>
  <div id="app">
    <Navbar />
    <main class="flex-1">
      <router-view />
    </main>
      
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  components: { Navbar, Footer }
}
</script>

<style>
body {
  margin: 0;
  font-family: 'Arial', sans-serif;
}
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
