import { useState } from "react"
import { useHistory } from "react-router-dom"
import ImageUploader from 'react-images-upload'
import axios from 'axios'


export default () => {
  const history = useHistory()

  const [ inputUser, setInputUser] = useState({})

  const handleLogout = () => {
    localStorage.clear()
    history.push('/')
  }

  const [pictures, setPicture] = useState('') 
  const [picturesGroom, setpicturesGroom] = useState('') 

  const onDropGroom = async (pictureFiles, pictureDataURLs) => {
    try {
      if (picturesGroom.length === 0) {
        await setpicturesGroom(pictureDataURLs)
      } else {
        await setpicturesGroom('')
        await setpicturesGroom(pictureDataURLs)
      }
    } catch (err) {
      console.log(err)
    }
  }
  
  const onDrop = async (pictureFiles, pictureDataURLs) => {
    try {
      if (pictures.length === 0) {
        await setPicture(pictureDataURLs)
      } else {
        await setPicture('')
        await setPicture(pictureDataURLs)
      }
    } catch (err) {
      console.log(err)
    }
  }


  const onChange = (e) => {
    let { name, value } = e.target
    const newInput = { ...inputUser, [name]: value }
    setInputUser(newInput)
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const { title, date, address, groomName, brideName } = inputUser
    const brideImg = 'ini gambar bride'
    const groomImg = 'ini gambar groom'
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
      const { data } = await axios({
        method: 'post',
        url: 'http://localhost:3001/weddings',
        headers: {
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
      console.log(data)
    } catch (err) {
      console.log(err.response.data)
    }
  }
  
  return (
    <>
      <nav class="w-full flex items-center h-12 bg-gray-900 shadow-2xl text-gray-50">
        <div class="ml-6 space-x-2 md:flex">
          <p class="h-10 flex items-center rounded font-medium font-bold" href="#">{localStorage.name}</p>
        </div>
        <button class="flex items-center h-10 pl-2 pr-2 sm:pr-4 rounded bg-gray-800 ml-auto hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
          <span class="font-medium ml-1 leading-none sm:block" onClick={handleLogout}>Logout</span>
        </button>
	    </nav>
      <div className="md:w-1/2 m-3 p-4">
      <div class="w-full flex-1 p-8 order-1  text-gray-400 sm:w-96 lg:w-full lg:order-2 lg:mt-0">
        <div class="mb-8 pb-8 flex items-center border-b border-gray-600">
          <div class="ml-5 flex flex-col justify-center items-center">
            <span class="block  text-2xl text-gray-700 font-extrabold text-center">Add or edit wedding information</span>
          </div>
        </div>
        <form onSubmit={ onSubmit }>
        <div className="block mb-4 border border-gray-200 rounded-lg">
          <input type="text" onChange={ onChange } name='title' value={ inputUser.title } className="block w-full px-4 py-3 border-2 border-transparent rounded-lg focus:border-red-300 focus:outline-none" placeholder="Title"/>
        </div>
        <div className="block mb-4 border border-gray-200 rounded-lg">
          <input type="text" onChange={ onChange } name='address' value={ inputUser.address } className="block w-full px-4 py-3 border-2 border-transparent rounded-lg focus:border-red-300 focus:outline-none" placeholder="Address"/>
        </div>
        <div className="block mb-4 border border-gray-200 rounded-lg">
          <input type="date" onChange={ onChange } name='date' value={ inputUser.date } className="block w-full px-4 py-3 border-2 border-transparent rounded-lg focus:border-red-300 focus:outline-none" placeholder="Date"/>
        </div>
        <div className="block mb-4 border border-gray-200 rounded-lg">
          <input type="text" onChange={ onChange } name='groomName' value={ inputUser.groomName } className="block w-full px-4 py-3 border-2 border-transparent rounded-lg focus:border-red-300 focus:outline-none" placeholder="Groom Name"/>
        </div>
        <div className="block mb-4 border border-gray-200 rounded-lg">
          <input type="text" onChange={ onChange } name='brideName' value={ inputUser.brideName } className="block w-full px-4 py-3 border-2 border-transparent rounded-lg focus:border-red-300 focus:outline-none" placeholder="Bride Name"/>
        </div>
        <div className="block">
          <button className="w-full px-3 py-2 font-medium bg-red-400 text-white hover:bg-red-300 hover:text-gray-600 rounded-lg">SUBMIT</button>
        </div>
        <ImageUploader
              withIcon={true}
              buttonText='Choose images'
              onChange={onDrop}
              imgExtension={['.jpg', '.gif', '.png', '.gif']}
              maxFileSize={5242880}
          />
          <img alt="" src={pictures[pictures.length - 1]}>

          </img>

          <ImageUploader
              withIcon={true}
              buttonText='Choose images'
              onChange={onDropGroom}
              imgExtension={['.jpg', '.gif', '.png', '.gif']}
              maxFileSize={5242880}
          />
          <img alt="" src={picturesGroom[picturesGroom.length - 1]}></img>
        </form>
      </div>
    </div>
    </>
  )
}