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
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)} >
      <Tilt
        options={{ max: 25, scale: 1, speed: 450 }}
        className=" bg-green-100 p-5 rounded-2xl   w-[360px]"
      >
        <div className=' relative w-full h-[230px]'>
          <img src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl'
          />
          <div className=' absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div onClick={() => window.open(source_code_link, "_blank")}
              className=' blue-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
              <img src={github}
                alt='github'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>
        <div className=' mt-5 '>
          <h3 className=' cursor-default text-white font-bold text-[24px]'>{name}</h3>
          <p className=' mt-2 text-white-500 text-[14px]'>{description}</p>

        </div>
        <div className=' mt flex flex-wrap gap-2 '>
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
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
      <div className=' mt-20 flex flex-wrap gap-7 justify-center'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "")