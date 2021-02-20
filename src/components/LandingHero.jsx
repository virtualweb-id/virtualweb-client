import React from 'react'
import Typical from 'react-typical'
import { Link as ScrollDown } from 'react-scroll'
import header from '../assets/silk.jpg'
import couple from '../assets/couple1.jpg'
import video from '../assets/video.mp4'
import Navbar from './Navbar'

const LandingHero = () => {
  return (
    <>
    <div className="w-full m-0 p-0 bg-cover flex flex-col items-center sticky bg-bottom" style={{backgroundImage: `url(${header})`, height: '60vh', maxHeight:'460px', top: '-1'}}>
			<div className="container max-w-4xl mx-auto pt-16 md:pt-32 text-center break-normal flex flex-col justify-center items-center">
				{/* <!--Title--> */}
					<p className="text-white font-extrabold text-2xl md:text-5xl">
					</p>
			</div>
		</div>
		
		{/* <!--Container--> */}
		<div className="container px-4 md:px-0 max-w-6xl mx-auto -mt-32 relative" style={{zIndex: 9}}>
			<div className="mx-0 sm:mx-6">
				<Navbar />
				<div className="bg-gray-200 w-full text-xl md:text-2xl text-gray-800 leading-normal relative rounded-t">
          <div className="flex h-full bg-white rounded overflow-hidden shadow-lg flex flex-col justify-center items-center">
                {/* <img src={couple} className="h-full w-full shadow" /> */}
                <video autoPlay loop muted className="">
                  <source src={video} type="video/mp4"></source>
                </video>
                <p className="text-gray-200 absolute"
                style={{zIndex: '99999'}}>
                <Typical
                  steps={['Invite friends and family', 1500, 'Share your happiness virtually', 1500]}
                  loop={Infinity}
                  className="inline-block text-3xl text-black py-2 font-extrabold"
                  />
                  <ScrollDown to="content" smooth={true} className=" cursor-pointer text-white flex flex-col justify-center items-center">
                 <p className="font-extrabold text-white">Learn More</p>
                  <svg className="w-10 h-10 block animation-bounce" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
              </ScrollDown>
                </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default LandingHero

/*
 
// <div className=" flex items-center sticky text-white poppins overflow-hidden" 
    // style={{ width: '100vw', height: '100vh', zIndex: '-1' }}>
    //   <div className="flex p-10 flex-col absolute justify-center items-center w-full" style={{zIndex: '999'}}> 
    //     <h1 className="text-xl md:text-4xl ">Undanganku</h1>
    //     <Typical
    //     steps={['Invite friends and family', 1500, 'Share your happiness virtually', 1500]}
    //     loop={Infinity}
    //     className="inline-block text-xl text-gray-900 py-2"
    //     />
    //     <ScrollDown to="content" smooth={true} className=" cursor-pointer text-gray-400 flex flex-col justify-center items-center">
    //     <p >Learn More</p>
    //       <svg className="w-10 h-10 block animation-bounce" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
    //     </ScrollDown>
    //   </div>
    // </div>
*/