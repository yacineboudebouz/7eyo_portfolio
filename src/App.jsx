import './App.css'

import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Tech, Works, StarsCanvas, Navbar } from './components';
const App = () => {

  return (
    <BrowserRouter>
      <div className=' relative z-50 bg-primary w-full' >
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center' >
          <Navbar />
          <Hero />
        </div>

        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>

  )
}

export default App
