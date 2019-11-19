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
  A type of image
  """
  enum ImageType {
    default
    featured
  }

  """
  An image hosted on the server
  """
  type Image {
    """
    The relative path for the image
    """
    src: String!

    """
    The type of image
    """
    type: ImageType!
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
    images: [Image]
  }

  """
  An item in the cart
  """
  input CartItem {
    """
    Product ID
    """
    id: Int!
    """
    Quantity of item currently in cart
    """
    count: Int!
  }

  """
  Cart
  """
  type Cart {
    """
    Sum of items in cart, without tax
    """
    subtotal: Price
    """
    Tax on items in cart
    """
    tax: Price
    """
    Sum of items in cart, with tax
    """
    total: Price
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
    """
    Returns cart price breakdown
    """
    cart(items: [CartItem]!): Cart
  }
`;
