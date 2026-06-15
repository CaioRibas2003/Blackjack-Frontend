import { api } from "./api";
import type { CreatePlayerRequest } from "../types/CreatePlayerRequest";
import type { Player } from "../types/Player";

export async function createPlayer(
  request: CreatePlayerRequest,
): Promise<Player> {
  const response = await api.post<Player>("/players", request);
  return response.data;
}
