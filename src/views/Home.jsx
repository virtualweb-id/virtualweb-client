import React from 'react'
import { Footer } from '../components'
import { LandingHero, Content, OurService, Testimony } from '../components'


const Home = () => {
  return (
    <div style={{position: 'relative', overflow:'hidden', fontFamily: 'poppins'}}>
      <LandingHero />
      <Content />
      <OurService />
      <Testimony />
      <Footer />
    </div>
  )
}

export default Home
