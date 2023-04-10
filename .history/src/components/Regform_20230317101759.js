import { deleteDoc, doc } from 'firebase/firestore'
import React from 'react'
import { db } from '../firebase.'


 function Regform ({ id, age, firstName, lastName }) {
  
   const deleteReg = async (id) => {await deleteDoc(doc(db, "reg", id))}
             
 }
  return (
    <div className="flex flex-col border p-4 gap-3 my-2 rounded-2xl">
      <div>
        <h1> <span>First Name:  </span>{firstName}</h1>
        <h1><span>Last Name:  </span>{lastName}</h1>
        <h1><span>Age:  </span>{age}</h1>
        <button onClick={deleteReg}>delete</button>
      </div>
      

    </div>
  )
}

export default Regform