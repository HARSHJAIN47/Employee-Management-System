import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginButton from "./Styles/LoginButton";

function DashBoard() {
  const navigate = useNavigate();
  const userData = useSelector((s) => s.userState.user);
  return (
    <>
      <h1>
        Hello {userData.first_name}&nbsp;
        {userData.last_name}
      </h1>
      <h1>Your Email is {userData.email}</h1>

      <LoginButton
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/");
        }}
      >
        Logout
      </LoginButton>
    </>
  );
}

export default DashBoard;
