import {
  PROFILES_LIST,
  PROFILE_CREATE,
  PROFILE_UPDATE,
  PROFILE_DELETE,
  PROFILE_DETAIL
} from '../constants/profilesConstants';
  import axios from "axios";
  //import { useSelector } from "react-redux";
  const url = "https://jobsite-backend-lin.herokuapp.com/";
  //const url = "http://localhost:3001/";

export const getProfiles = () => async (dispatch,getState) => {

  const {userLogin:{userInfo}}=getState();
    const config = {
      headers: {
        Authorization: `${userInfo.token}`
      },
    };
    const { data } = await axios.get(
      `${url}profiles`,
      config
    );
    dispatch({ type: PROFILES_LIST, payload: data });


};

export const createProfile = (fname,sname,email,bio,cv,github,linkedin,portfolio,available,location,picture,skills,hired) => async (dispatch,getState) => {

    const {userLogin:{userInfo}}=getState();
    const config = {
      headers: {
        "Content-Type":"application/json",
        authorization: `${userInfo.token}`,
      },
    };
    const { data } = await axios.post(
      `${url}profile`,
      {fname,sname,email,bio,cv,github,linkedin,portfolio,available,location,picture,skills,hired},
       config
    );
    dispatch({ type: PROFILE_CREATE, payload: data });

};

export const updateProfile = (id, fname,sname,email,bio,cv,github,linkedin,portfolio,available,location,picture,skills,hired) => async (dispatch,getState) => {
    console.log("updateprofile", available)
    const {userLogin:{userInfo}}=getState();
    const config = {
      headers: {
        "Content-type":"application/json",
        authorization: `${userInfo.token}`,
      },
    };
    const { data } = await axios.put(
      `${url}update/${id}`,
      {
        fname,sname,email,bio,cv,github,linkedin,portfolio,available,location,picture,skills,hired
      },
      config
    );
    dispatch({ type: PROFILE_UPDATE, payload: data });

};

export const deleteProfile = (id) => async (dispatch,getState) => {

    const {userLogin:{userInfo}}=getState();
    const config = {
      headers: {
        Authorization: `${userInfo.token}`
      },
    };
    const { data } = await axios.delete(
      `${url}delete/${id}`,
      config
    );

    dispatch({ type: PROFILE_DELETE, payload: id });

};

export const getProfile = (id) => async (dispatch,getState) => {

  const {userLogin:{userInfo}}=getState();
    const config = {
      headers: {
        Authorization: `${userInfo.token}`
      },
    };
    const { data } = await axios.get(
      `${url}profiles/${id}`,
      config
    );
    dispatch({ type: PROFILE_DETAIL, payload: data });


};
