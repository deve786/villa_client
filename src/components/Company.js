import Image from 'next/image'
import React from 'react'

function Company({ sanityData }) {


    return (
        <div id='about'>
            <div className="h-screen bg-cover bg-center flex justify-center items-center text-white"
                style={{ backgroundImage: `url('./banner.png')` }}>
                <div className='flex flex-col items-center gap-5'>
                    <img src="./company_icon.png" alt="" className='w-56' />
                    <div className='flex flex-col items-center gap-3'>
                        <p className='md:text-3xl text-xl text-center'>The Responsible Builder of Kerala</p>
                        <img src="./play_icon.png" alt="" className='w-16 cursor-pointer' />
                    </div>
                </div>
            </div>
            <div className='bg-gray-100  md:py-10 md:px-4 py-4 items-center justify-center flex md:gap-24 gap-2 text-gray-500'>
                <div className='flex gap-2 items-center'>
                    <Image src="/project.png" layout='fill' className='!static md:!w-14 !w-8' />
                    <div className='flex flex-col leading-3'>
                        <p className='font-semibold md:text-3xl text-md '>{sanityData?.company?.project}</p>
                        <p className='md:font-semibold md:text-md text-sm leading-3'>Project Done</p>
                    </div>
                </div>

                <div className='flex gap-2 border-x-2 sm:px-10 px-3' >
                    <Image src="/client.png" layout='fill' className='!static md:!w-14 !w-8' />
                    <div className='flex flex-col leading-3 gap-1'>
                        <p className='font-semibold md:text-3xl text-md'>{sanityData?.company?.client}</p>
                        <p className='md:font-semibold md:text-md text-sm leading-3'>Client Handle</p>
                    </div>
                </div>

                <div className='flex gap-2 items-center'>
                    <Image src="/award.png" layout='fill' className='!static md:!w-14 !w-8' />
                    <div className='flex flex-col leading-3'>
                        <p className='font-semibold md:text-3xl text-md'>{sanityData?.company?.award}</p>
                        <p className='md:font-semibold md:text-md text-sm leading-3'>Award Won</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Company