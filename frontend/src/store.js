import { createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
//import getState from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {profilesReducer} from "./reducers/profilesReducers";
import {userLoginReducer} from "./reducers/userReducers";
import {employersReducer} from "./reducers/employersReducers";
import {persistStore,persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'//defaults to localstorage


const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  profilesList:profilesReducer,
});

/* const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)//creat a persisted reducer */

/* const saveToLocalStorage = (state)=>{
  const serializedState = JSON.stringify(state);
  window.localStorage.setItem('state',serializedState);
}

const loadFromLocalStorage = ()=>{
  const serializedState = window.localStorage.getItem('state');
  if(serializedState === null) return undefined;
  return JSON.parse(serializedState);
}

const persistedState = loadFromLocalStorage(); */



const userInfoFromStorage = localStorage.getItem("userLogin")
  ? JSON.parse(localStorage.getItem("userLogin"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

//const persistor = persistStore(store);
export default store;