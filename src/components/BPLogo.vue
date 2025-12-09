<template>
  <img :src="bp_logo" alt="BP Logo" id="bp-logo">
</template>
<style scoped>
    #bp-logo {
        height: 47px;
    }
</style>
<script>
import bp_logo from '../assets/BP_white.png'

export default {
  data() {
    return {
      bp_logo
    }
  }
}
</script>
