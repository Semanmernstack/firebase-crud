import { onAuthStateChanged, signInWithPopup } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth, provider } from '../firebase.'


function Login() {
    const [user, setUser] = useState("")
    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            console.log(user)
          if (user) {
            setUser(user)   
          }
        })
    
      }, [])





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
        <div>
            <h1>jh</h1>
        </div>
        
        <button onClick={signIn} >Click SignIn</button>

    </div>
  )
}

export default Login