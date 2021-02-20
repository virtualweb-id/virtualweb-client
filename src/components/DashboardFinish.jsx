import React from 'react'
import { Invitation } from '../views'

const DashboardFinish = () => {
  return (
    <>
      <div className="w-full h-full flex md:flex-row flex-col">
      <div className="md:w-1/2 w-full rounded m-3 overflow-y-auto  px-2 p-5 ">
        <h1 className="text-2xl font-bold text-gray-700 my-5 text-center">My Invitation </h1>
        <div className="overflow-y-scroll rounded-lg shadow p-5 overflow-x-hidden h-3/4">
          <Invitation/>
          </div>
        </div>
        <div className="md:w-1/2 w-full m-3 flex flex-col">
            <div className="w-full h-1/4 bg-gray-200">Summary countdown & total guest</div>
            <button className="w-full p-3 bg-gray-300">Send invitation</button>
        </div>
      </div>
    </>
  )
}

export default DashboardFinish
