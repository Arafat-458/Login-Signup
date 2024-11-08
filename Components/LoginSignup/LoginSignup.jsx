import React, {useState} from "react";
import "./LoginSignup.css";


export const LoginSignup = () => {

    const [action,setAction] = useState("Sign Up");

  return (
    <div className="container">
       <div className="header">
       <div className="text">{ action }</div>
       <div className="underline"></div>
       </div>
       <div className="inputs">
        {action==="Login"?<div></div>:<div className="input">
        <img src="../Assets/person.png" alt="" />
        <input placeholder="Name"  type="text" />
        </div>}
       
        <div className="input">
        <img src='../Assets/email.png' alt="" />
        <input  placeholder="email id" type="email" />
        </div>
        <div className="input">
        <img src='../Assets/password.png' alt="" />
        <input  placeholder="Password" type="password"  />
        </div>
        </div>
        <div className="Forgot password">Lost password? <span>Click here!</span></div>
        
        <div className="submit-container">
         <div className={action==="Login"? "submit gray": "submit"}onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
         <div className={action==="Sign Up"?"submit gray": "submit"}onClick={()=>{setAction("Login")}}>Login</div>
        



      
    </div>
    </div>
  );
};

export default LoginSignup
