import {  deleteDoc, doc, updateDoc } from 'firebase/firestore'

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
    const updateRef = doc(db, "reg", id)

    await updateDoc(updateRef, {
      firstName: updateName,
      lastName: updateLastname,
      age: updateNumber
    })
    
  }
 
             
 
  return (
    
    <div className="flex flex-col  p-4 gap-3 my-2  rounded-2xl ">
      <div className="shadow-2xl border p-3  flex flex-col">
        <div className="text-sm">
          <h1 className="font-bold  font-sanserif text-zinc-500"  > < span className='font-extra-bold text-lg' >First Name:  </span>{firstName}</h1>
          <h1 className="font-bold font-sanserif text-zinc-500" >< span className='font-extra-bold text-lg'>Last Name:  </span>{lastName}</h1>
          <h1 className="font-bold font-sanserif text-zinc-500" >< span className='font-extra-bold text-lg'>Age:  </span>{age}</h1>
          <div>
          <button className="border cursor-pointer p-1 rounded-lg capitalize bg-red-500 " onClick={() => deleteReg(id)}>delete</button>
          <button className="border cursor-pointer p-1 rounded-lg capitalize  bg-blue-500 "  onClick={() => updateReg(id)}>Edit</button>
          </div>
        </div>
       
        <div className='flex flex-col'>
          <input className='outline-none border-none' onChange={(e) => setUpdateName(e.target.value)}  type="text" placeholder='updateName' />
          <input className='outline-none border-none' onChange={(e) => setUpdateLastname(e.target.value)}  type="text" placeholder='updateLastname' />
          <input className='outline-none border-none' onChange={(e) => setUpdateNumber(e.target.value)}  type="number" placeholder='updateNumber'/>
        </div>
      </div>
      

    </div>
  )
}

export default Regform