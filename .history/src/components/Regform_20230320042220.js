import { deleteDoc, doc, updateDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { db } from '../firebase.'


 function Regform ({  age, firstName, id, lastName }) {
  const [updateName, setUpdateName] = useState("")
  const [updateLastname, setUpdateLastname] = useState("")
  const [updateNumber, setUpdateNumber] = useState("")
  
  const deleteReg = async (id) => {
    await deleteDoc(doc(db, "reg", id))
  }

  const updateReg = async (id) => {

    await updateDoc(doc(db, "reg", id, {
      firstName: updateName,
      lastName: updateLastname,
      age: updateReg
    }))
  }
             
 
  return (
    <div className="flex flex-col border p-4 gap-3 my-2 shadow-xl rounded-2xl w-2/3">
      <div className='w-full'>
        <h1 className="font-bold font-sanserif text-zinc-500"  > < span className='font-extra-bold text-xl' >First Name:  </span>{firstName}</h1>
        <h1 className="font-bold font-sanserif text-zinc-500" >< span className='font-extra-bold text-xl'>Last Name:  </span>{lastName}</h1>
        <h1 className="font-bold font-sanserif text-zinc-500" >< span className='font-extra-bold text-xl'>Age:  </span>{age}</h1>
        <button className="border p-1 rounded-lg capitalize bg-red-500 " onClick={() => deleteReg(id)}>delete</button>
      </div>
      <div>
        <input onChange={(e) => setUpdateName(e.target.value)} value={updateName} type="text" placeholder='updateName' />
        <input onChange={(e) => setUpdateLastname(e.target.value)} value={updateLastname} type="text" placeholder='updateLastname' />
        <input onChange={(e) => setUpdateNumber(e.target.value)} value={updateNumber} type="number" placeholder='updateNumber'/>

        <button onClick={() => updateReg(id)}>Edit</button>

      </div>
      

    </div>
  )
}

export default Regform