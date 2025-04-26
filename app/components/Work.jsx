'use client'
import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Work = () => {
  return (
    <motion.div
      id='my'
      className='w-full px-4 sm:px-8 md:px-[10%] py-10 scroll-mt-20'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h4 className='text-center mb-2 text-lg'>My Portfolio</h4>
      <h2 className='text-center text-5xl'>Work I Have Done</h2>

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

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {workData.map((project, index) => (
          <motion.div
            key={index}
            className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
            style={{ backgroundImage: `url(${project.bgImage})` }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className='bg-white w-10/12 rounded-md absolute bottom-15 left-1/2 -translate-x-1/2 translate-y-1/2 p-4 flex items-center justify-between group-hover:bg-rose-50 group-hover:shadow-md group-hover:-translate-y-1 transition duration-300 ease-in-out'>
              <div>
                <h2 className='text-lg font-semibold'>{project.title}</h2>
                <p className='text-sm text-gray-600'>{project.description}</p>
              </div>
              <div className='border rounded-full border-black w-9 h-9 aspect-square flex items-center justify-center shadow[2px_2px_0_#000] group-hover:bg-lime-300'>
                <Image src={assets.send_icon} alt='send icon' className='w-5' />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.a
        href=''
        className='w-max flex items-center text-gray-500 border-[0.5px] border-gray-700 rounded-full py-3 px-3 gap-2 text-sm mt-10 mx-auto hover:bg-rose-50 hover:underline'
        whileHover={{ scale: 1.05 }}
      >
        show more <Image src={assets.right_arrow} alt='right arrow' className='w-4' />
      </motion.a>
    </motion.div>
  )
}

export default Work
