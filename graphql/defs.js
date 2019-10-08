const { gql } = require("apollo-server-hapi");

module.exports = gql`
  """
  A monetary value with currency
  """
  type Price {
    """
    The amount of money
    """
    value: Float!
    """
    The currency of the money
    """
    currency: String!
  }

  """
  An image stored remotely on a server
  """
  type Image {
    """
    The URL for the image
    """
    url: String!

    """
    The width of the image in pixels
    """
    width: Int!

    """
    The height of the image in pixels
    """
    height: Int!
  }

  """
  A product for sale
  """
  type Product {
    id: Int!
    """
    The product's name
    """
    title: String!
    """
    The product's current price
    """
    price: Price!
    """
    The number of product units currently in-stock
    """
    inventory: Int!
    """
    An image of the product
    """
    image: Image
  }

  type Query {
    """
    Returns all products
    """
    products: [Product!]!
    """
    Returns a product by the specified id, or null if not found
    """
    product(id: Int!): Product
  }
`;
