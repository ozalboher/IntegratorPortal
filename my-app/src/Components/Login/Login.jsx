import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EyeClosed } from "../../Assets/EyeClosed";
import { EyeOpen } from "../../Assets/EyeOpen";
import { Msg } from "../Msg/Msg";



export const Login = ({showLogin, setShowLogin, showSuccessMsg, setShowModal}) => {

  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    console.log('handleLogin');
  };

  const handleShowPass = (event) => {
    console.log('handleShowPass');
    setShowPass(!showPass);
  };
  
  const handleSignUpLink = () => {
    setShowLogin(!showLogin);
  };

  return (
    <>
      <div className="login-wrapper">
        <div className="login-card">
          <div className="form login">
            <div className="form-content">
            {showSuccessMsg && <Msg msg={'User Successfuly Registered!'} isError={false} />}
            {error && <Msg msg={error} isError={true} />}
              <span className="login-title">Login</span>
              <div className="field input-field">
                <input type="email" placeholder="Email" className="input" onChange={(e)=>setEmail(e.target.value)} />
              </div>
              <div className="field input-field">
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="Password"
                  className="password"
                  onChange={(e)=>setPassword(e.target.value)}
                  />
                  {showPass && <EyeOpen onClick={handleShowPass}/>} 
                  {!showPass && <EyeClosed onClick={handleShowPass}/>}
              </div>
              <div className="form-link" >
                <a href="/home" className="forgot-pass">
                  Forgot password?
                </a>
              </div>
              <div className="field button-field">
                <button onClick={handleLogin}>Login</button>
              </div>
              <div className="line"></div>
              <div className="form-link">
                <span>
                  Don't have an account?{" "}
                  <a className="link signup-link" onClick={handleSignUpLink}>
                    Signup
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
