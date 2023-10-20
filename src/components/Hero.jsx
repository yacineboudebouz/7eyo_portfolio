import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './index'

const Hero = () => {
  return (
    <section className=' relative w-full h-screen mx-auto'>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full  bg-secondary' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white inline`}>
            Hi, I'm <span className=' text-[#4AB397]'>Abdelhai</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-200 text-start`}>I develop Mobile native applications,<br className=' sm:block hidden' /> and reverse apps code</p>
        </div>
      </div>

      <ComputersCanvas />

    </section>
  )
}

export default Hero


