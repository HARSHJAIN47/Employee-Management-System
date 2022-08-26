import axiosInstance from "../axios";
import * as actionTypes from "./ActionTypes";

const PostData = (userData) => async (dispatch) => {
  const body = {
    email: userData.email,
    password: userData.password,
  };
  await axiosInstance.post("/login", body).then((res) => {
    localStorage.setItem("token", res.data.token);
    dispatch({
      type: actionTypes.POST_DATA_SUCCESS,
      payload: res.data.user,
    });
  });
};
export default PostData;
