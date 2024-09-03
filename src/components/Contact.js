import React from 'react'

function Contact() {
    const data = [{
        location: {
            address1: "907 N Randolph street,",
            address2: "Denvar, United States"
        },
        phone: {
            phone1: "+123 625 254 965",
            phone2: "+854 526 481 856"
        },
        email: {
            email1: "demo@gmail.com",
            email2: "esample@gmail.com"
        },
        support: {
            support1: "support@gmail.com",
            support2: "example@gmail.com"
        }
    }]

    const contact = data[0]
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
                                    {Object.values(contact.location).map((item, index) =>
                                        <p key={index} className='text-gray-700'>{item}</p>
                                    )}

                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='flex items-center gap-4'>
                            <i class="fa-solid rounded-full border py-5 px-6 fa-location-dot text-xl"></i>
                            <div className='flex flex-col leading-4 gap-3'>
                                <h1 className='font-semibold'>Our Phone</h1>
                                <div className='flex flex-col gap-1'>
                                    {Object.values(contact.phone).map((item, index) =>
                                        <p key={index} className='text-gray-700'>{item}</p>
                                    )}
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
                                <div className='flex flex-col gap-1'>
                                    {Object.values(contact.email).map((item, index) =>
                                        <p key={index} className='text-gray-700'>{item}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='flex items-center gap-4'>
                            <i class="fa-solid rounded-full border py-5 px-6 fa-location-dot text-xl"></i>
                            <div className='flex flex-col leading-4 gap-3'>
                                <h1 className='font-semibold'>Our Support</h1>
                                <div className='flex flex-col gap-1'>
                                    {Object.values(contact.support).map((item, index) =>
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