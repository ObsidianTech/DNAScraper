<template>
  <section class="homeWrapper">
    <h1 class="welcome">DNA Location Scraper</h1>
    <h3 class="instructions">
      Search a city below and check the table for updates.
    </h3>
    <input v-model="searchInput" type="text" class="searchBar">
    <button @click="sendToSearch" class="submit">Search</button>
    <h3 class="instructions">
      Search through the list of existing records here.
    </h3>
    <input 
      v-model="filterInput" 
      type="text" 
      class="searchBar"
    >
    <h2 class="tableName">Locations</h2>
    <h5>Total: {{ locations.length }}</h5>
    <div class="tableWrapper">
      <b-table 
        :data="locations"
        :columns="columns"
        :bordered="false"
        :striped="true"
        :narrowed="true"
        :hoverable="true"
        :loading="!isLoading"
      >
      </b-table>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
  data() {
    const searchInput = "";
    const filterInput = "";
    const columns = [
      {
        field: 'businessName',
        label: 'Name',
      },

      {
        field: 'address',
        label: 'Address',
      },

      {
        field: 'phoneNumber',
        label: 'Phone Number'
      },

      {
        field: 'googleRating',
        label: 'Rating',
        numeric: true,
      }
    ];

    return {
      searchInput,
      filterInput,
      columns,
    };
  },
  computed: {
    scrapedLocations() {
      return this.$store.state.scrapedLocations;
    },
    isLoading() {
      return this.scrapedLocations.length > 0;
    },
    locations() {
      if(this.filterInput) {
        var filter = []; 
        this.scrapedLocations.forEach(s => {
          if(s.businessName.toLowerCase().includes(this.filterInput.toLowerCase()) ||
            s.address.toLowerCase().includes(this.filterInput.toLowerCase())) {
              filter.push(s);
            }
        });
        return filter;
      }
      return this.scrapedLocations;
    },
  },
  methods: {
    sendToSearch() {
      this.$store.dispatch('search', this.searchInput);
    },
  },
};
</script>

<style scoped>
.homeWrapper {
  height: 100%;
  width: 100%;
  padding: 25px;
  overflow-wrap: break-word;
}
</style>