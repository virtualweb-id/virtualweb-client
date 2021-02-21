import { useState } from "react"
import { useHistory } from "react-router-dom"
import { useDispatch } from 'react-redux'
import image from '../assets/card1.jpg'
import { creatWedding } from '../store/action/wedding'

export default () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const handleLogout = () => {
    localStorage.clear()
    history.push('/')
  }

  const redirectHome = () => {
    history.push('/')
  }

  const [userWedding, setUserWedding] = useState({
    title: '' ,
    date: '',
    address: '',
    groomName: '',
    brideName: '',
    groomImg: '',
    brideImg: '',
    status: false,
  })
  console.log(userWedding)

  const [previewSourceGroom, setPreviewResultGroom] = useState('')
  const [previewSourceBride, setPreviewResultBride] = useState('')

  const onChange = (e) => {
    let { name, value } = e.target
    const newInput = { ...userWedding, [name]: value }
    setUserWedding(newInput)
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

  const onSubmit = e => {
    e.preventDefault()
    const weddingInput = { 
      title: userWedding.title, 
      date: userWedding.date, 
      address: userWedding.address, 
      groomName: userWedding.groomName, 
      brideName: userWedding.brideName, 
      brideImg: previewSourceBride, 
      groomImg: previewSourceGroom }
    dispatch(creatWedding(weddingInput))
    history.push('/dashboard')
  }
  
  return (
    <>
      <nav className="w-full flex items-center h-12 bg-gray-900 shadow-2xl text-gray-50">
        <div className="ml-6 space-x-2 md:flex">
          <svg className="w-6 h-6 m-2" fill="currentColor" viewBox="0 0 20 20" onClick={redirectHome} xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
          <p className="h-10 flex items-center rounded font-medium font-bold" href="#">{localStorage.name}</p>
        </div>
        <button className="flex items-center h-10 pl-2 pr-2 sm:pr-4 rounded bg-gray-800 ml-auto hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
          <span className="font-medium ml-1 leading-none sm:block" onClick={handleLogout}>Logout</span>
        </button>
	    </nav>

      <div className="font-sans">
		
      <div className="container mx-auto">
        <div className="flex justify-center px-6 my-12">
          
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            
            <div
              className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
              style={{backgroundImage: `url(${image})`}}
            ></div>
            
            <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h3 className="pt-4 text-2xl text-center">Write your wedding information!</h3>
              <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded"  onSubmit={ onSubmit }>
              <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700" >
                    Name of the Event
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    type="text" onChange={ onChange } name='title' 
                    value={ userWedding.title } placeholder="ex: Pernikahan"
                  />
                </div>

                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700" >
                    Event Location
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    type="text" onChange={ onChange } name='address' value={ userWedding.address } placeholder="ex: Puri Setiabudhi - Jl. Dr. Setiabudi No.378, Kota Bandung, Jawa Barat"
                  />
                </div>

                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700" >
                    Event Date
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    type="date" onChange={ onChange } name='date' value={ userWedding.date } 
                  />
                </div>

                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label className="block mb-2 text-sm font-bold text-gray-700">
                      Groom Name
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      type="text" onChange={ onChange } name='groomName' value={ userWedding.groomName } placeholder="Semmi Verian Putra"
                    />
                  </div>
                  <div className="md:ml-2">
                    <label className="block mb-2 text-sm font-bold text-gray-700" for="lastName">
                      Bride Name
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      type="text" onChange={ onChange } name='brideName' value={ userWedding.brideName } placeholder="Sophia Latjuba"
                    />
                  </div>
                </div>

                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label className="block mb-2 text-sm font-bold text-gray-700" for="lastName">
                      Groom's Picture
                    </label>
                    <div className="mb-4 md:mr-2 md:mb-0 flex justify-center flex-col items-center">
                      <input type='file' onChange={onChangeGroomImg} name='groomImg' accept='file/*' 
                      className="w-full px-3 py-2 text-sm leading-tight flex justify-center flex-col items-center text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"/>
                      {
                        previewSourceGroom && (
                          <img 
                          src={previewSourceGroom}
                          alt='chosen'
                          className="rounded-lg mt-2"
                          style={{height:'120px', width: '120px'}}
                          />
                        )
                      }
                    </div>
                  </div>
                  <div className="md:ml-2">
                    <label className="block mb-2 text-sm font-bold text-gray-700" for="lastName">
                      Bride's Picture
                    </label>
                    <div className="mb-4 md:mr-2 md:mb-0 flex justify-center flex-col items-center">
                      <input type='file' onChange={onChangeBrideImg} name='brideImg' accept='file/*' 
                      className="w-full px-3 py-2 text-sm leading-tight flex justify-center flex-col items-center text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"/>
                      {
                        previewSourceBride && (
                          <img 
                          src={previewSourceBride}
                          alt='chosen'
                          className="rounded-lg mt-2"
                          style={{height:'120px', width: '120px'}}
                          />
                        )
                      }
                    </div>
                  </div>
                </div>

                <div class="mb-6 mt-3 text-center">
                      <button
                        class="w-full px-4 py-2 font-bold text-white bg-red-400 rounded-full hover:bg-red-300 focus:outline-none focus:shadow-outline"
                        type="submit"
                      >
                        Submit
                      </button>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

/*

*/