import React from 'react'
import GalleryComponent from './GalleryComponent'
import { galleryMetadata } from '../metadata'
export const metadata = galleryMetadata;

const page = () => {
  return (
    <div> 
      <GalleryComponent />
    </div>
  )
}

export default page