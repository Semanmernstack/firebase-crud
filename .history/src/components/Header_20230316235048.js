import React from 'react'
import Login from './Login'

function Header() {
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