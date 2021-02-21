import React, { useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import WeddingSummary from './WeddingSummary'

const DashboardWedding = () => {
  const { wedding } = useSelector(state => state.wedding)
  console.log(wedding, 'ini dari dashboard')

  const [ inputUser, setInputUser] = useState({
    email: '',
    password: ''
  })
  const [userWedding, setUserWedding] = useState({
    id: 0,
    WeddingId: 0,
    title: '' ,
    date: '',
    address: '',
    groomName: '',
    brideName: '',
    groomImg: '',
    brideImg: '',
    status: false,
  })
  

  useEffect(() => {
    setUserWedding({
      id: wedding.id,
      WeddingId: wedding.WeddingId,
      title: wedding.title,
      date: wedding.date.slice(0, 10),
      address: wedding.address,
      groomName: wedding.groomName,
      brideName: wedding.brideName,
      groomImg: wedding.groomImg,
      brideImg: wedding.brideImg,
      status: false,
    })
  }, [wedding])

  const [previewSourceGroom, setPreviewResultGroom] = useState('')
  const [previewSourceBride, setPreviewResultBride] = useState('')

  const onChange = (e) => {
    let { name, value } = e.target
    const newInput = { ...inputUser, [name]: value }
    setInputUser(newInput)
  }

  const onChangeGroomImg = e => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setPreviewResultGroom(reader.result)
    }
  }

  const onChangeBrideImg = e => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setPreviewResultBride(reader.result)
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const { title, date, address, groomName, brideName } = inputUser
    const brideImg = previewSourceBride
    const groomImg = previewSourceGroom
    console.log({
      title,
      date, 
      address, 
      groomName, 
      brideName,
      brideImg,
      groomImg
    })
    try {
      const add = await axios({
        method: 'post',
        url: 'http://localhost:3001/weddings',
        headers: {
          'content-type': 'application/json',
          access_token: localStorage.getItem('access_token')
        },
        data: {
          title,
          date, 
          address, 
          groomName, 
          brideName,
          brideImg,
          groomImg
        }
      })
      console.log(add)
    } catch (err) {
      console.log(err)
    }
  }

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
          <input type="text" onChange={ onChange } name='title' value={ userWedding.title } className="block w-full px-4 py-3 border-2 border-transparent rounded-lg focus:border-red-300 focus:outline-none" placeholder="Title"/>
        </div>
        <div className="block mb-4 border border-gray-200 rounded-lg">
          <input type="text" onChange={ onChange } name='address' value={ userWedding.address } className="block w-full px-4 py-3 border-2 border-transparent rounded-lg focus:border-red-300 focus:outline-none" placeholder="Address"/>
        </div>
        <div className="block mb-4 border border-gray-200 rounded-lg">
          <input type="date" onChange={ onChange } name='date' value={ userWedding.date } className="block w-full px-4 py-3 border-2 border-transparent rounded-lg focus:border-red-300 focus:outline-none" placeholder="Date"/>
        </div>
        <div className="block mb-4 border border-gray-200 rounded-lg">
          <input type="text" onChange={ onChange } name='groomName' value={ userWedding.groomName } className="block w-full px-4 py-3 border-2 border-transparent rounded-lg focus:border-red-300 focus:outline-none" placeholder="Groom Name"/>
        </div>
        <div className="block mb-4 border border-gray-200 rounded-lg">
          <input type="text" onChange={ onChange } name='brideName' value={ userWedding.brideName } className="block w-full px-4 py-3 border-2 border-transparent rounded-lg focus:border-red-300 focus:outline-none" placeholder="Bride Name"/>
        </div>
        <div className="block mb-4 border border-gray-200 rounded-lg">
            <input type='file' onChange={onChangeGroomImg} name='brideImg' accept='file/*'  />
            {
              previewSourceGroom && (
                <img 
                src={previewSourceGroom}
                alt='chosen'
                style={{height:'300px'}}
                />
              )
            }
        </div>
        <div className="block mb-4 border border-gray-200 rounded-lg">
            <input type='file' onChange={onChangeBrideImg} name='groomImg' accept='file/*' />
            {
              previewSourceBride && (
                <img 
                src={previewSourceBride}
                alt='chosen'
                style={{height:'300px'}}
                />
              )
            }
        </div>
        <div className="block">
          <button className="w-full px-3 py-2 font-medium bg-red-400 text-white hover:bg-red-300 hover:text-gray-600 rounded-lg">SUBMIT</button>
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