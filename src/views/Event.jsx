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
import { useParams } from 'react-router-dom';
import { getDataById } from '../store/action/invitation';

const Event = ({ hours, minutes, seconds }) => {
  const { invitation:holder, isLoading } = useSelector(state => state.invitation)
  const { comments } = useSelector(state => state.comment)
  const dispatch = useDispatch()
  const {id} = useParams()

  useEffect(() => {
    dispatch(getDataById(id))
    dispatch(fetchComments(id))
  }, [dispatch])

  if (isLoading) {
      return <h1>Loading...</h1>
  } else {
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
                <p style={{ color: holder.textColor }} className="text-2xl">{moment(holder.Wedding?.date).format("YYYY-MM-DD")}</p>
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
                        src={holder.Wedding?.brideImg}
                        style={{ borderRadius: '50%', width: '210px', height: '210px' }}
                      />
                      <p className="font-extrabold mt-3 "
                      >{holder.Wedding?.brideName}</p>
                    </div>
                    <div className="flex flex-col justify-center items-center m-3 text-3xl font-extrabold italic">
                      &
                    </div>
                    <div className="flex flex-col justify-center items-center m-3">
                      <img
                        alt="..."
                        className="max-w-full shadow-lg m-2 "
                        src={holder.Wedding?.groomImg}
                        style={{ borderRadius: '50%', width: '210px', height: '210px' }}
                      />
                      <p className="font-extrabold mt-3"
                      >{holder.Wedding?.groomName}</p>
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
                      <Countdown 
                        date={holder.Wedding?.date}
                        daysInHours={false}
                        className="text-3xl font-extrabold"
                      >
                      </Countdown>
                      <p className="m-3">{moment(holder.Wedding?.date).format("YYYY-MM-DD")}</p>
                      <p className="m-3"><svg className="w-6 h-6 inline" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>{holder.Wedding?.address}</p>
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
    
                {/* Comment */}
                <div  className="flex flex-col justify-center items-center my-40 ">
                {/* <div class="max-w-2xl bg-white py-10 px-5 m-auto w-full"> */}
                <CommentForm InvitationId={id} />
                {/* { isLoading && (<p>Loading...</p>) } */}
                {
                  comments?.sort((a,b) => (a.createdAt < b.createdAt) ? 1 : ((b.createdAt < a.createdAt) ? -1 : 0))
                  .map((comment, idx) => {
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
}

export default Event
