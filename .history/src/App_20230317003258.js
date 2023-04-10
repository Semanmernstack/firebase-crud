

import React, { useEffect } from 'react'
import { auth } from '../firebase.'
import { onAuthStateChanged } from "firebase/auth";
import Body from "./components/Body";



function App() {

  const user = auth.currentUser
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
    <div className="">
      {user ? (<Body />) : <Login />}
    </div>
  );
}

export default App;
