import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import BottomNav from './components/bottom-nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Finance',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='flex flex-col h-full'>
          <div className='flex-grow p-4 relative'>
            {children}
            {/* <AddFAB /> */}
          </div>
          <BottomNav />
        </div>
      </body>
    </html>
  );
}
