import config from '../config.js';

export const state = () => ({
    scrapedLocations: [],
    searchError: false,
});

export const mutations = {
    setLocations(state, payload) {
        state.scrapedLocations = payload;
    },
    searchError(state) {
        state.searchError = true;
    }
};

export const actions = {
    async search({commit, dispatch}, payload) { 
        const reformattedString = payload.replace(/\s+/g, '+').toLowerCase(); 
        const reformattedString2 = reformattedString.replace(/,/g, '+');
        try {
            await this.$axios.get(config.API + 'search/' + reformattedString2);
            dispatch('getLocations');
        } catch(e) {
            commit('searchError');
        }
    },

    async getLocations({commit}) {
        const locations = await this.$axios.get(config.API + 'locations');
        commit('setLocations', locations.data.reverse());
    },
};