import React from 'react'
import Typical from 'react-typical'
import { Link as ScrollDown } from 'react-scroll'
// import video from '../assets/video.mp4'

const LandingHero = () => {
  return (
    <div className=" flex items-center  text-white poppins relative overflow-hidden" 
    style={{ backgroundColor: 'white', width: '100vw', height: '100vh'}}>
      <div>
        <video autoPlay loop muted className="mt-10">
          {/* <source src={video} type="video/mp4"></source> */}
        </video>
      </div>
      <div className="flex p-10 flex-col absolute" style={{zIndex: '999'}}> 
        <h1 className="text-xl md:text-4xl ">Undanganku</h1>
        <Typical
        steps={['Invite friends and family', 1500, 'Share your happiness virtually', 1500]}
        loop={Infinity}
        className="inline-block text-xl text-gray-900 py-2"
        />
        <ScrollDown to="content" smooth={true}>
          <button className="md:text-xl md:px-10 px-3 block bg-blue-200 font-bold text-black md:py-3 py-1 text-lg mt-5
          bg-white hover:text-gray-900 animate-bounce flex items-center">See content
          </button>
        </ScrollDown>
      </div>
    </div>
  )
}

export default LandingHero
