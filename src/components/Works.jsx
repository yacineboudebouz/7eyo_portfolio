import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      test
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.heroSubText}  `} >My Work </p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className=' w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-white text-[17px] max-w-3xl leading-[30px]'>
          This section features a curated selection of projects that demonstrate my skills and expertise in Android apps development with Kotlin and backend with php laravel. These pieces represent various challenges I've undertaken, emphasizing my dedication to delivering high-quality work. From Mobile apps to backend servers , each project reflects my commitment to creating meaningful and impactful content. Explore to gain insight into my creative process.
        </motion.p>
      </div>
      <div className=' mt-20 flex felex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "")