import { combineReducers } from "redux";
import episodesReducer from "./episodesReducer";

const rootReducer = combineReducers({
  episodes: episodesReducer
});

export default rootReducer;
