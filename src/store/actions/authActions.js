import instance from "./instance";
import decode from "jwt-decode";
import * as types from "./types";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

export const setUser = (token) => {
  Cookies.set("myToken", token);
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  console.log(instance.defaults.headers)
  return {
    type: types.SET_USER,
    payload: decode(token),
  };
};

export const signup = (newUser, history) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signup", newUser);
      dispatch(setUser(res.data.token));
      toast.success("Welcome To Treasure Hunt");
      history.replace("/");
    } catch (error) {
      toast.error("Something is Wrong");
      console.log(error);
    }
  };
};

export const signin = (userData, history) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signin", userData);
      console.log(decode(res.data.token));
      dispatch(setUser(res.data.token));
      toast.success("Welcome To Treasure Hunt");
      history.replace("/"); //home page
      console.log(`Hi ${userData.username}`);
    } catch (error) {
      toast.error("Something is Wrong");
      console.log(error);
    }
  };
};

export const logout = (history) => {
  Cookies.remove("myToken");
  delete instance.defaults.headers.common.Authorization;
  history.replace("/"); //home page
  return async (dispatch) => {
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
