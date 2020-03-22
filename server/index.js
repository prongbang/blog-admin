const { Nuxt, Builder } = require("nuxt");
const fastify = require("fastify")({
  logger: true
});

// Import and Set Nuxt.js options
const config = require("../nuxt.config.js");
config.dev = process.env.NODE_ENV !== "production";

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config);

  const {
    host = process.env.HOST || "127.0.0.1",
    port = process.env.PORT || 3000
  } = nuxt.options.server;

  await nuxt.ready();
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  }

  // define routes for api here (maybe in extra files)
  // fastify.register(require("./api/routes"), { prefix: "/api" });

  fastify.get("/api/hello", async (request, reply) => {
    return { hello: "world" };
  });

  // fastify.use(nuxt.render)
  fastify.use((req, res, next) => {
    // let fastify handle api requests
    if (req.url.startsWith("/api")) {
      next();
    } else {
      // nuxt handles all other requests
      return nuxt.render(req, res);
    }
  });

  fastify.listen(port, host, (err, address) => {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    }
  });
}

start();
