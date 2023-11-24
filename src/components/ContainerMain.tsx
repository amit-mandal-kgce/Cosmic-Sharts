import React from 'react'
import Card from './Card'
import { IProduct } from './Card'
import products from '@/data/products'



const ContainerMain = () => {

  const shuffelArrey = (array: any) => {
    return array
    .map((value: any) => ({value, sort: Math.random()}))
    .sort((a: any, b:any) => a.sort - b.sort)
    .map(({value}: any) => value);
  };


  let shuffleProducts = shuffelArrey(products).slice(0, 27)

  return (
    <div className='p-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center '>
      {shuffleProducts.map((el: IProduct) => (
        <Card 
        key={el.id}
        id={el.id}
        imgs={el.imgs}
        headings={el.headings}
        noOfStar={el.noOfStar}
        noOfReatings={el.noOfReatings}
        priceDelet={el.priceDelet}
        offer={el.offer}
        seal={el.seal}
        />
      ))}
    </div>
  )
}

export default ContainerMain
