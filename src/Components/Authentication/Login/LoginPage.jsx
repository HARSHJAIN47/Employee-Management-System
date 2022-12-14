import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Container from "../../Styles/Container";
import group from "../assets/group.svg";
import amazatic from "../assets/amazatic(1).png";
import GlobalStyle from "../../Styles/GlobalStyle";
import Loader from "../../Styles/Loader";
import LoginButton from "../../Styles/LoginButton";
import InputField from "../../Styles/InputField";
import LoginForm from "../../Styles/LoginForm";
import ForgPass from "../../Styles/ForgPass";
import LoginTxtCent from "../../Styles/LoginTxtCent";
import Error from "../../Styles/Error";
import PostData from "../../ReduxStuff/PostDataAction";

function LoginPage() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [loginData, setLoginData] = useState([]);
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const userState = useSelector((s) => s.userState.user);

  // useEffect(() => {
  //   if (userState.email && localStorage.getItem("token")) {
  //     setLoader(false);
  //     navigate("/dashboard");
  //   }
  // }, [userState, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!enteredEmail && !enteredPassword) {
      setEmailIsValid(false);
      setPasswordIsValid(false);
    }

    if (
      !enteredEmail
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      setEmailIsValid(false);
    }
    if (enteredPassword.length < 6) {
      setPasswordIsValid(false);
    } else {
      setLoader(true);
      const newLoginData = {
        email: enteredEmail,
        password: enteredPassword,
      };
      dispatch(PostData(newLoginData, navigate));
      setLoginData([...loginData, newLoginData]);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <div className="row mt-5">
          <div className="col-md-12 ">
            <img src={amazatic} alt="" />
          </div>
          <div className="col-md-7 mt-5">
            <img src={group} alt="" />
          </div>
          <div className="col-md-5">
            <LoginForm onSubmit={submitHandler}>
              <LoginTxtCent>
                <p>Welcome to the</p>
                <p>Employee Management System</p>
              </LoginTxtCent>
              <div className="mt-4">
                Login ID <br />
                <InputField
                  className="mt-1"
                  type="text"
                  id="Email"
                  name="Email"
                  placeholder="Enter Your Login ID"
                  value={enteredEmail}
                  onChange={(e) => {
                    setEnteredEmail(e.target.value);
                    setEmailIsValid(true);
                  }}
                />
                {emailIsValid ? <> </> : <Error>Enter Correct Email</Error>}
              </div>

              <div className="mt-4">
                Password <br />
                <InputField
                  className="mt-1"
                  type="password"
                  id="Password"
                  name="Password"
                  placeholder="Enter Your Password"
                  value={enteredPassword}
                  onChange={(e) => {
                    setEnteredPassword(e.target.value);
                    setPasswordIsValid(true);
                  }}
                />
                {passwordIsValid ? (
                  <> </>
                ) : (
                  <Error>Password atleast 6 digit!!!</Error>
                )}
              </div>

              <ForgPass href="/">Forgot Your Password?</ForgPass>
              <LoginButton>{loader ? <Loader /> : "Login"}</LoginButton>
            </LoginForm>
          </div>
        </div>
      </Container>
    </>
  );
}

export default LoginPage;
