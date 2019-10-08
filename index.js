const NConf = require("nconf");
const Hapi = require("@hapi/hapi");

NConf.argv().env();

NConf.defaults({
  PORT: "3000",
  HOST: "localhost"
});

const startServer = async () => {
  const server = Hapi.server({
    port: NConf.get("PORT"),
    host: NConf.get("HOST")
  });

  await server.register(require("./rest"), {
    routes: {
      prefix: "/rest"
    }
  });

  await server.start();
  console.log(`🚀  Server running on ${server.info.uri}`);
};

startServer();
