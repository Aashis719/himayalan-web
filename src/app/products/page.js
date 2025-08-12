import React, { Suspense } from 'react'
import ProductComponent from './ProductComponent'
import { productsMetadata } from '@/app/metadata'
export const metadata = productsMetadata;
const page = () => {
  return (
    <Suspense fallback={null}>
      <ProductComponent />
    </Suspense>
  )  
}

export default page