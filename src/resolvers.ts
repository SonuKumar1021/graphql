import db from "./_db";
import {IAddGame, IEditGame} from "./types";

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

  Mutation: {
    addGame: (_: any, args: IAddGame) => {
      const generatedIds = Math.floor(Math.random() * 10).toString();
      const game = {...args.addGame, id: generatedIds};
      if (db.games.find((g: any) => g.id === game.id))
        throw new Error("Game already exists!");
      db.games.push(game);
      return game;
    },

    updateGame: (_: any, args: IEditGame) => {
      db.games = db.games.map(game => {
        if (game.id === args.id) return {...game, ...args.editGame};
        return game;
      });

      const game = db.games.find(game => game.id === args.id);
      if (game) {
        return game;
      }
      throw new Error("Id doesn't exist");
    },

    deleteGame: (_: any, args: {id: string}) => {
      const isRecordExist = db.games.find(game => game.id === args.id);
      if (isRecordExist) {
        db.games = db.games.filter(game => game.id !== args.id);
        return `Record having id:${args.id} have been deleted`;
      }
      throw new Error("Id doesn't exist");
    },
  },
};
