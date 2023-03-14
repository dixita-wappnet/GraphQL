const { ApolloServer, gql } = require("apollo-server");
const {typeDefs} = require("./schema");
const {Query} = require("./resolvers/Query");
const {Category} = require("./resolvers/Category");
const {Product} = require("./resolvers/Product");
const {categories,Users,reviews} = require("./db");
const server = new ApolloServer({
    typeDefs,
    resolvers:{
        Query,
        Category,
        Product
    },
    context :{
        categories,
        Users,
        reviews,

    }
});

server.listen().then(({ url }) => {
    console.log("server is ready at " + url)
});