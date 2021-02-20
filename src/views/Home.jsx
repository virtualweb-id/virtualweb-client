import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Navbar, Dropdown } from '../components'
import { LandingHero, Content } from '../components'


const Home = () => {
  const { name } = useSelector(state => state.user)
  const [dropdown, setDropdown] = useState(false)
  const history = useHistory()

  const toggle = () => {
    setDropdown(!dropdown)
  }

  useEffect(() => {
    if(name) history.push('/undanganku')
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
    <>
      <Navbar toggle={toggle} />
      <Dropdown dropdown={dropdown} toggle={toggle} />
      <LandingHero />
      <Content />
    </>
  )
}

export default Home
