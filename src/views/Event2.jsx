import React from 'react'
import Countdown, { zeroPad, calcTimeDelta, formatTimeDelta } from 'react-countdown';
import ReactPlayer from "react-player"
import { useSelector, useDispatch } from 'react-redux';
import gift from '../assets/gift-box.png'
import moment from 'moment'
import CommentBox from '../components/CommentBox'
import CommentForm from '../components/CommentForm'
import ModalPayment from '../components/ModalPayment'

const Invitation2 = ({ hours, minutes, seconds }) => {
  const { invitation:holder, isLoading } = useSelector(state => state.invitation)
  const { comments } = useSelector(state => state.comment)

  return (
    <>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill={holder.backgroundColor} fill-opacity="1" d="M0,64L60,101.3C120,139,240,213,360,229.3C480,245,600,203,720,192C840,181,960,203,1080,224C1200,245,1320,267,1380,277.3L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
    </svg>
    <div className="relative mx-auto flex flex-col justify-center items-center allura"
        style={{ backgroundColor: holder.backgroundColor }}>
            <p style={{ color: holder.textColor }} className="text-8xl">The wedding of</p>
    </div>
    <div className="flex flex-col md:flex-row  justify-center items-center" style={{ backgroundColor: holder.backgroundColor }}>
                <div className="flex flex-col justify-center items-center m-3">
                  <img
                    alt="..."
                    className="max-w-full shadow-lg m-2"
                    src={holder.Wedding?.brideImg}
                    style={{ borderRadius: '50%', width: '130px', height: '130px' }}
                  />
                  <h1 className=" allura font-semibold text-6xl m-5" style={{ color: holder.textColor }}
                  >{holder.brigeNickname}</h1>
                  <p className="quicksand text-2xl font-extrabold mt-3 " style={{ color: holder.textColor }}
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
                    style={{ borderRadius: '50%', width: '130px', height: '130px' }}
                  />
                  <h1 className=" allura font-semibold text-6xl m-5" style={{ color: holder.textColor }}
                  >{holder.groomNickname}</h1>
                  <p className="quicksand text-2xl font-extrabold mt-3" style={{ color: holder.textColor }}
                  >{holder.Wedding?.groomName}</p>
                </div>
              </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill={holder.backgroundColor} fill-opacity="1" d="M0,64L60,101.3C120,139,240,213,360,229.3C480,245,600,203,720,192C840,181,960,203,1080,224C1200,245,1320,267,1380,277.3L1440,288L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
    </svg>
      <section className="relative">
            {/* End of hero section */}
         <div className="body-font"
          style={{ color: holder.backgroundColor }}>
            <div className="container px-8 mx-auto mb-40 lg:px-4 quicksand">
                <div className="flex flex-col w-full mx-auto mb-12 text-left lg:w-2/3 lg:text-center">
                    <h1 className="mb-6 text-4xl font-semibold tracking-tighter sm:text-5xl title-font text-center quicksand" style={{ color: holder.backgroundColor }}>
                       {holder.title}
                    </h1>
                    <p className="mx-auto text-2xl text-base font-semibold leading-relaxed lg:w-2/3" style={{ color: holder.backgroundColor }}
                    >{holder.story}</p>
                </div>
        </div>
            {/* End of story section */}

            {/* prawed video */}
           {
               holder.videoUrl && (
                <div className="flex flex-row justify-center my-20"
                style={{minWidth: '400px', minHeight: '400px'}}>
                <ReactPlayer
                    url={holder.videoUrl}
                />
                </div>
               )
           }
            {/* prawed video */}

            {/* Additional image  & countdown */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill={holder.backgroundColor} fill-opacity="1" d="M0,224L48,197.3C96,171,192,117,288,122.7C384,128,480,192,576,186.7C672,181,768,107,864,80C960,53,1056,75,1152,85.3C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            <div className="w-full flex flex-row justify-center" style={{backgroundColor: holder.backgroundColor}}>
              <img
                  alt="..."
                  className=" h-full"
                  src={holder.additionalImg}
                  style={{ maxHeight: '500px', maxWidth: '90%'}}
                />
                <div className="flex flex-col justify-center items-center px-20 py-10 md:my-0  md:rounded-none rounded"
                style={{backgroundColor: holder.backgroundColor, color: holder.textColor, maxWidth: '90%'}}>
                  <p className="m-3 text-4xl ">Akan Menikah</p>
                  <Countdown 
                    date={holder.Wedding?.date}
                    daysInHours={false}
                    className="text-3xl font-extrabold "
                  >
                  </Countdown>
                  <p className="m-3">{moment(holder.Wedding?.date).format("YYYY-MM-DD")}</p>
                  <p className="m-3 "><svg className="w-6 h-6 inline" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>{holder.Wedding?.address}</p>
                  <div className="flex flex-row justify-center">
                  <div className="mt-5 mx-5 p-3 rounded-lg shadow-lg flex flex-col justify-center items-center" style={{ backgroundColor: holder.textColor, color: holder.backgroundColor,  minWidth: '150px'}}>
                    <p className="font-extrabold">Akad Nikah</p>
                    <p className="font-extrabold mt-3">{holder.timeEvent1}</p>
                  </div>
                  <div className="mt-5 mx-5 p-3 rounded-lg shadow-lg flex flex-col justify-center items-center" style={{ backgroundColor: holder.textColor, color: holder.backgroundColor,  minWidth: '150px'}}>
                  <p className="font-extrabold">Resepsi</p>
                  <p className="font-extrabold mt-3">{holder.timeEvent2}</p>
                  </div>
                </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill={holder.backgroundColor} fill-opacity="1" d="M0,224L48,197.3C96,171,192,117,288,122.7C384,128,480,192,576,186.7C672,181,768,107,864,80C960,53,1056,75,1152,85.3C1248,96,1344,96,1392,96L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            {/* end of additional image & countdown */}

            {/* Livestream video */}
            {
                holder.youtubeUrl && (
                    <>
                    <h1 className="mb-6 text-2xl font-semibold tracking-tighter sm:text-5xl title-font text-center" style={{ color: holder.backgroundColor }}>
                       Live Streaming
                    </h1>
                    <div className="flex flex-row justify-center my-20"
                    style={{minWidth: '400px', minHeight: '400px'}}>
                    <ReactPlayer
                        url={holder.youtubeUrl}
                    />
                    </div>
                    </>
                )
            }
            {/* Livestream video */}

            {/* Sawer */}
            <div className="flex flex-col justify-center items-center bg-blue-100 ">
            {/* <img
                  alt="..."
                  className=" h-full"
                  src={holder.backgroundImg}
                  style={{height: '50vh', color: 'white' }}
                /> */}
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill={holder.backgroundColor} fill-opacity="1" d="M0,32L48,48C96,64,192,96,288,122.7C384,149,480,171,576,186.7C672,203,768,213,864,192C960,171,1056,117,1152,96C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            <div className="flex flex-col justify-center items-center" style={{backgroundColor: holder.backgroundColor, color: holder.textColor}}>
            <p className="text-4xl mt-3 mb-4">Send wedding gift money to bride and groom!</p>
            <img alt="..."
                className="cursor-pointer"
                src={gift}
                style={{width: '100px'}}
                /><br/>
                <ModalPayment />
            </div>

            {/* Comment */}
            <div className="flex flex-col justify-center items-center py-40" style={{backgroundColor: holder.backgroundColor, color: holder.textColor}}>
            {/* <div class="max-w-2xl bg-white py-10 px-5 m-auto w-full"> */}
            <CommentForm WeddingId={holder.Wedding?.id} />
            { isLoading && (<p>Loading...</p>) }
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

export default Invitation2
