import { deleteDoc, doc } from 'firebase/firestore'
import React from 'react'
import { db } from '../firebase.'


 function Regform ({  age, firstName, id, lastName }) {
  
  const deleteReg = async (id) => {
    await deleteDoc(doc(db, "reg", id))
  }
             
 
  return (
    <div className="flex flex-col border p-4 gap-3 my-2 shadow-xl rounded-2xl">
      <div>
        <h1 className="font-bold font-sanserif"  > < span className='font-extra-bold text-xl' >First Name:  </span>{firstName}</h1>
        <h1 className="font-bold font-sanserif" >< span className='font-extra-bold text-xl'>Last Name:  </span>{lastName}</h1>
        <h1 className="font-bold font-sanserif" >< span className='font-extra-bold text-xl'>Age:  </span>{age}</h1>
        <button onClick={() => deleteReg(id)}>delete</button>
      </div>
      

    </div>
  )
}

export default Regform