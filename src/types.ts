export interface IGameInput {
  title: string;
  platform: string[];
}

export interface IAddGame {
  addGame: IGameInput;
}

export interface IEditGame {
  id: string;
  editGame: IGameInput;
}
