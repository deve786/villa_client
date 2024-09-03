import Link from 'next/link';
import React from 'react';

function Navbar() {
  return (
    <nav className=" text-white p-4 px-8">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo and Branding */}
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="Logo" className="h-14" />
          <Link href='/'>
            <div className="flex flex-col leading-3">
              <p className="uppercase md:text-2xl text-lg font-extrabold">Absolute</p>
              <p className="uppercase md:text-xs text-[10px] font-semibold">
                Builder and Developers (P) LTD
              </p>
            </div>
          </Link>
        </div>


        <div className="hidden md:flex space-x-5">
          <Link href="/" className="hover:text-orange-400">
            Home
          </Link>
          <Link href="/about" className="hover:text-orange-400">
            About Us
          </Link>
          <Link href="/projects" className="hover:text-orange-400">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-orange-400">
            Contact Us
          </Link>
        </div>

        <button className="md:hidden text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      <div className="md:hidden mt-4 hidden">
        <ul className="space-y-4">
          <li>
            <Link href="/" className="block text-orange-600 hover:text-orange-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="block hover:text-orange-400">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/projects" className="block hover:text-orange-400">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className="block hover:text-orange-400">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
