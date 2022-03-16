import { useContext } from "react";
import AuthContext from "../AuthProvider";
import { ApiClient } from "../apiClient";




//Action Creators
export const getProfiles = () => async (dispatch) => {
  try {
    const { auth } = useContext(AuthContext);
    const client = new ApiClient(auth.token);
    const { data } = await client.getProfiles();
    dispatch({ type: "Fetchall", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createProfile =(profile)=>async (dispatch) =>{
    try {
        const { auth } = useContext(AuthContext);
        const client = new ApiClient(auth.token);
        const { data } = await client.addProfile(profile);
        dispatch({ type: "AddProfile", payload: data });
      } catch (error) {
        console.log(error.message);
      }
}
