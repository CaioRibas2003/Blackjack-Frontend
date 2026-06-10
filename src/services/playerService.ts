import { api } from "./api";
import type { CreatePlayerRequest } from "../types/createPlayerRequest";
import type { Player } from "../types/player";

export async function createPlayer(
  request: CreatePlayerRequest,
): Promise<Player> {
  const response = await api.post<Player>("/players", request);
  return response.data;
}
