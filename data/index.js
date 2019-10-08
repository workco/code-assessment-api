const _ = require("lodash");

const products = require("./products.json");

module.exports = {
  getProducts: () => products,
  getProduct: id => _.find(products, _.matchesProperty("id", id))
};
