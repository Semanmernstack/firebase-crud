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
    <div className="flex flex-col items-center gap-2">
        <div className="flex gap-1 items-center">
            <img className='rounded-full h-16 w-16' src={user.photoURL} alt="" />
            <h1>{user?.displayName}</h1>
        </div>
        <div>
            <button onClick={signIn} >Click SignIn</button>
        </div>
        
       

    </div>
  )
}

export default Login