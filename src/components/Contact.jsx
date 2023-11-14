import React from 'react'
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { SketchCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'


// service_kn781vr
// template_et6d9lo
// -_HoHk0-cf_jJzagd
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send("service_kn781vr",
      "template_et6d9lo",
      {
        from_name: form.name,
        to_name: "Abdelhai",
        from_email: form.email,
        to_email: "yacineboud6@gmail.com",
        message: form.message
      }, "-_HoHk0-cf_jJzagd").then(() => {
        setLoading(false);
        alert("Thank you");
        setForm({ name: "", email: "", message: "" })
      }, (error) => {
        setLoading(false)
        console.log(error)
        alert("something went wrong !")
      })
  }
  return (
    <div className=' xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)}
        className=' flex-[0.75]  bg-green-100 p-8 rounded-2xl'
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
          <button type='submit' className=' bg-green-200 py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'>
            {loading ? "Sending ..." : "Send"}
          </button>
        </form>

      </motion.div>
      <motion.div variants={slideIn("right", "tween", 0.2, 1)}
        className=' xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <SketchCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")