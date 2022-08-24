import axiosInstance from "../axios";
import * as actionTypes from "./ActionTypes";

const postData = (userData) => async (dispatch) => {
  await axiosInstance
    .post("/login", {
      email: userData.email,
      password: userData.password,
    })
    .then((res) => {
      console.log("🚀 ~ file: PostDataAction.js ~ line 13 ~ .then ~ res", res);
      dispatch({
        type: actionTypes.POST_DATA_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(
        "🚀 ~ file: PostDataAction.js ~ line 20 ~ postData ~ err",
        err
      );
    });
};
export default postData;
