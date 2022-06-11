import { SET_ERROR, SET_LOADING } from "../types/loadingType";

export const setLoading = (boolean) => ({
  type: SET_LOADING,
  payload: boolean
})

export const setError = (error) => ({
  type: SET_ERROR,
  payload: error
})
