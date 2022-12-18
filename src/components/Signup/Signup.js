import React from 'react';

import Logo from '../../olx-logo.png';
import './Signup.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navigate, NavLink } from 'react-router-dom';
import { db } from '../../firebase/config';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc , getFirestore,getDoc,updateDoc,deleteDoc,deleteField,collection,addDoc} from "firebase/firestore"; 
import { getStorage, ref } from "firebase/storage";
import app from '../../firebase/config';

function Signup() {
 
  var nav = useNavigate()

  const [username,setusername] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [password,setPassword] = useState('')

   const signupconfirm= async(e)=>{
    e.preventDefault()

    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        abcd()
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)
        if(errorCode == 'auth/internal-error'){
          document.getElementById('error').innerHTML = 'invalid credentials'
        }
        // ..
      });

    async function abcd(){
      
      var ref = collection(db,'users')
      const docRef = await addDoc(
      ref,{
      username:username,
      email:email,
      phone:phone,
      password:password
      }
      ).then(()=>{
      // alert('data added successfully')
      nav('/login')

      }).catch((error)=>{
      alert('unsuccessuful operation, error:'+error)
      })
    }

  }


  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <div id='error' style={{color:'red'}}></div>
        <form onSubmit={signupconfirm}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            defaultValue="John"
            onChange={(e)=>{
              setusername(e.target.value)
            }}
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            name="phone"
            defaultValue="Doe"
            onChange={(e)=>{
              setPhone(e.target.value)
            }}
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
            onChange={(e)=>{
              setPassword(e.target.value)

            }}
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <NavLink to='/login'>
        <a>Login</a>
        </NavLink>

      </div>
    </div>
  );
}

export default Signup
