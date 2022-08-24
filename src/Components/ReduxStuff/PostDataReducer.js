/* eslint-disable default-param-last */
const initialState = { isLoading: false, isAuthenticated: false };

const userStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case "post data":
      return { ...state };
    default:
      return state;
  }
};

export default userStateReducer;
