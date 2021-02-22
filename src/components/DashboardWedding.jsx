import React, { useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import WeddingSummary from './WeddingSummary'
import { changeWeddingState, updateWedding } from '../store/action/wedding'
import createBtnLoading from '../helpers/createBtnLoading'
import cancelBtnLoading from '../helpers/cancelBtnLoading'

const DashboardWedding = () => {
  const dispatch = useDispatch()
  const { wedding, isLoading } = useSelector(state => state.wedding)

  // const [userWedding, setUserWedding] = useState({
  //   id: 0,
  //   WeddingId: 0,
  //   title: '' ,
  //   date: '',
  //   address: '',
  //   groomName: '',
  //   brideName: '',
  //   groomImg: '',
  //   brideImg: '',
  //   status: false,
  // })
  // console.log(userWedding, 'ini dari dashboard')

  // useEffect(() => {
  //   setUserWedding({
  //     id: wedding.id,
  //     WeddingId: wedding.WeddingId,
  //     title: wedding.title,
  //     date: wedding.date.slice(0, 10),
  //     address: wedding.address,
  //     groomName: wedding.groomName,
  //     brideName: wedding.brideName,
  //     groomImg: wedding.groomImg,
  //     brideImg: wedding.brideImg,
  //     status: wedding.status,
  //   })
  // }, [wedding])

  // const [previewSourceGroom, setPreviewResultGroom] = useState('')
  // const [previewSourceBride, setPreviewResultBride] = useState('')

  const onChange = (e) => {
    let { name, value } = e.target
    // const newInput = { ...userWedding, [name]: value }
    // setUserWedding(newInput)
    dispatch(changeWeddingState(name, value))
  }

  const onChangeImg = e => {
    const file = e.target.files[0]
    const name = e.target.name
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      console.log(reader.result);
      dispatch(changeWeddingState(name, reader.result))
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    // const { id, WeddingId, title, date, address, groomName, brideName } = userWedding
    // const brideImg = previewSourceBride
    // const groomImg = previewSourceGroom
    // const userWedding = { id, WeddingId, title, date, address, groomName, brideName, brideImg, groomImg }
    // console.log(userWedding)
    createBtnLoading('weddingBtn', 'Saving..')
    await dispatch(updateWedding())
    cancelBtnLoading('weddingBtn', 'SUBMIT')
  }
  
  if(isLoading) return <h1>Loading..</h1>
  return (
    <>
    <div className="w-full h-full flex md:flex-row flex-col">
      <div className="md:w-1/2 m-3 p-4">
          <WeddingSummary />
      </div>
      {/* FORM EDIT/ADD */}
      <div className="md:w-1/2 m-3 p-4">
      <div class="w-full flex-1 p-8 order-1  text-gray-400 sm:w-96 lg:w-full lg:order-2 lg:mt-0">
        <div class="mb-8 pb-8 flex items-center border-b border-gray-600">
          <div class="ml-5 flex flex-col justify-center items-center">
            <span class="block  text-2xl text-gray-700 font-extrabold text-center">Add or edit wedding information</span>
          </div>
        </div>
        <form onSubmit={ onSubmit }>
        <div className="block mb-4 border border-gray-200 rounded-lg">
          <input type="text" onChange={ onChange } name='title' value={ wedding.title } className="block w-full px-4 py-3 border-2 border-transparent rounded-lg focus:border-red-300 focus:outline-none" placeholder="Title"/>
        </div>
        <div className="block mb-4 border border-gray-200 rounded-lg">
          <input type="text" onChange={ onChange } name='address' value={ wedding.address } className="block w-full px-4 py-3 border-2 border-transparent rounded-lg focus:border-red-300 focus:outline-none" placeholder="Address"/>
        </div>
        <div className="block mb-4 border border-gray-200 rounded-lg">
          <input type="date" onChange={ onChange } name='date' value={ wedding.date.slice(0,10) } className="block w-full px-4 py-3 border-2 border-transparent rounded-lg focus:border-red-300 focus:outline-none" placeholder="Date"/>
        </div>
        <div className="block mb-4 border border-gray-200 rounded-lg">
          <input type="text" onChange={ onChange } name='groomName' value={ wedding.groomName } className="block w-full px-4 py-3 border-2 border-transparent rounded-lg focus:border-red-300 focus:outline-none" placeholder="Groom Name"/>
        </div>
        <div className="block mb-4 border border-gray-200 rounded-lg">
          <input type="text" onChange={ onChange } name='brideName' value={ wedding.brideName } className="block w-full px-4 py-3 border-2 border-transparent rounded-lg focus:border-red-300 focus:outline-none" placeholder="Bride Name"/>
        </div>
        <div className="block mb-4 border border-gray-200 rounded-lg">
            <input type='file' onChange={onChangeImg} name='brideImg' accept='file/*'  />
            {
              wedding.brideImg && (
                <img 
                src={wedding.brideImg}
                alt='chosen'
                style={{height:'300px'}}
                />
              )
            }
        </div>
        <div className="block mb-4 border border-gray-200 rounded-lg">
            <input type='file' onChange={onChangeImg} name='groomImg' accept='file/*' />
            {
              wedding.groomImg && (
                <img 
                src={wedding.groomImg}
                alt='chosen'
                style={{height:'300px'}}
                />
              )
            }
        </div>
        <div className="block">
          <button id='weddingBtn' className="w-full px-3 py-2 font-medium bg-red-400 text-white hover:bg-red-300 hover:text-gray-600 rounded-lg">SUBMIT</button>
        </div>
            
        {/* <ImageUploader
              withIcon={true}
              buttonText='Choose images'
              onChange={onDrop}
              imgExtension={['.jpg', '.gif', '.png', '.gif']}
              maxFileSize={5242880}
          />
          <img alt="" src={pictures[pictures.length - 1]}> */}

          {/* </img> */}

          {/* <ImageUploader
              withIcon={true}
              buttonText='Choose images'
              onChange={onDropGroom}
              imgExtension={['.jpg', '.gif', '.png', '.gif']}
              maxFileSize={5242880}
          />
          <img alt="" src={picturesGroom[picturesGroom.length - 1]}></img> */}
        </form>
      </div>
    </div>
    </div>
  </>
    
  )
}

export default DashboardWedding