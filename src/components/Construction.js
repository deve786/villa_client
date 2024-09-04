import Image from 'next/image'
import React from 'react'

function Construction({ sanityData }) {
  return (
    <div className='bg-gray-100 gap-10 p-5 py-10 md:p-10 flex flex-col md:flex-row justify-center md:justify-between'>
                <div className='relative flex flex-col md:justify-center mb-5 w-full md:w-1/2'>
                    <Image
                        src={sanityData?.construction?.bannerImage}
                        fill
                    
                        sizes="100vw"
                        alt="Rectangle"
                        className="object-contain !static md:!w-[100%] !h-[100%]"
                    />
                </div>

                <div className='flex items-center justify-start md:justify-start text-black md:text-left w-full md:w-1/2'>
                    <div className='flex justify-center flex-col gap-2 md:gap-4 w-full '>
                        <h1 className="text-3xl md:text-5xl font-semibold">
                            {sanityData?.construction?.head?.text} <span className='text-blue-400'>{sanityData?.construction?.head?.span} </span>
                        </h1>
                        <ul className='flex flex-col gap-3'>
                            <ul className='flex flex-col gap-3'>
                                {Array.isArray(sanityData?.construction?.description) && sanityData?.construction?.description.map((item, index) => (
                                    <li key={index} className='flex gap-1 items-center md:text-lg text-md font-semibold'>
                                        <i className="fa-solid fa-circle text-sm text-blue-400"></i>{item}
                                    </li>
                                ))}
                            </ul>

                        </ul>
                        <button className='py-1 transition ease-in-out duration-300	 px-4 flex text-lg w-fit items-center gap-1 border border-orange-600 hover:bg-orange-600 hover:text-white text-orange-600'>View Demo </button>
                    </div>
                </div>
            </div>
  )
}

export default Construction