import React from 'react'
import GalleryComponent from './GalleryComponent'
import { galleryMetadata } from '../metadata'
export const metadata = galleryMetadata;
// src/app/gallery/page.js
// This file defines the metadata for the gallery page and imports the GalleryComponent to display the gallery.
const page = () => {
  return (
    <div>
      <GalleryComponent />
    </div>
  )
}

export default page