import React from 'react'
import { useForm } from 'react-hook-form';

function Body() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = data => console.log(data);
  return (
    <div className="p-3 text-black flex flex-col w-2/3">
        <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
            <input placeholder='first name'  {...register('firstName')} />
            <input placeholder='last name' {...register('lastName', { required: true })} />
            {errors.lastName && <p>Last name is required.</p>}
            <input placeholder='age' {...register('age', { pattern: /\d+/ })} />
            {errors.age && <p>Please enter number for age.</p>}
            <input type="submit" />
        </form>
        
    </div>
  )
}

export default Body