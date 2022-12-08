import { useState, useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
// import FeedbackContext from "../context/FeedbackContext";
import { ReactComponent as ArrowRightIcon } from "./assets/svg/keyboardArrowRightIcon.svg";
import visibilityIcon from "./assets/svg/visibilityIcon.svg";

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
//   const { users, loginStatus } = useContext(FeedbackContext);
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const { email, password } = formData;


  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Welcome Back!</p>
        </header>

        <form >
          <input
            type="email"
            className="emailInput"
            placeholder="Email"
            id="email"
          
          />
          <div className="passwordInputDiv">
            <input
              type={showPassword ? "text" : "password"}
              className="passwordInput"
              placeholder="Password"
              id="password"
             
            />

            <img
              src={visibilityIcon}
              className="showPassword"
              alt="show Password"
              onClick={() => setShowPassword((preState) => !preState)}
            />
          </div>

          {/* <Link to="/forgot-password" className="forgotPasswordLink"> */}
            Forgot Password
          {/* </Link> */}

          <div className="signInBar">
            <p className="signInText">Sign In</p>
            <button className="signInButton">
              <ArrowRightIcon fill="#ffffff" width="34px" height="34px" />
            </button>
          </div>
        </form>

        {/* <OAuth /> */}

        {/* <Link to="/sign-up" className="registerLink"> */}
         <p className="registerLink"> Sign Up Instead </p>
        {/* </Link> */}
      </div>
    </>
  );
}

export default SignIn;
