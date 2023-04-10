import React from 'react'
const deleteReg = async() => {
   await deleteDoc(doc(db, "reg"))
            
}

function Regform ({ id, age, firstName, lastName }) {
  return (
    <div className="flex flex-col border p-4 gap-3 my-2 rounded-2xl">
      <div>
        <h1> <span>First Name:  </span>{firstName}</h1>
        <h1><span>Last Name:  </span>{lastName}</h1>
        <h1><span>Age:  </span>{age}</h1>
        <button onClick={() => deleteReg(r.id)}>delete</button>
      </div>
      

    </div>
  )
}

export default Regform