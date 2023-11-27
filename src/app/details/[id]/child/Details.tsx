'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { BsCartPlus, BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'



const Details = ({id, headings, catagoris, imgs, noOfStar, noOfReatings, priceDelet , offer}: IProduct) => {

    const price = (priceDelet / 100) * offer;
    const discount = Math.round(price)
    const pricesx = priceDelet - discount;
  return (
     <div className='pt-8'>
      <div className="bg-gray-100 py-4">
        <div className="container flex gap-4 items-center text-gray-500">
          <Link href="/men" className='cursor-pointer hover:text-accent'>Home</Link>
          <div className="w-[30px] h-[3px] bg-gray-400"/>
          <p className='capitalize gap-4'>{catagoris[0]}</p>
          <div className="w-[30px] h-[3px] bg-gray-400"/>
          <p>{headings}</p>
        </div>
      </div>

      <div className="container py-8">
        <div className="grid md:grid-cols-2 gap-16">
          <ul className='border border-gray-300'><Image src={imgs} width={1000} height={1200} alt={headings}/></ul>
          <ul className="space-y-4 flex flex-col">
            <div className='flex gap-2 text-2xl text-amber-400'>
            {  

            [1, 2, 3, 4, 5].map((i) => (
                i <= noOfStar?
                <AiFillStar key={id}/>:
                <AiOutlineStar key={id}/>
              ))
            }
              <p className='text-gray-400 text-xl'>({noOfReatings} <span>Customer Review</span>)</p></div>
            <div className="text-3xl font-bold">{headings}</div>
            <div className="text-2xl">₹{pricesx}.00 <del className='text-gray-400 text-xl'>₹{priceDelet}.00</del> <span className='text-1xl font-semibold text-green-600'>({offer}% OFF)</span></div>
            <Link href="/" className="gap-2 flex bg-pink-500 py-2 text-gray-100 rounded-full w-44 px-5 hover:bg-pink-400"><BsCartPlus/><span>ADD TO CART</span></Link>
            <Link className="bg-orange-400 text-white rounded-full px-4 py-2 w-28 cursor-pointer" href={`/orderdet/${id}`}>BUY NOW</Link>
            <div className="w-[70px] h-[3px] bg-gray-400"/>
            <div className="text-based">Name: {headings}</div>
            <div className="text-based">Category: {catagoris[0]}</div>
            <div className="w-[70px] h-[3px] bg-gray-400"/>
            <div className="flex gap-2 items-center">SHARE:<BsInstagram/> <BsFacebook/><BsTwitter/></div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Details

export interface IProduct {
    id: number;
    headings: string;
     catagoris: string[];
      imgs: string;
       noOfStar: number;
        noOfReatings: number;
         priceDelet: number;
          offer: number;
}
