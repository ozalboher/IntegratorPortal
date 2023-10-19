import React from "react";
import { Msg } from "../Msg/Msg";
import { useState, useRef } from "react";
import { EyeClosed } from "../../Assets/EyeClosed";
import { EyeOpen } from "../../Assets/EyeOpen";;

export const SignUp = ({ showLogin, setShowLogin, setShowSuccessMsg }) => {
  const [showPass1, setShowPass1] = useState(false);
  const [showPass2, setShowPass2] = useState(false);


  const handleShowPass1 = () => {
    setShowPass1(!showPass1);
  };
  const handleShowPass2 = () => {
    setShowPass2(!showPass2);
  };
  const handleLogInLink = () => {
    setShowLogin(!showLogin);
  };
  

  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState('');
  
  
  const handleRegister = (e) => {
    console.log("register");
    
    e.preventDefault(); // Prevent the default form submit event, (which reloads the page).
    if (password1 !== password2) {
        setError('Passwords do not match');
        return;
    }
    else if (!email || !password1 || !password2 || !firstName || !lastName || !phoneNumber) {
      return;
  }
   setError('');
  };
  
  return (
    <>   
      <div className="login-wrapper">
        <div className="login-card">
          <div className="form login">
            <div className="form-content">
              <span className="login-title">Sign Up</span>
              <form onSubmit={handleRegister}> 
              <div className="field input-field">
                <input type="email" placeholder="Email" className="input" value={email} onChange={(e)=> setEmail(e.target.value)} required />
              </div>
              <div className="field input-field">
                <input
                  type={showPass1 ? "text" : "password"}
                  placeholder="Password"
                  className="password"
                  value={password1}
                  onChange={(e)=> setPassword1(e.target.value)}
                  required
                />
                {showPass1 && <EyeOpen onClick={handleShowPass1}/>}
                {!showPass1 && <EyeClosed onClick={handleShowPass1}/>}
              </div>
              <div className="field input-field">
                <input
                  type={showPass2 ? "text" : "password"}
                  placeholder="Retype Password"
                  className="password"
                  value={password2}
                  onChange={(e)=> setPassword2(e.target.value)}
                  required
                />
                {showPass2 && <EyeOpen onClick={handleShowPass2}/>}
                {!showPass2 && <EyeClosed onClick={handleShowPass2}/>}
              </div>

              <div className="field input-field">
                <input type="text" placeholder="First Name" className="input" value={firstName} onChange={(e)=>setFirstName(e.target.value)} required />
              </div>

              <div className="field input-field">
                <input type="text" placeholder="Last Name" className="input" value={lastName} onChange={(e)=>setLastName(e.target.value)} required />
              </div>

              <div className="field input-field">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="input"
                  value={phoneNumber}
                  onChange={(e)=> setPhoneNumber(e.target.value)}
                  required
                />
              </div>
              <div className="field button-field">
                <button>Register</button>
              </div>
              </form>
              {error && <Msg msg={error} isError={true} />}
              <div className="line"></div>
              <div className="form-link">
                <span>
                  Already registered?{" "}
                  <a
              
                    className="link signup-link"
                    onClick={handleLogInLink}
                  >
                    Login
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
