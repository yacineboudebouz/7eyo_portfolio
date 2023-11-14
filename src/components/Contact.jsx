import React from 'react'
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const handleChange = (e) => { }
  const handleSubmit = (e) => { }
  return (
    <div className=' xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)}
        className=' flex-[0.5]  bg-green-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className=' mt-12 flex flex-col gap-8'
        >
          <label className=' flex flex-col'>
            <span className=' text-white font-medium mb-4'>Your Name</span>
            <input type='text' name='name' value={form.name} onChange={handleChange} placeholder="what's your name ?"
              className=' bg-green-200 py-4 px-6 placeholder:text-white rounded-lg outline-none border-none font-medium' />
          </label>
          <label className=' flex flex-col'>
            <span className=' text-white font-medium mb-4'>Your Email</span>
            <input type='email' name='email' value={form.email} onChange={handleChange} placeholder="what's your email ?"
              className=' bg-green-200 py-4 px-6 placeholder:text-white rounded-lg outline-none border-none font-medium' />
          </label>
          <label className=' flex flex-col'>
            <span className=' text-white font-medium mb-4'>Your Message</span>
            <textarea rows={7} name='message' value={form.message} onChange={handleChange} placeholder="what do you want to say ?"
              className=' bg-green-200 py-4 px-6 placeholder:text-white rounded-lg outline-none border-none font-medium' />
          </label>

        </form>

      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")