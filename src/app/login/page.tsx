"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {

  const router = useRouter();
  return (
    <main>
      <div className="p-2 w-[300px] mx-auto border-2 border-slate-100 shadow-lg">
        <h1 className='text-black font-bold text-2xl text-center'>LOGIN</h1>
        <form className='mx-2 my-4'>
          <h2 className='text-xl font-semibold m-2'>Username</h2>
          <input type="text" placeholder='Enter UserName' className='outline-none border border-gray-400 rounded-sm m-2 p-2'/>
          <h2 className='text-xl font-semibold m-2'>Password</h2>
          <input type="text" placeholder='Enter Password'className='outline-none border border-gray-400 rounded-sm m-2 p-2'/>
        </form>
        <div className='text-center'>
          <button className='p-1 px-3 text-white bg-yellow-600 hover:bg-pink-500 font-medium rounded-md' >Sign In</button>
        </div>
        <ul className='text-end mx-2 my-4'>
          <div className="text-blue-600 py-1 hover:text-red-400">
            <button>Forgot Password</button>
          </div>
          <div className="text-blue-600 cursor-pointer py-1 hover:text-red-400">
            <Link href='/signUp'>New User ? Register Now</Link>
          </div>
        </ul>
      </div>
    </main>
  )
}

export default page
