'use client'
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useState } from 'react'

const PaymentSec = ({ headings, imgs, noOfStar, noOfReatings, priceDelet , offer}: IProduct) => {

    const paymentType = ['Wallet/Postpaid', 'Credit/Debit/ATM Card', 'Net Bankink', 'EMI(Easy Installments)', 'UPI', 'Cash on Delivery']
  const [payBtn, payList] = useState("");
  
  
  const params:{id: string[] } = useParams();

  const [id, dropItems]= params.id;
  const dropItemsNew = Number.parseInt(dropItems);

  const price = (priceDelet / 100) * offer;
  const discount = Math.round(price)
  const prices = priceDelet - discount;
  const amountPayble = prices * dropItemsNew;
  const discountTotal = discount * dropItemsNew;
  return (
    <div className='py-4 md:px-20 lg:px-40'>
      <div className='font-bold text-center text-2xl text-blue-500 border-b-2 border-dotted'><p className='py-2'>Payment Details</p></div>
      <p className='text-1xl font-bold p-3'>All Options Payment</p>
      <ul className='p-6'>
        {
          paymentType.map((e)=>{
            return(<div key={e} className='py-2'>
            <input type ='radio' name='paymentType' id={e} value={e} onChange={(el)=>{payList(el.target.value)}}/>
            <label htmlFor={e}> {e}</label>
            <br/>
          </div>)
          })
        }
      </ul>
          <div className="p-4">
            <ul className='grid md:grid-cols-1 gap-y-2'>
            <h1 className='font-bold text-gray-400 border-b border-dotted border-gray-400'>PRICE DETAILS</h1>
            <div className='grid gap-y-2'>
                <div className="grid grid-cols-2 gap-4">
                    <ul className="grid gap-y-2">
                      <li>Price ({dropItemsNew} item)</li>
                      <li>Delivery Charges</li>
                    </ul>
                    <ul className="grid gap-y-2">
                      <li className='r-0'>₹{amountPayble}</li>
                      <li className='r-0 text-green-600'>FREE</li>
                    </ul>
                </div>
                <ul className='py-2 grid grid-cols-2 border-t border-dotted border-t-gray-400'>
                    <li>Amount Payable</li>
                    <li>₹{amountPayble}</li>
                </ul>
            </div>
            </ul>
            <div className='p-2 py-8'>
                <ul className='grid md:grid-rows-2 gap-y-0 float-left'>
                    <p className='font-bold'>{amountPayble}</p>
                    <del className='text-xs text-gray-500'>{discountTotal}</del>
                </ul>
                <Link className='p-2 px-3 text-sm float-right rounded-md bg-amber-400' href={`/`}>Continue</Link>
                
            </div>
          </div>  
    </div>
  )
}

export default PaymentSec

export interface IProduct {
    id: number;
    headings: string;
      imgs: string;
       noOfStar: number;
        noOfReatings: number;
         priceDelet: number;
          offer: number;
}