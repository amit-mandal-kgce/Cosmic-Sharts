"use client"
import ContainerMain from '@/components/ContainerMain'
import products from '@/data/products'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { BsCartPlus, BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'

const DetailPage = () => {

  const Router = useRouter();

    const params = useParams();
    const [productData, settProductData] = useState<any>();
    const id = params.id;
    const price = (productData?.priceDelet / 100) * productData?.offer;
    const discount = Math.round(price)
    const prices = productData?.priceDelet - discount;


    useEffect(() => {
        const id = params.id;
        const getProductData = products.filter((item)=> item.id.toString() === id)[0]
        settProductData(getProductData);
    })
  return (
    <div className='pt-8'>
      <div className="bg-gray-100 py-4">
        <div className="container flex gap-4 items-center text-gray-500">
          <Link href="/men" className='cursor-pointer hover:text-accent'>Home</Link>
          <div className="w-[30px] h-[3px] bg-gray-400"/>
          <p className='capitalize gap-4'>{productData?.catagoris}</p>
          <div className="w-[30px] h-[3px] bg-gray-400"/>
          <p>{productData?.headings}</p>
        </div>
      </div>

      <div className="container py-8">
        <div className="grid md:grid-cols-2 gap-16">
          <ul className='border border-gray-300'><img src={productData?.imgs} width={1000} height={1200} alt={productData?.headings}/></ul>
          <ul className="space-y-4 flex flex-col">
            <div className='flex gap-2 text-2xl text-amber-400'>
            {  

            [1, 2, 3, 4, 5].map((i) => (
                i <= productData?.noOfStar?
                <AiFillStar/>:
                <AiOutlineStar/>
              ))
            }
              <p className='text-gray-400 text-xl'>({productData?.noOfReatings} <span>Customer Review</span>)</p></div>
            <div className="text-3xl font-bold">{productData?.headings}</div>
            <div className="text-2xl">₹{prices}.00 <del className='text-gray-400 text-xl'>₹{productData?.priceDelet}.00</del> <span className='text-1xl font-semibold text-green-600'>({productData?.offer}% OFF)</span></div>
            <Link href="/" className="gap-2 flex bg-pink-500 py-2 text-gray-100 rounded-full w-44 px-5 hover:bg-pink-400"><BsCartPlus/><span>ADD TO CART</span></Link>
            <div className="bg-orange-400 text-white rounded-full px-4 py-2 w-28 cursor-pointer" onClick={()=> Router.push(`/orderdet/${id}`)}>BUY NOW</div>
            <div className="w-[70px] h-[3px] bg-gray-400"/>
            <div className="text-based">Name: {productData?.headings}</div>
            <div className="text-based">Category: {productData?.catagoris[0]}</div>
            <div className="w-[70px] h-[3px] bg-gray-400"/>
            <div className="flex gap-2 items-center">SHARE:<BsInstagram/> <BsFacebook/><BsTwitter/></div>
          </ul>
        </div>
      </div>
      <ContainerMain/>
    </div>
  )
}

export default DetailPage
