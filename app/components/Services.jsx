'use client'
import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Services = () => {
    return (
        <motion.div
            id='services'
            className='w-full px-4 sm:px-8 md:px-[10%] py-10 scroll-mt-20'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <h4 className='text-center mb-2 text-lg'>What I Offer</h4>
            <h2 className='text-center text-5xl'>My Services</h2>

            <motion.p
                className='text-center max-w-2xl mx-auto mt-5 mb-12 text-sm sm:text-base text-gray-600 leading-relaxed'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
            >
                I create modern, responsive websites and mobile apps with a strong focus on clean design and smooth user
                experience. From web development to UI/UX and full product design, I offer complete digital solutions that
                work seamlessly across devices and platforms.
            </motion.p>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {serviceData.map(({ icon, title, description, link }, index) => (
                    <motion.div
                        key={index}
                        className='border border-gray-300 rounded-xl p-6 transition duration-300 ease-in-out hover:bg-rose-50 hover:shadow-md hover:-translate-y-1 cursor-pointer'
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index }}
                        viewport={{ once: true }}
                    >
                        <Image src={icon} alt='' className='w-10' />
                        <h3 className='text-lg my-4 text-gray-700 font-semibold'>{title}</h3>
                        <p className='text-sm text-gray-600 leading-5'>{description}</p>
                        <a href={link} className='flex items-center gap-2 text-sm mt-5 text-rose-500 hover:underline'>
                            Read more <Image alt='' src={assets.right_arrow} className='w-4' />
                        </a>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}

export default Services
