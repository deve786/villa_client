import React from 'react';
import Navbar from './Navbar';
import Image from 'next/image';

function Banner() {
    return (
        <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url('./banner.png')` }}>

            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent "></div>
            <Navbar />


            <div className="flex items-center justify-center h-full gap-5 text-white flex-col relative ">
                <div className='flex items-center justify-center flex-col gap-2'>
                    <h1 className="text-white md:text-7xl text-5xl font-semibold text-center animate-fade-slide-up">
                        Discover Your Dream <br />
                        Villas in <span className="text-yellow-400">Trivandram</span>
                    </h1>

                    <p className='text-center text-2xl'>Indulge in Luxury with our Stunning Collection of Villas</p>
                </div>
                <button className='py-2 px-4 flex items-center gap-1 transition-all	     bg-orange-600 text-xl hover:bg-orange-700'>
                    Enquire Now
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                </button>
                <div className='flex flex-col gap-4 absolute right-2'>
                    <Image
                        src="/Group 3.png"
                        fill
                        alt=""
                        className="!static cursor-pointer transition-transform transform hover:scale-110 hover:opacity-80"
                    />

                    <Image src="/Group 2.png" fill alt="" className='!static cursor-pointer transition-transform transform hover:scale-110 hover:opacity-80' />


                    <Image
                        src="/Group 1.png"
                        fill
                        className="!static cursor-pointer transition-transform transform hover:scale-110 hover:opacity-80"
                    />

                </div>
            </div>
        </div>
    );
}

export default Banner;
