

import React, { useEffect } from 'react'
import { auth } from '../firebase.'
import { onAuthStateChanged } from "firebase/auth";
import Body from "./components/Body";
import Login from './components/Login';



function App() {
  const [user, setUser] = ("")


    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            console.log(user)
          if (user) {
            setUser(user)   
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
