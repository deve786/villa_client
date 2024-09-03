import Image from 'next/image'
import React from 'react'

function Review() {
    const data = [{
        customerReview: "Wise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income. The expense windows adapted sir. Wrong widen drawn ample eat off doors money. Offending belonging promotion.",
        customerDes: {
            desc1: "Placing assured be if removed it besides on",
            desc2: "Building mr concerns servants in he outlived am breeding."
        },
        customerImage: "/john.png",
        customerName: "John Smith",
        position:'CEO'
    }]
    const customer = data[0]

    return (
        <div className='p-6 flex lg:flex-row flex-col justify-center items-center'>
            <div className='  flex flex-col justify-center md:w-1/2 relative md:left-6 z-10'>
                <div className=' shadow-md p-5 md:mb-0 mb-5'>
                    <h1 className='text-4xl font-semibold'>Customer Review</h1>
                    <p className='text-lg'>
                        {customer.customerReview}                    </p>
                    <ul className='ms-10 mt-8'>

                        { Object.values(customer.customerDes).map((item,index)=>
                            <li key={index} className='list-disc text-lg'>{item}</li>
                        )}
                            
                    </ul>

                    <div className='flex items-center gap-5 mt-8'>
                        <Image src={customer.customerImage} layout="fill"  alt="" className='!w-24 !h-24 !static' />
                        <div>
                            <p id='customer_name' className='text-3xl font-normal'>{customer.customerName}</p>
                            <p>{customer.position}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='z-0'>
                <Image layout="fill" src="/building.png" alt="" className='!w-fit !h-fit !static'/>
                <div className='relative left-1/2 bottom-1/2 w-fit '>
                    <Image layout="fill" src="/play_icon.png" alt="" className='!h-fit !w-12 !flex cursor-pointer ' />
                </div>
            </div>
        </div>
    )
}

export default Review