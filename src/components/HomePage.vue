<template>
  <section class="home">
    <h1>Welcome to My Vue Website</h1>
    <p>This is a modern website built with Vue 3 and Vite.</p>
    <router-link to="/about" class="btn">Learn More</router-link>
  </section>
</template>

<script>
export default { name: 'HomePage' }
</script>

<style scoped>
.home {
  text-align: center;
  padding: 4rem 2rem;
}
.btn {
  display: inline-block;
  margin-top: 2rem;
  padding: 0.5rem 1.5rem;
  background-color: #4f46e5;
  color: white;
  text-decoration: none;
  border-radius: 4px;
}
.btn:hover {
  background-color: #3730a3;
}
</style>
