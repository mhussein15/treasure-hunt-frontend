import { BsTypeStrikethrough } from "react-icons/bs";
import instance from "./instance";
import decode from "jwt-decode";
import * as types from "../actions/types";
import Cookies from "js-cookie";

export const setUser = (token) => {
  Cookies.set("myToken", token);
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;

  return {
    type: types.SET_USER,
    payload: decode(token),
  };
};

export const singup = (newUser, history) => {
  return async (dispatch) => {
    console.log("helo");
    try {
      const res = await instance.post("/signup", newUser);
      dispatch(setUser(res.data.token));

      history.replace("/"); //home page
      console.log("Welcome ");
    } catch (error) {
      console.log(error);
    }
  };
};

export const singin = (userData, history) => {
  return async (dispatch) => {
    console.log("helo");

    try {
      const res = await instance.post("/signin", userData);

      console.log(decode(res.data.token));
      dispatch(setUser(res.data.token));
      history.replace("/"); //home page
      console.log(`Hi ${userData.username}`);
    } catch (error) {
      console.log(error);
    }
  };
};

export const logout = () => {
  Cookies.remove("myToken");
  delete instance.defaults.headers.common.Authorization;

  return async (dispatch) => {
    console.log("logout ");
    try {
      dispatch({
        type: types.LOGOUT,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const checkForToken = () => (dispatch) => {
  const token = Cookies.get("myToken"); //will return myToken Values
  console.log("checkForToken -> token", Cookies.get("myToken"));

  if (token) {
    const currentTime = Date.now();
    const user = decode(token);
    if (user.exp >= currentTime) {
      dispatch(setUser(token));
    } else {
      dispatch(logout());
    }
  }
};
