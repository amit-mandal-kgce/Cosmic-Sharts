"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, {useState, ChangeEvent} from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';


const OrderDetSec = ({id, headings, imgs, noOfStar, noOfReatings, priceDelet , offer}: IProduct) => {
    const discountdot = (priceDelet / 100) * offer;
    const discountnotdot = Math.round(discountdot)
    const disPrice =priceDelet - discountnotdot;
    
    // --------------------------------------
    const [dropItems, setdropItems] = useState<number>(1);
    const handelQulity=(event: ChangeEvent<HTMLSelectElement>)=>{
        setdropItems(Number(event.target.value))
    }
    const itempriceTotl = priceDelet * dropItems;
    const discountTotal = discountnotdot*dropItems;
    const totalDisPrice = disPrice * dropItems;
  return (
     <div className='pt-1 w-full flex flex-col'>
        <div className="text-center py-2 font-bold text-2xl text-blue-500 border-b-2 border-dotted"><span>Order Summary</span></div>
        <div className="grid md:grid-cols-2 gap-16 my-3">
            <ul className='p-2 flex flex-col place-items-center'>
                <Image src={imgs} className='w-[30%]' alt="Santosh" />
                <ul className='border border-gray-300  p-1 mt-4 px-2'>
                    <span>Qty:</span>
                    <select className='outline-none pl-2'  onChange={handelQulity}> 
                        {[1,2,3,4,5].map((ele)=>
                            <option key={ele} value={ele}>{ele}</option>
                        )}
                    </select>
                </ul>
            </ul>
            <ul className='pl-[25%] md:pl-1'>
                <div className='flex flex-col gap-y-4'>
                   <div className="text-2xl font-bold">{headings}</div>
                   <div className='flex gap-2 text-2xl text-amber-400'>
               {  

               [1, 2, 3, 4, 5].map((i) => (
                   i <= noOfStar?
                   <AiFillStar key={i}/>:
                   <AiOutlineStar key={i}/>
                 ))
               }
                 <p className='text-gray-400 text-xl'>({noOfReatings} Review)</p></div>
                 <div className="flex flex-row gap-1 font-semibold"><del className='text-gray-400'>₹{priceDelet}</del><span>₹{disPrice}</span><span className='text-green-600'>{offer}% OFF</span></div>
                 <div className=""><p>Delivery by Sun Dec 18 |</p><del className='text-gray-400'>₹40</del> <span className='text-green-600'>FREE Delivery</span></div>
               </div>
            </ul>
        </div>
        <div className="px-10 md:px-60 py-16">
            <ul className='grid md:grid-cols-1 gap-y-2'>
                <h1 className='font-bold py-2'>Price Details</h1>
                <div className='grid gap-y-2'>
                    <div className="grid grid-cols-2 py-6 border-t border-b border-dotted border-t-gray-400">
                        <ul className="grid gap-y-3 pl-4">
                            <li>Price ({dropItems} item)</li>
                            <li>Discount</li>
                            <li>Delivery Charges</li>
                        </ul>
                        <ul className="grid gap-y-3 pl-4">
                            <li className='r-0'>₹{itempriceTotl}</li>
                            <li className='r-0'>-₹{discountTotal}</li>
                            <li><del className='text-gray-400'>₹40</del> <span className='text-green-500'>FREE Delivery</span></li>
                        </ul>
                    </div>
                    <ul className='grid grid-cols-2'>
                        <li className='pl-4'>Total Amount</li>
                        <li className='pl-4'>₹{totalDisPrice}</li>
                    </ul>
                    <li className='text-green-600 py-3 pl-4'>You will save ₹{discountTotal} on this order</li>
                </div>
            </ul>
            <div className='p-3 border-t-2 border-dotted'>
                <ul className='grid grid-rows-2 float-left'>
                    <p>{totalDisPrice}</p>
                    <p className='text-xs text-blue-600'>View Price Details</p>
                </ul>
                <Link className='p-2 px-4 rounded-md bg-amber-400 float-right' href={`/payment/${id}/${dropItems}`}>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default OrderDetSec

export interface IProduct {
    id: number;
    headings: string;
      imgs: string;
       noOfStar: number;
        noOfReatings: number;
         priceDelet: number;
          offer: number;
}