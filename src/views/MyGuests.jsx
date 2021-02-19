import React from 'react'
import { DashboardProfile, Sidebar } from '../components'

const MyGuests = () => {
  return (
    <>
      <div className="flex w-full flex-row h-screen">
        <div className="h-full flex flex-col w-1/6 bg-gray-200 cursor-pointer">
         <Sidebar />
        </div>
        <div className="h-full flex flex-col w-full">
          <nav className="flex w-full justify-between bg-gray-400 p-2">
            <div>Nobita & Sizuka</div>
            <div>Logout</div>
          </nav>
          <div className="w-full h-full flex flex-row "
          style={{overflowY: 'auto'}}>
           <DashboardProfile />
          </div>
        </div>
      </div>
    </>
  )
}

export default MyGuests
