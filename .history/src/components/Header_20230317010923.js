

import Login from "./Login"


function Header() {
  const [user, setUser] = ("")
    
    
  return (
    <nav className="flex items-center justify-around bg-zinc-700 text-white p-4">
        <div>
            <h1> Firebase CRUD project</h1>
        </div>
        <Login/>
          
    </nav>
       
    
  )
}

export default Header