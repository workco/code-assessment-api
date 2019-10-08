const { ApolloServer } = require("apollo-server-hapi");

const typeDefs = require("./defs");
const resolvers = require("./resolvers");

module.exports = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true
});
