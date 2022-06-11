import { GET_EPISODES } from "../types/episodesType";

export const getEpisode = (episodes) => ({
  type: GET_EPISODES,
  payload: episodes
})
