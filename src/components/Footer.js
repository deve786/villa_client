import React from 'react'

function Footer() {
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
                        <div>
                            <h2 className='uppercase font-semibold'>Wills Point</h2>
                            <p className='text-gray-400'>8619 S Wolcott Avenue <br /> Floor 202 Chicago, IL 60620 <br />(773) 238 - 7162</p>
                        </div>
            
                        <div>
                            <h2 className='uppercase font-semibold'>Chicago</h2>
                            <p className='text-gray-400'>10233 Gaillard Lake Est <br />Suite 420<br /> Houston, TX 75169<br /> (903) 560 - 9830</p>
                        </div>
            
                        <div>
                            <h2 className='uppercase font-semibold'>Harriman</h2>
                            <p className='text-gray-400'>5 Harriman Woods Dr <br />Suite 702<br /> New York, NY 10926<br /> (570) 253 - 2853</p>
                        </div>
            
                        <div>
                            <h2 className='uppercase font-semibold'>LARGO</h2>
                            <p className='text-gray-400'>1071 Donegan Rd <br />Suite 1300 <br />Florida, FL 33771<br /> (727) 223 - 5371</p>
                        </div>
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
                    <li className='cursor-pointer'>Facebook</li>
                    <li className='cursor-pointer'>Twitter</li>
                    <li className='cursor-pointer'>Instagram</li>
                    <li className='cursor-pointer'>Youtube</li>
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