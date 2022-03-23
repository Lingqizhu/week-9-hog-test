import {
    PROFILES_LIST,
    PROFILE_CREATE,
    PROFILE_UPDATE,
    PROFILE_DELETE,
    PROFILE_DETAIL
  } from "../constants/profilesConstants";

  export const profilesReducer=(state = {profiles:[]}, action) => {
    switch (action.type) {
      case PROFILES_LIST:
        return {...state, profiles:action.payload};
      case PROFILE_CREATE:
          return {...state, profiles:[...state.profiles, action.payload]} ;
      case PROFILE_UPDATE:
        return {...state, profiles:state.profiles.map((profile) => (profile._id === action.payload._id ? action.payload : profile))};
      case PROFILE_DELETE:
        return {...state,profiles:state.profiles.filter((profile) => profile._id !== action.payload)};
      case PROFILE_DETAIL:
        return {...state, profile: action.payload};
      default:
        return state;
    }
  };

