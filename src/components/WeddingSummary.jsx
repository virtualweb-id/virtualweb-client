import React from 'react'
import { useSelector } from 'react-redux'

const WeddingSummary = () => {
  const { wedding } = useSelector(state => state.wedding)

  return (
    <div class="flex flex-col justify-between items-center lg:flex-row lg:items-start">
      <div class="w-full flex-1 p-8 order-1  text-gray-400 sm:w-96 lg:w-full lg:order-2 lg:mt-0">
        <div class="mb-8 pb-8 flex items-center border-b border-gray-600">
          <div class="ml-5 flex flex-col justify-center items-center">
            <span class="block  text-2xl text-gray-800 font-extrabold ">Wedding Information</span>
          </div>
        </div>
        <ul class="mb-10 font-medium text-xl">
        <li class="flex">
            <span class="ml-3 mb-3">Event: <span className="text-gray-700">{wedding.title}</span></span>
          </li>
          <li class="flex">
            <span class="ml-3 my-3">Date of the event: <span className="text-gray-700">{wedding.date?.slice(0, 10)}</span></span>
          </li>
          <li class="flex">
            <span class="ml-3 my-3">Location: <span className="text-gray-700">{wedding.address}</span></span>
          </li>
          <li class="flex">
            <span class="ml-3 my-3">Groom's Full Name: <span className="text-gray-700">{wedding.groomName}</span></span>
          </li>
          <li class="flex">
            <span class="ml-3 my-3">Bride's Full Name: <span className="text-gray-700">{wedding.brideName}</span></span>
          </li>
          <li class="flex flex-col">
            <span class="ml-3 my-3">Bride & Groom's picture: </span>
            <div className="flex w-full items-center">
              {
                wedding && <img src={wedding.groomImg}  alt="" class="rounded-3xl mx-5 my-2" style={{ width: '120px', height: '120px'}}/>
              }
              {
                wedding && <img src={wedding.brideImg}  alt="" class="rounded-3xl mx-5 my-2" style={{ width: '120px', height: '120px'}} />
              }
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default WeddingSummary