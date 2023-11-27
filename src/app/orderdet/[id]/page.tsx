import React from 'react'
import data from '@/data/products'
import OrderDetSec, {IProduct} from './child/OrderDetSec';

const page = ({params}: {params: {id: string}}) => {
  const id = params.id;
  const product = data.find((ele: IProduct) => ele.id.toString()===id)

    
  return (
   <main>
    {product && (
        <OrderDetSec
        id={product.id}
          key={product.id}
          headings={product.headings}
          noOfReatings={product.noOfReatings}
          noOfStar={product.noOfStar}
          imgs={product.imgs}
          priceDelet={product.priceDelet}
          offer={product.offer}
        />
    )}
   </main>
  )
};



export default page;
