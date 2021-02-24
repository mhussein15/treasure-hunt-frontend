import * as types from "../actions/types";
const initialState = {
  random: [],
  randomLoader:false,
  treasure: [],
  treasureLoader:false,

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_THING_RANDOM":
      return {
        ...state,
        random: action.payload.random,
        randomLoader:true
      };

    case types.FETCH_THING_TREASURE:
      return {
        ...state,
        treasure: action.payload,
        treasureLoader:true,

      };

    default:
      return state;
  }
};

export default reducer;
