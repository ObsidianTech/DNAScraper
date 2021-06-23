import config from '../config.js';

export const state = () => ({
    scrappedLocations: [],
});

export const mutations = {

};

export const actions = {
    async search(commit, payload) {         
        const reformattedString = payload.replace(/\s+/g, '+');
        const searchString = `paternity+testing+service+${reformattedString}`;
        const test = await this.$axios
            .get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${searchString}&key=${config.API_KEY}`);
        console.log(test);
    },
};