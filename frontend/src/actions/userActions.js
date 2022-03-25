import { useNavigate } from "react-router";
import {
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from "../constants/userConstants";
import axios from "axios";
const url = "https://jobsite-backend-lin.herokuapp.com/";
//const url = "http://localhost:3001/";


export const login = (email, password) => async (dispatch) => {
  /* const navigate=useNavigate() */
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.post(
      `${url}login`,
      {
        email,
        password,
      },
      config
    );
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    window.localStorage.setItem("userLogin", JSON.stringify(data));
    /* navigate('/landingpage'); */
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem("userLogin");
  dispatch({ type: USER_LOGOUT });
};

