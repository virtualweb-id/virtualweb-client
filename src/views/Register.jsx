import React, { useEffect, useState } from 'react'
import { signUp } from '../store/action/auth'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'

const Register = () => {
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

  return (
    <section className="container-fluid bg-red-300">
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
                  <button 
                    onClick={handleSignUp}
                    className="w-full px-3 py-4 font-medium text-white bg-red-400 rounded-lg">Sign up</button>
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