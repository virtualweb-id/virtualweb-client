import React from 'react'
import { useHistory } from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import build from '../assets/printing.json'
import Lottie from "lottie-react"

const Content = () => {
  const history = useHistory()

  const redirectDashboard = () => {
    if(localStorage.access_token) history.push('/dashboard')
    history.push('/login')
  }

    return (
      <>
      <div className=" flex justify-center items-center md:flex-row flex-col mt-20 poppins p-10 relative md:p-20" id="content"
      style={{width: '100%', height: '100%'}} >
        {/* Left */}
        <div className="md:w-1/2">
          <Fade left>
            <p className=" md:text-5xl text-gray-600 text-3xl font-extrabold">UNDANGANKU</p>
            <p className="text-gray-400 leading-relaxed my-4 pl-10 py-3 md:text-2xl">Undanganku helps you make your own customized wedding invitation with few simple clicks. Just by signing in, you can have access to our invitation builder and start designing your dream invitation! Invite your friends and family and share your precious moments with your loved ones, fast and stress-free.</p>
              <button className="md:text-xl md:px-5 px-2 flex justify-center block font-bold text-gray-600 bg-red-200 w-1/3 md:py-3 py-1 text-lg mt-5 rounded-lg hover:text-gray-500 hover:bg-red-300 flex items-center"
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

export default Content