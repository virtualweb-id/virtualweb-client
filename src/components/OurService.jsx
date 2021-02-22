import React from 'react'
import Fade from 'react-reveal/Fade';
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
      <div className=" flex overflow-hidden justify-center items-center md:flex-row h-full md:h-screen flex-col poppins bg-red-300 relative"
        style={{width: '100%'}} >
          {/* Left */}
          <div className="md:w-1/3 font-bold" style={{ }}>
          <LazyLoadImage
            alt="happy bride"
            effect="blur"
            style={{height: '100vh'}}
            src={imageHolder} />
          </div>
          {/* Right */}
          <div className="md:w-2/3 py-10">
          <Fade right duration={2000}>
            <h1 className="text-white font-bold text-center md:text-5xl text-4xl">Our Services</h1>
          </Fade>
          <Fade right duration={2000} delay={300}>
              <div className="flex flex-col justify-center items-center">
                <ul className="leading-loose md:my-10 text-xl md:text-2xl">
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

 