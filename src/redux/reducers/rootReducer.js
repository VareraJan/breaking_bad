import { combineReducers } from "redux";
import episodesReducer from "./episodesReducer";
import loadingReducer from "./loadingReducer";
import sortedReducer from "./sortedReduser";

const rootReducer = combineReducers({
  episodes: episodesReducer,
  loading: loadingReducer,
  sorted: sortedReducer,
});

export default rootReducer;
