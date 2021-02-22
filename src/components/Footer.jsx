import React from 'react'

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
  <footer className="bg-black pt-10 sm:mt-10 pt-10 flex flex-col">
      <div className="pt-2 m-5 flex flex-col justify-center items-center">
        <h1 className="text-white md:text-3xl text-2xl font-bold">
          Subscribe to our Newsletter
        </h1>
        <form className="m-4 flex">
          <input className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" placeholder="your@mail.com"/>
        <button className="px-8 rounded-r-lg bg-gray-900  text-pink-500 font-bold p-4 uppercase border-pink-500 border-t border-b border-r">Subscribe</button>
      </form>
        </div>
          <div className="flex pb-5 px-3 m-auto pt-5 
              border-t border-gray-500 text-gray-400 text-sm 
              flex-col md:flex-row max-w-6xl justify-center">
          <div className="mt-2">
              © Copyright ©{year}. All Rights Reserved.
          </div>
      </div>
  </footer>
  )
}

export default Footer
