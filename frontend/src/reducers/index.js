import { createStore, combineReducers, applyMiddleware } from "redux";

import {profilesReducer} from "./profilesReducers";

import {userLoginReducer} from "./userReducers";

const Reducer = combineReducers({
  userLogin: userLoginReducer,
 profilesList:profilesReducer,

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