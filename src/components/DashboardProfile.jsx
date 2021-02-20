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
      <div className="h-full w-1/2 flex flex-col">
        <div className="h-1/2  m-3">
        <div className="flex flex-col justify-center items-center py-10 md:my-0 my-10 md:rounded-none rounded"
          style={{backgroundColor: 'white', color: 'gray', minWidth: '40%'}}>
            <Countdown date={wedding.date}
            daysInHours={false}
            className="text-3xl font-extrabold"
            >
            </Countdown>
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
