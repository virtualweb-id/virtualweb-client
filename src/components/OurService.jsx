import React from 'react'
import { useHistory } from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import build from '../assets/build-team.json'
import Lottie from "lottie-react"
import imageHolder from '../assets/swirl.jpg'

const OurService = () => {
  const history = useHistory()

  const redirectDashboard = () => {
    if(localStorage.access_token) history.push('/dashboard')
    history.push('/login')
  }

    return (
      <>
      <div className=" flex justify-center items-center md:flex-row flex-col poppins bg-red-300 relative"
        style={{width: '100%', height: '80%'}} >
          {/* Left */}
          <div className="md:w-1/2 font-bold sticky top-0 backimg" style={{zIndex: '1'}}>
            <img src={imageHolder} alt="wedding image"/>
          </div>
          {/* Right */}
          <div className="md:w-1/2 font-bold ">
            <h1 className="text-white text-center text-3xl">Our Services</h1>
          <ul>
            <li>Invitation builder</li>
            <li>Personalized invitation page</li>
            <li>Countdown before day of event</li>
            <li>Digital wedding gift money feature</li>
          </ul>
          </div>
        </div> 
      </>
    )
}

export default OurService

 