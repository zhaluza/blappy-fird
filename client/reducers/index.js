import {combineReducers} from "redux"
import birdReducer from "./birdReducer"
import mapReducer from "./mapReducer"

export default combineReducers({
  bird: birdReducer,
  map: mapReducer
});