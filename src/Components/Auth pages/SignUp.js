import React from "react";
import "./SignUp.css";
import { FcGoogle } from "react-icons/fc";
import { RiTwitterFill } from "react-icons/ri";
import {Link } from 'react-router-dom';
export default function SignUp() {

  

  return (
    <div className="main">
      <div className="leftside">
        <div className="margin">
          <img src="./Dribbble_logo_black.png" width='90rem' />

          <p className="head1">
            Discover the world's top <br/> Designers & Creatives.
          </p>
        </div>
      </div>
      <div className="rside">
        <div className="link">
          <p>
            Already a member?
            <Link style={{textDecoration: 'none', color:'blue'}} to="/signin"> Sign In</Link>
          </p>
        </div>
        <div className="new">
          <form className="form">
             <div className='logo1'>
            <img src="./Dribbble_logo_black.png" width='90rem' />   
            </div>
            <div className='inaline'>
              <h2>Sign up to Dribbble</h2>
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
                <hr className="hr1" />
              </div>
              <div style={{ margin: "1rem", marginTop: "1rem" }}>
                <p>Or</p>
              </div>
              <div>
                <hr className="hr1" />
              </div>
            </div>
            <div className="inputside">
              <div>
                <p style={{ marginBottom: "8px", fontWeight:'bold' }}>Name</p>
                <input type="text" className="input_1" />
              </div>
              <div className="gap1 top">
                <p style={{ marginBottom: "8px",fontWeight:'bold' }}>Username</p>
                <input type="text" className="input_1 shift" />
              </div>
            </div>
            <div style={{ marginTop: "1.5rem" }}>
              <p style={{ marginBottom: "8px",fontWeight:'bold' }}>Email</p>
              <input type="text" className="input1_2" />
            </div>

            <div style={{ marginTop: "1.5rem" }}>
              <p style={{ marginBottom: "8px",fontWeight:'bold' }}>Password</p>
              <input
                type="text"
                className="input1_2"
                placeholder="    6+ characters"
              />
            </div>

            <div style={{ marginTop: "2rem", display: "flex " }}>
              <div>
                <input type="checkbox" className="check" />
              </div>
              <div style={{ marginTop: "-12px", marginLeft: "2px" }}>
                <p className="font1">
                  Create an account means you're okey with our{" "}
                  <a style={{textDecoration: 'none'}} href="/">Terms of Service</a>,
                  <a style={{textDecoration: 'none'}} href="/">Privacy Policy</a>, and our default{" "}
                  <a style={{textDecoration: 'none'}} href="/">Notification Settings.</a>
                </p>
              </div>
            </div>

            <div style={{ marginTop: "1.5rem" }}>
              <button className="signbtn1">Create Account</button>
            </div>
            <div className="linkshown">
          <p>
            Already a member?
            <Link style={{textDecoration: 'none', color:'blue'}} to="/signin"> Sign In</Link>
          </p>
        </div>
            <div style={{ marginTop: "0.5rem" }}>
               <p className="lastfont">
                This site is protected by reCAPTCHA and the Google <br/>
                <a style={{textDecoration: 'none'}} href="/">Privacy Policy</a> and <a style={{textDecoration: 'none'}} href='/'>Terms of Service</a> apply.
               </p>
            </div>
           
          </form>
        </div>
      </div>
    </div>
  );
}
