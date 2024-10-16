// components/Navbar.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Poppins } from "next/font/google";

const PoppinsFont = Poppins({
  subsets: ["latin"],
  weight: ['700'],
});

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gradient-to-r from-yellow-500 to-red-600 p-4 sticky z-50 top-0 text-white shadow-lg">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <Link href="/home" className="flex items-center">
          <Image
            src="/Logo.png"
            alt="Logo"
            width={120}
            height={120}
            className="mr-2 rounded-full shadow-md" 
          />
        </Link>

        <div className={`flex flex-wrap ${PoppinsFont.className}`}>
          <ul className="flex flex-wrap justify-center font-extrabold space-x-4">
            <li>
              <Link href="/home" className="hover:text-yellow-300 transition-transform duration-300 transform hover:scale-105">
                Home
              </Link>
            </li>
            <li>
              <Link href="/product" className="hover:text-yellow-300 transition-transform duration-300 transform hover:scale-105">
                Products
              </Link>
            </li>
            <li>
              <Link href="/history" className="hover:text-yellow-300 transition-transform duration-300 transform hover:scale-105">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/Teams" className="hover:text-yellow-300 transition-transform duration-300 transform hover:scale-105">
                Teams
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
