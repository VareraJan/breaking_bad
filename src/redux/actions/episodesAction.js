import { CHARACTERS_COUNTER, DELETE_EPISODE, GET_ALL_EPISODES, SET_EPISODES, } from "../types/episodesType";

export const getEpisodeAll = (episodes) => ({
  type: GET_ALL_EPISODES,
  payload: episodes
})

export const setEpisode = (sorted) => ({
  type: SET_EPISODES,
  payload: sorted
})

export const deleteEpisode = (episode_id) => ({
  type: DELETE_EPISODE,
  payload: episode_id
})

export const charactersCaunter = (episode_id, operator, sorted) => ({
  type: CHARACTERS_COUNTER,
  payload: {episode_id, operator, sorted}
})
