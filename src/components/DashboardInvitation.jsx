import React from 'react'
import { Invitation } from '../views'

const DashboardInvitation = () => {
  return (
    <>
      <div className="w-full h-full flex md:flex-row flex-col">
        <div className="md:w-1/2 w-full h-full m-3 px-2 p-5 ">
          {/* Couple Name */}
          <h1 className="text-2xl font-bold text-gray-700  my-5 text-center">FORM </h1>
          <form className="container-small overflow-y-scroll bg-gray-200 rounded-lg shadow p-5 overflow-x-hidden h-3/4">
            <p className="font-small">Couple Name</p>
            <div className=" mb-4 border border-gray-200 rounded-lg">
              <input 
                type="text"
                name="brigeNickname"
                className=" w-44 px-1 py-1 mx-1 border-2 border-transparent rounded-lg focus:border-gray-400 focus:outline-none" placeholder="Bride Name"/>

              <input 
                type="text"
                name="groomNickname"
                className=" w-44 px-1 py-1 mx-1 border-2 border-transparent rounded-lg focus:border-gray-400 focus:outline-none" placeholder="Groom Name"/>                        
            </div>

            {/* Story */}
            <p className="font-small">Your Story</p>
            <div className=" mb-4 border border-gray-200 rounded-lg">
              <input 
                type="text"
                name="title"
                className=" font-large w-45 px-1 py-1 mx-1 border-2 border-transparent rounded-lg focus:border-gray-400 focus:outline-none" placeholder="Story Title"/>

              <textarea 
                rows='3'
                name="story"
                className=" block w-full my-2  px-2 px-1 py-1 mx-1 border-2 border-transparent rounded-lg focus:border-gray-400 focus:outline-none" placeholder="Your Story"/>                        
            </div>
            
            {/* Image Set */}
            <p className="font-small">Image Set</p>
            <div className=" mb-4 border border-gray-200 rounded-lg">
              <input 
                type="text"
                name="backgroundImg"
                className=" w-44 px-1 py-1 mx-1 border-2 border-transparent rounded-lg focus:border-gray-400 focus:outline-none" placeholder="Set Background Color"/>

              <input 
                type="text"
                name="additionalImg"
                className=" w-44 px-1 py-1 mx-1 border-2 border-transparent rounded-lg focus:border-gray-400 focus:outline-none" placeholder="Additional Image"/>                        
            </div>

            {/* Video URL */}
            <p className="font-small">Videos url</p>
            <div className=" mb-4 border border-gray-200 rounded-lg">
              <input 
                type="text"
                name="videoUrl"
                className=" w-full px-1 py-1 mx-1 border-2 border-transparent rounded-lg focus:border-gray-400 focus:outline-none" placeholder="Ex: Your prewed video URL"/>

              <input 
                type="text"
                name="youtubeUrl"
                className=" w-full my-2  px-1 py-1 mx-1 border-2 border-transparent rounded-lg focus:border-gray-400 focus:outline-none" placeholder="Your Wedding live URL"/>                        
            </div>

            {/* Set Backgound & font */}
            <p className="font-small">Page Setting</p>
            <div className=" mb-4 border border-gray-200 rounded-lg">
              <input 
                type="text"
                name="backgroundColor"
                className=" w-44 px-1 py-1 mx-1 border-2 border-transparent rounded-lg focus:border-gray-400 focus:outline-none" placeholder="Background Color"/>

              <input 
                type="text"
                name="textColor"
                className=" w-44 px-1 py-1 mx-1 border-2 border-transparent rounded-lg focus:border-gray-400 focus:outline-none" placeholder="Font Color"/>                        
            </div>

            {/* Time Event  */}
            <p className="font-small">Time Event Settings</p>
            <div className=" mb-4 border border-gray-200 rounded-lg">
              <input 
                type="text"
                name="timeEvent1"
                className=" w-44 px-1 py-1 mx-1 border-2 border-transparent rounded-lg focus:border-gray-400 focus:outline-none" placeholder="Akad Time"/>

              <input 
                type="text"
                name="timeEvent2"
                className=" w-44 px-1 py-1 mx-1 border-2 border-transparent rounded-lg focus:border-gray-400 focus:outline-none" placeholder="Main Event"/>                        
            </div>

            {/* Wedding Data  */}
            <p className="font-small">Wedding Information</p>
            <div className=" mb-4 border border-gray-200 rounded-lg">
              <input 
                type="text"
                name="title"
                className=" w-44 px-1 my-2 py-1 mx-1 border-2 border-transparent rounded-lg focus:border-gray-400 focus:outline-none" placeholder="Ex: Wedding"/>

              <input 
                type="text"
                name="date"
                className=" w-44 px-1 my-2 py-1 mx-1 border-2 border-transparent rounded-lg focus:border-gray-400 focus:outline-none" placeholder="Wedding Date"/>

              <input 
              type="text"
              name="address"
              className="block w-full my-2 px-1 py-1 mx-1 border-2 border-transparent rounded-lg focus:border-gray-400 focus:outline-none" placeholder="Wedding Location"/>     

              <input 
                type="text"
                name="groomName"
                className=" w-44 px-1 my-2 py-1 mx-1 border-2 border-transparent rounded-lg focus:border-gray-400 focus:outline-none" placeholder="Groom Name"/>

              <input 
              type="text"
              name="brideName"
              className=" w-44 px-1 my-2 py-1 mx-1 border-2 border-transparent rounded-lg focus:border-gray-400 focus:outline-none" placeholder="Bride Name"/>

              <input 
                type="text"
                name="groomImg"
                className=" w-44 px-1 my-2 py-1 mx-1 border-2 border-transparent rounded-lg focus:border-gray-400 focus:outline-none" placeholder="Groom Photo"/>

              <input 
              type="text"
              name="brideImg"
              className=" w-44 px-1 my-2 py-1 mx-1 border-2 border-transparent rounded-lg focus:border-gray-400 focus:outline-none" placeholder="Bride Photo"/>
            </div>
          </form>
        </div>
        <div className="md:w-1/2 w-full rounded m-3  px-2 p-5 ">
        <h1 className="text-2xl font-bold text-gray-700 my-5 text-center">My Invitation </h1>
        <div className="overflow-y-scroll rounded-lg shadow p-5 overflow-x-hidden h-3/4">
          <Invitation/>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardInvitation
