import { api } from "./api";

import type {
  GameResponse,
  StartGameRequest,
  PlayerActionRequest,
} from "../types/Game";

export async function startGame(
  request: StartGameRequest,
): Promise<GameResponse> {
  const response = await api.post<GameResponse>("/blackjack/start", request);

  return response.data;
}

export async function hit(request: PlayerActionRequest): Promise<GameResponse> {
  const response = await api.post<GameResponse>("/blackjack/hit", request);

  return response.data;
}

export async function stand(
  request: PlayerActionRequest,
): Promise<GameResponse> {
  const response = await api.post<GameResponse>("/blackjack/stand", request);

  return response.data;
}

export async function dealerNext(
  request: ActionRequest,
): Promise<GameResponse> {
  const response = await api.post<GameResponse>(
    "/blackjack/dealer/next",
    request,
  );

  return response.data;
}
