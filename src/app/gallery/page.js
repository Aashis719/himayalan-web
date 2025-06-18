import React from 'react'
import GalleryComponent from './GalleryComponent'
import { galleryMetadata } from '../metadata'
export const metadata = galleryMetadata;
// src/app/gallery/page.js
const page = () => {
  return (
    <div>
      <GalleryComponent />
    </div>
  )
}

export default page