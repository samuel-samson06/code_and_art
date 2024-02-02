import React from 'react'
import { useNavigate } from 'react-router-dom'

function CustomerInfo() {
    const navigate=useNavigate()
    function handleReturn(){
        navigate(-1)
    }
  return (
    <React.Fragment>
        <p onClick={handleReturn} className='  cursor-default text-xl font-semibold px-2 lg:pt-10 lg:pb-0 py-3 md:text-3xl'>←</p>
        <div className=' py-8 md:py-12'>
            <header className=' text-center font-bold '>
                <p className=' sm:text-lg md:text-xl text-sm '>Customer Details Form</p>
                <p className=' sm:text-sm md:text-lg text-[12px] px-2 py-2'>Please fill in your details to complete PURCHASE</p>
            </header>
            <main className=' px-2 flex flex-col gap-3'>
                <p className=' md:px-8 px-3 text-2xl font-semibold'>Information</p>
                <form action="" className=' md:px-12 lg:px-16 md:gap-4  px-6 flex flex-col gap-2'>
                    <label htmlFor=""  className=' md:grid md:grid-cols-[1fr,2fr] lg:grid-cols-[1fr,3fr] md:items-center'>
                        <p className=' font-semibold  uppercase '>First Name </p>
                        <input type="text" name="" className=" md:py-1 md:px-1 outline-none px-1 my-0.5 w-full mx-1 border-[1px] border-black " />
                    </label>
                    <label htmlFor=""  className=' md:grid md:grid-cols-[1fr,2fr] lg:grid-cols-[1fr,3fr] md:items-center'>
                        <p className=' font-semibold  uppercase '>Last Name</p>
                        <input type="text" name="" className=" md:py-1 md:px-1 outline-none px-1 my-0.5 w-full mx-1 border-[1px] border-black " />
                    </label>
                    <label htmlFor=""  className=' md:grid md:grid-cols-[1fr,2fr] lg:grid-cols-[1fr,3fr] md:items-center'>
                        <p className=' font-semibold  uppercase '>Address</p>
                        <input type="text" name="" className=" md:py-1 md:px-1 outline-none px-1 my-0.5 w-full mx-1 border-[1px] border-black " />
                    </label>
                    <label htmlFor=""  className=' md:grid md:grid-cols-[1fr,2fr] lg:grid-cols-[1fr,3fr] md:items-center'>
                        <p className=' font-semibold  uppercase '>Town/City</p>
                        <input type="text" name="" className=" md:py-1 md:px-1 outline-none px-1 my-0.5 w-full mx-1 border-[1px] border-black " />
                    </label>
                    <label htmlFor=""  className=' md:grid md:grid-cols-[1fr,2fr] lg:grid-cols-[1fr,3fr] md:items-center'>
                        <p className=' font-semibold  uppercase '>State/Province <span className=' text-sm lowercase'>(optional)</span></p>
                        <input type="text" name="" className=" md:py-1 md:px-1 outline-none px-1 my-0.5 w-full mx-1 border-[1px] border-black " />
                    </label>
                    <label htmlFor=""  className=' md:grid md:grid-cols-[1fr,2fr] lg:grid-cols-[1fr,3fr] md:items-center'>
                        <p className=' font-semibold  uppercase '>Phone Number</p>
                        <input type="tel" name="" className=" md:py-1 md:px-1 outline-none px-1 my-0.5 w-full mx-1 border-[1px] border-black " />
                    </label>
                    <label htmlFor=""  className=' md:grid md:grid-cols-[1fr,2fr] lg:grid-cols-[1fr,3fr] md:items-center'>
                        <p className=' font-semibold  uppercase '>Email Address</p>
                        <input type="email" name="" className=" md:py-1 md:px-1 outline-none px-1 my-0.5 w-full mx-1 border-[1px] border-black " />
                    </label>
                    <button type="submit" className=' my-3 bg-black text-white py-2 px-1 rounded'>Continue</button>
                </form>
            </main>
        </div>
    </React.Fragment>
  )
}

export default CustomerInfo