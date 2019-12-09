const _ = require("lodash");

const products = require("./products.json");

const toFixed = val => +(val.toFixed(2))

const getProduct = id => _.find(products, _.matchesProperty("id", id))

module.exports = {
  getProducts: () => products,
  calcCart: items => {
    const sum = items.reduce((acc, { id, count }) => {
      const product = getProduct(id)
      if (product) {
        return acc + product.price.value * count
      }
      return acc
    }, 0)

    const subtotal = toFixed(sum)
    const tax = toFixed(subtotal * 0.08)
    const total = toFixed(subtotal + tax)

    const shipping = subtotal >= 50 ? 0 : 12

    return {
      subtotal: {
        value: subtotal,
        currency: 'USD'
      },
      tax: {
        value: tax,
        currency: 'USD'
      },
      shipping: {
        value: shipping,
        currency: 'USD'
      },
      total: {
        value: total,
        currency: 'USD'
      },
    }
  }
};
