/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

function Protected({ children }) {
  const login = localStorage.getItem("token");
  if (!login) {
    return <Navigate to="/" />;
  }
  return children;
}

export default Protected;
