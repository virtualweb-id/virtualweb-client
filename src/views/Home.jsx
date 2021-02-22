import React from 'react'
import { Footer } from '../components'
import { LandingHero, Content, OurService } from '../components'


const Home = () => {
  return (
    <div style={{position: 'relative', overflow:'hidden', fontFamily: 'poppins'}}>
      <LandingHero />
      <Content />
      <OurService />
      <Footer />
    </div>
  )
}

export default Home
