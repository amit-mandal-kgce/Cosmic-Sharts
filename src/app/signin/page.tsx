'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const page = () => {
    const [productData, setProductData] = useState({
        email: '',
        password: '',
    })
    console.log('productData :>>', productData)
    const onchangeNavigate = useRouter();

    const handekSubmit = async (e: any) =>{
        e.preventDefault()
        const res = await fetch('https://online-shop-backend-next1.vercel.app/api/login',
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });
      if(res.status === 400){
        alert('Invalid Creadintial!')
      }else{
        const resData = await res.json()
        localStorage.setItem('user: token', resData.token);
        localStorage.setItem('user: Details', JSON.stringify(resData.product));
        onchangeNavigate.push('/men')
      }
    }
  return (
      <main className='h-screen bg-pink-200 flex justify-center items-center mt-[-11px]'>
      <div className="flex flex-col items-center ">
        <h1 className="text-3xl font-bold">Welcome Back</h1>
        <h2 className="text-base font-light mb-10">Pleas Login Now</h2>
        <form className='w-full flex flex-col' onSubmit={(e)=> handekSubmit(e)}>
          
          <div className="w-full flex flex-col mb-3 gap-y-1">
            <label htmlFor='email' className='font-semibold text-gray-600'>Email:</label>
            <input type="email" placeholder='Email' value={productData.email} onChange={(ele)=> setProductData({...productData, email: ele.target.value})} className='outline-none px-3 rounded-lg p-1' />
          </div>

          <div className="w-full flex flex-col mb-6 gap-y-1">
            <label htmlFor='password' className='font-semibold text-gray-600'>Password:</label>
            <input type="password" placeholder='Password' value={productData.password} onChange={(ele)=> setProductData({...productData, password: ele.target.value})} className='outline-none px-3 rounded-lg p-1' />
          </div>

          <button className='bg-red-300 rounded-lg p-1 mb-2' type='submit'>Sign in</button>
        </form>
        <div className="">Did not have an account?{" "}<Link href='/signup' className='underline text-blue-500 cursor-pointer'>sign in</Link></div>
      </div>
    </main>
  )
}

export default page
