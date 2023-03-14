const { gql } = require("apollo-server")

// String, Int, Float, Boolean

exports.typeDefs = gql`
    type Query {
        hello: [String], 
        products(filter: ProductsFilterInput):[Product!]! 
        product(id: ID!): Product 
        categories:[Category!]!  
        category(id: ID!):Category
    }

    type Product {
        id: ID!,
        name: String!,
      description: String!,
      quantity: Int!,
      price: Float!,
      image: String!,
      onSale: Boolean!,       
        category: Category,
        reviews: [Reviews!]!
    }

    type Category {
        id:ID!,
        name: String!
        products: [Product!]! 
    }

    type Reviews {
        id: ID!,
        date: String!,
        title: String!,
        comment: String!,
        rating: Int!
    }

    input ProductsFilterInput {
        onSale: Boolean,
    }
`;