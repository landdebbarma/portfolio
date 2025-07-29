import Image from 'next/image'
import React from 'react'
import { assets } from '@/assets/assets'

const footer = () => {
    return (
        <div className='mt-20'>
            <div className='text-center'>
                <a href="#home" className="text-mono text-xl font-bold">
                    Land <span className={`bg-gradient-to-r ml-2 from-teal-300 via-blue-500 to-indigo-600 bg-clip-text`}>DebBarma</span>
                </a>


                <div className='w-max flex item-center gap-2 mx-auto mt-4'>
                    <Image src={assets.mail_icon} alt='' className='w-8' />
                    landdebbarma5@gmail.com
                </div>
            </div>

            <div className="text-center sm:flex items-center justify-between border-t boorder-gray-400 mx-[10%] mt-12 py-6">
                <p>
                    2025 All rights reserved. <br />
                    Designed and Developed by <span className='text-mono font-bold'>Land DebBarma</span>
                </p>
                <ul className='flex items-center justify-center gap-4 mt-4 sm:mt-0'>
                    <li><a target='_blank' href="https://github.com/landdebbarma?tab=repositories">Github</a></li>
                    <li><a target='_blank' href="https://www.linkedin.com/in/land-debbarma-8950171a9/">Linkdin</a></li>
                    <li><a target='_blank' href="https://www.instagram.com/real.land.lord/">Instagram</a></li>
                </ul>
            </div>
        </div>
    )
}

export default footer
