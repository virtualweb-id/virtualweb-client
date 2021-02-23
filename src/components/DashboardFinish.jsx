import React from 'react'
import { Invitation } from '../views'

const DashboardFinish = () => {
  return (
    <>
      <div className="w-full h-full flex md:flex-row flex-col overflow-y-scroll overflow-x-hidden form-invitation">
      <div className="md:w-1/2 m-3 py-2  max-w-xl  rounded overflow-hidden">
        <h1 className="text-xl bg-gray-800 font-bold text-gray-300 text-center py-3 rounded shadow-lg  ">My Invitation </h1>
        <div className=" max-w-2xl sm:w-xl overflow-y-scroll p-5 w-full  h-full form-invitation">
          <Invitation/>
          </div>
        </div>
        <div className="md:w-1/2 m-3 flex justify-center h-full">
          <div className="max-w-xl flex flex-col items-center ">
            <div className="w-full text-center rounded shadow-lg  mt-3 text-gray-800 font-bold text-2xl p-5">Send invitation to all guest
              <div className=" text-sm font-light text-gray-700 p-5">
                <p className="italic">By clicking this button, I agree to send all invitation to the guests and that all guest information is correct.</p>
              </div>
              <button className="w-3/4 p-3 font-bold bg-gray-800 rounded-lg text-white text-sm hover:bg-gray-700">Send invitation</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardFinish
