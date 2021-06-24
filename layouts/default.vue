<template>
  <div class="dna-app">
    <nuxt />
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('getLocations');
  },
};
</script>

<style>
.dna-app {
  width: 100%;
}
</style>