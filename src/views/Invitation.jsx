import React, {useState, useEffect} from 'react'
import Countdown, { zeroPad, calcTimeDelta, formatTimeDelta } from 'react-countdown';
import ReactPlayer from "react-player"
import { useSelector, useDispatch } from 'react-redux';
import imgholder from '../assets/couple1.jpg'
import imgholder2 from '../assets/couple2.jpg'
import gift from '../assets/wedding-gift.png'
import moment from 'moment'
import CommentBox from '../components/CommentBox'
import CommentForm from '../components/CommentForm'
import { fetchComments } from '../store/action/comment'

const Invitation = () => {
  const { invitation:holder } = useSelector(state => state.invitation)
  const { wedding } = useSelector(state => state.wedding)
  const { comments, isLoading } = useSelector(state => state.comment)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchComments(wedding.id))
  }, [dispatch])

  function formatDate(date) {
    console.log(date, 'ini date')
    var monthNames = [
      "Januari", "Februari", "Maret",
      "April", "Mei", "Juni", "Juli",
      "Agustus", "September", "Oktober",
      "November", "Desember"
    ];
  
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
  
    return day + ',' + ' ' + monthNames[monthIndex] + ' ' + year;
  }

  formatDate(wedding.date)
  
  return (
    <>
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center font-sans"
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
            <p style={{ color: holder.textColor }} className="text-2xl">{moment(wedding.date).format("YYYY-MM-DD")}</p>
            <p>{wedding.date}</p>
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
            { holder.videoUrl ? <div className="flex flex-row justify-center my-20"
            style={{minWidth: '400px', minHeight: '400px'}}>
              <ReactPlayer
                url={holder.videoUrl}
              />
            </div> : '' }
            {/* prawed video */}

            {/* Additional image  & countdown */}
            <div className="w-full my-10 flex flex-wrap justify-center" style={{ }}>
              <img
                  alt="..."
                  className=" h-full m:w-1/2 w-screen"
                  src={holder.additionalImg}
                  style={{}}
                />
                <div className="flex flex-col m:w-1/2 w-full justify-center items-center md:my-0 py-10 md:rounded-none rounded"
                style={{backgroundColor: holder.textColor, color: holder.backgroundColor }}>
                  <p className="m-3">Akan Menikah</p>
                  <Countdown 
                    date={wedding.date}
                    daysInHours={false}
                    className="text-3xl font-extrabold"
                  >
                  </Countdown>
                  <p className="m-3">{moment(wedding.date).format("YYYY-MM-DD")}</p>
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
            { holder.youtubeUrl ? 
            <div className="flex flex-row justify-center my-20"
            style={{minWidth: '400px', minHeight: '400px'}}>
              <ReactPlayer
                url={holder.youtubeUrl}
              />
            </div> : '' }
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

            {/* Comment */}
            <div  className="flex flex-col justify-center items-center my-40 ">
            {/* <div class="max-w-2xl bg-white py-10 px-5 m-auto w-full"> */}
            <CommentForm WeddingId={wedding.id} />
            { isLoading && (<p>Loading...</p>) }
            {
              comments?.map((comment, idx) => {
                return (
                  <CommentBox comment={comment} />
                )
              })
            }
            </div>
            {/* </div> */}
        </div>
      </section>
  </>
  )

}

export default Invitation
