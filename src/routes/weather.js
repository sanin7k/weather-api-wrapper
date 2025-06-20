const weatherService = require("../services/weatherService");

async function routes(fastify, options) {
  fastify.get("/weather", async (request, reply) => {
    const { city } = request.query;

    if (!city) return reply.code(400).send({ error: "City is required" });

    try {
      const data = await weatherService.getWeather(city);
      return { data };
    } catch (err) {
      return reply.code(500).send({ error: "Failed to fetch weather" });
    }
  });
}

module.exports = routes;
