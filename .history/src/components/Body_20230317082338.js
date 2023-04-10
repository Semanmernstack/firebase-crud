import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { db } from '../firebase.';
import Regform from './Regform';

function Body() {
    const [reg, setReg] = useState([])

    useEffect(() =>
        onSnapshot(collection(db, "reg"), (snapshot) => {
            setReg(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        ), []);





    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        addDoc(collection(db, "reg"), {
            ...data
        })

    };
  return (
    <div className="p-8 text-black flex flex-col w-2/3 border ">
        <form className='flex flex-col p-4 gap-4 items-center justify-center text-center' onSubmit={handleSubmit(onSubmit)}>
            <input className="w-full p-2 border outline-none bg-slate-300 text black text-lg "  placeholder='first name'  {...register('firstName')} />
            <input className="w-full p-2 border outline-none bg-slate-300 text black text-lg "  placeholder='last name' {...register('lastName', { required: true })} />
            {errors.lastName && <p>Last name is required.</p>}
            <input className="w-full p-2 border outline-none bg-slate-300 text black text-lg "  placeholder='age' {...register('age', { pattern: /\d+/ })} />
            {errors.age && <p>Please enter number for age.</p>}
            <button className='bg-blue opacity-10 p-1' type="submit">submit</button>
        </form>

        <div>
            {reg?.map((r) => (  
                
                <div>
                <Regform
                    key={r.id}
                    id={r.id}
                    age={r.age}
                    firstName={r.firstName}
                    lastName={r.lastName}
                /> 
                </div> 

            ))}
           
        </div>

        


        
    </div>
  )
}

export default Body