"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import {BsCartPlus} from 'react-icons/bs'

const Card = ({id, imgs, headings, noOfReatings, noOfStar, priceDelet, offer, seal}: IProduct) => {

  // const pricesel = priceDelet & offer;
  // console.log(pricesel)
  const discount = (priceDelet / 100) * offer;
    const priceround = Math.round(discount)
    const prices = priceDelet - priceround;

  const router = useRouter()



  return (
    <div className=' border-2 border-slate-100 shadow-lg p-4 my-3 flex flex-col items-center relative w-[250px] h-[300px] cursor-pointer' onClick={() => router.push(`/details/${id}`)}>
        {seal && <h2 className='absolute bg-gradient-to-r from-red-500 text-xs font-bold text-white p-1 px-4 top-2 right-2'>SEAL!</h2>}
        <li className='absolute right-2 mt-4 top-6 list-none text-3xl'><BsCartPlus/></li>
        <img src={imgs} className='w-[70%] h-[70%]' alt="Image" />
        <ul className='flex flex-col items-center'>
            <h3 className='text-base font-semibold'>{headings}</h3>
            <div className='text-xl flex gap-2'><span className='text-amber-400 flex'>{
              [1, 2, 3, 4, 5].map((i) => (
                i<=noOfStar?
                <AiFillStar/>:
                <AiOutlineStar/>
              ))
            }</span> <span className='text-stone-400 text-sm'>{noOfReatings} (Review)</span></div>
            <p className='text-base font-bold'>₹{prices}.00 <del className='text-stone-400'>₹ {priceDelet}.00</del></p>
            <span className='text-emerald-800 text-base font-bold'>({offer}% Off)</span>
        </ul>
    </div>
  )
}

export default Card

export interface IProduct {
    id: number,
    imgs: string,
    headings: string,
    noOfStar: number,
    noOfReatings: number,
    priceDelet: number,
    offer: number,
    seal: boolean | undefined,
}