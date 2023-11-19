import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'
const Navbar = () => {

  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 right-0 bg-primary`}>
      <div className='w-full flex justify-evenly items-center max-w-7xl mx-auto'>
        <Link to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("")
            window.scrollTo(0, 0);
          }}
        >

          <p className='text-white text-[18px] font-bold cursor-pointer flex'>Abdelhai &nbsp;<span className=' sm:block hidden'>| Mobile developer</span></p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10 '>
          {navLinks.map((link) => (
            <li
              key={link.id}
              onClick={() => setActive(link.title)}
              className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer duration-500`}>
              <a href={`#${link.id}`} >{link.title}</a>
            </li>
          ))}

        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt='menu' className='w-[28px] h-[28px] object-contain cursor-pointer duration-200 hover:rotate-90'
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${toggle ? 'flex' : 'hidden'} p-6 blue-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl  x`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle)
                  }}
                  className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white  font-medium cursor-pointer  text-[16px]`}
                >
                  <a href={`#${link.id}`} >{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>

  )
}

export default Navbar