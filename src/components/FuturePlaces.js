import Image from 'next/image'
import React from 'react'

function futureconstruction({ sanityData }) {
    console.log(sanityData);

    return (
        <div className='bg-gray-100 gap-10 p-5 py-10 md:p-10 flex flex-col md:flex-row justify-center md:justify-between'>
            {/* Image Section */}
            <div className='relative flex flex-col md:justify-center mb-5 w-full md:w-1/2'>
                <div className="relative w-full h-[300px] md:h-[500px] lg:h-[600px]">
                    <Image
                        src={sanityData?.futureconstruction?.bannerImage}
                        fill
                        alt="Rectangle"
                        className="object-cover"
                    />
                    
                </div>
            </div>

            {/* Text Section */}
            <div className='flex items-center justify-start md:justify-start text-black md:text-left w-full md:w-1/2'>
                <div className='flex justify-center flex-col gap-2 md:gap-4 w-full '>
                    <h1 className="text-3xl md:text-5xl font-semibold flex flex-col">
                        <span>{sanityData?.futureconstruction?.head?.heading}</span>
                        <span className='text-blue-400'>{sanityData?.futureconstruction?.head?.location}</span>
                    </h1>
                    <ul className='flex flex-col gap-3'>
                        {Array.isArray(sanityData?.futureconstruction?.description) && sanityData?.futureconstruction?.description.map((item, index) => (
                            <li key={index} className='flex gap-1 items-center md:text-lg text-md font-semibold'>
                                <i className="fa-solid fa-circle text-sm text-blue-400"></i>{item}
                            </li>
                        ))}
                    </ul>
                    <button className='py-1 transition ease-in-out duration-300 px-4 flex text-lg w-fit items-center gap-1 border border-orange-600 hover:bg-orange-600 hover:text-white text-orange-600'>
                        View Demo
                    </button>
                </div>
            </div>
        </div>

    )
}

export default futureconstruction