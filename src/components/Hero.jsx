import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { AndroidsCanvas } from './index'

const Hero = () => {
  return (
    <section className=' relative top-0 w-full  h-screen  mx-auto'>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >


        <motion.div animate={{ y: [0, 24, 0] }} transition={{ duration: 5, repeat: Infinity, repeatType: 'loop' }} >
          <h1 className={`${styles.heroHeadText} text-white inline text`} >
            Hi, I'm <span className=' text-[#4AB397]'>Abdelhai</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-200 text-start`}>I develop Mobile native applications,<br className=' sm:block hidden' /> and reverse apps code</p>
        </motion.div>
      </div>

      <AndroidsCanvas />

      <div className=' absolute xs:bottom-5 bottom-0 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className=' w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div animate={{ y: [0, 24, 0] }} transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }} className='w-3 h-3 rounded-full bg-secondary mb-1'>

            </motion.div>
          </div>
        </a>

      </div>


    </section>
  )
}

export default Hero


