import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

function Body() {
    const [reg, setReg] = useState([])
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = data => {
        
    };
  return (
    <div className="p-8 text-black flex flex-col w-2/3 border ">
        <form className='flex flex-col p-4 gap-4 items-center justify-center text-center' onSubmit={handleSubmit(onSubmit)}>
            <input className="w-full p-2 border outline-none bg-slate-300 text black text-lg "  placeholder='first name'  {...register('firstName')} />
            <input className="w-full p-2 border outline-none bg-slate-300 text black text-lg "  placeholder='last name' {...register('lastName', { required: true })} />
            {errors.lastName && <p>Last name is required.</p>}
            <input className="w-full p-2 border outline-none bg-slate-300 text black text-lg "  placeholder='age' {...register('age', { pattern: /\d+/ })} />
            {errors.age && <p>Please enter number for age.</p>}
            <input type="submit" />
        </form>
        
    </div>
  )
}

export default Body