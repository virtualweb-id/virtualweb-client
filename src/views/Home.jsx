import React, { useState, useEffect } from 'react'
import { Navbar, Dropdown } from '../components'
import { LandingHero, Content } from '../components'


const Home = () => {
  const [dropdown, setDropdown] = useState(false)

  const toggle = () => {
    setDropdown(!dropdown)
  }

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
    <>
      <Navbar toggle={toggle} />
      <Dropdown dropdown={dropdown} toggle={toggle} />
      <LandingHero />
      <Content />
    </>
  )
}

export default Home
