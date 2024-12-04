import React from 'react'

function Footer({ sanityData }) {
    console.log(sanityData);

    return (
        <div
            className='bg-black text-white px-5 pt-12 pb-7 md:px-10 bg-cover bg-center'
            style={{ backgroundImage: `url('./footer_banner.png')` }}
        >
            <div className=' flex flex-col gap-10'>
                <div className='flex flex-col gap-10 md:px-20' >
                    <div >
                        <ul className='flex md:gap-8 gap-3 md:flex-row flex-col'>
                            <li className='uppercase font-semibold cursor-pointer'>About</li>
                            <li className='uppercase font-semibold cursor-pointer'>Services</li>
                            <li className='uppercase font-semibold cursor-pointer'>Projects</li>
                            <li className='uppercase font-semibold cursor-pointer'>Blog</li>
                            <li className='uppercase font-semibold cursor-pointer'>Contact</li>
                        </ul>
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex justify-between md:gap-20 gap-5 md:flex-nowrap flex-wrap'>
                            {sanityData?.addresses.map((address, index) => (
                                <div key={index}>
                                    <h2 className="uppercase font-semibold">{address.name}</h2>
                                    <p className="text-gray-400">
                                        {address.street} <br />
                                        {address.floor} <br />
                                        {address.cityStateZip} <br />
                                        {address.phone}
                                    </p>
                                </div>
                            ))}


                        </div>
                        <div>
                            <img src="./company_icon.png" alt="" className='w-40 hidden lg:flex' />
                        </div>
                    </div>
                </div>
                <hr className="border-t-[1px] border-gray-500" />

                <div className='flex text-gray-400 justify-between md:flex-row flex-col'>
                    <p>@2024. All rights reserved.</p>
                    <ul className='flex md:gap-5 gap-3'>
                        {sanityData?.socialLinks.map((link, index) => (
                            <li key={index} className="cursor-pointer">
                                <a href={link.link} target="_blank" rel="noopener noreferrer">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <ul className='flex gap-5'>
                        <li className='cursor-pointer'>Our App</li>
                        <li className='cursor-pointer'>Sitemap</li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer