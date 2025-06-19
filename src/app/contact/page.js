import React from 'react'
import ContactComponent from './ContactComponent'
import { contactMetadata } from '@/app/metadata'
export const metadata = contactMetadata;
// src/app/contact/page.js           
const page = () => {
  return (
    <div>
      <ContactComponent />
    </div>
  )
}

export default page