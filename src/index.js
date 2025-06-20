require("dotenv").config();
const Fastify = require("fastify");
const cors = require("@fastify/cors");

const weatherRoutes = require("./routes/weather");

const fastify = Fastify({ logger: true });

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
