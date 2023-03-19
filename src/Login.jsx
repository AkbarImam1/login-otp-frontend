// import React from "react"
import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import Banner from './Banner.png'
import Button from './Button.png'
import Subtract from './Subtract.png'
import './Textfield.css'



function Login(){
const navigate = useNavigate();

//For toggle menu
    const [selectedOption, setSelectedOption] = useState("");
    const options = ["@google", "@yahoo"];
  
    const handleOptionSelect = (option) => {
      setSelectedOption(option);
    };

//For password visibility



    return (
        <div className="container">
      <img src = {Subtract} className ="sub"/>  
 <h2 className="title-img">Welcome to Sytem Package</h2>
     
<div className="row">
<div className="col-lg-6 md-6 sm-12">

<form className="login-form">
  <div className="form-group">
    
  



 <div className="text-field">
      <input type="text" placeholder="Enter text here" />
      <div className="dropdown">
        <button className="dropbtn">{selectedOption || "@username"}</button>
        <div className="dropdown-content">
          {options.map((option) => (
            <div
              key={option}
              className="dropdown-item"
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      </div>
    </div>


   
  </div>
  <div class="form-group">
    
    <input type="password" className="form-control m-3 pass" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  
  {/* <button type="button" className="btn btn-primary btn-lg btn-block">Next</button> */}
  <button onClick={()=>navigate("/otp")}  type="button" class="btno ">Next</button>
  <br/><br/>
  <div class="d-flex justify-content-center"><a href =" " className="m-2 justify-content-center"><strong>Forgot Your Password ?</strong></a></div>
  
</form>
</div>


<div className="col-lg-6 md-6 sm-12">
<img src= {Banner}  className = "bann banner"/>
<img src= {Banner}  className = "bann banner1"/>
<img src= {Banner}  className = "bann banner1"/>

</div>

</div>
<div className="footer">
<strong>Not member?<a href = ""><strong> Create account</strong></a></strong>
</div>

      </div>
    );
}

export default Login