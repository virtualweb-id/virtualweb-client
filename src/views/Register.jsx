import React, { useEffect, useState } from 'react'
import { signUp } from '../store/action/auth'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import Lottie from "lottie-react"
import paperplane from '../assets/paper-plane.json'

const Register = () => {
  const { isLoading, isError } = useSelector(state => state.user)
  const [input, setInput] = useState({
    email: '',
    password: '',
    name: '',
    phoneNumber: ''
  })
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    if(localStorage.access_token) history.push('/undanganku')
  }, [])

  const handleOnChange = (e) => {
    const { name, value } = e.target
    setInput({
      ...input,
      [name]: value
    })
  }

  const handleSignUp = () => {
    dispatch(signUp(input, history))
  }

  const redirectHome = () => {
    history.push('/')
  }

  return (
    <section className="container-fluid bg-red-300 h-screen">
      <nav className="w-full flex items-center h-12 bg-gray-900 shadow-2xl text-gray-50">
        <div className="ml-6 space-x-2 md:flex">
          <svg className="w-6 h-6 m-2 cursor-pointer" fill="currentColor" viewBox="0 0 20 20" onClick={redirectHome} xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
          <p className="h-10 flex items-center rounded font-medium font-bold" href="#">Hi there!</p>
        </div>
	    </nav>
      <div className="text">
        <section className="w-full px-8 py-16 xl:px-8 bg-transparent-100">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col items-center md:flex-row">
              <div className="w-full space-y-5 md:w-3/5 md:pr-16">
                <p className="font-medium uppercase">"Wedding Tale"</p>
                <h3 className="text-2xl font-extrabold leading-none text-gray sm:text-3xl md:text-5xl">
                  Married Once, Never Again
                </h3>
                <p className="text-xl text-gray-600 md:pr-16"> A successful marriage requires requires falling in love many times, always with <span className="font-extrabold italic">"The Same Person"</span></p>
              </div>
              <div className="w-full mt-16 md:mt-0 md:w-2/5">
                <div className="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7">
                <h4 className="mb-6 text-2xl font-medium text-center">Sign up your Account</h4>
                <div className="block mb-4 border border-gray-200 rounded-lg">
                  <input 
                    type="text" 
                    name="name"
                    value={input.name}
                    onChange={handleOnChange}
                    className="block w-full px-4 py-3 border-2 border-transparent rounded-lg focus:border-red-300 focus:outline-none" placeholder="Name"/>
                </div>
                <div className="block mb-4 border border-gray-200 rounded-lg">
                  <input 
                    type="text" 
                    name="phoneNumber"
                    value={input.phoneNumber}
                    onChange={handleOnChange}
                    className="block w-full px-4 py-3 border-2 border-transparent rounded-lg focus:border-red-300 focus:outline-none" placeholder="Phone number"/>
                </div>
                <div className="block mb-4 border border-gray-200 rounded-lg">
                  <input 
                    type="text" 
                    name="email"
                    value={input.email}
                    onChange={handleOnChange}
                    className="block w-full px-4 py-3 border-2 border-transparent rounded-lg focus:border-red-300 focus:outline-none" placeholder="Email address"/>
                </div>
                <div className="block mb-4 border border-gray-200 rounded-lg">
                  <input 
                    type="password"
                    name="password"
                    value={input.password}
                    onChange={handleOnChange} 
                    className="block w-full px-4 py-3 border-2 border-transparent rounded-lg focus:border-red-300 focus:outline-none" placeholder="Password"/>
                </div>
                <div className="block">
                  {!isLoading ?
                    <button 
                      onClick={handleSignUp}
                      className="w-full px-3 py-4 font-medium text-white bg-red-400 rounded-lg">Sign up</button> :
                    <div className="flex justify-center">
                      <Lottie animationData={paperplane}
                        loop 
                        autoPlay 
                        className="w-28"/>
                    </div>
                  }
                </div>
                
                <div className="text-center mt-3">Have an account? <Link to='/login' className="text-red-400">Sign in</Link></div>
              </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Register