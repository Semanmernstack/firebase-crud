import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect } from 'react'
import { auth } from '../firebase.'
import Login from './Login'

function Header() {
    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            console.log(user)
          if (user) {
            
            
            displayName = user.displayName
            photoURL = user.photoURL
              
            
          }
        })
    
      }, [])
    
    


  return (
    <nav className="flex items-center justify-around">
        <div>
            <h1> Firebase CRUD project</h1>
        </div>
        
        <div>
            <Login/>
        </div>

    </nav>
       
    
  )
}

export default Header