import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';

function Navbar() {


  const clickFunction = () => {
    
    const mobileLinks = document.getElementsByClassName('mobile-links');
    Array.from(mobileLinks).forEach(link => {
      mobileMenuRef.current.classList.add('hidden'); 
    });
  };

  const mobileMenuRef = useRef(null);

  const toggleMobileMenu = () => {
    if (mobileMenuRef.current) {
      mobileMenuRef.current.classList.toggle('hidden');
      mobileMenuRef.current.classList.add('flex');
    }
  };

  return (
    <nav className="text-black  md:px-16 px-4 z-40 relative flex flex-col">
      <div className="container mx-auto flex items-center justify-between">
        <Link href='#'>
          <div className="flex items-center space-x-3">
            <Image src="/logo1.png" quality={100} priority unoptimized layout='fill' alt="Logo" className="md:!h-14 md:!w-20 !static !w-8 !h-8" />
            <div  className='!ml-0'>
              <div className="flex flex-col leading-3">
                <p className="uppercase md:text-xl text-lg font-[900]">Absolute</p>
                <p className="uppercase md:text-xxs text-[10px] font-bold">
                  Builder and Developers (P) LTD
                </p>
              </div>
            </div>
          </div>
        </Link>


        <div className="text-gray-400 hidden md:flex space-x-8 justify-end">
          <Link href="#" className="text-orange-400 font-semibold">Home</Link>
          <Link href="#about" className="hover:text-orange-400 font-semibold">About Us</Link>
          <Link href="#projects" className="hover:text-orange-400 font-semibold">Projects</Link>
          <Link href="#contact-section" className="hover:text-orange-400 font-semibold ">Contact Us</Link>
        </div>

        <button onClick={toggleMobileMenu} className="md:hidden text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>


      <div ref={mobileMenuRef} className="md:hidden fixed inset-0  top-14 mt-4 hidden justify-center overflow-y-auto">
        <ul className="space-y-4">
          <li><Link onClick={clickFunction} href="#" className="mobile-links block text-orange-600 hover:text-orange-400">Homes</Link></li>
          <li><Link onClick={clickFunction} href="#about" className="mobile-links block hover:text-orange-400">About Us</Link></li>
          <li><Link  onClick={clickFunction} href="#projects" className=" mobile-links block hover:text-orange-400">Projects</Link></li>
          <li><Link  onClick={clickFunction} href="#contact-section" className="mobile-links block hover:text-orange-400">Contact Us</Link></li>
        </ul>
      </div>

    </nav>
  );
}

export default Navbar;
