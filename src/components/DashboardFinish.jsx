import React from 'react'

const DashboardFinish = () => {
  return (
    <>
      <div className="w-full h-full flex flex-row">
        <div className="w-1/2 bg-gray-200 m-3">
            <div>Invitation page</div>
        </div>
        <div className="w-1/2 m-3 flex flex-col">
            <div className="w-full h-1/4 bg-gray-200">Summary countdown & total guest</div>
            <button className="w-full p-3 bg-gray-300">Send invitation</button>
        </div>
      </div>
    </>
  )
}

export default DashboardFinish
