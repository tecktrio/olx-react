import React, { useState,useHistory, useContext} from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import Logo from '../../olx-logo.png';
import './Login.css';
import app from '../../firebase/config';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { createContext } from 'react';
import authContext from '../../Authcontext';
function Login() {

  const navigate = useNavigate()
  const user = useContext(authContext)
 
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const auth = getAuth(app);
  
  const getemail=(e)=>{
    console.log(e.target.value)
    setEmail(e.target.value)

  }

  const getpassword=(e)=>{
    console.log(e.target.value)
    setPassword(e.target.value)
  }
const submitconfirm = (e)=>{
  e.preventDefault()
  console.log('hi')


  signInWithEmailAndPassword(auth, email,password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(user)
    navigate('/')

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode)
    error.innerHTML = 'user not found'

    if(errorCode == 'auth/internal-error'){
      document.getElementById('error').innerHTML = 'invalid credentials'
    }
    // ..
  });
}
  return (
    <div>
            <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
<div id='error' style={{color:'red'}}></div>
        <form onSubmit={submitconfirm}>

          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
            onChange={getemail}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
            onChange={getpassword}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <NavLink to='/signup'>
          <div>
            Signup
          </div>
                
        </NavLink>
      </div>
    </div>
  );
}

export default Login;
