import React from 'react'
import Fade from 'react-reveal/Fade';
import build from '../assets/build-team.json'
import Lottie from "lottie-react"
import imageHolder from '../assets/swirl.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import puzzle from '../assets/puzzle.png'
import landingpage from '../assets/landing-page.png'
import countdown from '../assets/countdown.png'
import money from '../assets/money.png'
import comments from '../assets/comments.png'

const OurService = () => {
    return (
      <>
      <div className=" flex overflow-hidden justify-center items-center md:flex-row h-full flex-col poppins bg-red-300 relative"
        style={{width: '100%', height: '100vh'}} >
          {/* Left */}
          <div className="md:w-1/2 font-bold top-0 backimg" style={{ }}>
          <LazyLoadImage
            alt="happy bride"
            effect="blur"
            src={imageHolder} />
          </div>
          {/* Right */}
          <div className="md:w-1/2 py-20">
          <Fade right duration={2000}>
            <h1 className="text-white font-bold text-center md:text-5xl text-4xl">Our Services</h1>
          </Fade>
          <Fade right duration={2000} delay={200}>
              <div className="flex flex-col justify-center items-center">
                <ul className="leading-loose md:my-10 my-5 text-2xl md:text-xl">
                  <li className="my-2 text-white">
                    <img src={puzzle} alt="icon1" style={{display: 'inline', width: '3em', marginRight: '1em'}}/>
                    Invitation builder</li>
                  <li className="my-2 text-white">
                  <img src={landingpage} alt="icon1" style={{display: 'inline', width: '3em', marginRight: '1em'}}/>
                    Personalized page</li>
                  <li className="my-2 text-white">
                  <img src={countdown} alt="icon1" style={{display: 'inline', width: '3em', marginRight: '1em'}}/>
                    Countdown until the event</li>
                  <li className="my-2 text-white"> 
                  <img src={money} alt="icon1" style={{display: 'inline', width: '3em', marginRight: '1em'}}/>
                  Digital wedding gift feature</li>
                  <li className="my-2 text-white">
                  <img src={comments} alt="icon1" style={{display: 'inline', width: '3em', marginRight: '1em'}}/>
                    Guest's comment section</li>
                </ul>
              </div>
            </Fade>
          </div>
        </div> 
      </>
    )
}

export default OurService

 