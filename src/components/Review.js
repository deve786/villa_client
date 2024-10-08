import Image from 'next/image'
import React from 'react'

function Review({ sanityData }) {
    // console.log(sanityData);



    return (
        <div className='p-6 py-8'>
            <div className='flex lg:flex-row flex-col justify-center items-center'>
                <div className='  flex flex-col justify-center md:w-1/2 relative md:left-10 z-50'>
                    <div className='bg-white border lg:p-20 p-8 mb-0 md:mb-0 z-50'>
                        <h1 className='lg:text-4xl text-2xl font-semibold'>Customer Review</h1>
                        <p className='lg:text-lg text-md'>
                            {sanityData?.review?.customerReview}                    </p>
                        <ul className='ms-10 mt-8'>

                            {sanityData?.review?.customerDes.map((item, index) =>
                                <li key={index} className='list-disc text-lg'>{item}</li>
                            )}

                        </ul>

                        <div className='flex items-center gap-5 mt-8'>
                            <Image src={sanityData.review.customerImage} fill alt="" className='!w-24 !h-24 !static' />
                            <div>
                                <p id='customer_name' className='text-3xl font-normal'>{sanityData.review.customerName}</p>
                                <p>{sanityData.review.position}</p>
                            </div>
                        </div>
                    </div>
                    <div className='md:mt-10 mt-3 flex justify-end gap-3 items-end mr-14 mb-4'>
                        <div className='gap-3 flex w-fit group'>
                            <i className="fa-solid fa-angle-left text-orange-600 cursor-pointer border-2 border-orange-600 rounded-full py-1.5 px-2.5 transform transition-transform duration-300 group-hover:-translate-x-0.5"></i>
                        </div>



                        <div className='gap-3 flex w-fit group'>
                            <i className="fa-solid fa-angle-right text-orange-600 cursor-pointer border-2 border-orange-600 rounded-full py-1.5 px-2.5 transform transition-transform duration-300 group-hover:translate-x-0.5"></i>
                        </div>
                    </div>
                </div>

                <div className='relative md:w-1/2 h-1/2 w-full'>
                    <Image fill src="/building.png" alt="" className='!w-full !h-full !static' />
                    {/* Play Button */}
                    <div className='absolute inset-0 flex items-center justify-center'>
                        <Image src="/play_icon.png" alt="Play" width={48} height={48} className='cursor-pointer' />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Review