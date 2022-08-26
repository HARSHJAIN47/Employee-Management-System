import * as actionTypes from "./ActionTypes";
/* eslint-disable default-param-last */
const initialState = {
  user: { email: "", password: "" },
};

const userStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.POST_DATA_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default userStateReducer;
