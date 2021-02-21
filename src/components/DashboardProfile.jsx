import React from 'react'
import Countdown, { zeroPad, calcTimeDelta, formatTimeDelta } from 'react-countdown';

const DashboardProfile = () => {
  const wedding = {
    title: 'Pernikahan' ,
    date: '05-05-2021',
    address: 'Jakarta Selatan',
    groomName: 'Cha Eun WOo',
    brideName: 'Amanda Rizqi',
    groomImg: 'http://res.heraldm.com/phpwas/restmb_jhidxmake.php?idx=5&simg=201811201728261782524_20181120173103_01.jpg',
    brideImg: 'https://cdn1-production-images-kly.akamaized.net/U-BtD9FAg3Y6_QPoW6E7IpQLnrQ=/1x155:1080x763/640x360/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2291108/original/036690600_1532512066-22344544_139057696659969_8328654710428925952_n.jpg',
    status: false,
  }

  return (
    <>
      <div className="h-full w-1/2 d-flex flex-col">
        <div className="h-1/2 m-3">
          <div className="flex flex-col justify-center items-center md:my-0 md:rounded-none rounded"
            style={{backgroundColor: 'white', color: 'white'}}>
            
            
                              
                                    <div class="relative py-10 m-auto">
                                      <div class="z-50 p-3 mt-10 max-w-xs w-xs grid grid-cols-1 cursor-default select-none rounded bg-gray-400 dark:bg-gray-900 shadow-lg">
                                        <div class="font-semibold text-xl mb-2 ml-2 text-gray-900 dark:text-white">Invitation Settings</div>
                                        <div class="flex">
                                          <button
                                            class="transform mouse-pointer bg-gray-900 text-sm text-white mx-2 py-1 px-2 font-semibold rounded hover:bg-gray-700 dark:hover:bg-gray-600 hover:scale-90   focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Settings</button>
 
                                        </div>
                                        <div class="my-5 mx-2 mr-5">
                                          <p class="text-gray-900 text-sm">
                                            Customize your Invitation here
                                          </p>
                                        </div>
                                      </div>
                                          <iframe
                                          width="45%" height="120"
                                        class="relative z-0 mx-72 -my-56 h-64 object-cover object-top transform hover:scale-125 border-gray-600 border border-opacity-50 rounded-xl shadow-lg transition-all duration-150"
                                        src="http://localhost:3000/invitation">
                                      </iframe>
                                    </div>
              








          </div>
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
