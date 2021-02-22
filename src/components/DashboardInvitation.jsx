import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { changeState, editInvitation } from '../store/action/invitation'
import { changeWeddingState } from '../store/action/wedding'
import { Invitation, Invitation2 } from '../views'

const DashboardInvitation = () => {
  const { wedding } = useSelector(state => state.wedding)
  const { invitation } = useSelector(state => state.invitation)
  const [previewSourceGroom, setPreviewResultGroom] = useState('')
  const dispatch = useDispatch()

  const onChange = (e) => {
    const { name, value } = e.target
    dispatch(changeState(name, value))
  }

  const onWeddingChange = e => {
    const { name, value } = e.target
    dispatch(changeWeddingState(name, value))
  }

  const handleSave = (e) => {
    e.preventDefault()
    dispatch(editInvitation())
  }

  const onChangeBackgoundImg = e => {
    const file = e.target.files[0]
    const name = e.target.name
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      console.log(reader.result);
      dispatch(changeState(name, reader.result))
    }
  }

  return (
    <>
      <div className="w-full h-full flex md:flex-row flex-col">
        <div className="md:w-1/2 w-full h-full m-3 px-2 p-5 ">
          {/* Couple Name */}
          <form className="container-small overflow-y-scroll bg-gray-200 rounded-lg shadow p-5 overflow-x-hidden h-full">
            <p className="font-small text-sm">Couple Name</p>
            <div className="mb-4 border-t border-gray-900 py-2">
              <input 
                type="text"
                name="brigeNickname"
                value={invitation.brigeNickname}
                onChange={onChange}
                className="text-sm w-1/3 px-1 py-1 mx-1 border-2 border-transparent rounded-lg focus:border-gray-400 focus:outline-none" placeholder="Bride Name"/>

              <input 
                type="text"
                name="groomNickname"
                value={invitation.groomNickname}
                onChange={onChange}
                className="text-sm w-1/3 px-1 py-1 mx-1 border-2 border-transparent rounded-lg focus:border-gray-400 focus:outline-none" placeholder="Groom Name"/>                        
            </div>

            {/* Story */}
            <p className="font-small text-sm">Your Story</p>
            <div className="mb-4 border-t border-gray-900 py-2">
              <input 
                type="text"
                name="title"
                value={invitation.title}
                onChange={onChange}
                className="text-sm w-1/2 px-1 py-1 mx-1 border-2 border-transparent rounded-lg focus:border-gray-400 focus:outline-none" placeholder="Story Title"/>

              <textarea 
                rows='3'
                name="story"
                value={invitation.story}
                onChange={onChange}
                className="text-sm block w-full my-2  px-2 px-1 py-1 mx-1 border-2 border-transparent rounded-lg focus:border-gray-400 focus:outline-none" placeholder="Your Story"/>                        
            </div>
            
            {/* Image Set */}
            <p className="font-small text-sm">Image Set</p>
            <div className=" mb-4 border-t border-gray-900 py-2">
              {/* <input 
                type="text"
                name="backgroundImg"
                value={invitation.backgroundImg}
                onChange={onChange}
                className="text-sm w-full px-1 py-1 my-1 border-2 border-transparent rounded-lg focus:border-gray-400 focus:outline-none" placeholder="Set Background Color"/> */}
              <div className="block mb-4 border border-gray-200 rounded-lg">
                <input 
                  className="text-sm"
                  type='file' onChange={onChangeBackgoundImg} name='backgroundImg' accept='file/*' />
              </div>
              <div className="block mb-4 border border-gray-200 rounded-lg">
                <input 
                  className="text-sm"
                  type='file' onChange={onChangeBackgoundImg} name='additionalImg' accept='file/*' />
              </div>
              {/* <input 
                type="text"
                name="additionalImg"
                value={invitation.additionalImg}
                onChange={onChange}
                className="text-sm w-full px-1 py-1 my-1 border-2 border-transparent rounded-lg focus:border-gray-400 focus:outline-none" placeholder="Additional Image"/>                         */}
            </div>

            {/* Video URL */}
            <p className="font-small text-sm">Videos url</p>
            <div className="mb-4 border-t border-gray-900 py-2">
              <input 
                type="text"
                name="videoUrl"
                value={invitation.videoUrl}
                onChange={onChange}
                className="text-sm w-full px-1 py-1 mx-1 border-2 border-transparent rounded-lg focus:border-gray-400 focus:outline-none" placeholder="Ex: Your prewed video URL"/>

              <input 
                type="text"
                name="youtubeUrl"
                value={invitation.youtubeUrl}
                onChange={onChange}
                className="text-sm w-full my-2  px-1 py-1 mx-1 border-2 border-transparent rounded-lg focus:border-gray-400 focus:outline-none" placeholder="Your Wedding live URL"/>                        
            </div>

            {/* Set Backgound & font */}
            <p className="font-small text-sm">Page Setting</p>
            <div className=" mb-4 border-t border-gray-900 py-2">
              <div className="flex items-center gap-2 my-1">
                <label for="backgroundColor" className="text-sm">Background Color:</label>
                <input type="color" name="backgroundColor" value={invitation.backgroundColor} onChange={onChange}
                  className="w-6 h-6" />
              </div>
              <input 
                type="text"
                name="backgroundColor"
                value={invitation.backgroundColor}
                onChange={onChange}
                className="text-sm w-44 px-1 py-1 mx-1 border-2 border-transparent rounded-lg focus:border-gray-400 focus:outline-none" placeholder="Background Color"/>

              <div className="flex items-center gap-2 my-1">
                <label for="textColor" className="text-sm">Text Color:</label>
                <input type="color" name="textColor" value={invitation.textColor} onChange={onChange}
                  className="w-6 h-6" />
              </div>
              <input 
                type="text"
                name="textColor"
                value={invitation.textColor}
                onChange={onChange}
                className="text-sm w-44 px-1 py-1 mx-1 border-2 border-transparent rounded-lg focus:border-gray-400 focus:outline-none" placeholder="Font Color"/>                        
            </div>

            {/* Time Event  */}
            <p className="font-small text-sm">Time Event Settings</p>
            <div className="text-sm mb-4 border-t border-gray-900 py-2">
              <input 
                type="text"
                name="timeEvent1"
                value={invitation.timeEvent1}
                onChange={onChange}
                className="text-sm w-44 px-1 py-1 mx-1 border-2 border-transparent rounded-lg focus:border-gray-400 focus:outline-none" placeholder="Akad Time"/>

              <input 
                type="text"
                name="timeEvent2"
                value={invitation.timeEvent2}
                onChange={onChange}
                className="text-sm w-44 px-1 py-1 mx-1 border-2 border-transparent rounded-lg focus:border-gray-400 focus:outline-none" placeholder="Main Event"/>                        
            </div>

            {/* Wedding Data  */}
            <p className="font-small text-sm">Wedding Information</p>
            <div className="text-sm mb-4 border-t border-gray-900 py-2">
              <input 
                type="text"
                name="title"
                onChange={onWeddingChange}
                value={wedding.title}
                className="text-sm w-44 px-1 my-2 py-1 mx-1 border-2 border-transparent rounded-lg focus:border-gray-400 focus:outline-none" placeholder="Ex: Wedding"/>

              <input 
                type="date"
                name="date"
                onChange={onWeddingChange}
                value={wedding.date}
                className="text-sm w-44 px-1 my-2 py-1 mx-1 border-2 border-transparent rounded-lg focus:border-gray-400 focus:outline-none" placeholder="Wedding Date"/>

              <input 
                type="text"
                name="address"
                onChange={onWeddingChange}
                value={wedding.address}
                className="text-sm block w-full my-2 px-1 py-1 mx-1 border-2 border-transparent rounded-lg focus:border-gray-400 focus:outline-none" placeholder="Wedding Location"/>     

              <input 
                type="text"
                name="groomName"
                onChange={onWeddingChange}
                value={wedding.groomName}
                className="text-sm w-44 px-1 my-2 py-1 mx-1 border-2 border-transparent rounded-lg focus:border-gray-400 focus:outline-none" placeholder="Groom Name"/>

              <input 
                type="text"
                name="brideName"
                onChange={onWeddingChange}
                value={wedding.brideName}
                className="text-sm w-44 px-1 my-2 py-1 mx-1 border-2 border-transparent rounded-lg focus:border-gray-400 focus:outline-none" placeholder="Bride Name"/>

              <input 
                type="text"
                name="groomImg"
                onChange={onWeddingChange}
                value={wedding.groomImg}
                className="text-sm w-44 px-1 my-2 py-1 mx-1 border-2 border-transparent rounded-lg focus:border-gray-400 focus:outline-none" placeholder="Groom Photo"/>

              <input 
                type="text"
                name="brideImg"
                onChange={onWeddingChange}
                value={wedding.brideImg}
                className="text-sm w-44 px-1 my-2 py-1 mx-1 border-2 border-transparent rounded-lg focus:border-gray-400 focus:outline-none" placeholder="Bride Photo"/>
            </div>

            {/* Submit Button  */}
            <div className="block">
              <button 
                onClick={handleSave}
                className="w-20 px-1 py-1 font-medium text-white bg-gray-400 rounded-lg">Submit</button>
            </div>
          </form>
        </div>
        <div className="md:w-1/2 w-full rounded m-3  px-2 p-5 ">
          <h1 className="text-2xl font-bold text-gray-700 my-5 text-center"><Link to="/invitation">My Invitation</Link> </h1>
          <div className="overflow-y-scroll rounded-lg shadow p-5 overflow-x-hidden h-3/4">
            {
              !wedding.status ? <Invitation/> : <Invitation2/>
            }
            </div>
        </div>
      </div>
    </>
  )
}

export default DashboardInvitation
