import Image from 'next/image'
import React from 'react'

function Contact({ sanityData }) {
    console.log(sanityData);


    return (
        <div id="contact-section" className='p-8 py-28 flex gap-10 flex-wrap lg:flex-nowrap justify-center'>
            <div className='flex gap-4 flex-col  '>
                <div>
                    <p>If you have any quires or have any project fill free to contact us.</p>
                    <p>Our support team is available for for 24/7.</p>
                </div>
                <div className='flex gap-10 md:flex-row flex-col'>
                    <div className='md:w-1/2 w-full'>
                        <div className='flex items-center gap-4  '>
                            <Image src="/location.png" layout='fill' className='!static !w-16 ' />
                            <div className='flex flex-col leading-4 gap-3'>
                                <h1 className='font-semibold'>Our Location</h1>
                                <div className='flex flex-col gap-1'>
                                    
                                        <p  className='text-gray-700'>{sanityData?.contact?.location}</p>
                                    

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='md:w-1/2 w-full'>
                        <div className='flex items-center gap-4'>
                            <Image src="/phone.png" layout='fill' className='!static !w-16' />
                            <div className='flex flex-col leading-4 gap-3'>
                                <h1 className='font-semibold'>Our Phone</h1>
                                <div className='flex flex-col gap-1'>
                                    {sanityData.contact.phone.map((item, index) =>
                                        <p key={index} className='text-gray-700'>{item}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex gap-10 md:flex-row flex-col'>
                    <div className='w-1/2'>
                        <div className='flex items-center gap-4'>
                            <Image src="/email.png" layout='fill' className='!static !w-16 ' />
                            <div className='flex flex-col leading-4 gap-3'>
                                <h1 className='font-semibold'>Our E-mail</h1>
                                <div className='flex flex-col gap-1'>
                                    {sanityData.contact.email.map((item, index) =>
                                        <p key={index} className='text-gray-700'>{item}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-1/2'>
                        <div className='flex items-center gap-4'>
                            <Image src="/support.png" layout='fill' className='!static !w-16' />
                            <div className='flex flex-col leading-4 gap-3'>
                                <h1 className='font-semibold'>Our Support</h1>
                                <div className='flex flex-col gap-1'>
                                    {sanityData.contact.support.map((item, index) =>
                                        <p key={index} className='text-gray-700'>{item}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className=' '>

                <form className='flex flex-col gap-5 '>
                    <div className='flex gap-4 lg:flex-row flex-col'>
                        <input type="text" name="" id="" className='border border-gray-200 rounded outline-none px-5 py-1' placeholder='Full Name' />
                        <input type="text" name="" id="" className='border border-gray-200 rounded outline-none px-5 py-1' placeholder='Subject' />
                    </div>
                    <div className='flex gap-4 md:flex-row flex-col'>
                        <input type="tel" name="" id="" className='border border-gray-200 rounded outline-none px-5 py-1' placeholder='Phone' />
                        <input type="email" name="" id="" className='border border-gray-200 rounded outline-none px-5 py-1' placeholder='Email' />
                    </div>
                    <textarea name="" id="" rows={4} className='outline-none border border-gray-200 w-full p-4' placeholder='Drop a line'></textarea>
                    <button className='px-4 py-2 bg-orange-400 rounded w-fit text-white text-lg' >Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact