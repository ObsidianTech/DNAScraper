<template>
  <section class="section">
    <h1 class="welcome">DNA Location Scraper</h1>
    <h3 class="instructions">
      Search a city below and check the table for updates.
    </h3>
    <input v-model="searchInput" type="text" class="searchBar">
    <button @click="sendToSearch" class="submit">Search</button>
  </section>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    const searchInput = "";
    return {
      searchInput,
    };
  },
  methods: {
    sendToSearch() {
      this.$store.dispatch('search', this.searchInput);
    },
  },
};
</script>

<style lang="sass" scoped>

</style>