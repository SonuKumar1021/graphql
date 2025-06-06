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
  Review: {
    game: (parent: {game_id: string}) => {
      return db.games.find(game => game.id === parent.game_id);
    },
    author: (parent: {author_id: string}) => {
      return db.authors.find(author => author.id === parent.author_id);
    },
  },
  Game: {
    gameReviews: (parent: {id: string}) => {
      return db.reviews.filter(review => review.game_id === parent.id);
    },
  },
  Author: {
    authorReviews: (parent: {id: string}) => {
      return db.reviews.filter(review => review.author_id === parent.id);
    },
  },
};
