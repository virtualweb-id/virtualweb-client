import React, { useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import WeddingSummary from './WeddingSummary'
import { changeWeddingState, updateWedding } from '../store/action/wedding'
import createBtnLoading from '../helpers/createBtnLoading'
import cancelBtnLoading from '../helpers/cancelBtnLoading'

const DashboardWedding = () => {
  const dispatch = useDispatch()
  const { wedding, isLoading } = useSelector(state => state.wedding)

  const onChange = (e) => {
    let { name, value } = e.target
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
    createBtnLoading('weddingBtn', 'Saving..')
    await dispatch(updateWedding())
    cancelBtnLoading('weddingBtn', 'SUBMIT')
  }
  
  if(isLoading) return <h1>Loading..</h1>
  return (
    <>
    <div className="w-full h-full flex md:flex-row flex-col ">
      <div className="md:w-1/2 m-3 p-4">
          <WeddingSummary />
      </div>
        {/* FORM EDIT/ADD */}
      <div className="md:w-1/2 m-3 p-4 ">
        {/*  */}
        <div className="leading-loose">
          <form className="max-w-xl m-4 p-10 bg-white rounded shadow-xl" onSubmit={ onSubmit }>
            <p className="text-gray-800 font-bold">Edit Wedding Information</p>
            <div className="mt-2">
              <label className="block text-sm text-gray-600">Name of the Event</label>
              <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
               type="text" onChange={ onChange } name='title' value={ wedding.title } placeholder="Pernikahan" />
            </div>
            <div className="mt-2">
              <label className="block text-sm text-gray-600">Event Location</label>
              <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
               type="text" onChange={ onChange } name='address' value={ wedding.address } placeholder="Gedung Perhutani, Pasar Minggu" />
            </div>
            <div className="mt-2">
              <label className="block text-sm text-gray-600" >Event Date</label>
              <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
               type="date" onChange={ onChange } name='date' value={ wedding.date.slice(0,10) } />
            </div>
            <div className="inline-block mt-2 w-1/2 pr-1">
              <label className="block text-sm text-gray-600">Groom's Full Name</label>
              <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
               type="text" onChange={ onChange } name='groomName' value={ wedding.groomName } placeholder="Semmi Verian Putra" />
            </div>
            <div className="inline-block mt-2 w-1/2 pr-1">
              <label className="block text-sm text-gray-600">Bride's Full Name</label>
              <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
               type="text" onChange={ onChange } name='brideName' value={ wedding.brideName } placeholder="Sophia Latjuba" />
            </div>
            <div className="inline-block mt-2 w-1/2 pr-1" >
              <label className="block text-sm text-gray-600">Groom's Picture</label>
              <input type='file' onChange={onChangeImg} name='groomImg' accept='file/*' 
              className="text-gray-600 text-sm py-1 tracking-wider rounded "/>
                {
                  wedding.groomImg && (
                    <img 
                    src={wedding.groomImg}
                    alt='chosen'
                    style={{height: '100px'}}
                    />
                  )
                }
            </div>
            <div className="inline-block mt-2 w-1/2 pr-1">
              <label className="block text-sm text-gray-600">Bride's Picture</label>
              <input type='file' onChange={onChangeImg} name='brideImg' accept='file/*' 
              className="text-gray-600 text-sm py-1 tracking-wider rounded "/>
                {
                  wedding.brideImg && (
                    <img 
                    src={wedding.brideImg}
                    alt='chosen'
                    style={{height: '100px'}}
                    />
                  )
                }
            </div>
            <div className="mt-4">
              <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded hover:bg-gray-800" type="submit">Submit Changes</button>
            </div>
          </form>
        </div>{/* leading loose */} 
      </div> {/* div nesting form */}
      {/* div terluar */}
    </div>
  </>
    
  )
}

export default DashboardWedding