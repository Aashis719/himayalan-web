import { Inter, Playfair_Display } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css'; 
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

//
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',  
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans min-h-screen overflow-x-hidden">
        <div className="relative w-full">
          <Header />
          <main className="w-full">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
