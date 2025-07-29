'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'


const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'
    >
      <motion.div className='mt-15' whileHover={{ scale: 1.05 }}>
        <Image src={assets.IMG_6739} alt='profile' className='rounded-full w-[200px] h-[200px] object-cover' />
      </motion.div>

      <motion.h3
        className='flex items-end gap-2 text-xl md:text-2xl mb-3'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Hi I am Land DebBarma
        <Image src={assets.hand_icon} alt='hand icon' className='w-6' />
      </motion.h3>

      <motion.h1
        className='text-3xl sm:text-6xl lg:text-[66px]'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Frontend Web Developer
      </motion.h1>

      <motion.p
        className='max-w-2xl mx-auto'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        I build responsive, user-friendly web interfaces using HTML, CSS, JavaScript, and modern frameworks like React. I focus on clean code, performance, and creating seamless digital experiences across all devices.
      </motion.p>

      <motion.div
        className='flex flex-col sm:flex-row items-center gap-4 mt-4'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        <a href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2  hover:border-black'>
          contact me
          <Image src={assets.right_arrow_white} alt='arrow' className='w-4' />
        </a>

        <a href="#my" className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 hover:bg-black hover:text-white'>
          my work
          <Image src={assets.download_icon} alt='my work' className='w-4' />
        </a>
      </motion.div>
    </motion.div>
  )
}

export default Header
