import Image from 'next/image';
import React from 'react';
import { sanityClient } from "@/components/lib/sanity";

function LauchPlaces({ sanityData }) {
    const scrollToContact = () => {
        const contactSection = document.getElementById('contact-section');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    console.log(sanityData);

    // Function to handle section toggle
    const handleSectionToggle = (index, section) => {
        const exteriorSection = document.querySelector(`#exterior-section-${index}`);
        const interiorSection = document.querySelector(`#interior-section-${index}`);
        const exteriorButton = document.querySelector(`#exterior-button-${index}`);
        const interiorButton = document.querySelector(`#interior-button-${index}`);

        if (section === 'exterior') {
            exteriorSection.classList.remove('hidden');
            interiorSection.classList.add('hidden');
            exteriorButton.classList.add('text-orange-600', 'border-orange-600', 'border-b-2');
            interiorButton.classList.remove('text-orange-600', 'border-orange-600', 'border-b-2');
            interiorButton.classList.add('text-slate-500');
        } else {
            exteriorSection.classList.add('hidden');
            interiorSection.classList.remove('hidden');
            interiorSection.classList.add('flex');
            interiorButton.classList.add('text-orange-600', 'border-orange-600', 'border-b-2');
            exteriorButton.classList.remove('text-orange-600', 'border-orange-600', 'border-b-2');
            exteriorButton.classList.add('text-slate-500');
        }
    };

    return (
        <div className='relative flex flex-col gap-16 mt-16'>
            {
                sanityData?.villas.map((villaData, index) =>
                    <div key={index} className="relative pb-10 px-5 md:px-10 flex lg:flex-row flex-col md:flex-row justify-center md:justify-between z-10">
                        <div className='relative flex flex-col md:justify-center mb-5 w-full md:w-1/2'>
                            <div className="lg:absolute inset-0 md:justify-center mb-5">
                                <Image
                                    src={villaData?.bannerImage}
                                    fill
                                    alt="Rectangle"
                                    className="object-contain !static md:!w-[100%] !h-[100%]"
                                />
                                <div className="absolute translate-x-1/2 translate-y-0 inset-0 w-32 h-16 md:w-40 md:h-40 z-20 flex items-center justify-center">
                                    <Image src="/Medallions.png" fill alt="Medallions" className="object-contain !static md:!w-[100%] md:!h-full !w-60 !h-24" />
                                    <div className='absolute text-white text-center'>
                                        <p className='font-semibold md:text-lg text-[12px]'>{villaData?.price}</p>
                                        <p className='md:text-lg text-[10px]'>Onwards</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex items-center justify-start md:justify-start text-black md:text-left w-full md:w-1/2'>
                            <div className='flex justify-center flex-col gap-2 md:gap-4 w-full'>
                                <h1 className="text-3xl md:text-5xl font-semibold w-2/3">
                                    {villaData?.head?.text}
                                    <span className='text-blue-400'>{villaData?.head?.span}</span>
                                </h1>
                                <p className='text-sm md:text-lg'>{villaData?.subhead}</p>
                                <ul className='flex flex-col gap-3'>
                                    {Array.isArray(villaData?.description) && villaData.description.map((desc, i) => (
                                        <li key={i} className='flex gap-1 items-center md:text-lg text-md font-semibold leading-4'>
                                            <i className="fa-solid fa-circle text-sm text-blue-400"></i>{desc}
                                        </li>
                                    ))}
                                </ul>

                                <button onClick={scrollToContact} className='py-2 px-4 flex w-fit text-white items-center gap-1 bg-orange-600 text-xl hover:bg-orange-700'>
                                    Enquire Now
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                    </svg>
                                </button>

                                <div>
                                    <div className='flex border-b border-gray-200 mb-4'>
                                        <button id={`exterior-button-${index}`}
                                            className='py-2 px-4 -mb-px font-medium text-md transition-colors duration-300 text-orange-600 border-orange-600 border-b-2'
                                            onClick={() => handleSectionToggle(index, 'exterior')}>
                                            Exteriors
                                        </button>
                                        <button id={`interior-button-${index}`}
                                            className='py-2 px-4 -mb-px font-medium text-md transition-colors duration-300 text-slate-500' onClick={() =>
                                                handleSectionToggle(index, 'interior')}>
                                            Interiors
                                        </button>
                                    </div>
                                    <div id={`exterior-section-${index}`} className="flex flex-wrap gap-2">
                                        {Array.isArray(villaData?.exterior) && villaData.exterior.map((image) => (
                                            <Image key={image.id} src={image.url} layout="responsive" width={100} height={100} alt={image.alt} className=' !h-auto max-w-full !relative !w-24' />
                                        ))}
                                        
                                    </div>
                                    <div id={`interior-section-${index}`} className="hidden  flex-wrap gap-2">
                                        {Array.isArray(villaData?.interior) && villaData.interior.map((image) => (
                                            <Image key={image.id} src={image.url} layout="responsive" width={100} height={100} alt={image.alt} className=' !h-auto max-w-full !relative !w-24' />
                                        ))}
                                        
                                    </div>
                                </div>
                            </div>

                            <div className='absolute right-0 top-0 z-0 md:flex hidden'>
                                <Image src='/side.png' fill className='object-contain inset-0 h-24 !static' />
                            </div>

                        </div>
                        {index % 2 === 0 && (
                            <div className='absolute -bottom-14 left-0 md:flex hidden z-0'>
                                <Image src='/Rectangle 11.png' fill className='object-contain inset-0 !h-28 !relative top-0' />
                            </div>
                        )}
                        {index % 2 !== 0 && (
                            <div className='absolute -bottom-14 right-0 md:flex hidden z-0'>
                                <Image src='/Rectangle 12.png' fill className='object-contain inset-0 !h-28 !relative top-0' />
                            </div>
                        )}
                    </div>
                )
            }



        </div>
    );
}

export default LauchPlaces;
