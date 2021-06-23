const axios = require('axios');
const mongoDb = require('mongodb');
const crypto = require('crypto');
const googleApiKey = process.env.GOOGLE_API_KEY;

exports.handler = async function(event) {
    const searchCriteria = event.queryStringParameters.search;
    const geocodeResponse = await axios
        .get(`https://maps.googleapis.com/maps/api/geocode/json?address=${searchCriteria}&key=${googleApiKey}`)
    return JSON.stringify(geocodeResponse);
};