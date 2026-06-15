import type { card } from "./Card";

export type GameResponse = {
  playerCards: card[];
  dealerCards: card[];
  playerScore: number;
  dealerScore: number;
  status: string;
  playerAmount: number;
  bet: number;
  message: string;
};

export type StartGameRequest = {
  playerId: number;
  bet: number;
};

export type PlayerActionRequest = {
  playerId: number;
};
