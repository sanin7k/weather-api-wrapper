const Redis = require("ioredis");
const redis = new Redis(process.env.REDIS_URL);

const EXPIRY = 60 * 60 * 12;

const getCache = async (key) => {
  const data = await redis.get(key);
  return data ? JSON.parse(data) : null;
};

const setCache = async (key, value) => {
  await redis.set(key, JSON.stringify(value), "EX", EXPIRY);
};

module.exports = { getCache, setCache };
