import React from 'react'

function Regform ({ age, firstName, lastName }) {
  return (
    <div className="flex flex-col border p-4 gap-3 my-2 rounded-2xl">
      <h1> <span>First Name</span>{firstName}</h1>
      <h1><span>Last Name</span>{lastName}</h1>
      <h1><span>Age</span>{age}</h1>
      

    </div>
  )
}

export default Regform