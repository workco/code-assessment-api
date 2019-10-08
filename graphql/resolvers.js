const Data = require("../data");

module.exports = {
  Query: {
    products: Data.getProducts,
    product(parent, { id }) {
      return Data.getProduct(id);
    }
  }
};
