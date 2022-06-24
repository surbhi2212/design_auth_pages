import React from "react";
import "./Signin.css";

import {MdOutlineArrowBackIosNew } from "react-icons/md";
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
export default function ForgetPassword() {
var navigate= useNavigate()
  const movetosignin=()=>{
    navigate('/signin')
  }

  return (
    <div className="mains">
      <div className="lsides">
        <div className="margins">
          <img src="./Dribbble_logo_black.png" width='90rem' />

          <p className="head">
            Discover the world's top <br/> Designers & Creatives.
          </p>
        </div>
      </div>
      <div className="rightside">
        <div className="header">
        <div className='circle'>
       <MdOutlineArrowBackIosNew className="arrow" onClick={()=>movetosignin()}/>
        </div>
        <div className="hlink">
          <p>
            Not a member?
            <Link className="a" to="/"> Sign up now</Link>
          </p>
        </div>
        </div>
        <div className="new_1">
          <form className="formpassword">
          <div>
            <img src="./Dribbble_logo_black.png" width='90rem' />   
            </div>
          <div style={{marginTop:'1rem'}}>
            <p className='headpassword'>Forget Password?</p>
          </div>

          <div style={{lineHeight:'1.3', marginTop:'0px'}}>
            <p className="passwordfont"  >Enter the email address you used when you joined and we'll send you instructions to reset your password.</p>
          </div>
            
            <div style={{lineHeight:'1.3', marginTop:'-5px'}}>
                <p className="passwordfont">For security reasons, we do NOT store your password.So rest assure that we will never send your password via email.</p> 
            </div>
            
            <div style={{ marginTop: "1rem" }}>
              <p style={{ marginBottom: "8px",fontWeight:'bold', fontSize:'15px' }}>Email Address</p>
              <input type="text" className="input1" />
            </div>

          

            

            <div style={{ marginTop: "1.5rem" }}>
              <button className="signbtn">Send Reset Instructions</button>
            </div>

           
          </form>
        </div>
      </div>
    </div>
  );
}
