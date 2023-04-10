import { useEffect } from "react"
import { auth } from "../firebase."
import Login from "./Login"


function Body() {
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
    <nav className="flex items-center justify-around">
        <div>
            <h1> Firebase CRUD project</h1>
        </div>
        <Login/>
        <div>{user.displayName}</div>
        
        
    </nav>
       
    
  )
}

export default Body