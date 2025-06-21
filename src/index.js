require("dotenv").config();
const fastify = require("fastify")({ logger: true });
const cors = require("@fastify/cors");

const weatherRoutes = require("./routes/weather");

fastify.register(cors);
fastify.register(weatherRoutes);

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    console.log("Server running at http://localhost:3000");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
