import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import clsx from 'clsx';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Jakob's Portfolio",
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.className,
          'm-0 flex w-full justify-center bg-primary-color transition-all duration-1000 ease-in-out '
        )}
      >
        <div className=" top-0 m-0 flex h-full min-h-screen w-[1400px] flex-col justify-between  self-center p-0 ">
          {' '}
          <Navbar />
          <div className=" flex w-full items-center justify-center self-center">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
