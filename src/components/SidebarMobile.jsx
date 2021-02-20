import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const SidebarMobile = ({showsidebar, toggle}) => {
  const { pathname } = useLocation()

  return (
    <div className={showsidebar ? 'w-full h-screen flex flex-col bg-gray-200 text-gray-600 font-sans p-5 text-2xl' : 'hidden'}
    onClick={toggle}>
       <Link className={ pathname === `/dashboard` ? "p-4 mr-4 text-red-400" : "p-4 mr-4"} to="/dashboard">Dashboard</Link>
        <Link className={ pathname === `/dashboard/invitation` ? "p-4 mr-4 text-red-400" : "p-4 mr-4"} to="/dashboard/invitation">Invitation</Link>
        <Link className={ pathname === `/dashboard/guests` ? "p-4 mr-4 text-red-400" : "p-4 mr-4"} to="/dashboard/guests">Guests</Link>
        <Link className={ pathname === `/dashboard/send` ? "p-4 mr-4 text-red-400" : "p-4 mr-4"} to="/dashboard/send">Send Invitation</Link>
    </div>
  )
}

export default SidebarMobile
