import { getEpisode } from "../actions/episodesAction"

export const getEpisodeThunk = () => {
  return async (dispatch) => {
    const response = await fetch(process.env.REACT_APP_API_BREAKING_BAD)
    const data = await response.json()
    if (response.ok){
      dispatch(getEpisode(data))
      // setLoading(false)
    } else {
      // setErr({message: 'Ошибка загрузки эпизодов', error: data})
      // setLoading(false)
    }
  }
}
