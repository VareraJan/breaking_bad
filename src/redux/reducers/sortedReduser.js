import { SET_SORTED } from "../types/sortedType";

const initState = ''

const sortedReducer = (state = initState, action) =>{
  const {type, payload} = action;
  switch (type) {
    case SET_SORTED:
      return payload
    default: 
      return state
  }
}

export default sortedReducer;
