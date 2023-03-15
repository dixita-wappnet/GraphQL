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

    type Mutation {
        addCategory(input: AddCategoryInput): Category!
        addProduct(input: AddProductInput): Product!
        addReview(input: AddReviewInput): Reviews!
        deleteCategory(id: ID!): Boolean! 
        deleteProduct(id: ID!): Boolean! 
        deleteReview(id: ID!): Boolean! 
        updateCategory(id: ID!, input:UpdateCategoryInput!): Category
        updateProduct(id: ID!, input:UpdateProductInput!): Product
        updateReview(id: ID!, input:UpdateReviewInput!): Reviews
    }

    type Product {
        id: ID!,
        name: String!,
        description: String!,
        quantity: Int!,
        price: Float!,
        image: String!,
        onSale: Boolean!,       
        category: Category
        reviews: [Reviews!]!
    }

    type Category {
        id:ID!,
        name: String!
        products(filter: ProductsFilterInput): [Product!]! 
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

    input AddCategoryInput{
        name: String!
    }

    input UpdateCategoryInput {
        name: String!
    }

    input AddProductInput{
        name: String!,
        description: String!,
        quantity: Int!,
        price: Float!,
        image: String!,
        onSale: Boolean!,  
        categoryId: String!
    }

    input UpdateProductInput {
        name: String!,
        description: String!,
        quantity: Int!,
        price: Float!,
        image: String!,
        onSale: Boolean!,  
        categoryId: String
    }

    input AddReviewInput{
        date: String!,
        title: String!,
        comment: String!,
        rating: Int!,
        productId: String!
    }

    input UpdateReviewInput{
        date: String!,
        title: String!,
        comment: String!,
        rating: Int!,
        productId: String
    }
`;