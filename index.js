const Path = require("path");
const NConf = require("nconf");
const Hapi = require("@hapi/hapi");
const Inert = require("@hapi/inert");

NConf.argv().env();

NConf.defaults({
  PORT: "3000",
  HOST: "localhost"
});

const startServer = async () => {
  const server = Hapi.server({
    port: NConf.get("PORT"),
    host: NConf.get("HOST"),
    routes: {
      cors: true,
      files: {
          relativeTo: Path.join(__dirname, "static")
      }
    }
  });

  await server.register(require("./rest"), {
    routes: {
      prefix: "/rest"
    }
  });

  const graphQLServer = require("./graphql");
  graphQLServer.applyMiddleware({ app: server });
  graphQLServer.installSubscriptionHandlers(server.listener);

  await server.register(Inert);
  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: '.',
            redirectToSlash: true,
            index: true,
        }
    }
  });

  await server.start();
  console.log(`🚀  Server running on ${server.info.uri}`);
};

startServer();
