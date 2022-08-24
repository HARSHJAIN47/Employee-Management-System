import axiosInstance from "../axios";

const postDataSuccess = (response) => ({
  type: "post data",
  response,
});
const postData = (obj) => (dispatch) => {
  console.log(obj);
  axiosInstance
    .post("/login", obj)
    .then((response) => {
      dispatch(postDataSuccess(response));
    })
    .catch((error) => {
      console.error(error);
    });
};
export default postDataSuccess;
export { postData };
