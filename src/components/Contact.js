import Image from 'next/image';
import React from 'react';

function Contact({ sanityData }) {
    console.log(sanityData);

    return (
        <div id="contact-section" className="md:p-8 p-3 md:py-32 py-16 grid gap-10 lg:grid-cols-2 lg:gap-16">
            
            <div className="grid grid-cols-1 gap-10">
                <div>
                    <p>If you have any queries or have any project feel free to contact us.</p>
                    <p>Our support team is available 24/7.</p>
                </div>

                
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
                   
                    <div className="flex items-start gap-6">
                        <div className="relative w-16 h-16">
                        <Image src="/location.png" layout="fill" objectFit="contain" alt="Location Icon " className='' />

                        </div>
                        <div className="flex flex-col leading-4 w-2/3 gap-2">
                            <h1 className="font-semibold">Our Location</h1>
                            <p className="text-gray-700 ">{sanityData?.contact?.location}</p>
                        </div>
                    </div>

                    
                    <div className="flex items-start gap-6">
                        <div className="relative w-16 h-16">
                            <Image src="/phone.png" layout="fill" objectFit="contain" alt="Phone Icon" />

                        </div>
                        <div className="flex flex-col leading-4  w-2/3 gap-2">
                            <h1 className="font-semibold">Our Phone</h1>
                            {sanityData.contact.phone.map((item, index) => (
                                <p key={index} className="text-gray-700">{item}</p>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
                 
                    <div className="flex items-start gap-6">
                        <div className="relative w-16 h-16">
                            <Image src="/email.png" layout="fill" objectFit="contain" alt="Email Icon" />
                        </div>
                        <div className="flex flex-col leading-4  w-2/3 gap-2">
                            <h1 className="font-semibold">Our E-mail</h1>
                            {sanityData.contact.email.map((item, index) => (
                                <p key={index} className="text-gray-700">{item}</p>
                            ))}
                        </div>
                    </div>

                  
                    <div className="flex items-start gap-6">
                        <div className="relative w-16 h-16">
                            <Image src="/support.png" layout="fill" objectFit="contain" alt="Support Icon" />
                        </div>
                        <div className="flex flex-col leading-4  w-2/3 gap-2">
                            <h1 className="font-semibold">Our Support</h1>
                            {sanityData.contact.support.map((item, index) => (
                                <p key={index} className="text-gray-700">{item}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

           
            <div className="flex flex-col gap-5">
                <form className="grid grid-cols-1 gap-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="fullName"
                            className="border border-gray-200 rounded outline-none px-4 py-2"
                            placeholder="Full Name"
                        />
                        <input
                            type="text"
                            name="subject"
                            className="border border-gray-200 rounded outline-none px-4 py-2"
                            placeholder="Subject"
                        />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <input
                            type="tel"
                            name="phone"
                            className="border border-gray-200 rounded outline-none px-4 py-2"
                            placeholder="Phone"
                        />
                        <input
                            type="email"
                            name="email"
                            className="border border-gray-200 rounded outline-none px-4 py-2"
                            placeholder="Email"
                        />
                    </div>
                    <textarea
                        name="message"
                        rows="4"
                        className="border border-gray-200 rounded outline-none px-4 py-2 w-full"
                        placeholder="Drop a line"
                    ></textarea>
                    <button className="px-4 py-2 bg-orange-400 rounded text-white text-lg hover:bg-orange-500 transition duration-300">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
