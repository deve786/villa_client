import Image from 'next/image';
import React from 'react';

function LauchPlaces() {

    const villa = [
        {
            head: {
                text: "Our Newly Launched Villa in ",
                span: "Kazhakootam"
            },
            subhead: "Indulge in Luxury with our Stunning Collection of Villas",
            description: {
                desc1: "Near to Technopark",
                desc2: "Sea Facing",
                desc3: "World class Interiors"
            },
            bannerImage: '/build1.png',
            price: '60 Lakh',
            exterior: [
                { src: "/imagTab1.png", alt: "Image 1", id: 1 },
                { src: "/imagTab2.png", alt: "Image 2", id: 2 },
                { src: "/imagTab3.png", alt: "Image 3", id: 3 },
                { src: "/imagTab4.png", alt: "Image 4", id: 4 },
                { src: "/imagTab5.png", alt: "Image 5", id: 5 }
            ]
        },
        {
            head: {
                text: "Our Newly Launched Villa in ",
                span: "Thambanoor"
            },
            subhead: "Experience the Ultimate in Luxury Living",
            description: {
                desc1: "Near to Padamanabha Swamy Temple",
                desc2: "Sea Facing",
                desc3: "World class Interiors"
            },
            bannerImage: '/build2.png',
            price: '70 Lakh',
            exterior: [
                { src: "/imagTab11.png", alt: "Image 6", id: 1 },
                { src: "/imagTab12.png", alt: "Image 7", id: 2 },
                { src: "/imagTab13.png", alt: "Image 8", id: 3 },
                { src: "/imagTab14.png", alt: "Image 9", id: 4 },
                { src: "/imagTab15.png", alt: "Image 10", id: 5 }
            ]
        }
    ];

    const construction = [{
        head: {
            text: "Villa Construction, Now in ",
            span: "Kovalam"
        },
        description: {
            desc1: "Near to Padamanabha Swamy Temple",
            desc2: "Sea Facing",
            desc3: "World class Interiors"
        },
        bannerImage: '/ongoing.png',
    }]

    
    const ongoing = construction[0]
    return (
        <div className='flex flex-col gap-16'>
            {
                villa.map((villaData, index) =>
                    <div key={index} className="p-5 md:p-10  flex lg:flex-row flex-col md:flex-row justify-center md:justify-between">


                        <div className='relative flex flex-col md:justify-center  mb-5 w-full md:w-1/2'>
                            <div className=" lg:absolute inset-0  md:justify-center mb-5">
                                <Image
                                    src={villaData.bannerImage}
                                    layout="fill"
                                    alt="Rectangle"
                                    className="object-contain !static md:!w-[100%] !h-[100%]"
                                />
                                <div className="absolute  translate-x-1/2 translate-y-0 inset-0 w-32 h-16 md:w-40 md:h-40  z-20 flex items-center justify-center">
                                    <Image src="/Medallions.png" layout="fill" alt="Medallions" className="object-contain !static md:!w-[100%] md:!h-full !w-60 !h-24" />
                                    <div className='absolute text-white text-center'>
                                        <p className='font-semibold md:text-lg text-[12px]'>{villaData.price}</p>
                                        <p className='md:text-lg text-[10px]'>Onwards</p>
                                    </div>
                                </div>

                            </div>

                        </div>




                        <div className='flex items-center justify-start md:justify-start text-black md:text-left w-full md:w-1/2'>
                            <div className='flex justify-center flex-col gap-2 md:gap-4 w-full '>
                                <h1 className="text-3xl md:text-5xl font-semibold">{villaData.head.text}<span className='text-blue-400'>{villaData.head.span}</span>

                                </h1>
                                <p className='text-sm md:text-lg'>{villaData.subhead}</p>
                                <ul className='flex flex-col gap-3'>
                                    {Object.values(villaData.description).map((desc, i) => (
                                        <li key={i} className='flex gap-1 items-center text-lg font-semibold'>
                                            <i className="fa-solid fa-circle text-blue-400"></i>{desc}
                                        </li>
                                    ))}
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

                                        {villaData.exterior.map((image) => (
                                            <Image key={image.id} src={image.src} layout="responsive" width={100} height={100} alt={image.alt} className='w-28 h-auto max-w-full !relative !w-24' />
                                        ))}


                                    </div>
                                </div>
                            </div>
                            <div className='relative right-20'>
                                <Image src='/side.png' layout="fill" className='object-contain inset-0 h-24 ' />
                            </div>
                        </div>
                    </div>
                )
            }



            <div className='bg-gray-100 gap-10 p-5 py-10 md:p-10 flex flex-col md:flex-row justify-center md:justify-between'>
                <div className='relative flex flex-col md:justify-center  mb-5 w-full md:w-1/2'>

                    <Image
                        src={ongoing.bannerImage}
                        layout="fill"
                        alt="Rectangle"
                        className="object-contain !static md:!w-[100%]  !h-[100%]"
                    />

                </div>

                <div className='flex items-center justify-start md:justify-start text-black md:text-left w-full md:w-1/2'>
                    <div className='flex justify-center flex-col gap-2 md:gap-4 w-full '>
                        <h1 className="text-3xl md:text-5xl font-semibold">
                            {ongoing.head.text} <span className='text-blue-400'>{ongoing.head.span} </span>
                        </h1>
                        <ul className='flex flex-col gap-3'>
                            <ul className='flex flex-col gap-3'>
                                {Object.values(ongoing.description).map((item, index) => (
                                    <li key={index} className='flex gap-1 items-center text-lg font-semibold'>
                                        <i className="fa-solid fa-circle text-blue-400"></i>{item}
                                    </li>
                                ))}
                            </ul>

                        </ul>
                        <button className='py-1 px-4 flex w-fit items-center gap-1 border border-orange-600 text-orange-600'>View Demo </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LauchPlaces;
