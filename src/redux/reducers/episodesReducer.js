import { GET_EPISODES } from "../types/episodesType"

const initState = []

const episodesReducer = (state = initState, action) => {
  const {type, payload} = action
  switch (type) {
    case GET_EPISODES:
      return payload
    default: 
      return state
  }
}

export default episodesReducer;
