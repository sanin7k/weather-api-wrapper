const axios = require("axios");

const apiClient = axios.create({
  baseURL:
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/",
  timeout: 5000,
});

module.exports = apiClient;
