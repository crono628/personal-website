import React, { useEffect, useRef, useState } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Projects from './components/Projects'
import Resume from './components/Resume'
import ScrollButton from './components/ScrollButton'

const App = () => {
  const scrollRef = useRef([])
  const [highlight, setHighlight] = useState([
    { about: true, projects: false, resume: false, contact: false }
  ])

  useEffect(() => {
    window.addEventListener('scroll', setHighlightState)
    return () => window.removeEventListener('scroll', setHighlightState)
  }, [])

  function handleHighlightMath(ref) {
    if (
      ref.getBoundingClientRect().bottom + window.innerHeight / 1.5 >
      window.innerHeight
    ) {
      return true
    }
    return false
  }

  const setHighlightState = () => {
    const defaultValues = {
      about: false,
      projects: false,
      resume: false,
      contact: false
    }

    const aboutState = handleHighlightMath(scrollRef.current[0])
    const projectsState = handleHighlightMath(scrollRef.current[1])
    const resumeState = handleHighlightMath(scrollRef.current[2])
    const contactState = handleHighlightMath(scrollRef.current[3])

    if (aboutState) {
      setHighlight([{ ...defaultValues, about: true }])
    } else if (projectsState) {
      setHighlight([{ ...defaultValues, projects: true }])
    } else if (resumeState) {
      setHighlight([{ ...defaultValues, resume: true }])
    } else if (contactState) {
      setHighlight([{ ...defaultValues, contact: true }])
    } else {
      setHighlight([{ ...defaultValues }])
    }
  }

  return (
    <div className="max-w-screen-md mx-auto flex flex-col justify-center items-center ">
      <div className="w-full mx-auto bg-orange-300 min-h-screen relative">
        <Header highlight={highlight} ref={scrollRef} />
        <div className={`px-5  flex flex-col items-center `}>
          <div className=" sm:max-w-sm flex flex-col items-center">
            <div
              className="h-[800px]"
              ref={(el) => (scrollRef.current[0] = el)}
            >
              <About />
            </div>
            <div
              className="h-[2400px]"
              ref={(el) => (scrollRef.current[1] = el)}
            >
              <Projects />
            </div>
            <div
              className="h-[1000px]"
              ref={(el) => (scrollRef.current[2] = el)}
            >
              <Resume />
            </div>
            <div ref={(el) => (scrollRef.current[3] = el)}>
              <Contact />
            </div>
          </div>
          <ScrollButton below={200} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
