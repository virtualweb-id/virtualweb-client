import React from 'react'
import { useHistory } from 'react-router-dom'

const Entertainme = () => {
  const history = useHistory()

  const redirectDashboard = () => {
    history.push('/undanganku')
  }

    return (
      <>
      <div className=" font-sans flex justify-center items-center flex-col mb-5" id="content"
      style={{width: '100vw', height: '100vh'}} >
        <div className="flex justify-center items-center">
          <div className=" p-5 m-5 bg-blue-200">TEMA 1</div>
          <div className="p-5 m-5 bg-blue-200">TEMA 2</div>
          <div className=" p-5 m-5 bg-blue-200">TEMA 3</div>
        </div>
        <button className="md:text-xl md:px-10 px-3 block font-bold text-white bg-blue-300 w-1/3 md:py-3 py-1 text-lg mt-5
          bg-white hover:text-gray-900 flex items-center"
          onClick={() => redirectDashboard()}>Ke dashboard
        </button>
      </div>
      </>
    )
}

export default Entertainme