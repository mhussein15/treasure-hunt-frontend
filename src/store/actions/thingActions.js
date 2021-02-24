import * as types from "./types";
import instance from "./instance";
export const fetchThingRandom = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/thing/random");
      console.log("info", res.data);
      dispatch({
        type: "FETCH_THING_RANDOM",
        payload: { random: res.data },
      });
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };
};

export const fetchThingTreasure = () => async (dispatch) => {
  try {
    const res = await instance.get("/thing/treasure");
    dispatch({
      type: types.FETCH_THING_TREASURE,
      payload: res.data,
    });
  } catch (error) {
    console.log("ERROR: ", error);
  }
};
