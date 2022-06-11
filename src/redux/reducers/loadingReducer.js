import { SET_ERROR, SET_LOADING } from "../types/loadingType";

const initState = {
  loading: false,
  error: {}
}

const loadingReducer = (state = initState, action) => {
  const {type, payload} = action;
  switch (type) {
    case SET_LOADING:
      return {...state, loading: payload}
    case SET_ERROR:
      return {...state, error: payload}
    default: 
      return state
  }
}

export default loadingReducer;
