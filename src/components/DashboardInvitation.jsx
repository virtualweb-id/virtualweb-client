import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import cancelBtnLoading from '../helpers/cancelBtnLoading'
import createBtnLoading from '../helpers/createBtnLoading'
import { changeState, editInvitation } from '../store/action/invitation'
import { changeWeddingState, updateWedding } from '../store/action/wedding'
import { Invitation, Invitation2 } from '../views'

const DashboardInvitation = () => {
  const { wedding } = useSelector(state => state.wedding)
  const { invitation } = useSelector(state => state.invitation)

  const dispatch = useDispatch()

  const onChange = (e) => {
    const { name, value } = e.target
    dispatch(changeState(name, value))
  }

  const onWeddingChange = e => {
    const { name, value } = e.target
    dispatch(changeWeddingState(name, value))
  }

  const handleSave = async (e) => {
    e.preventDefault()
    createBtnLoading('invitation', 'Saving..')
    await dispatch(editInvitation())
    await dispatch(updateWedding())
    cancelBtnLoading('invitation', 'Submit')
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

  const onChangeTheme = (e, status) => {
    e.preventDefault()
    dispatch(changeWeddingState('status', status))
  }

  return (
    <div className="w-full h-full flex md:flex-row flex-col overflow-y-hidden overflow-x-hidden">
      {/* Start form  */}
      <div className="overflow-y-scroll flex">
      <div className="md:w-1/3 w-full h-full overflow-y-scroll">
        <form className="container-small overflow-y-scroll bg-gray-200 shadow p-5 overflow-x-hidden h-full form-invitation">
          <p className={styles.label}>Theme</p>
          <div className="mb-4 border-t border-gray-900 py-2">
            <button 
              onClick={(e) => onChangeTheme(e, false)}
              className={`border border-gray-900 rounded px-2 p-1 text-sm mx-1 ${!wedding.status && 'bg-gray-900 text-white'}`}>Theme 1</button>
            <button 
              onClick={(e) => onChangeTheme(e, true)}
              className={`border border-gray-900 rounded px-2 p-1 text-sm mx-1 ${wedding.status && 'bg-gray-900 text-white'}`}>Theme 2</button>
          </div>
          <p className={styles.label}>Couple Name</p>
          <div className="mb-4 border-t border-gray-900 py-2">
            <p className={styles.subLabel}>Bride name</p>
            <input 
              type="text"
              name="brigeNickname"
              value={invitation.brigeNickname}
              onChange={onChange}
              className={styles.input} placeholder="Bride Name"/>

            <p className={styles.subLabel}>Groom name</p>
            <input 
              type="text"
              name="groomNickname"
              value={invitation.groomNickname}
              onChange={onChange}
              className={styles.input} placeholder="Groom Name"/>                        
          </div>
          {/* Story */}
          <p className={styles.label}>Your Story</p>
          <div className="mb-4 border-t border-gray-900 py-2">
            <p className={styles.subLabel}>Title</p>
            <input 
              type="text"
              name="title"
              value={invitation.title}
              onChange={onChange}
              className={styles.input} placeholder="Story Title"/>

            <p className={styles.subLabel}>Story</p>
            <textarea 
              rows='3'
              name="story"
              value={invitation.story}
              onChange={onChange}
              className={styles.input} placeholder="Your Story"/>                        
          </div>
        
          {/* Image Set */}
          <p className={styles.label}>Image Set</p>
          <div className=" mb-4 border-t border-gray-900 py-2">
            <p className={styles.subLabel}>Image 1</p>
            <div className="mb-4">
              <input 
                className="text-sm"
                type='file' onChange={onChangeBackgoundImg} name='backgroundImg' accept='file/*' />
            </div>
            <p className={styles.subLabel}>Image 2</p>
            <div className="mb-4">
              <input 
                className="text-sm"
                type='file' onChange={onChangeBackgoundImg} name='additionalImg' accept='file/*' />
            </div>
          </div>

          {/* Video URL */}
          <p className={styles.label}>Videos url</p>
          <div className="mb-4 border-t border-gray-900 py-2">
            <p className={styles.subLabel}>Video Url</p>
            <input 
              type="text"
              name="videoUrl"
              value={invitation.videoUrl}
              onChange={onChange}
              className={styles.input} placeholder="Ex: Your prewed video URL"/>

            <p className={styles.subLabel}>LiveStream Url</p>
            <input 
              type="text"
              name="youtubeUrl"
              value={invitation.youtubeUrl}
              onChange={onChange}
              className={styles.input} placeholder="Your Wedding live URL"/>                        
          </div>

          {/* Set Backgound & font */}
          <p className={styles.label}>Page Setting</p>
          <div className=" mb-4 border-t border-gray-900 py-2">
            <div className="flex items-center gap-2 my-1">
              <label for="backgroundColor" className="text-sm">Color 1:</label>
              <input type="color" name="backgroundColor" value={invitation.backgroundColor} onChange={onChange}
                className="w-6 h-6" />
            </div>
            <input 
              type="text"
              name="backgroundColor"
              value={invitation.backgroundColor}
              onChange={onChange}
              className={styles.subLabel2} placeholder="Background Color"/>

            <div className="flex items-center gap-2 my-1">
              <label for="textColor" className="text-sm">Color 2:</label>
              <input type="color" name="textColor" value={invitation.textColor} onChange={onChange}
                className="w-6 h-6" />
            </div>
            <input 
              type="text"
              name="textColor"
              value={invitation.textColor}
              onChange={onChange}
              className={styles.subLabel2} placeholder="Font Color"/>                        
          </div>

          {/* Time Event  */}
          <p className={styles.label}>Time Event Settings</p>
          <div className="text-sm mb-4 border-t border-gray-900 py-2">
            <p className={styles.subLabel}>Event 1</p>
            <input 
              type="time"
              name="timeEvent1"
              value={invitation.timeEvent1}
              onChange={onChange}
              className={styles.subLabel2} placeholder="Akad Time"/>

            <p className={styles.subLabel}>Event 2</p>
            <input 
              type="time"
              name="timeEvent2"
              value={invitation.timeEvent2}
              onChange={onChange}
              className={styles.subLabel2} placeholder="Main Event"/>                        
          </div>


          {/* Submit Button  */}
          <div className="block">
            <button 
              id="invitation"
              onClick={handleSave}
              className="w-20 px-1 py-1 font-medium text-white bg-gray-400 rounded-lg">Submit</button>
          </div>
        </form>
      </div>
    {/* End form  */}

    {/* Invitation */}
      <div className="md:w-2/3 w-full h-full md:p-2 overflow-x-hidden border-2 border-gray-900 md:m-1 mt-5 p-5 overflow-y-hidden"
      style={{minHeight: '600px'}}>
        <div className="flex gap-4">
          <Link to={`/event/${invitation.id}`} target="blank" className=" bg-gray-900 rounded p-1 px-2 text-white text-sm"><i class="fas fa-tv"></i> Preview</Link>
          <div className="w-3/4 border border-gray-900 rounded text-sm px-2 flex items-center">{`http://localhost:3000/event/${invitation.id}`}</div>
        </div>
        <div className="overflow-y-scroll shadow h-full mt-2">
          {
            !wedding.status ? <Invitation/> : <Invitation2/>
          } 
        </div>
      </div>
    {/* End of Invitation */}
    </div>
    </div>
  )
}

const styles = {
  label: "font-bold text-sm",
  subLabel: "font-small text-sm mt-2 mb-1",
  subLabel2: "text-sm w-1/2 px-1 py-1 border-2 border-transparent focus:border-gray-400 focus:outline-none",
  input: "text-sm w-full px-1 py-1 border-2 border-transparent focus:border-gray-400 focus:outline-none"
}

export default DashboardInvitation
