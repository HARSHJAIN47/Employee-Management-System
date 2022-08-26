import { Navigate } from "react-router-dom";
import axiosInstance from "../axios";
import * as actionTypes from "./ActionTypes";

const PostData = (userData) => async (dispatch) => {
  const body = {
    email: userData.email,
    password: userData.password,
  };
  await axiosInstance
    .post("/login", body)
    .then((res) => {
      console.log("🚀 ~ file: PostDataAction.js ~ line 12 ~ .then ~ res", res);
      localStorage.setItem("token", res.data.token);
      dispatch({
        type: actionTypes.POST_DATA_SUCCESS,
        payload: res.data.user,
      });
      <Navigate to="/dashboard" />;
    })
    .catch((err) => {
      console.log(
        "🚀 ~ file: PostDataAction.js ~ line 20 ~ postData ~ err",
        err
      );
    });
};
export default PostData;
