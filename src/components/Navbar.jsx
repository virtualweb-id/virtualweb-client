import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

const Navbar = ({toggle}) => {
  const {path, url} = useRouteMatch()
  console.log(path, url)

  return (
    <nav 
    style={{ position: 'fixed', top: '0', zIndex: '99'}}
    className="flex justify-between items-center h-16 text-gray-800 relative font-serif w-full" role="navigation">
      <Link className="p-4 text-xl font-bold uppercase" to="/">Undanganku</Link>
      <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
      </div>
      <div className="pr-8 md:block hidden text-gray-800">
        <Link className="p-4 mr-4" to="/undanganku">Undanganku</Link>
        <Link className="p-4 mr-4"  to="/login">Login</Link>
        <Link className="p-4 mr-4"  to="/register">Register</Link>
      </div>
    </nav>
  )
}

export default Navbar
