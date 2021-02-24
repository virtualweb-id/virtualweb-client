import React, {useEffect, useState} from 'react'
import {Doughnut} from 'react-chartjs-2';
import { useDispatch, useSelector } from "react-redux"
import Countdown, { zeroPad, calcTimeDelta, formatTimeDelta } from 'react-countdown';
import { FlipCountdown, SlideCountdown } from 'react-fancy-countdown'
import IframeResizer from 'iframe-resizer-react'
import Microlink from '@microlink/react'
import moment from 'moment'

const DashboardProfile = () => {
  const { guestAttend } = useSelector(state => state.guest)
  const { wedding } = useSelector(state => state.wedding)
  
  const data = {
    labels: [
      'Not Attend',
      'Attend',
      'No Info'
    ],
    datasets: [{
      data: guestAttend,
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

  return (
    <>
     <div className="w-full h-full flex md:flex-row flex-col overflow-y-scroll overflow-x-hidden form-invitation">
       {/* Left top */}
       <div className="h-full md:w-1/2 w-full flex flex-col p-2">
        <div className="h-3/5 bg-transparent m-4">
            <div className="bg-white border-transparent rounded-lg shadow-xl">
              <div className=" uppercase text-gray-800 border-b-2 border-gray-300 rounded-lg px-4 py-5">
                  <h5 className="font-bold uppercase text-center mb-2 text-gray-800">Customize Your 
                  
                  <button className='p-1 ml-2 rounded font-bold border-2 bg-gray-800 hover:bg-gray-700 px-3 border-black text-gray-200'>SETTINGS</button>
          
                  </h5>
                  <IframeResizer
                    scrolling='true'
                    default='false'
                    minHeight='255'
                    log
                    src="http://localhost:3000/event/390635999"
                    style={{ width: '10px', minWidth: '100%'}}
                  />
                    
              </div>
            </div>
          </div>


       {/* moment video left bottom */}
        <div className="h-3/5 m-4">
            <div className="bg-gradient-to-b from-gray-900 to-gray-800  border-transparent rounded-lg shadow-xl">
              <div className=" uppercase text-gray-200 border-b-2 border-gray-300 rounded-lg flex flex-col items-center">
                <h5 className="text-center font-bold uppercase text-gray-200 py-2">Your Moment's Video </h5>
                
                  <Microlink
                    url='https://www.youtube.com/watch?v=WSOFpsZFMjo&t=8s&ab_channel=Fam%E2%80%A2iLy'
                    media={['image', 'logo']}
                    className="rounded p-3 mb-3"
                    setData={(data) => ({
                      ...data,
                      title: 'Your Best Moment Screen',
                      description: 'When you realise you want to spend the rest of your life with somebody, you want the rest of your life to start as soon as possible.'
                    })}
                  />
              </div>
            </div>
         </div>
      </div>
      {/* Right top - GRAPH ATTENDEE */}
      <div className="h-full md:w-1/2 w-full flex flex-col p-2">
        <div className="h-3/5 bg-transparent m-4">
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
                                  <h3 className="font-medium text-xs">{guestAttend[1]} <span className="text-blue-500"><i className="fas fa-exchange-alt"></i></span></h3>
                                </div>
                              </div>
                          </div>
                        </div>

                        <div className="py-6 mx-auto mb-1 lg:w-1/3 lg:mb-0">
                          <div className="bg-gradient-to-b from-red-200 to-red-100 border-red-500 p-1">
                            <div className="flex flex-row items-center">
                                <div className="flex-1 text-right md:text-center">
                                  <h5 className="font-medium text-xs uppercase text-gray-600">Not Attend</h5>
                                  <h3 className="font-medium text-xs">{guestAttend[0]} <span className="text-red-500"><i className="fas fa-exchange-alt"></i></span></h3>
                                </div>
                              </div>
                          </div>
                        </div>

                        <div className="py-6 mx-auto mb-1 lg:w-1/3 lg:mb-0">
                          <div className="bg-gradient-to-b from-yellow-200 to-yellow-100 border-yellow-500 p-1">
                            <div className="flex flex-row items-center">
                                <div className="flex-1 text-right md:text-center">
                                  <h5 className="font-medium text-xs uppercase text-gray-600">No Info</h5>
                                  <h3 className="font-medium text-xs">{guestAttend[2]} <span className="text-yellow-500"><i className="fas fa-exchange-alt"></i></span></h3>
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
        <div className="h-3/5  m-4 ">
            <div className="bg-white border-transparent rounded-lg shadow-xl">
              <div className="bg-gradient-to-b from-gray-900 to-gray-800 uppercase text-gray-800 border-b-2 border-gray-300 rounded-lg px-2 py-3">
                <h5 className="text-center font-bold uppercase text-gray-200 pb-1">Days till your Wedding Day</h5>
                <div className="flex flex-col border-gray-200 justify-center items-center pb-2 py-5 my-5 md:my-0 rounded-lg rounded text-gray-300"
                // style={{backgroundColor: 'white', color: 'black'}}
                >
                   <Countdown date={wedding.date} />
                    {/* <p> {moment(wedding.date).format("YYYY-MM-DD")} </p> */}
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
