import db from "./_db";

export const resolvers = {
  Query: {
    games: () => db.games,
    game: (_: any, args: {id: string}) => {
      return db.games.find(game => game.id === args.id);
    },
    authors: () => db.authors,
    author: (_: any, args: {id: string}) => {
      return db.authors.find(author => author.id === args.id);
    },
    reviews: () => db.reviews,
    review: (_: any, args: {id: string}) => {
      return db.reviews.find(review => review.id === args.id);
    },
  },
};
