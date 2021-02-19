import React from 'react'
import { Link } from 'react-router-dom'

const Dropdown = ({dropdown, toggle}) => {
  return (
    <div className={dropdown ? 'grid grid-rows-5 text-center items-center bg-white text-gray-600 font-sans' : 'hidden'} 
    style={{ color: '#091c29'}} 
    onClick={toggle}>
       <Link className="p-4 mr-4" to="/">Home</Link>
       <Link className="p-4 mr-4" to="/">Home</Link>
       <Link className="p-4 mr-4 " to="/link3">Dashboard</Link>
       <Link className="p-4 mr-4" to="/link1">Login</Link>
       <Link className="p-4 mr-4 " to="/link2">Register</Link>
    </div>
  )
}

export default Dropdown
