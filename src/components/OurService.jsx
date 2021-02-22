import React from 'react'
import Fade from 'react-reveal/Fade';
import build from '../assets/build-team.json'
import Lottie from "lottie-react"
import imageHolder from '../assets/swirl.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const OurService = () => {
    return (
      <>
      <div className=" flex justify-center items-center md:flex-row h-full flex-col poppins bg-red-300 relative"
        style={{width: '100%', height: '80%'}} >
          {/* Left */}
          <div className="md:w-1/2 font-bold top-0 backimg" style={{ maxHeight: '90%'}}>
          <LazyLoadImage
            alt="happy bride"
            src={imageHolder} />
          </div>
          {/* Right */}
          <div className="md:w-1/2 font-bold ">
            <h1 className="text-white text-center text-3xl">Our Services</h1>
            <div className="flex flex-col justify-center items-center">
              <ul className="leading-loose my-10">
                <li>Invitation builder</li>
                <li>Personalized invitation page</li>
                <li>Countdown until the event</li>
                <li>Digital wedding gift feature</li>
                <li>Guest comment</li>
              </ul>
            </div>
          </div>
        </div> 
      </>
    )
}

export default OurService

 