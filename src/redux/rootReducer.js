import { combineReducers } from "redux";
import shopReducer from "./Shopping/reducer";
const rootReducer = combineReducers({
  shop: shopReducer,
});

export default rootReducer;
