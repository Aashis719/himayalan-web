import React from 'react'
import TermsComponent from './TermsComponent'
import { termsMetadata } from '@/app/metadata'

export const metadata = termsMetadata;

const page = () => {
  return (
    <div>   
      <TermsComponent />
    </div>
  )
}  

export default page
