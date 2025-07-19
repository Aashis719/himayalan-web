import React from 'react'
import ProductComponent from './ProductComponent'
import { productsMetadata } from '@/app/metadata'
export const metadata = productsMetadata;
const page = () => {
  return (
    <div>
      <ProductComponent /> 
    </div>
  ) 
}

export default page