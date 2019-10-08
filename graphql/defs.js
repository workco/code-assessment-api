const { gql } = require("apollo-server-hapi");

module.exports = gql`
  type Price {
    value: Float!
    currency: String!
  }

  type Image {
    url: String!
    width: Int!
    height: Int!
  }

  type Product {
    id: Int!
    title: String!
    price: Price!
    inventory: Int!
    image: Image
  }

  type Query {
    products: [Product!]!
    product(id: Int!): Product
  }
`;
