import React from 'react'

const DashboardProfile = () => {
  return (
    <>
      <div className="h-full w-1/2 flex flex-col">
        <div className="h-1/2 bg-gray-200 m-3">
            <div>data wedding</div>
        </div>
        <div className="h-1/2 bg-gray-200 m-3">
            <div>countdown sebelum hari-h</div>
        </div>
      </div>
      <div className="h-full w-1/2 flex flex-col">
        <div className="h-3/4 bg-gray-200 m-3">
            <div>jumlah tamu</div>
        </div>
        <div className="bg-gray-200 m-3 h-1/5">
            <div>e-invitation</div>
        </div>
      </div>
    </>
  )
}

export default DashboardProfile
