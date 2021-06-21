<template>
  <div class="homeWrapper">
    <h1 class="welcome">
      DNA Lcoation Scrapper
    </h1>
    <h3 class="instructions">
      Enter a city or location into the search bar, and any new results will appear below.
    </h3>
    <input v-model="searchInput" type="text" class="search">
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    const searchInput = "";
    return {
      searchInput,
    };
  },
};
</script>
