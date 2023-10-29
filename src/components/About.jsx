import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
const About = () => {
  return (
    <div className=' w-full' >
      <motion.div variants={textVariant()} className='flex flex-col justify-center w-full '>
        <p className={`${styles.heroSubText}  `} >Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn('', '', 0.1, 1)} className=' mt-4  text-[17px] max-w-3xl leading-[30px] '>
        I'm Abdelhai, a Computer Science student at ESTIN with a fervor for mobile development and cybersecurity. Proficient in Flutter, Kotlin, and PHP (Laravel), I excel in creating intuitive, cross-platform mobile applications. I'm also delving into reverse engineering. My expertise extends to secure coding practices, network security, and vulnerability assessment. I've demonstrated my skills through projects in Flutter, Kotlin, and PHP. Contact me at a_guir@estin.dz, or find me on <a href='https://www.linkedin.com/in/mohamedabdelhai-guir-6430b8230/' className=' font-bold'>LinkedIn</a>.
      </motion.p>

      <div className=' mt-20 flex flex-wrap gap-10  w-full justify-center'>
        {
          services.map((service, i) => (
            <Tilt key={i} className="Tilt " options={{ max: 25, scale: 1.05, perspective: 1000, speed: 300, transition: true }} >
              <motion.div variants={fadeIn('right', 'spring', 0.5 * i, 0.75)} className="Tilt-inner ">
                <div className=' flex flex-col justify-center items-center gap-5 w-[250px] h-[250px] rounded-2xl  bg-secondary shadow-lg p-5'>
                  <div className='w-20 h-20 rounded-full bg-tertiary flex justify-center items-center'>
                    <img src={service.icon} alt='' className=' w-10 h-10' />
                  </div>
                  <h3 className=' font-bold text-xl text-center'>{service.title}</h3>
                  <p className=' text-center'>{service.description}</p>
                </div>
              </motion.div>
            </Tilt>
          ))
        }


      </div>
    </div>
  )
}

export default SectionWrapper(About, "about");