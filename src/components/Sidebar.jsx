import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

const Sidebar = () => {
  const {path, url} = useRouteMatch()
  return (
    <>
      <div className="h-full flex flex-col w-1/6 bg-gray-200 p-5 cursor-pointer">
          <Link to="/">UNDANGANKU</Link>
            <Link className={ url === `/undanganku` ? "p-4 mr-4 text-red-400" : "p-4 mr-4"} to="/undanganku">Dashboard</Link>
            <Link className={ url === `/myinvitation` ? "p-4 mr-4 text-red-400" : "p-4 mr-4"} to="/myinvitation">Invitation</Link>
            <Link className={ url === `/myguests` ? "p-4 mr-4 text-red-400" : "p-4 mr-4"} to="/myguests">Guests</Link>
            <Link className={ url === `/sendinvitations` ? "p-4 mr-4 text-red-400" : "p-4 mr-4"} to="/sendinvitations">Send Invitation</Link>
        </div>
    </>
  )
}

export default Sidebar
