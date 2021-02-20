import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Navbar, Dropdown, Footer } from '../components'
import { LandingHero, Content } from '../components'


const Home = () => {
  const [dropdown, setDropdown] = useState(false)
  const history = useHistory()

  const toggle = () => {
    setDropdown(!dropdown)
  }

  useEffect(() => {
    if(localStorage.access_token) history.push('/')
  }, [])

  useEffect(() => {
    const hidedropdown = () => {
      if (window.innerWidth > 768 && dropdown) {
        setDropdown(false)
      }
    }

    window.addEventListener('resize', hidedropdown)

    return () => {
      window.removeEventListener('resize', hidedropdown)
    }
  }, [dropdown])

  return (
    <div style={{position: 'relative', overflow:'hidden'}}>
      {/* <Navbar toggle={toggle} /> */}
      {/* <Dropdown dropdown={dropdown} toggle={toggle} /> */}
      <LandingHero />
      <Content />
      <Footer />
    </div>
  )
}

export default Home
