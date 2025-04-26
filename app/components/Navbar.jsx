'use client'
import { useState } from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  const toggleMenu = () => setMenuOpen(prev => !prev)
  const closeMenu = () => setMenuOpen(false)
  const toggleDarkMode = () => setDarkMode(prev => !prev)

  return (
    <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 shadow-sm transition-all duration-300 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      {/* Logo / Name */}
      <a href="#home" className="text-mono text-xl font-bold">
        Land <span className={`bg-gradient-to-r ml-2 from-teal-300 via-blue-500 to-indigo-600 bg-clip-text ${darkMode ? 'text-white' : 'text-transparent'}`}>DebBarma</span>
      </a>

      {/* Desktop Nav */}
      <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3">
        <li><a href="#top">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#my">My Work</a></li>
        <li><a href="#contact">Contact Me</a></li>
      </ul>

      
      <div className='flex items-center gap-4 '>
        <button onClick={toggleDarkMode}>
          <Image src={assets.moon_icon} alt='Theme Toggle' className='w-6' />
        </button>

        <a href="#contact" className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4">
          Contact
          <Image src={assets.arrow_icon} alt="Arrow Icon" className="w-3" />
        </a>

        <button onClick={toggleMenu} className='block md:hidden ml-3 '>
          <Image src={assets.menu_black} alt='menu' className='w-6' />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-64 ${darkMode ? 'bg-black text-white' : 'bg-rose-50 text-black'} z-50 flex flex-col gap-6 px-8 py-20 shadow-lg transition-transform duration-500 ${menuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
      >
        <div className='absolute top-6 right-6 cursor-pointer' onClick={closeMenu}>
          <Image src={assets.close_black} alt='close' className='w-5' />
        </div>

        <li><a onClick={closeMenu} href="#top">Home</a></li>
        <li><a onClick={closeMenu} href="#service">Services</a></li>
        <li><a onClick={closeMenu} href="#about">About Me</a></li>
        <li><a onClick={closeMenu} href="#my">My Work</a></li>
        <li><a onClick={closeMenu} href="#contact">Contact Me</a></li>
      </div>
    </nav>
  )
}

export default Navbar
