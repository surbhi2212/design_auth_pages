import React from "react";
import "./forget.css";

import {MdOutlineArrowBackIosNew } from "react-icons/md";
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
export default function ForgetPassword() {
var navigate= useNavigate()
  const movetosignin=()=>{
    navigate('/signin')
  }

  return (
    <div className="mains1">
      <div className="lsides1">
        <div className="margins1">
          <img src="./Dribbble_logo_black.png" width='90rem' />

          <p className="head_01">
            Discover the world's top <br/> Designers & Creatives.
          </p>
        </div>
      </div>
      <div className="rightside1">
        <div className="header1">
        <div className='circle1'>
       <MdOutlineArrowBackIosNew className="arrow" onClick={()=>movetosignin()}/>
        </div>
        <div className="hlink_1">
          <p>
            Not a member?
            <Link className="a" to="/"> Sign up now</Link>
          </p>
        </div>
        </div>
        <div className="new_1_1">
          <form className="formpassword1">
          <div className='logomain'>
            <img src="./Dribbble_logo_black.png" width='90rem' />   
            </div>
          <div style={{marginTop:'1rem'}}>
            <p className='headpassword1'>Forget Password?</p>
          </div>

          <div style={{lineHeight:'1.3', marginTop:'0px'}}>
            <p className="passwordfont1"  >Enter the email address you used when you joined and we'll send you instructions to reset your password.</p>
          </div>
            
            <div style={{lineHeight:'1.3', marginTop:'-5px'}}>
                <p className="passwordfont1">For security reasons, we do NOT store your password.So rest assure that we will never send your password via email.</p> 
            </div>
            
            <div style={{ marginTop: "1rem" }}>
              <p style={{ marginBottom: "8px",fontWeight:'bold', fontSize:'15px' }}>Email Address</p>
              <input type="text" className="input1_0" />
            </div>

          

            

            <div style={{ marginTop: "1.5rem" }}>
              <button className="signbtn1">Send Reset Instructions</button>
            </div>

           
          </form>
        </div>
      </div>
    </div>
  );
}
