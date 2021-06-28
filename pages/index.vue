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
    <input v-model="filterInput" type="text" class="searchBar">
    <h2 class="tableName">Locations</h2>
    <h5>Total: {{ locations.length }}</h5>
    <div class="tableWrapper">
      <b-table 
        v-if="filterInput"
        :data="filteredList" 
        :columns="columns"
        :bordered="false"
        :striped="true"
        :narrowed="true"
        :hoverable="true"
        :loading="!isLoading"
      >
      </b-table>
      <b-table 
        v-else
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
    const filteredList = [];
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
      filteredList,
      columns,
    };
  },
  computed: {
    locations() {
      return this.$store.state.scrapedLocations;
    },
    isLoading() {
      return this.locations.length > 0;
    },
  },
  methods: {
    sendToSearch() {
      this.$store.dispatch('search', this.searchInput);
    },
  },
  watch: {
    filterInput(newVal) {
      const filtered = [];
      this.locations.map(l => {
        if(l.businessName.includes(newVal) || l.address.includes(newVal)) {
          filtered.push(l);
        }
      });
      this.filterInput = filtered;
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