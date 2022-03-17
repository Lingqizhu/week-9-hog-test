import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {profilesReducer} from "./reducers/profilesReducers";
import {userLoginReducer} from "./reducers/userReducers";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  profilesList:profilesReducer
});

const userInfoFromStorage = localStorage.getItem("userLogin")
  ? JSON.parse(localStorage.getItem("userLogin"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;