import React from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'

const WeddingSummary = () => {
  const { wedding } = useSelector(state => state.wedding)

  return (
    <div class="flex flex-col justify-between items-center lg:flex-row lg:items-start">
      <div className="w-full md:p-10 px-2 mt-5 bg-gray-800 rounded-lg shadow-lg text-gray-300 flex flex-col p-3">
          <p className="font-bold text-2xl text-center text-gray-400 p-3 rounded shadow-lg bg-gray-700">WEDDING SUMMARY</p>
          <div className="inline-block mt-2 pr-1 ">
            <p className="text-xl text-gray-300 divide-opacity-25 border-b-2 border-white py-2">Event: <span className="font-bold">{wedding.title}</span></p>
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
                  wedding && <img src={wedding.groomImg}  alt="" class="rounded-3xl mx-5 my-2" style={{ width: '120px', height: '120px'}}/>
                }
                <p>{wedding.groomName}</p>
              </div>
            </div>
            <div className="flex md:w-1/2 w-full">
              <div className="inline-block mt-2 pr-1 flex flex-col justify-center items-center">
                {
                  wedding && <img src={wedding.brideImg}  alt="" class="rounded-3xl mx-5 my-2" style={{ width: '120px', height: '120px'}} />
                }
                <p>{wedding.brideName}</p>
              </div>
            </div>
          </div>
      </div>
      {/* <div class="w-full flex-1 p-8 order-1  text-gray-600 sm:w-96 lg:w-full lg:order-2 lg:mt-0">
        <div class="mb-8 pb-8 flex items-center border-b border-gray-600">
          <div class="ml-5 flex flex-col justify-center items-center">
            <span class="block  text-2xl text-gray-800 font-extrabold ">Wedding Information</span>
          </div>
        </div>
        <div class="mb-10 font-medium text-xl">
          <div className="inline-block mt-2 w-1/2 pr-1">
            <p className="font-light text-black text-medium">Event</p>
          </div>
          <div className="inline-block mt-2 w-1/2 pr-1">
            <p>{wedding.title}</p>
          </div>

          <div className="inline-block mt-2 w-1/2 pr-1">
            <p className="font-light text-black text-medium">Event Location</p>
          </div>
          <div className="inline-block mt-2 w-1/2 pr-1">
            <p>{wedding.address}</p>
          </div>

          <div className="inline-block mt-2 w-1/2 pr-1">
            <p className="font-light text-black text-medium">Event Date</p>
          </div>
          <div className="inline-block mt-2 w-1/2 pr-1">
            <p>{moment(wedding.date).format("MMM Do YY")}</p>
          </div>

          <div className="inline-block mt-2 w-1/2 pr-1">
            <p className="font-light text-black text-medium">Groom's Full Name</p>
          </div>
          <div className="inline-block mt-2 w-1/2 pr-1">
            <p>{wedding.groomName}</p>
          </div>
          
          <div className="inline-block mt-2 w-1/2 pr-1">
            <p className="font-light text-black">Bride's Full Name</p>
          </div>
          <div className="inline-block mt-2 w-1/2 pr-1">
            <p>{wedding.brideName}</p>
          </div>

          <div className="inline-block mt-2 w-full pr-1">
            <p className="font-light text-black">Bride & Groom's Picture</p>
          </div>
          <div className="inline-block mt-2 w-full pr-1 flex justify-center items-center">
            <div className="inline-block mt-2 w-1/2 pr-1 flex flex-col justify-center items-center">
              {
                wedding && <img src={wedding.groomImg}  alt="" class="rounded-3xl mx-5 my-2" style={{ width: '120px', height: '120px'}}/>
              }
               <p>{wedding.groomName}</p>
            </div>
            <div className="inline-block mt-2 w-1/2 pr-1 flex flex-col justify-center items-center">
              {
                wedding && <img src={wedding.brideImg}  alt="" class="rounded-3xl mx-5 my-2" style={{ width: '120px', height: '120px'}} />
              }
               <p>{wedding.brideName}</p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default WeddingSummary