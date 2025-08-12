import React from 'react'
import PrivacyComponent from './PrivacyComponent'
import { privacyMetadata } from '@/app/metadata'

export const metadata = privacyMetadata;

const page = () => {
  return (
    <div>  
      <PrivacyComponent />
    </div>
  )
}  

export default page
