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
     /*  case LIKE:
          return profiles.map((post) => (post._id === action.payload._id ? action.payload : post)); */
      default:
        return state;
    }
  };

  /* export const profileCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case PROFILE_CREATE:
        return action.payload;
      default:
        return state;
    }
  }; */

 /*  export const profileUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case PROFILES_UPDATE_REQUEST:
        return { loading: true };
      case PROFILES_UPDATE_SUCCESS:
        return { loading: false, success: true };
      case PROFILES_UPDATE_FAIL:
        return { loading: false, error: action.payload, success: false };

      default:
        return state;
    }
  };

  export const profileDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case PROFILES_DELETE_REQUEST:
        return { loading: true };
      case PROFILES_DELETE_SUCCESS:
        return { loading: false, success: true };
      case PROFILES_DELETE_FAIL:
        return { loading: false, error: action.payload, success: false };

      default:
        return state;
    }
  }; */