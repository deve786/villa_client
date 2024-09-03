import Image from 'next/image';
import React from 'react';

function LauchPlaces() {

    const images1 = [
        {
            src: "/imagTab1.png",
            alt: "Image 1",
            id: 1
        },
        {
            src: "/imagTab2.png",
            alt: "Image 2",
            id: 2
        },
        {
            src: "/imagTab3.png",
            alt: "Image 3",
            id: 3
        },
        {
            src: "/imagTab4.png",
            alt: "Image 4",
            id: 4
        },
        {
            src: "/imagTab5.png",
            alt: "Image 5",
            id: 5
        }
    ];

    const images2 = [
        {
            src: "/imagTab11.png",
            alt: "Image 1",
            id: 1
        },
        {
            src: "/imagTab12.png",
            alt: "Image 2",
            id: 2
        },
        {
            src: "/imagTab13.png",
            alt: "Image 3",
            id: 3
        },
        {
            src: "/imagTab14.png",
            alt: "Image 4",
            id: 4
        },
        {
            src: "/imagTab15.png",
            alt: "Image 5",
            id: 5
        }
    ];
    return (
        <div className='flex flex-col gap-16'>
            <div className="p-5 md:p-10 gap-10 flex lg:flex-row flex-col md:flex-row justify-center md:justify-between">
                <div className="relative flex flex-col md:justify-center  mb-5  w-1/2 ">

                    <div className="lg:absolute inset-0 w-full lg:h-full h-56 -left-28 md:left-0 ">
                        <Image src="/Rectangle 4.png" layout="fill" alt="Rectangle" className="object-contain" />

                    </div>

                    <div className="lg:absolute w-full h-full lg:flex hidden relative inset-0 top-32 md:left-[70%] left-1/2 transform -translate-x-1/2 md:w-80 md:h-full md:top-32 z-10">
                        <Image src="/image.png" layout="fill" alt="Image" className="object-contain" />
                        <div className="lg:absolute relative lg:flex hidden inset-0 w-32 h-16 top-0 left-0 transform translate-y-0 translate-x-1/2 md:w-40 md:h-40 md:top-0 z-20  flex items-center justify-center">
                            <div className='text-white z-10 '>
                                <p className='font-semibold text-lg'>60 Lakh</p>
                                <p>Onwards</p>
                            </div>
                            <Image src="/Medallions.png" layout="fill" alt="Medallions" className="object-contain " />
                        </div>

                    </div>
                    <div className='absolute left-32 -bottom-10  lg:flex hidden justify-start w-full'><button className="py-1 px-4 w-fit items-center gap-1 border border-orange-600  ">View Demo </button></div>

                </div>




                <div className='flex items-center justify-start md:justify-start text-black md:text-left w-full md:w-1/2'>
                    <div className='flex justify-center flex-col gap-2 md:gap-4 w-full '>
                        <h1 className="text-3xl md:text-5xl font-semibold">
                            Our Newly Launched <br/>Villa in <span className='text-blue-400'>Kazhakootam</span>
                        </h1>
                        <p className='text-sm md:text-lg'>Indulge in Luxury with our Stunning Collection of Villas</p>
                        <ul className='flex flex-col gap-3'>
                            <li className='flex gap-1 items-center text-lg font-semibold'><i className="fa-solid fa-circle text-blue-400"></i>Near to Technopark</li>
                            <li className='flex gap-1 items-center  text-lg font-semibold'><i className="fa-solid fa-circle text-blue-400"></i>Sea Facing</li>
                            <li className='flex gap-1 items-center  text-lg font-semibold'><i className="fa-solid fa-circle text-blue-400"></i>World class Interiors</li>
                        </ul>
                        <button className='py-2 text-white px-4 flex w-fit items-center gap-1 text-lg bg-orange-600'>Enquire Now <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                        </button>
                        <div className=''>
                            <div className='flex border-b border-gray-200 mb-4'>
                                <button className={`py-2 px-4 -mb-px font-medium text-md transition-colors duration-300 text-orange-600 border-orange-600 border-b-2`}>
                                    Exteriors
                                </button>
                                <button className={`py-2 px-4 -mb-px font-medium text-md text-slate-500 transition-colors duration-300`}>
                                    Interiors
                                </button>
                            </div>
                            <div className='flex gap-2  md:flex-nowrap flex-wrap '>
                            {images1.map(image => (
                                    <Image src={image.src} layout="fill" alt={image.alt} className='w-28 h-auto max-w-full !relative !w-24' />
                                        
                                ))}
                                
                               
                            </div>
                        </div>
                    </div>
                    <div className='relative right-20'>
                        <Image src='/side.png' layout="fill" className='object-contain inset-0 h-24 ' />
                    </div>
                </div>
            </div>

            <div className='p-5 md:p-10 flex flex-col md:flex-row justify-center md:justify-between'>
                <div className='relative flex justify-start mb-5 md:mb-0 w-full md:w-1/2'>
                    
                    <div className="relative flex flex-col md:justify-center  mb-5  w-1/2 ">

                        <div className="lg:absolute inset-0  w-full lg:h-full h-56 -left-28 md:left-0 ">
                            <Image src="/launch11.png" layout="fill" alt="Rectangle" className="object-contain" />

                        </div>

                        <div className="lg:absolute w-full h-full lg:flex hidden relative inset-0 top-32 md:left-[70%] left-1/2 transform -translate-x-1/2 md:w-80 md:h-full md:top-32 z-10">
                            <Image src="/launch12.png" layout="fill" alt="Image" className="object-contain" />
                            <div className="lg:absolute relative lg:flex hidden inset-0 w-32 h-16 top-0 left-0 transform translate-y-0 translate-x-1/2 md:w-40 md:h-40 md:top-0 z-20  flex items-center justify-center">
                                <div className='text-white z-10 '>
                                    <p className='font-semibold text-lg'>75 Lakh</p>
                                    <p>Onwards</p>
                                </div>
                                <Image src="/Medallions.png" layout="fill" alt="Medallions" className="object-contain " />
                            </div>

                        </div>
                        <div className='absolute left-32 -bottom-10 lg:flex hidden justify-start w-full'><button className="py-1 px-4 w-fit items-center gap-1 border border-orange-600  ">View Demo </button></div>

                    </div>

                    
                </div>

                <div className='flex gap-10 items-center justify-start md:justify-start text-black md:text-left w-full md:w-1/2'>
                    <div className='flex justify-center flex-col gap-2 md:gap-4 w-full '>
                        <h1 className="text-3xl md:text-5xl font-semibold">
                            Our Newly Launched <br/> Villa in <span className='text-blue-400'>Thambanoor</span>
                        </h1>
                        <p className='text-sm md:text-lg'>Indulge in Luxury with our Stunning Collection of Villas</p>
                        <ul className='flex flex-col gap-3'>
                            <li className='flex gap-1 items-center text-lg font-semibold'><i className="fa-solid fa-circle text-blue-400"></i>Near to Padamanabha Swamy Temple</li>
                            <li className='flex gap-1 items-center text-lg font-semibold'><i className="fa-solid fa-circle text-blue-400"></i>Sea Facing</li>
                            <li className='flex gap-1 items-center text-lg font-semibold'><i className="fa-solid fa-circle text-blue-400"></i>World class Interiors</li>
                        </ul>
                        <button className='py-2 px-4 flex w-fit items-center gap-1 text-white bg-orange-600'>Enquire Now <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                        </button>
                        <div className=''>
                            <div className='flex border-b border-gray-200 mb-4'>
                                <button className={`py-2 px-4 -mb-px font-medium text-md transition-colors duration-300 text-orange-600 border-orange-600 border-b-2`}>
                                    Exteriors
                                </button>
                                <button className={`py-2 px-4 -mb-px font-medium text-md text-slate-500 transition-colors duration-300`}>
                                    Interiors
                                </button>
                            </div>
                            <div className='flex gap-2 md:flex-nowrap flex-wrap '>
                            {images2.map(image => (
                                    <Image src={image.src} layout="fill" alt={image.alt} className='w-28 h-auto max-w-full !relative !w-24' />
                                        
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-gray-100 gap-10 p-5 py-10 md:p-10 flex flex-col md:flex-row justify-center md:justify-between'>
                <div className="relative flex justify-start mb-5 md:mb-0 w-full md:w-1/2">
                <div className="relative w-32 h-32  lg:flex hidden ">
                        <Image src="/Ellipse 12.png" alt="" layout="fill" objectFit="contain" />
                    </div>
                    <div className="relative w-96 h-96  lg:flex hidden">
                        <Image src="/Ellipse 12.png" alt="" layout="fill" objectFit="contain" />
                    </div>

                    <div className="lg:absolute relative  w-48 z-10 top-0 md:left-52 left-0 -transform md:translate-x-1/2 translate-y-0 ">
                        <Image src="/launch21.png" alt="" width={640} height={800} objectFit="contain" />
                    </div>

                    <div className="absolute w-72 hidden md:flex m left-44 transform translate-x-1/2 md:translate-x-1/2 md:left-0  bottom-12 md:top-40 z-20  lg:flex hidden">
                        <Image src="/launch22.png" alt="" layout="fill" objectFit="contain" />
                    </div>
                </div>

                <div className='flex items-center justify-start md:justify-start text-black md:text-left w-full md:w-1/2'>
                    <div className='flex justify-center flex-col gap-2 md:gap-4 w-full '>
                        <h1 className="text-3xl md:text-5xl font-semibold">
                            Villa Construction,<br/> Now in <span className='text-blue-400'>Kovalam</span>
                        </h1>
                        <ul className='flex flex-col gap-3'>
                            <li className='flex gap-1 items-center text-lg font-semibold'><i className="fa-solid fa-circle text-blue-400"></i>Near to Padamanabha Swamy Temple</li>
                            <li className='flex gap-1 items-center text-lg font-semibold'><i className="fa-solid fa-circle text-blue-400"></i>Sea Facing</li>
                            <li className='flex gap-1 items-center text-lg font-semibold'><i className="fa-solid fa-circle text-blue-400"></i>World class Interiors</li>
                        </ul>
                        <button className='py-1 px-4 flex w-fit items-center gap-1 border border-orange-600 text-orange-600'>View Demo </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LauchPlaces;
