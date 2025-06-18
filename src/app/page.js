import { homeMetadata } from './metadata';
import HomeContent from '@/app/components/HomeContent';

export const metadata = homeMetadata;

export default function HomePage() {
  return <HomeContent />;
}
