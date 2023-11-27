import products from '@/data/products'
import Details, { IProduct } from './child/Details'

const page = ({params}: {params: {id: string[]}}) => {
  const [id] = params.id;
  const productData = products.find((ele: IProduct) => ele.id.toString()===id)


  return (
      <main>
        {productData && (
          <Details
          id={productData.id}
          key={productData.id}
          headings={productData.headings}
          noOfReatings={productData.noOfReatings}
          noOfStar={productData.noOfStar}
          imgs={productData.imgs}
          catagoris={productData.catagoris}
          priceDelet={productData.priceDelet}
          offer={productData.offer}
          />
        )}
      </main>
  )
}

export default page
