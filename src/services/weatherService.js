const apiClient = require("../utils/apiClient");
const { getCache, setCache } = require("./cacheService");

const getWeather = async (city) => {
  const key = `weather:${city.toLowerCase().trim()}`;
  const cached = await getCache(key);
  if (cached) return cached;
  try {
    const encodedCity = encodeURIComponent(city);
    const endpoint = `timeline/${encodedCity}?unitGroup=metric&key=${process.env.WEATHER_API_KEY}&include=current`;

    const res = await apiClient.get(endpoint);
    const data = res.data;

    await setCache(key, data);
    return data;
  } catch (err) {
    console.error("Weather API error:", err.response?.data || err.message);
    throw err;
  }
};

module.exports = { getWeather };
