export const typeDefs = `#graphql
type Game {
    id:ID!
    title:String!
    platform: [String!]!
    gameReviews: [Review!]
}

type Author {
    id: ID!
    name: String!
    verified: Boolean!
    authorReviews: [Review!]
}

type Review {
    id: ID!
    rating: Int!
    content: String!
    game: Game!
    author: Author!
}

type Query {
    games: [Game]
    game(id: ID!): Game
    authors: [Author]
    author(id: ID!): Author
    reviews: [Review]
    review(id: ID!): Review
}
`;
