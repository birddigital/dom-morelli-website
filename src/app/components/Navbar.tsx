'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar: React.FC = () => {
  // State to manage mobile menu visibility
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white py-4 px-8">
      <nav className="w-full flex justify-center">
        <div className="flex w-full max-w-screen-2xl items-center justify-between space-x-10">
          {/* Left Section */}
          <div className="flex flex-row justify-end items-center flex-1 hidden md:flex space-x-6 text-lg">
            <Link href="#" className="text-gray-600">
              Home
            </Link>
            <Link href="#" className="text-gray-600">
              Video
            </Link>
            <Link href="#" className="text-gray-600">
              Shows
            </Link>
          </div>

          {/* Center Section (Logo) */}
          <div className="flex justify-center items-center mx-auto">
            <Image
              src="https://pub-a919f337b6404843818a1b3b7857e3c1.r2.dev/dom-morelli-logo.webp"
              alt="Dom Morelli Logo"
              width={400} // Adjust based on your needs
              height={200} // Adjust based on your needs
            />
          </div>

          {/* Right Section */}
          <div className="flex flex-row justify-start items-center flex-1 hidden md:flex space-x-6 text-lg">
            <Link href="#" className="text-gray-600">
              Music
            </Link>
            <Link href="#" className="text-gray-600">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex ml-auto items-center">
            <div
              className="outline-none mobile-menu-button"
              onClick={toggleMobileMenu}
            >
              <svg
                fill="none"
                strokeLinecap="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-gray-500 hover:text-green-500"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden mobile-menu`}>
          <div className="flex flex-col items-center space-y-2">
            <Link href="#" className="text-gray-600 font-medium text-base">
              Home
            </Link>
            <Link href="#" className="text-gray-600 font-medium text-base">
              Video
            </Link>
            <Link href="#" className="text-gray-600 font-medium text-base">
              Shows
            </Link>
            <Link href="#" className="text-gray-600 font-medium text-base">
              Music
            </Link>
            <Link href="#" className="text-gray-600 font-medium text-lg">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
