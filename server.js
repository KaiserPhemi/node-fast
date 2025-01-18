import Fastify from "fastify";

const fastify = Fastify({
  logger: true,
});

try {
  await fastify.listen({ port: 3000 });
} catch (error) {
  fastify.log.error(error);
  process.exit(1);
}
