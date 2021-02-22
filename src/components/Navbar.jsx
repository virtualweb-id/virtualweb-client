import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [loggedIn, setLogggedIn] = useState(false)

  useEffect(() => {
    if(localStorage.access_token) setLogggedIn(true)
  }, [])

  return (
    <nav
    className="fixed flex justify-around flex-row relative bg-transparent w-full p-4 poppins" role="navigation"
    style={{top: 0, zIndex: 99}}>
      <div className="mt-10 flex items-center">
        <p className="md:text-4xl text-xl text-gray-700 font-extrabold inline" >UNDANGANKU</p>
      </div>
      <div className="mt-10">
        { loggedIn ? <Link className="m-2 text-gray-100 font-bold hover:text-gray-700 hoverborderpink"  to="/dashboard">Dashboard</Link> : (
          <><Link className="m-2 text-gray-100 font-bold hover:text-gray-700 hoverborderpink"  to="/login">Login</Link>
            <Link className="text-gray-100 m-5 font-bold hover:text-gray-700 hoverborderpink"  to="/register">Register</Link></>
        ) }
      </div>
    
    </nav>
  )
}

export default Navbar
