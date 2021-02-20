import React from 'react'
import { DashboardInvitation, Sidebar } from '../components'
import DashboardNavbar from '../components/DashboardNavbar'

const MyInvitation = () => {
  return (
    <>
      <div className="flex w-full flex-row h-screen">
        <div className="h-full flex flex-col w-1/6 bg-gray-200">
          <Sidebar />
        </div>
        <div className="h-full flex flex-col w-full">
          <DashboardNavbar />
          <div className="w-full h-full flex flex-row "
          style={{overflowY: 'auto'}}>
            <DashboardInvitation />
          </div>
        </div>
      </div>
    </>
  )
}

export default MyInvitation
