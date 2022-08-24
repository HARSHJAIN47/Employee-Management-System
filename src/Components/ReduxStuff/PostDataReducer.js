import * as actionTypes from "./ActionTypes";
/* eslint-disable default-param-last */
const initialState = {
  // isLoading: false,
  // isAuthenticated: false,
  token: {},
};

const userStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.POST_DATA_SUCCESS:
      return { ...state, token: action.token };
    default:
      return state;
  }
};

export default userStateReducer;
