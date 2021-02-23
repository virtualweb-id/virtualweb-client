import React, {useState} from "react";
import Swal from 'sweetalert2'
import axios from 'axios'

export default function ModalPayment() {
  const [showModal, setShowModal] = useState(false);
  const [inputData, setInputData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    amount: null
  })

  const handleOnChange = (e) => {
    const { name, value } = e.target
    setInputData({
      ...inputData,
      [name]: value
    })
  }
  const convertMoney = (money) => {
    return money.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
  }

  const onSubmit = () => {
    setShowModal(false)
    Swal.fire({
      title: 'Are you sure?',
      text: `You will transfer Rp.${convertMoney(inputData.amount)} to this couple`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, transfer it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        axios({
          method: 'post',
          url: 'http://localhost:3001/guests/payment',
          data: { inputData },
        })
        .then(({data}) => {
          window.open(data.redirect_url)
          setInputData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            amount: null
          })
        })
        .catch(err => {
          console.log(err)
        })
      }
      setInputData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        amount: null
      })
    })
    
  }

  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        style={{ transition: "all .15s ease" }}
        onClick={() => setShowModal(true)}
      >
        SEND WEDDING GIFT
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-3xl font-semibold">
                  Show your support with a gift of love
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-gray-600 text-lg leading-relaxed">
                  Fill out your data and amount to transfer 
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 max-w-xl m-auto">
                <div className="col-span-2 lg:col-span-1">
                <input type="text" name='firstName' value={inputData.firstName} onChange={handleOnChange} className="border-solid border-gray-200 border-2 p-3 md:text-xl w-full" placeholder="First name"/>
                </div>

                <div className="col-span-2 lg:col-span-1">
                <input type="text" name='lastName' value={inputData.lastName} onChange={handleOnChange} className="border-solid border-gray-200 border-2 p-3 md:text-xl w-full" placeholder="Last name"/>
                </div>

                <div className="col-span-2">
                <input cols="30" name='email' value={inputData.email} onChange={handleOnChange} rows="8" className="border-solid border-gray-200 border-2 p-3 md:text-xl w-full" placeholder="Email"></input>
                </div>

                <div className="col-span-2">
                <input cols="30" name='phone' value={inputData.phone} onChange={handleOnChange} rows="8" className="border-solid border-gray-200 border-2 p-3 md:text-xl w-full" placeholder="Phone"></input>
                </div>

                <div className="col-span-2">
                <input cols="30" name='amount' value={inputData.amount} onChange={handleOnChange} rows="8" className="border-solid border-gray-200 border-2 p-3 md:text-xl w-full" placeholder="Amount"></input>
                </div>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b mt-10">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={onSubmit}
                  >
                    Transfer
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}