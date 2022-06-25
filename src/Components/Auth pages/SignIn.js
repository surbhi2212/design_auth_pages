import React from "react";
import "./Signin.css";
import { FcGoogle } from "react-icons/fc";
import { RiTwitterFill } from "react-icons/ri";
import {Link} from 'react-router-dom'
export default function SignIn() {

  

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
        <div className="link">
          <p>
            Not a member?
            <Link className="a" to="/"> Sign up now</Link>
          </p>
        </div>
        <div className="new_1">
          <form className="formsign">
            <div className='logo'>
            <img src="./Dribbble_logo_black.png" width='90rem' />   
            </div>
            <div style={{marginTop:'1rem'}}>
              <h2>Sign in to Dribbble</h2>
            </div>
            <div style={{ display: "flex", marginTop: "0.5rem" }}>
              <button  className="btn">
                <div className="btnin">
                  <FcGoogle className="gicon" />
                </div>
                <p style={{ paddingRight: "3rem" }}>Sign up with Google</p>
              </button>
              <button className="sbutton">
                <div className="btntwitter">
                  <RiTwitterFill className="gicon1" />
                </div>
              </button>
            </div>
            <div style={{ display: "flex", marginBottom:"0rem"}}>
              <div>
                <hr className="hr" />
              </div>
              <div style={{ margin: "1rem", marginTop: "1rem" }}>
                <p>Or</p>
              </div>
              <div>
                <hr className="hr" />
              </div>
            </div>
            
            <div style={{ marginTop: "0rem" }}>
              <p style={{ marginBottom: "8px",fontWeight:'bold', fontSize:'15px' }}>Username or Email Address</p>
              <input type="text" className="input1" />
            </div>

            <div style={{ marginTop: "1.5rem" }}>
              <p style={{ marginBottom: "8px",fontWeight:'bold', fontSize:'15px' }}>Password
              <Link className="a left" to="/forgetpassword" >Forget Password?</Link></p>
              <input
                type="text"
                className="input1"
             
              />
            </div>

            

            <div style={{ marginTop: "1.5rem" }}>
              <button className="signbtn">Sign In</button>
            </div>

            <div className="linkend">
          <p>
            Not a member?
            <Link className="a" to="/"> Sign up now</Link>
          </p>
        </div>
          </form>
        </div>
      </div>
    </div>
  );
}
