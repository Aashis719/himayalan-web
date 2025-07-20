import React from 'react'
import StoryComponent from './StoryComponent'
import { storyMetadata } from '@/app/metadata'
export const metadata = storyMetadata;
const page = () => {
  return (
    <div>  
      <StoryComponent /> 
    </div>
  ) 
}

export default page