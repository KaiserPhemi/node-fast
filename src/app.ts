import Fastify from "fastify";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT
const fastify = Fastify({
  logger: true,
});

async function main() {
  try {
    await fastify.listen({ port: port ? parseInt(port) : 5555 });
    fastify.log.info(`Server listening on port ${port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

main();
