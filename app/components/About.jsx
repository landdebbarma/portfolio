'use client'
import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
    return (
        <motion.div
            id='about'
            className='w-full px-[12%] py-10 scroll-mt-20'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
        >
            <h4 className='text-center mb-2 text-lg'>Indroduction</h4>
            <h2 className='text-center text-5xl'>About me</h2>

            <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
                <motion.div
                    className='w-64 sm:w-80 h-110 rounded-3xl max-w-none overflow-hidden'
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <Image src={assets.user_image} alt='user' className='w-full h-full object-cover rounded-3xl' />
                </motion.div>

                <motion.div
                    className='flex-1'
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <p className='mb-10 max-w-2xl'>
                        I'm a frontend developer passionate about creating responsive, accessible, and user-friendly
                        web interfaces. I specialize in React, Next.js, and Tailwind CSS. I enjoy turning design ideas
                        into clean, maintainable code and constantly explore new tools and trends to improve user experience
                        and build modern, high-performance web applications.
                    </p>

                    <motion.ul
                        className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            visible: {
                                transition: {
                                    staggerChildren: 0.2
                                }
                            }
                        }}
                    >
                        {infoList.map(({ icon, iconDark, title, description }, index) => (
                            <motion.li
                                key={index}
                                className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer transition duration-300 ease-in-out hover:bg-rose-50 hover:shadow-md hover:-translate-y-1'
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.15 }}
                            >
                                <Image src={icon} alt={title} className='w-7 mt-3' />
                                <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                                <p className='text-gray-600 text-sm'>{description}</p>
                            </motion.li>
                        ))}
                    </motion.ul>

                    <h4 className='my-6 text-gray-700'> I Use For My Work</h4>
                    <motion.ul
                        className='flex items-center gap-3 sm:gap-5'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        {toolsData.map((tool, index) => (
                            <motion.li
                                key={index}
                                className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer transition duration-300 ease-in-out hover:bg-rose-50 hover:shadow-md hover:-translate-y-1'
                                whileHover={{ scale: 1.1 }}
                            >
                                <Image src={tool} alt='tool' className='w-7 sm:w-7' />
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default About
