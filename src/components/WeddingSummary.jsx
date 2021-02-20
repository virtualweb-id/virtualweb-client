import React from 'react'

const WeddingSummary = () => {
  const dummy = { 
    title: 'Pernikahan', 
    date: '05-05-2021', 
    address: 'Jakarta Selatan', 
    groomName: 'Cha Eunwoo', 
    groomImg: 'https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/true_beauty_hwang_in_yeob_astro_cha_eun_woo_good_looks_obvious_in_mask_first_meet_inside_elevator.jpg', 
    brideImg: 'https://akns-images.eonline.com/eol_images/Entire_Site/20181120/rs_600x600-181220001218-e-asia-song-hye-kyo-chaumet-thumbnail.jpg?fit=around%7C700:700&output-quality=90&crop=700:700;center,top', 
    brideName: 'Amanda Rizqi', 
    status: false }


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
              <span class="ml-3 mb-3">Event <span className="text-gray-700">{dummy.title}</span></span>
            </li>
            <li class="flex">
              <span class="ml-3 my-3">Location: <span className="text-gray-700">{dummy.address}</span></span>
            </li>
            <li class="flex">
              <span class="ml-3 my-3">Date of the event: <span className="text-gray-700">{dummy.date}</span></span>
            </li>
            <li class="flex">
              <span class="ml-3 my-3">Groom's Full Name: <span className="text-gray-700">{dummy.groomName}</span></span>
            </li>
            <li class="flex">
              <span class="ml-3 my-3">Bride's Full Name: <span className="text-gray-700">{dummy.brideName}</span></span>
            </li>
            <li class="flex flex-col">
              <span class="ml-3 my-1">Bride & Groom's picture: </span>
              <div className="flex w-full items-center">
                  <img src={dummy.groomImg}  alt="" class="rounded-3xl mx-5 my-2" style={{ width: '120px', height: '120px'}}/>
                  <img src={dummy.brideImg}  alt="" class="rounded-3xl mx-5 my-2" style={{ width: '120px', height: '120px'}} />
              </div>
            </li>
          </ul>
        </div>
      </div>
  )
}

export default WeddingSummary
/*
{ title, date, address, groomName, groomImg, brideImg, brideName, status }  */