import { deleteDoc, doc, updateDoc } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import React, { useState } from 'react'
import { db, storage } from '../firebase.'


 function Regform ({  age, firstName, id, lastName }) {
  const [updateName, setUpdateName] = useState("")
  const [updateLastname, setUpdateLastname] = useState("")
  const [updateNumber, setUpdateNumber] = useState("")
  const [fileUpload, setFileUpload] = useState(null)
  
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
  const upLoading = async () => {
    if (!fileUpload) return;

    const storageRef = ref(storage,  `photos/${fileUpload.name}`)
    const uploadTask = await uploadBytes(storageRef, fileUpload)
    uploadTask.on('state_changed',
      (error) => {

      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log('fileupload', url);
          
        })
      }
    )


  }
             
 
  return (
    
    <div className="flex flex-col border p-4 gap-3 my-2 shadow-xl rounded-2xl w-2/3">
      <div className='w-full'>
        <h1 className="font-bold font-sanserif text-zinc-500"  > < span className='font-extra-bold text-xl' >First Name:  </span>{firstName}</h1>
        <h1 className="font-bold font-sanserif text-zinc-500" >< span className='font-extra-bold text-xl'>Last Name:  </span>{lastName}</h1>
        <h1 className="font-bold font-sanserif text-zinc-500" >< span className='font-extra-bold text-xl'>Age:  </span>{age}</h1>
        <div>
        <button className="border cursor-pointer p-1 rounded-lg capitalize bg-red-500 " onClick={() => deleteReg(id)}>delete</button>
        <button className="border cursor-pointer p-1 rounded-lg capitalize  bg-blue-500 "  onClick={() => updateReg(id)}>Edit</button>
        </div>
      </div>
      <div>
        <input onChange={(e) => setFileUpload(e.target.files[0])} type="file" />
        <button onClick={upLoading}>Upload</button>
      </div>
      <div className='w-full'>
        <input className='outline-none border-none' onChange={(e) => setUpdateName(e.target.value)}  type="text" placeholder='updateName' />
        <input className='outline-none border-none' onChange={(e) => setUpdateLastname(e.target.value)}  type="text" placeholder='updateLastname' />
        <input className='outline-none border-none' onChange={(e) => setUpdateNumber(e.target.value)}  type="number" placeholder='updateNumber'/>
      </div>
      

    </div>
  )
}

export default Regform