'use client'
import { assets } from '@/assets/assets'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Contacts = () => {
  const [result, setResult] = useState("")

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult("Sending....")
    const formData = new FormData(event.target)

    formData.append("access_key", "")

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    })

    const data = await response.json()

    if (data.success) {
      setResult("Form Submitted Successfully")
      event.target.reset()
    } else {
      console.log("Error", data)
      setResult(data.message)
    }
  }

  return (
    <motion.div
      id='contact'
      className='w-full px-4 sm:px-8 md:px-[12%] py-10 scroll-mt-20 bg[url("/footer_bg.png")] bg-cover bg-no-repeat bg-center'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h4 className='text-center mb-2 text-lg'>Contect With Me</h4>
      <h2 className='text-center text-5xl'>Get In Touch</h2>

      <motion.p
        className='text-center max-w-2xl mx-auto mt-5 mb-12 text-sm sm:text-base text-gray-600 leading-relaxed'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        I would love to hear from you! Whether you have a question, a project in mind, 
        or just want to say hi, feel free to reach out. I'm always open to discussing new 
        opportunities and collaborations. Let's connect and create something amazing together! Thank You
      </motion.p>

      <motion.form
        onSubmit={onSubmit}
        className='max-w-2xl mx-auto'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8'>
          <input type="text" placeholder='Enter Your Name' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' name="name" />
          <input type="email" placeholder='Enter Your Email' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' name="email" />
        </div>
        <textarea rows='6' placeholder='Enter Your Message' required className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6' name='message'></textarea>
        <motion.button
          type='submit'
          className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500'
          whileHover={{ scale: 1.05 }}
        >
          Submit
        </motion.button>
        <p className='mt-5 text-center'>{result}</p>
      </motion.form>
    </motion.div>
  )
}

export default Contacts
