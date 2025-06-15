import { homeMetadata } from './metadata';
import HomeContent from '@/app/components/HomeContent';

export const metadata = homeMetadata;
// This metadata will be used for the home page
export default function HomePage() {
  return <HomeContent />;
}
