import { getEpisodeAll } from "../actions/episodesAction"
import { setError, setLoading } from "../actions/loadingAction"

export const getEpisodeThunk = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(process.env.REACT_APP_API_BREAKING_BAD)
      const data = await response.json()
      if (response.ok){
        dispatch(getEpisodeAll(data))
        dispatch(setLoading(false))
      } else {
        dispatch(setError({message: 'Ошибка загрузки эпизодов', error: data}))
        dispatch(setLoading(false))
  
      }
      
    } catch (error) {
      dispatch(setError({message: 'Ошибка загрузки эпизодов', error}))
      dispatch(setLoading(false))
      
    }
  }
}
