import { createStore, combineReducers, applyMiddleware } from "redux";
//import thunk from "redux-thunk";
//import { composeWithDevTools } from "redux-devtools-extension";

/* import {
  profileCreateReducer,
  profileDeleteReducer,
  profileListReducer,
  profileUpdateReducer,
} from "./reducers/profilesReducers"; */

import {
  userLoginReducer,
  //userRegisterReducer,
} from "./userReducers";

const Reducer = combineReducers({
  userLogin: userLoginReducer,
 // userRegister: userRegisterReducer,

  /* profileList: profileListReducer,
  profileCreate: profileCreateReducer,
  profileDelete: profileDeleteReducer,
  profileUpdate: profileUpdateReducer, */
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