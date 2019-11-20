const Joi = require("@hapi/joi");

const Data = require("../data/");

module.exports = {
  name: "WorkAndCo-CodeTest-Rest",
  version: "1.0.0",
  register(server) {
    server.route({
      method: "GET",
      path: "/products",
      handler: Data.getProducts
    });

    server.route({
      method: "GET",
      path: "/cart",
      handler: request => {
        return Data.calcCart(JSON.parse(request.query.items))
      }
    });
  }
};
