import { CHARACTERS_COUNTER, DELETE_EPISODE, GET_ALL_EPISODES, SET_EPISODES } from "../types/episodesType"

const initState = []


const sortedEpisode = (sort, eps) => {
  if (sort) {
    let sortEpisodes =  JSON.parse(JSON.stringify(eps));

    if(sort === 'up') {
      sortEpisodes.sort((a, b) => {
        return a.characters.length - b.characters.length
      })
    }
    if(sort === 'down') {
        sortEpisodes.sort((a, b) => {
        return b.characters.length - a.characters.length
      })
    }
    return sortEpisodes
  }
}

const episodesReducer = (state = initState, action) => {
  const {type, payload} = action
  switch (type) {
    case GET_ALL_EPISODES:
      return payload

    case SET_EPISODES:
      const newEpisodes = sortedEpisode(payload, state)
      return newEpisodes

    case DELETE_EPISODE:
      return state.filter(ep => ep.episode_id !== payload)
    
    case CHARACTERS_COUNTER:
      const {episode_id, operator, sorted} = payload;
      if (sorted) {
        return  sortedEpisode(
          sorted,
          state.map(ep => {
            if (ep.episode_id === episode_id) {
              operator === '+' ?  ep.characters.push('_') : ep.characters.pop()
            }
            return ep
          })
        ) 
      } else {
        return JSON.parse(JSON.stringify(state)).map(ep => {
          if (ep.episode_id === episode_id) {
            operator === '+' ?  ep.characters.push('_') : ep.characters.pop()
          }
          return ep
        })
      }
    default: 
      return state
  }
}

export default episodesReducer;
