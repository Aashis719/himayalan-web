import React from 'react'
import FAQsComponent from './FAQsComponent'
import { faqsMetadata } from '@/app/metadata'

export const metadata = faqsMetadata;

const page = () => {
  return (
    <div>  
      <FAQsComponent />
    </div>
  )
}  

export default page
