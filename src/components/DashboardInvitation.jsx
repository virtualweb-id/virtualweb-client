import React from 'react'

const DashboardInvitation = () => {
  return (
    <>
      <div className="w-full h-full flex flex-row">
        <div className="w-1/2 bg-gray-200 m-3">
            <div>Form edit</div>
        </div>
        <div className="w-1/2 bg-gray-200 m-3">


            <div className="content-center">Halaman invitation
            <iframe src="http://localhost:3000/invitation" width="100%" height="600" style={{border:'1'}}></iframe>
            </div>
        </div>
      </div>
    </>
  )
}

export default DashboardInvitation
