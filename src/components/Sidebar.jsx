import React from 'react'
import { Link, useLocation, useRouteMatch } from 'react-router-dom'

const Sidebar = () => {
  const {path, url} = useRouteMatch()
  const { pathname } = useLocation()
  return (
    <>
      <div className="h-full flex flex-col w-1/6 bg-gray-200 p-5 cursor-pointer">
          Undanganku
            <Link className={ pathname === `/dashboard` ? "p-4 mr-4 text-red-400" : "p-4 mr-4"} to="/dashboard">Dashboard</Link>
            <Link className={ pathname === `/dashboard/invitation` ? "p-4 mr-4 text-red-400" : "p-4 mr-4"} to="/dashboard/invitation">Invitation</Link>
            <Link className={ pathname === `/dashboard/guests` ? "p-4 mr-4 text-red-400" : "p-4 mr-4"} to="/dashboard/guests">Guests</Link>
            <Link className={ pathname === `/dashboard/send` ? "p-4 mr-4 text-red-400" : "p-4 mr-4"} to="/dashboard/send">Send Invitation</Link>
        </div>
    </>
  )
}

export default Sidebar
