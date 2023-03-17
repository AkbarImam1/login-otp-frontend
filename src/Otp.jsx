import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import OTPInput, { ResendOTP } from "otp-input-react";
import Banner from './Banner.png'
import Button from './Button.png'
import Subtract from './Subtract.png'

function Otp(){
    const navigate = useNavigate();
    const [OTP, setOTP] = useState("");



return (
<div className='container'>
<img src = {Subtract} className ="sub"/>
<h1 className="otp-message">Enter the verification code to continue</h1>
<div className="row">
<div className="col-lg-6 md-6 sm-12">
<p className="desc">We sent to <a href = "">hellouser@gmail.com</a>.if you don't see it check your spam</p>

<OTPInput className = "otp-input"
      value={OTP}
      onChange={setOTP}
      autoFocus
      OTPLength={6}
      otpType="number"
      disabled={false}
     
      secure
    />
    <ResendOTP  className= "resend" handelResendClick={() => console.log("Resend clicked")} />
<a  className = "back" onClick={()=>navigate("/")} href = ""><strong>Back</strong></a>
</div>

<div className="col-lg-6 md-6 sm-12">

<img src= {Banner}  className = "bann banner"/>
<img src= {Banner}  className = "bann banner1"/>
<img src= {Banner}  className = "bann banner1"/>
    
</div>

</div>

<button onClick={()=>navigate("/Success")} type="button" class="btno pos">Verify</button>

<div className="footer">
<strong>Not member?<a ><strong> Create account</strong></a></strong>
</div>
</div>

);

}

export default Otp