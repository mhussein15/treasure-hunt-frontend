import * as types from "../actions/types";
const initialState = {
  things: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_THING_RANDOM:
      return {
        ...state,
        things: action.payload,
      };

    case types.FETCH_THING_TREASURE:
      return {
        ...state,
        things: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
