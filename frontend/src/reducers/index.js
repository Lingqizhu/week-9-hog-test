import { createStore, combineReducers, applyMiddleware } from "redux";

import {profilesReducer,profileCreateReducer} from "./profilesReducers";

import {userLoginReducer} from "./userReducers";

const Reducer = combineReducers({
  userLogin: userLoginReducer,
 profilesList:profilesReducer,
 //profileCreat:profileCreateReducer
});

/* const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
}; */

/* const initialState={};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); */

export default Reducer;