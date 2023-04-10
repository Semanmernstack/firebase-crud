import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect } from 'react'
import { auth } from '../firebase.'
import Login from './Login'

function Header() {
    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
          if (user) {
            
            const uid = user.uid
              
            
          }
        })
    
      }, [])
    
    


  return (
    <nav>
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