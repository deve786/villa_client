import React from 'react'

function Company() {
    const company=[{
        project:"400+",
        client:"200+",
        award:"90+"
    }]

    const comp=company[0]
    return (
        <div>
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
            <div className='bg-gray-100 p-10 md:py-10 md:px-2 items-center justify-center flex md:gap-24 gap-2 text-gray-500'>
                <div className='flex gap-2 items-center'>
                    <i class="fa-solid fa-city sm:text-4xl text-2xl"></i>
                    <div className='flex flex-col leading-3'>
                        <p className='font-semibold md:text-3xl text-lg '>{comp.project}</p>
                        <p className='md:font-semibold md:text-md text-sm leading-3'>Project Done</p>
                    </div>
                </div>

                <div className='flex gap-2 border-x-2 sm:px-10 px-3' >
                    <i class="fa-solid fa-user-group sm:text-4xl text-2xl"></i>
                    <div className='flex flex-col leading-3 gap-1'>
                        <p className='font-semibold md:text-3xl text-lg'>{comp.client}</p>
                        <p className='md:font-semibold md:text-md text-sm leading-3'>Client Handle</p>
                    </div>
                </div>

                <div className='flex gap-2 items-center'>
                    <i class="fa-solid fa-trophy sm:text-4xl text-2xl"></i>
                    <div className='flex flex-col leading-3'>
                        <p className='font-semibold md:text-3xl text-lg'>{comp.award}</p>
                        <p className='md:font-semibold md:text-md text-sm '>Award Won</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Company