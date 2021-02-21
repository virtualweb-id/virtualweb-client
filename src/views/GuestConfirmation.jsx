import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { confirmGuest } from '../store/action/guest'
import Swal from 'sweetalert2'

const GuestConfirmation = () => {
  const { isError } = useSelector(state => state.user)
  const [input, setInput] = useState({
    id: '',
    email: '',
    status: ''
  })
  const dispatch = useDispatch()
  const history = useHistory()
  
  const handleOnChange = (e) => {
    const { name, value } = e.target
    setInput({
      ...input,
      [name]: value
    })
  }

  const onSubmit = () => {
      if (!input.email || !input.id || !input.status) {
        Swal.fire({
            position: 'top',
            icon: 'error',
            title: 'Please fill out form completely',
            showConfirmButton: false,
            timer: 1500
          })
        setInput({
            email: '',
            password: '',
            status: ''
          })       
      } else {
          console.log(input)
          dispatch(confirmGuest(input))
          setInput({
            email: '',
            password: '',
            status: ''
          })
      }
  }

  return (
    <div className="min-w-screen min-h-screen bg-red-200 flex items-center p-5 lg:p-10 overflow-hidden relative">
    <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
        <div className="md:flex items-center -mx-10">
            <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                <div className="relative">
                    <img src="https://images.unsplash.com/photo-1581574208471-4944a12c317c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2851&q=80" className="w-full relative z-10" alt="" />
                    <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                </div>
            </div>
            <div className="w-full md:w-1/2 px-10">
                <div className="mb-10">
                    <h1 className="font-bold uppercase text-2xl mb-5">Guest Attendance Confirmation</h1>
                    <div className="block mb-4 border border-gray-200 rounded-lg">
                    <input 
                      type="text"
                      name="id"
                      value={input.id}
                      onChange={handleOnChange} 
                      className="block w-full px-4 py-3 border-2 border-transparent rounded-lg focus:border-red-300 focus:outline-none" placeholder="Guest ID"/>
                  </div>
                  <div className="block mb-4 border border-gray-200 rounded-lg">
                    <input 
                      type="text" 
                      name="email"
                      value={input.email}
                      onChange={handleOnChange} 
                      className="block w-full px-4 py-3 border-2 border-transparent rounded-lg focus:border-red-300 focus:outline-none" placeholder="Email"/>
                  </div>
                  <div className="block mb-4 border border-gray-200 rounded-lg">
                    <select value={input.status} onChange={handleOnChange} name='status' className="block w-full px-4 py-3 border-2 border-transparent rounded-lg focus:border-red-300 focus:outline-none">
                        <option value=''>Select one...</option>
                        <option value={true}>Attend</option>
                        <option value={false}>Not Attend</option>
                    </select>
                  </div>
                    <p className="text-sm">Do not let your friend dissapointed, please Confirm Your Attendance. By choosing attend you are agreeing to attend the party.</p>
                </div>
                <div>
                    <div className="inline-block align-bottom">
                        <button onClick={onSubmit} className="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold"><i className="mdi mdi-cart -ml-2 mr-2"></i> CONFIRM</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default GuestConfirmation