import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { DashboardProfile, Sidebar } from '../components'
import DashboardNavbar from '../components/DashboardNavbar'

const Undanganku = () => {
  const history = useHistory()

  useEffect(() => {
    if(!localStorage.access_token) history.push('/login')
  }, [])

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
           <DashboardProfile />
          </div>
        </div>
      </div>
    </>
  )
}

export default Undanganku
