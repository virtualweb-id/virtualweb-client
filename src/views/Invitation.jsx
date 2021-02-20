import React from 'react'
import Countdown, { zeroPad, calcTimeDelta, formatTimeDelta } from 'react-countdown';
import ReactPlayer from "react-player"
import imgholder from '../assets/couple1.jpg'
import imgholder2 from '../assets/couple2.jpg'
import gift from '../assets/wedding-gift.png'

const Invitation = ({ hours, minutes, seconds }) => {
  const holder = {
    brigeNickname: 'Amanda', 
    groomNickname: 'Eunwoo', 
    story: `❝ Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir. ❞

    (Ar-Rum: 21)`, 
    title: 'Bismillah', 
    backgroundImg: imgholder, 
    additionalImg: imgholder2, 
    videoUrl: 'https://www.youtube.com/watch?v=3-NBA3aSMqc&ab_channel=WildOakFilms-WeddingVideo%2CVideography', 
    backgroundColor: '#1687a7', 
    textColor: '#d3e0ea', 
    timeEvent1: '18.00', 
    timeEvent2: '19.00', 
    youtubeUrl: 'https://www.youtube.com/watch?v=gIB2egm7tL8&ab_channel=KOMPASTV'
  }
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
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center "
          style={{
            minHeight: "75vh",
            overflow: 'hidden'
          }}>
        <div className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: `url(${holder.backgroundImg})`
            }}>
          <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
        </div>
        <div className="container relative mx-auto flex flex-col justify-center items-center font-bold allura"
        style={{ color: holder.textColor }}>
            <p style={{ color: holder.textColor }} className="text-2xl">The wedding of</p>
            <h1 className="text-white italic font-semibold text-6xl m-5" style={{ color: holder.textColor }}>
              {holder.groomNickname} &  {holder.brigeNickname}
            </h1>
            <p style={{ color: holder.textColor }} className="text-2xl">{wedding.date}</p>
        </div>
      </div>

      <section className="relative py-20">
            {/* End of hero section */}
         <div className="body-font"
          style={{ color: holder.backgroundColor }}>
            <div className="container px-8 mx-auto mb-40 lg:px-4">
                <div className="flex flex-col w-full mx-auto mb-12 text-left lg:w-2/3 lg:text-center">
                    <h1 className="mb-6 text-2xl font-semibold tracking-tighter sm:text-5xl title-font text-center">
                       {holder.title}
                    </h1>
                    <p className="mx-auto text-base font-medium leading-relaxed lg:w-2/3">{holder.story}</p>
                </div>
        </div>
            {/* End of story section */}

            {/* Bride groom information */}
            <div className="w-full mt-5 flex flex-col flex-wrap justify-center items-center p-5 allura text-3xl"
            style={{ backgroundColor: holder.backgroundColor, color: holder.textColor, minHeight: '500px' }}>
              <div className="flex  flex-col md:flex-row  justify-center items-center">
                <div className="flex flex-col justify-center items-center m-3">
                  <img
                    alt="..."
                    className="max-w-full shadow-lg m-2"
                    src={wedding.brideImg}
                    style={{ borderRadius: '50%', width: '210px', height: '210px' }}
                  />
                  <p className="font-extrabold mt-3 "
                  >{wedding.brideName}</p>
                </div>
                <div className="flex flex-col justify-center items-center m-3 text-3xl font-extrabold italic">
                  &
                </div>
                <div className="flex flex-col justify-center items-center m-3">
                  <img
                    alt="..."
                    className="max-w-full shadow-lg m-2 "
                    src={wedding.groomImg}
                    style={{ borderRadius: '50%', width: '210px', height: '210px' }}
                  />
                  <p className="font-extrabold mt-3"
                  >{wedding.groomName}</p>
                </div>
              </div>
            </div>
            {/* End of Bride groom information */}

            {/* prawed video */}
           
            <div className="flex flex-row justify-center my-20"
            style={{minWidth: '400px', minHeight: '400px'}}>
              <ReactPlayer
                url={holder.videoUrl}
              />
            </div>
            {/* prawed video */}

            {/* Additional image  & countdown */}
            <div className="w-full my-10 flex flex-wrap justify-center" style={{ }}>
              <img
                  alt="..."
                  className=" h-full"
                  src={holder.additionalImg}
                  style={{ maxHeight: '500px', maxWidth: '90%'}}
                />
                <div className="flex flex-col justify-center items-center px-20 py-10 md:my-0  md:rounded-none rounded"
                style={{backgroundColor: holder.textColor, color: holder.backgroundColor, maxWidth: '90%'}}>
                  <p className="m-3">Akan Menikah</p>
                  <Countdown date={wedding.date}
                  daysInHours={false}
                  className="text-3xl font-extrabold"
                  >
                  </Countdown>
                  <p className="m-3">{wedding.date}</p>
                  <p className="m-3"><svg className="w-6 h-6 inline" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>{wedding.address}</p>
                  <div className="flex flex-row justify-center">
                  <div className="mt-5 mx-5 p-3 rounded-lg shadow-lg flex flex-col justify-center items-center" style={{ backgroundColor: holder.backgroundColor, color: holder.textColor,  minWidth: '150px'}}>
                    <p className="font-extrabold">Akad Nikah</p>
                    <p className="font-extrabold mt-3">{holder.timeEvent1}</p>
                  </div>
                  <div className="mt-5 mx-5 p-3 rounded-lg shadow-lg flex flex-col justify-center items-center" style={{ backgroundColor: holder.backgroundColor, color: holder.textColor,  minWidth: '150px'}}>
                  <p className="font-extrabold">Resepsi</p>
                  <p className="font-extrabold mt-3">{holder.timeEvent2}</p>
                  </div>
                </div>
                </div>
            </div>
            {/* end of additional image & countdown */}

            {/* Livestream video */}
            <div className="flex flex-row justify-center my-20"
            style={{minWidth: '400px', minHeight: '400px'}}>
              <ReactPlayer
                url={holder.youtubeUrl}
              />
            </div>
            {/* Livestream video */}

            {/* Sawer */}
            <div  className="flex flex-col justify-center items-center my-20 ">
            <p className="font-extrabold text-lg mt-3 mb-4">Send wedding gift money to bride and groom!</p>
            <img alt="..."
                className="cursor-pointer"
                src={gift}
                style={{width: '100px'}}
                />
            </div>
        </div>
      </section>
  </>
  )
}

export default Invitation
