import React from 'react'
import { useHistory } from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import build from '../assets/build-team.json'
import Lottie from "lottie-react"

const Entertainme = () => {
  const history = useHistory()

  const redirectDashboard = () => {
    if(localStorage.access_token) history.push('/dashboard')
    history.push('/login')
  }

    return (
      <>
      <div className=" flex justify-center items-center md:flex-row flex-col mb-5 poppins p-10 md:p-20 mt-10" id="content"
      style={{width: '100vw', height: '100vh'}} >
        {/* Left */}
        <div className="md:w-1/2 font-bold">
          <Fade left>
            <p className=" md:text-4xl text-red-300 text-2xl text-extrabold">UNDANGANKU</p>
            <p className="text-gray-500 font-extrabold leading-relaxed my-3">Undanganku helps you make your own customized wedding invitation with few simple clicks. Just by signing in, you can have access to our invitation builder and start designing your dream invitation! Invite your friends and family and share your precious moments with your loved ones, fast and stress-free.</p>
              <button className="md:text-xl md:px-5 px-2 flex justify-center block font-bold text-gray-600 bg-red-300 w-1/3 md:py-3 py-1 text-lg mt-5 rounded-lg
              bg-white hover:text-gray-700 hover:bg-red-200 flex items-center"
              onClick={() => redirectDashboard()}>Start Now
            </button>
          </Fade>
        </div>
        {/* Right */}
        <div className="md:w-1/2 font-bold">
          <Fade right>
            <Lottie animationData={build} 
              loop 
              autoPlay 
              className="m-10"/>
          </Fade>
        </div>
      </div>
      </>
    )
}

export default Entertainme