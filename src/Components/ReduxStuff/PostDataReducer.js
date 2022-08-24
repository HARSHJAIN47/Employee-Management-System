const initialState = { isLoading: false, isAuthenticated: false };

const postTheData = (action, state = initialState) => {
  switch (action.type) {
    case "post data":
      return { ...state };
    default:
      return state;
  }
};

export default postTheData;
