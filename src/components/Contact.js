import React from 'react'

function Contact() {
    return (
        <div className='p-8 flex gap-10 flex-wrap lg:flex-nowrap justify-center'>
            <div className='flex gap-4 flex-col  '>
                <div>
                    <p>If you have any quires or have any project fill free to contact us.</p>
                    <p>Our support team is available for for 24/7.</p>
                </div>
                <div className='flex gap-10 md:flex-row flex-col'>
                    <div>
                        <div className='flex items-center gap-4'>
                            <i class="fa-solid rounded-full border py-5 px-6 fa-location-dot text-xl"></i>
                            <div className='flex flex-col leading-4 gap-3'>
                                <h1 className='font-semibold'>Our Location</h1>
                                <div className='flex flex-col gap-1'>
                                    <p className='text-gray-700'>907 N Randolph street,</p>
                                    <p className='text-gray-700'>Denvar, United States</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='flex items-center gap-4'>
                            <i class="fa-solid rounded-full border py-5 px-6 fa-location-dot text-xl"></i>
                            <div className='flex flex-col leading-4 gap-3'>
                                <h1 className='font-semibold'>Our Phone</h1>
                                <div  className='flex flex-col gap-1'>
                                    <p className='text-gray-700'>+123 625 254 965</p>
                                    <p className='text-gray-700'>+854 526 481 856</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex gap-14 md:flex-row flex-col'>
                    <div>
                        <div className='flex items-center gap-4'>
                            <i class="fa-solid rounded-full border py-5 px-6 fa-location-dot text-xl"></i>
                            <div className='flex flex-col leading-4 gap-3'>
                                <h1 className='font-semibold'>Our E-mail</h1>
                                <div  className='flex flex-col gap-1'>
                                    <p className='text-gray-700'>demo@gmail.com</p>
                                    <p className='text-gray-700'>esample@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div>
                        <div className='flex items-center gap-4'>
                            <i class="fa-solid rounded-full border py-5 px-6 fa-location-dot text-xl"></i>
                            <div className='flex flex-col leading-4 gap-3'>
                                <h1 className='font-semibold'>Our Support</h1>
                                <div  className='flex flex-col gap-1'>
                                    <p className='text-gray-700'>support@gmail.com</p>
                                    <p className='text-gray-700'>example@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className=' '>

                <form className='flex flex-col gap-5 '>
                    <div className='flex gap-4 lg:flex-row flex-col'>
                        <input type="text" name="" id="" className='border border-gray-200 rounded outline-none px-5 py-1' placeholder='Full Name'/>
                        <input type="text" name="" id="" className='border border-gray-200 rounded outline-none px-5 py-1' placeholder='Subject'/>
                    </div>
                    <div className='flex gap-4 md:flex-row flex-col'>
                        <input type="tel" name="" id="" className='border border-gray-200 rounded outline-none px-5 py-1' placeholder='Phone'/>
                        <input type="email" name="" id="" className='border border-gray-200 rounded outline-none px-5 py-1' placeholder='Email'/>
                    </div>
                    <textarea name="" id="" rows={4} className='outline-none border border-gray-200 w-full p-4' placeholder='Drop a line'></textarea>
                    <button className='px-4 py-2 bg-orange-400 rounded w-fit text-white text-lg' >Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact