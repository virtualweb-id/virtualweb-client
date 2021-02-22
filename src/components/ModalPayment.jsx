import React, {useState} from "react";
import Swal from 'sweetalert2'

export default function ModalPayment() {
  const [showModal, setShowModal] = useState(false);
  const [amount, setAmount] = useState('')

  const handleOnChange = (e) => {
    const { value } = e.target
    setAmount(value)
  }

  const convertMoney = (money) => {
    return money.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
  }

  const onSubmit = () => {
    setShowModal(false)
    Swal.fire({
      title: 'Are you sure?',
      text: `You will transfer Rp. ${convertMoney(amount)} to this couple`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, transfer it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        switch (amount) {
          case "50000":
            console.log('masuk sini')
            window.open('https://app.sandbox.midtrans.com/payment-links/1613884225149')
            break;
          case "100000":
            window.open('https://app.sandbox.midtrans.com/payment-links/1613885421269')
            break;
          case "200000":
            window.open('https://app.sandbox.midtrans.com/payment-links/1613884861461')
            break;
          case "300000":
            window.open('https://app.sandbox.midtrans.com/payment-links/1613884903936')
            break;
          default:
            break;
        }
      }
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
                  Select the amount of money you want to transfer
                  </p>
                </div>
                <div className="block mb-4 border border-gray-200 rounded-lg w-1/2 mx-6">
                    <select value={amount} onChange={handleOnChange} name='amount' className="block w-full px-4 py-3 border-2 border-transparent rounded-lg focus:border-red-300 focus:outline-none">
                        <option value=''>Select one...</option>
                        <option value={50000}>Rp. 50.000</option>
                        <option value={100000}>Rp. 100.000</option>
                        <option value={200000}>Rp. 200.000</option>
                        <option value={300000}>Rp. 300.000</option>
                    </select>
                  </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
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