<template>
  <footer class="footer sm:footer-horizontal footer-center bg-primary text-base-content p-4 sticky b-0">
    <aside>
      <p>Copyright © {{ year }} — All rights reserved by J.D.B. DA-AYAN.</p>
    </aside>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>
