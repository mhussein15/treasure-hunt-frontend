import * as types from "../actions/types";

export const fetchThingRandom = () => async (dispatch) => {
  try {
    const res = await instance.get("/thing/random");
    console.log(res.data);
    dispatch({
      type: types.FETCH_THING_RANDOM,
      payload: res.data,
    });
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

export const fetchThingTreasure = () => async (dispatch) => {
  try {
    const res = await instance.get("/thing/treasure");
    console.log(res.data);
    dispatch({
      type: types.FETCH_THING_TREASURE,
      payload: res.data,
    });
  } catch (error) {
    console.log("ERROR: ", error);
  }
};
