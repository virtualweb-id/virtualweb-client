import React from 'react'
import Typical from 'react-typical'
import { Link as ScrollDown } from 'react-scroll'
import Navbar from './Navbar'
import Lottie from "lottie-react"
import paperplane from '../assets/paper-plane.json'
import Fade from 'react-reveal/Fade';

const LandingHero = () => {
  return (
    <div className="h-screen w-screen gradientdark poppins"
    style={{}}>
      <Navbar />
      <div className="flex flex-col w-full h-full flex-col items-center">
        <div className="flex flex-col mt-20 p-10 justify-center items-center">

          <Lottie animationData={paperplane} 
            loop 
            autoPlay 
            className="m-10"/>
            <Fade left>
              <p className="md:text-5xl poppins leading-relaxed text-4xl text-red-300 font-extrabold md:my-10"> BUILD YOUR OWN DIGITAL INVITATION</p>
          </Fade>
        </div>
        <div>
        <Fade top>
            <ScrollDown to="content" smooth={true} className=" cursor-pointer text-white flex flex-col justify-center items-center">
              <p className="font-extrabold text-white animate-bounce">Learn More</p>
              <svg className="w-10 h-10 block animation-bounce" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            </ScrollDown>
          </Fade>
        </div>
          
      </div>
    </div>
  )
}

export default LandingHero

/*
 
// <div className="w-full m-0 p-0 bg-cover flex flex-col items-center sticky bg-bottom" style={{backgroundImage: `url(${header})`, height: '60vh', maxHeight:'460px', top: '-1'}}>
// 			<div className="container max-w-4xl mx-auto pt-16 md:pt-32 text-center break-normal flex flex-col justify-center items-center">
// 				{/* <!--Title--> */
//         <p className="text-white font-extrabold text-2xl md:text-5xl">
//         </p>
//     </div>
//   </div>
  
//   {/* <!--Container--> */}
//   <div className="container px-4 md:px-0 max-w-6xl mx-auto -mt-32 relative" style={{zIndex: 9}}>
//     <div className="mx-0 sm:mx-6">
//       <Navbar />
//       <div className="bg-gray-200 w-full text-xl md:text-2xl text-gray-800 leading-normal relative rounded-t">
//         <div className="flex h-full bg-white rounded overflow-hidden shadow-lg flex flex-col justify-center items-center">
//               {/* <img src={couple} className="h-full w-full shadow" /> */}
//               <video autoPlay loop muted className="">
//                 <source src={video} type="video/mp4"></source>
//               </video>
//               <p className="text-gray-200 absolute"
//               style={{zIndex: '99999'}}>
//               <Typical
//                 steps={['Invite friends and family', 1500, 'Share your happiness virtually', 1500]}
//                 loop={Infinity}
//                 className="inline-block text-3xl text-black py-2 font-extrabold"
//                 />
//                 <ScrollDown to="content" smooth={true} className=" cursor-pointer text-white flex flex-col justify-center items-center">
//                <p className="font-extrabold text-white">Learn More</p>
//                 <svg className="w-10 h-10 block animation-bounce" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
//             </ScrollDown>
//               </p>
//         </div>
//       </div>
//     </div>
//   </div>
