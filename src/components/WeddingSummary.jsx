import React from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'

const WeddingSummary = () => {
  const { wedding } = useSelector(state => state.wedding)

  return (
    <div className="flex flex-col justify-between items-center lg:flex-row lg:items-start">
      <div className="w-full p-10 m-2 bg-gray-800 rounded shadow-lg text-gray-300 flex flex-col">
          <p className="font-bold text-lg text-center text-gray-200 p-3 rounded shadow-lg bg-gray-700">WEDDING SUMMARY</p>
          <div className="inline-block mt-2 pr-1 ">
            <p className="text-lg text-gray-300 divide-opacity-25 border-b-2 border-white py-2">Event: <span className="font-bold">{wedding.title}</span></p>
          </div>
          <div className="inline-block mt-5 pr-1 flex flex-row">
            <div className="flex md:w-1/2 w-full">
              <svg className="w-6 h-6 mx-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
              <p>{wedding.address}</p>
            </div>
            <div className="flex md:w-1/2 w-full">
              <svg className="w-6 h-6 mx-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
              <p>{moment(wedding.date).format("MMM Do YY")}</p>
            </div>
          </div>
          <div className="inline-block mt-2 pr-1 flex flex-row">
            <div className="flex md:w-1/2 w-full">
              <div className="inline-block mt-2 pr-1 flex flex-col justify-center items-center">
                {
                  wedding && <img src={wedding.groomImg}  alt="" className="rounded-3xl mx-5 my-2" style={{ width: '120px', height: '120px'}}/>
                }
                <p>{wedding.groomName}</p>
              </div>
            </div>
            <div className="flex md:w-1/2 w-full">
              <div className="inline-block mt-2 pr-1 flex flex-col justify-center items-center">
                {
                  wedding && <img src={wedding.brideImg}  alt="" className="rounded-3xl mx-5 my-2" style={{ width: '120px', height: '120px'}} />
                }
                <p>{wedding.brideName}</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default WeddingSummary