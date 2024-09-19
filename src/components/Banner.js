import React from 'react';
import Image from 'next/image';
import Navbar from './Navbar';
import { useMediaQuery } from 'react-responsive';

function Banner({ sanityData }) {
    const isMobile = useMediaQuery({ maxWidth: 800 });
    const scrollToContact = () => {
        const contactSection = document.getElementById('contact-section');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const bannerImageUrl = sanityData?.banner?.bannerImage;

    console.log(bannerImageUrl);

    return (
        <>
            <Navbar />
            <div className="relative h-screen flex">
            <div
      className={`
        w-full
        flex justify-between lg:justify-start items-center bg-[#E35925]
        p-3 lg:p-20
        ${isMobile ? 'bg-cover bg-center' : 'lg:w-[70%]'}
      `}
      style={isMobile ? { bannerImageUrl: `url(${bannerImageUrl})` } : {}}
    >
                    <div className="max-w-2xl">
                        <h1 className="lg:text-black text-white md:text-6xl text-5xl font-semibold mb-4">
                            {sanityData?.banner?.head?.heading} <span className="text-black lg:text-white">{sanityData?.banner?.head?.location}</span>
                        </h1>
                        <p className="text-black md:text-lg text-md mb-8">
                            {sanityData?.banner?.head?.small_description}
                        </p>
                        <button
                            onClick={scrollToContact}
                            className="bg-black text-white px-6 py-3 text-lg font-semibold flex items-center gap-2"
                        >
                            Enquire Now
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className='flex-col justify-center items-end h-screen lg:pe-20 pe-3 flex lg:hidden'>
                        <div className="absolute right-1 flex flex-col gap-4 justify-center items-center bg-opacity-40 bg-white rounded-full w-fit px-2 py-3">
                            <Image
                                src="/Group 3.png"
                                width={40}
                                height={40}
                                alt="Group 3"
                                className="cursor-pointer transition-transform transform hover:scale-110 hover:opacity-80"
                            />
                            <Image
                                src="/Group 2.png"
                                width={40}
                                height={40}
                                alt="Group 2"
                                className="cursor-pointer transition-transform transform hover:scale-110 hover:opacity-80"
                            />
                            <Image
                                src="/Group 1.png"
                                width={40}
                                height={40}
                                alt="Group 1"
                                className="cursor-pointer transition-transform transform hover:scale-110 hover:opacity-80"
                            />
                        </div>
                    </div>
                </div>

                <div className="bg-[#3A6DB4] w-[30%] relative hidden lg:flex">
                  <div className="hidden lg:flex absolute top-1/2 right-0 transform -translate-y-1/2 -translate-x-1/3 w-[120%] h-4/5 rounded-3xl overflow-hidden shadow-xl">
                        <Image
                            src="/banner-image.png"
                            alt="Construction workers"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>

                    <div className='flex flex-col justify-center items-center h-screen pe-20'>
                        <div className="absolute right-16 top-3/2 flex flex-col gap-4 justify-center items-center bg-opacity-40 bg-white rounded-full w-fit px-2 py-3">
                            <Image
                                src="/Group 3.png"
                                width={40}
                                height={40}
                                alt="Group 3"
                                className="cursor-pointer transition-transform transform hover:scale-110 hover:opacity-80"
                            />
                            <Image
                                src="/Group 2.png"
                                width={40}
                                height={40}
                                alt="Group 2"
                                className="cursor-pointer transition-transform transform hover:scale-110 hover:opacity-80"
                            />
                            <Image
                                src="/Group 1.png"
                                width={40}
                                height={40}
                                alt="Group 1"
                                className="cursor-pointer transition-transform transform hover:scale-110 hover:opacity-80"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner;
