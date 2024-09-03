import React from 'react';
import Navbar from './Navbar';

function Banner() {
    return (
        <div
            className="h-screen bg-cover bg-center"
            style={{ backgroundImage: `url('./banner.png')` }}
        >
            <Navbar />
            <div className="flex items-center justify-center h-full gap-5 text-white flex-col ">
                <div className='flex items-center justify-center flex-col gap-2'>
                    <h1 className="text-white md:text-7xl text-5xl font-semibold text-center">Discover Your Dream <br />Villas  in <span className='text-yellow-400'>Trivandram</span></h1>
                    <p className='text-center text-2xl'>Indulge in Luxury with our Stunning Collection of Villas</p>
                </div>
                <button className='py-2 px-4 flex items-center gap-1 bg-orange-600 text-xl'>Enquire Now <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
                </button>
                <div className='flex flex-col gap-2 absolute right-2'>
                    <img src="./Group 3.png" alt="" className='w-10 cursor-pointer' />
                    <img src="./Group 2.png" alt="" className='w-10 cursor-pointer' />
                    <img src="./Group 1.png" alt="" className='w-10 cursor-pointer' />
                </div>
            </div>

        </div>
    );
}

export default Banner;
