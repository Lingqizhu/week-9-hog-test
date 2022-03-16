import {
  PROFILES_LIST,
  PROFILE_CREATE,
  PROFILE_UPDATE,
  PROFILE_DELETE } from '../constants/actionTypes';


export const getProfiles = () => async (dispatch) => {
  try {

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(
      "http://localhost:3001/profiles",
      config
    );
    dispatch({ type: PROFILES_LIST, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

/* export const createProfile = (profile) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.post(
      "http://localhost:3001/profile",
      config
    );

    dispatch({ type: PROFILE_CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (id, profile) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.put(
      "http://localhost:3001/update",
      {
        id,
        profile,
      },
      config
    );
    dispatch({ type: PROFILE_UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
}; */