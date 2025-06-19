import { homeMetadata } from './metadata';
import HomeContent from '@/app/components/HomeContent';

export const metadata = homeMetadata;
// src/app/page.js
// This file defines the metadata for the home page and imports the HomeContent component to display the
export default function HomePage() {
  return <HomeContent />;
}
