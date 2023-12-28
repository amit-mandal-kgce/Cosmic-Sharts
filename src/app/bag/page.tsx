'use client'
import React, { useEffect, useState } from 'react'

const Bagpage = () => {
  // prodcts adds POST
  const [productData, setProductData] = useState({
    image: '',
    name: '',
    price: '',
    offer: '',
    stars: '',
    review: '',
    category: '',
    sale: '',
  })

  const handelSubmit = async (ele: any)=>{
    ele.preventDefault();
    const res = await fetch('https://online-shop-backend-next1.vercel.app/api/productregister', 
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
        localStorage.setItem('user: Details', JSON.stringify(resData.user));
      }
  }

  // Product Request GET.......................
  // Define an interface for the product data
interface Product {
  product: {
    id: string;
    image: string;
    name: string;
    price: number;
    offer: string;
    stars: number;
    review: string;
    category: string;
    sale: boolean;
  };
}
  const [productGet, userProductGet] = useState<Product[]>([])
  useEffect(() => {
    const getProduct = async () =>{
      const res = await fetch('https://online-shop-backend-next1.vercel.app/api/productregister',
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const resData = await res.json();
      userProductGet(resData);
    } 
    getProduct();
  }, []);

  console.log('GET :>>', productGet)

  return (
    <main className='mt-[-11px]'>
    <div className='h-screen bg-lime-200 flex flex-col md:flex-row'>
      <div className="w-full flex flex-col items-center justify-center">
        <h1 className='text-2xl lg:text-3xl font-extrabold uppercase mb-16'>add Your Data</h1>
        <form onSubmit={(ele)=> handelSubmit(ele)}>
          <div className="flex gap-3 mb-4">
          <label className='font-bold text-sm lg:text-base text-gray-800'>Image</label>
          <input type='name' name='name' value={productData.image} onChange={(e)=> setProductData({...productData, image: e.target.value})} placeholder='Product name' className='outline-none p-1 text-xs lg:text-base px-2 rounded-md'/>
          </div>
          <div className="flex gap-3 mb-4">
          <label className='font-bold text-sm lg:text-base text-gray-800'>Name</label>
          <input type='name' name='name' value={productData.name} onChange={(e)=> setProductData({...productData, name: e.target.value})} placeholder='Product name' className='outline-none p-1 text-xs lg:text-base px-2 rounded-md'/>
          </div>
          <div className="flex gap-3 mb-4">
          <label className='font-bold text-sm lg:text-base text-gray-800'>Price</label>
          <input type='price' name='price' value={productData.price} onChange={(e)=> setProductData({...productData, price: e.target.value})} placeholder='Product price' className='outline-none p-1 text-xs lg:text-base px-2 rounded-md'/>
          </div>
          <div className="flex gap-3 mb-4">
          <label className='font-bold text-sm lg:text-base text-gray-800'>Offer</label>
          <input type='offer' name='offer' value={productData.offer} onChange={(e)=> setProductData({...productData, offer: e.target.value})} placeholder='Product offer' className='outline-none p-1 text-xs lg:text-base px-2 rounded-md'/>
          </div>
          <div className="flex gap-3 mb-4">
          <label className='font-bold text-sm lg:text-base text-gray-800'>Stars</label>
          <input type='stars' name='stars' value={productData.stars} onChange={(e)=> setProductData({...productData, stars: e.target.value})} placeholder='Product stars' className='outline-none p-1 text-xs lg:text-base px-2 rounded-md'/>
          </div>
          <div className="flex gap-3 mb-4">
          <label className='font-bold text-sm lg:text-base text-gray-800'>Review</label>
          <input type='review' name='review' value={productData.review} onChange={(e)=> setProductData({...productData, review: e.target.value})} placeholder='Product review' className='outline-none p-1 text-xs lg:text-base px-2 rounded-md'/>
          </div>
          <div className="flex gap-3 mb-4">
          <label className='font-bold text-sm lg:text-base text-gray-800'>Category</label>
          <input type='category' name='category' value={productData.category} onChange={(e)=> setProductData({...productData, category: e.target.value})} placeholder='Product category' className='outline-none p-1 text-xs lg:text-base px-2 rounded-md'/>
          </div>
          <div className="flex gap-3 mb-4">
          <label className='font-bold text-sm lg:text-base text-gray-800'>Sale</label>
          <input type='sale' name='sale' value={productData.sale} onChange={(e)=> setProductData({...productData, sale: e.target.value})} placeholder='Product sale' className='outline-none p-1 text-xs lg:text-base px-2 rounded-md'/>
          </div>
          <button type='submit' className='bg-yellow-400 font-semibold text-white py-2 px-4 rounded-md hover:bg-red-400 hover:text-black'>Add Now</button>
        </form>
      </div>
      <div className="">
        <h1 className='text-md text-center font-extrabold uppercase py-6'>add Your Data</h1>
      <div className=" h-[75%] m-1 overflow-y-scroll">
        {productGet.map((ele, index) => (
     <div key={index} className=" bg-red-400 my-3 rounded-lg p-6 ">
      <h1 className="font-bold text-xs md:text-sm text-green-700">Image: <span className='font-light text-yellow-100'>{ele.product.id}</span></h1>
      <h1 className="font-bold text-xs md:text-sm text-green-700">Image: <span className='font-light text-yellow-100'>{ele.product.image}</span></h1>
      <h1 className="font-bold text-xs md:text-sm text-green-700">Name: <span className='font-light text-yellow-100'>{ele.product.name}</span></h1>
      <h1 className="font-bold text-xs md:text-sm text-green-700">Price: <span className='font-light text-yellow-100'>{ele.product.price}</span></h1>
      <h1 className="font-bold text-xs md:text-sm text-green-700">Offers: <span className='font-light text-yellow-100'>{ele.product.offer}</span></h1>
      <h1 className="font-bold text-xs md:text-sm text-green-700">Stars: <span className='font-light text-yellow-100'>{ele.product.stars}</span></h1>
      <h1 className="font-bold text-xs md:text-sm text-green-700">Review: <span className='font-light text-yellow-100'>{ele.product.review}</span></h1>
      <h1 className="font-bold text-xs md:text-sm text-green-700">Category: <span className='font-light text-yellow-100'>{ele.product.category}</span></h1>
      <h1 className="font-bold text-xs md:text-sm text-green-700">Sale: <span className='font-light text-yellow-100'>{ele.product.sale}</span></h1>
  </div>
))}

      </div>
      </div>
    </div>
</main>
)};
export default Bagpage
