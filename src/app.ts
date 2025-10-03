import Fastify from "fastify";

const fastify = Fastify({
  logger: true,
});

try {
   fastify.listen({ port: 5555 });
} catch (error) {
  fastify.log.error(error);
  process.exit(1);
}
