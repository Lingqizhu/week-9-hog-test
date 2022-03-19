import {
  PROFILES_LIST,
  PROFILE_CREATE,
  PROFILE_UPDATE,
  PROFILE_DELETE } from '../constants/profilesConstants';
  import axios from "axios";
  //import { useSelector } from "react-redux";
  const url = "http://localhost:3001/";

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

export const createProfile = (profile) => async (dispatch,getState) => {

    const {userLogin:{userInfo}}=getState();
    const config = {
      headers: {
        "Content-Type":"application/json",
        authorization: `${userInfo.token}`,
      },
    };
    const { data } = await axios.post(
      `${url}profile`,
      {profile},
       config
    );
    dispatch({ type: PROFILE_CREATE, payload: data });

};

export const updateProfile = (id, fname,sname,email,bio,cv,github,linkedin,portfolio,available,location,picture) => async (dispatch,getState) => {

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
        fname,sname,email,bio,cv,github,linkedin,portfolio,available,location,picture
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
