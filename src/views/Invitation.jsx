import React, { useEffect, useRef } from 'react'
import ReactPlayer from "react-player"
import { useSelector, useDispatch } from 'react-redux';
import gift from '../assets/gift-box.png'
import moment from 'moment'
import CommentBox from '../components/CommentBox'
import CommentForm from '../components/CommentForm'
import { fetchComments } from '../store/action/comment'
import bunga from '../assets/bunga1.jpg'
import bird from '../assets/peace.png'
import { FlipCountdown, SlideCountdown } from 'react-fancy-countdown'

const Invitation = () => {
  const { invitation:holder } = useSelector(state => state.invitation)
  const { wedding } = useSelector(state => state.wedding)
  const { comments, isLoading } = useSelector(state => state.comment)
  const dispatch = useDispatch()
  const _ = useRef(wedding.date && wedding.date)

  useEffect(() => {
    dispatch(fetchComments(wedding.id))
  }, [dispatch])

  if (isLoading) {
    return <h1>Loading...</h1>
} else {
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
          <span id="blackOverlay" className="w-full h-full absolute opacity-70 bg-black"></span>
        </div>
        <div className="container relative mx-auto flex flex-col justify-center items-center">
            <p className="text-white font-light text-4xl tallfont">THE WEDDING OF</p>
            <h1 className="text-white italic font-semibold elegant text-6xl m-5">
              {holder.groomNickname} &  {holder.brigeNickname}
            </h1>
            <p className="text-white text-3xl tallfont">{moment(wedding.date).format("MMM Do YY")}</p>
        </div>
      </div>

      <section className="relative py-20"
      style={{ backgroundImage: `url(${bunga})`, height: '100%' }}>
            {/* End of hero section */}
         <div className="body-font text-gray-600">
            <div className="container px-8 mx-auto lg:px-4 flex justify-center items-center">
            <div className="flex elegant flex-col justify-center items-center">
              <p className="text-4xl text-gray-600 tallfont font-bold">We are getting married!</p>
              <div className="md:flex-row flex-col flex">
                <div className="flex flex-col justify-center items-center m-3" style={{width: '30%'}}>
                  <img
                    alt="..."
                    className="max-w-full m-2"
                    src={wedding.brideImg}
                    style={{ borderRadius: '50%', width: '200px', height: '200px' }}
                  />
                  <p className="text-center font-extrabold mt-3 text-2xl"
                  >{wedding.brideName}</p>
                </div>
                <div className="flex flex-col justify-center items-center m-3" style={{width: '30%'}}>
                  <img src={bird} style={{width: '80px'}} />
                </div>
                <div className="flex flex-col justify-center items-center m-3" style={{width: '30%'}}>
                  <img
                    alt="..."
                    className="max-w-full m-2 "
                    src={wedding.groomImg}
                    style={{ borderRadius: '50%', width: '200px', height: '200px' }}
                  />
                  <p className="text-center font-extrabold mt-3 text-2xl"
                  >{wedding.groomName}</p>
                </div>
              </div>
              </div>
        </div>
            {/* End of story section */}

            {/* Bride groom information */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path fill={holder.backgroundColor} fillOpacity="1" d="M0,32L48,48C96,64,192,96,288,133.3C384,171,480,213,576,224C672,235,768,213,864,186.7C960,160,1056,128,1152,101.3C1248,75,1344,53,1392,42.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
            <div className="w-full flex flex-col flex-wrap justify-center items-center p-5 handwriting text-2xl"
            style={{ backgroundColor: holder.backgroundColor, color: holder.textColor, minHeight: '300px' }}>
             <div className="flex flex-col w-full mx-auto mb-12 text-left lg:w-2/3 lg:text-center">
                    <h1 className="mb-6 text-2xl font-semibold tracking-tighter sm:text-5xl allure title-font text-center">
                       {holder.title}
                    </h1>
                    <p className="text-center text-3xl font-medium leading-relaxed md:w-full">{holder.story}</p>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill={holder.backgroundColor} fillOpacity="1" d="M0,96L60,90.7C120,85,240,75,360,80C480,85,600,107,720,122.7C840,139,960,149,1080,154.7C1200,160,1320,160,1380,160L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
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
            
            <div className="w-full my-20 flex text-2xl flex-wrap justify-center" style={{ }}>
              <img
                  alt="..."
                  className=" h-full w-screen"
                  src={holder.additionalImg}
                  style={{}}
                />
                <div className="flex flex-col  w-full justify-center items-center tallfont font-bold md:my-0 py-10 md:rounded-none rounded"
                style={{backgroundColor: holder.textColor, color: holder.backgroundColor }}>
                  <p className="m-3 font-bold text-4xl elegant">Save The Date!</p>
                  <SlideCountdown
                    weeks={false}
                    deadline={wedding.date} />
                  <p className="m-3">{moment(wedding.date).format("MMM Do YY")}</p>
                  <p className="m-3"><svg className="w-6 h-6 inline" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>{wedding.address}</p>
                  <div className="mx-5 p-3 rounded-lg shadow-lg flex justify-center items-center" style={{ backgroundColor: holder.backgroundColor, color: holder.textColor,  minWidth: '150px'}}>
                    <p className="font-extrabold tallfont text-3xl m-3">{holder.timeEvent1}</p>
                    <div className="elegant m-3">
                      s.d
                    </div>
                    <p className="font-extrabold tallfont text-3xl m-3">{holder.timeEvent2}</p>
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
            <div  className="flex flex-col justify-center items-center my-20 py-5 " style={{ backgroundImage: `url(${bunga})`, height: '100%' }}>
            <p className="font-extrabold text-lg mt-3 mb-4 tallfont text-4xl">Send wedding gift money to bride and groom!</p>
            <img alt="..."
                className="cursor-pointer"
                src={gift}
                style={{width: '100px'}}
                />
            </div>

            {/* Comment */}
            <div  className="flex py-10 flex-col justify-center items-center curly" >
            {/* <div className="max-w-2xl bg-white py-10 px-5 m-auto w-full"> */}
            <CommentForm WeddingId={wedding.id} className="text-gray-400 font-bold poppins"/>
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
}

export default Invitation
