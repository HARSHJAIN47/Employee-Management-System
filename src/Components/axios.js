import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://run-staging-be.bbenext.com/api/1.0.0",
});
export default axiosInstance;
