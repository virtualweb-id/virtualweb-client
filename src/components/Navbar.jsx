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
    style={{top: 0, zIndex: '9'}}>
      <div className="mt-10 flex items-center">
        <p className="md:text-4xl text-xl text-white font-extrabold inline" >UNDANGANKU</p>
        <div style={{width: '25px', width: '25px', borderRadius: '50%'}} className="bg-red-300 text-red-300 text-center inline-block ml-3">.</div>
      </div>
      <div className="mt-10">
        { loggedIn ? <Link className="m-2 text-gray-200 font-bold hover:text-red-300 hoverborderpink"  to="/dashboard">Dashboard</Link> : (
          <><Link className="m-2 text-gray-200 font-bold hover:text-red-300 hoverborderpink"  to="/login">Login</Link>
            <Link className="text-gray-200 m-5 font-bold hover:text-red-300 hoverborderpink"  to="/register">Register</Link></>
        ) }
      </div>
    
    </nav>
  )
}

export default Navbar
