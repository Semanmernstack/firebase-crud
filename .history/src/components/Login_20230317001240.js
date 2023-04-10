import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, provider } from '../firebase.'


function Login() {
    const signIn = () => {
       try {
            signInWithPopup(auth, provider)
       } 
       catch (error) {
            alert(error.message)
       }
    }
  return (
    <div>
        <img src="" alt="" />
        <h1>{dispayname}</h1>
        <button onClick={signIn} >Click SignIn</button>
    </div>
  )
}

export default Login