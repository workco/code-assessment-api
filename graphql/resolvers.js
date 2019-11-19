const Data = require("../data");

const toFixed = val => +(val.toFixed(2))

module.exports = {
  Query: {
    products: Data.getProducts,
    product(parent, { id }) {
      return Data.getProduct(id);
    },
    cart(parent, { items }) {
      const sum = items.reduce((acc, { id, count }) => {
        const product = Data.getProduct(id)
        if (product) {
          return acc + product.price.value * count
        }
        return acc
      }, 0)

      const subtotal = toFixed(sum)
      const tax = toFixed(subtotal * 0.08)
      const total = toFixed(subtotal + tax)

      return {
        subtotal: {
          value: subtotal,
          currency: 'USD'
        },
        tax: {
          value: tax,
          currency: 'USD'
        },
        total: {
          value: total,
          currency: 'USD'
        },
      }
    }
  }
};
