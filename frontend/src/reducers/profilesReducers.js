import {
    PROFILES_LIST,
    PROFILE_CREATE,
    PROFILE_UPDATE,
    PROFILE_DELETE
  } from "../constants/profilesConstants";

  export const profilesReducer=(state = [], action) => {
    switch (action.type) {
      case PROFILES_LIST:
        return action.payload;
      case PROFILE_CREATE:
          return [...state, action.payload];
      case PROFILE_UPDATE:
        return state.map((profile) => (profile._id === action.payload._id ? action.payload : profile));
      case PROFILE_DELETE:
        return state.filter((profile) => profile._id !== action.payload);
      default:
        return state;
    }
  };

