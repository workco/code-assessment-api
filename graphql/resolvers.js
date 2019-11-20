const Data = require("../data");


module.exports = {
  Query: {
    products: Data.getProducts,
    cart(parent, { items }) {
      return Data.calcCart(items);
    }
  }
};
