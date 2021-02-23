import React from 'react'
import {Doughnut} from 'react-chartjs-2';
import Countdown, { zeroPad, calcTimeDelta, formatTimeDelta } from 'react-countdown';
import { FlipCountdown, SlideCountdown } from 'react-fancy-countdown'

const DashboardProfile = () => {
  const data = {
    labels: [
      'Not Attend',
      'Attend',
      'No Info'
    ],
    datasets: [{
      data: [300, 50, 100],
      backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
      ],
      hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
      ]
    }]
  };

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
     <div className="w-full h-full flex md:flex-row flex-col overflow-y-scroll overflow-x-hidden form-invitation">
       {/* Left top */}
        <div className="h-1/2 md:w-1/2 w-full m-3">
          <div className="flex flex-col border-black overflow-auto justify-center items-center py-10 md:my-0 my-10 md:rounded-none rounded"
            style={{backgroundColor: 'white', color: 'black', minWidth: '40%', border: 'black'}}>
    
            </div>
        </div>
      {/* Right top - GRAPH ATTENDEE */}
      <div className="h-full md:w-1/2 w-full flex flex-col">
        <div className="h-3/5 bg-transparent m-3 mx-10 px-3">
            <div className="bg-white border-transparent rounded-lg shadow-xl">
              <div className="p-5 uppercase text-gray-800 border-b-2 border-gray-300 rounded-lg p-2">
                  <h5 className="font-bold uppercase text-center mb-2 text-gray-600">Guests Attendance Graph</h5>
                  <Doughnut data={data}/>
                  <section className="text-gray-700 body-font">
                    <div className="container px-8 mx-auto lg:px-4">
                      <div className="flex flex-wrap -m-4">
                        <div className="py-6 mx-auto mb-1 lg:w-1/3 lg:mb-0">
                          <div className="bg-gradient-to-b from-blue-200 to-blue-100 border-blue-500 m2 p-1">
                            <div className="flex flex-row items-center">
                                <div className="flex-1 text-right md:text-center">
                                  <h5 className="font-medium text-xs uppercase text-gray-600">Attend</h5>
                                  <h3 className="font-medium text-xs">249 <span className="text-blue-500"><i className="fas fa-exchange-alt"></i></span></h3>
                                </div>
                              </div>
                          </div>
                        </div>

                        <div className="py-6 mx-auto mb-1 lg:w-1/3 lg:mb-0">
                          <div className="bg-gradient-to-b from-red-200 to-red-100 border-red-500 p-1">
                            <div className="flex flex-row items-center">
                                <div className="flex-1 text-right md:text-center">
                                  <h5 className="font-medium text-xs uppercase text-gray-600">Not Attend</h5>
                                  <h3 className="font-medium text-xs">300 <span className="text-red-500"><i className="fas fa-exchange-alt"></i></span></h3>
                                </div>
                              </div>
                          </div>
                        </div>

                        <div className="py-6 mx-auto mb-1 lg:w-1/3 lg:mb-0">
                          <div className="bg-gradient-to-b from-yellow-200 to-yellow-100 border-yellow-500 p-1">
                            <div className="flex flex-row items-center">
                                <div className="flex-1 text-right md:text-center">
                                  <h5 className="font-medium text-xs uppercase text-gray-600">No Info</h5>
                                  <h3 className="font-medium text-xs">100 <span className="text-yellow-500"><i className="fas fa-exchange-alt"></i></span></h3>
                                </div>
                              </div>
                          </div>
                        </div>

                      </div>
                    </div>
                    
                  </section>  
              </div>
            </div>
          </div>
       {/* countdown rigght bottom */}
        <div className="h-3/5  m-3 mx-10 ">
            <div className="bg-white border-transparent rounded-lg shadow-xl">
              <div className="bg-gradient-to-b from-gray-900 to-gray-800 uppercase text-gray-800 border-b-2 border-gray-300 rounded-lg p-2">
                <h5 className="text-center font-bold uppercase text-gray-200 pb-1">Days till your Wedding Day</h5>
                <div className="flex flex-col border-gray-200 justify-center items-center pb-2 py-5 my-5 md:my-0 rounded-lg rounded text-gray-300"
                // style={{backgroundColor: 'white', color: 'black'}}
                >
                  <SlideCountdown
                    weeks={false}
                    deadline={wedding.date} />
                </div>
              </div>
            </div>
         </div>
      </div>
    </div>
    </>
  )
}

export default DashboardProfile
