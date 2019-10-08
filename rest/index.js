const Joi = require("@hapi/joi");
const Boom = require("@hapi/boom");

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
      path: "/products/{id}",
      handler: request => Data.getProduct(request.params.id) || Boom.notFound(),
      options: {
        validate: {
          params: {
            id: Joi.number()
          }
        }
      }
    });
  }
};
