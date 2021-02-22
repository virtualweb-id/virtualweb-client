import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import confirmDelete from "../helpers/confirmDelete"
import { addGuest, deleteGuest, editGuest, showOneGuest } from "../store/action/guest"

export default () => {
  const { wedding } = useSelector(state => state.wedding)
  const history = useHistory()
  const { guests, guest } = useSelector(state => state.guest)
  const dispatch = useDispatch()
  const [isAdd, setIsAdd] = useState(false)
  const [isEdit, setIsEdit] = useState("")
  const defaultValue = {
    name: '',
    email: '',
    phoneNumber: '',
    status: false
  }
  const [input, setInput] = useState(defaultValue)
  const [edit, setEdit] = useState(defaultValue)

  useEffect(() => {
    if(!wedding.title) history.push('/dashboard/wedding')
  }, [])

  useEffect(() => {
    setEdit({
      name: guest.name,
      email: guest.email,
      phoneNumber: guest.phoneNumber,
      status: guest.status
    })
  }, [guest])

  const handleOnChange = (e) => {
    const { name, value } = e.target
    setInput({
      ...input,
      [name]: value
    })
  }

  const handleOnChangeEdit = (e) => {
    const { id, value } = e.target
    setEdit({
      ...edit,
      [id]: value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if(emailIsValid(input.email)) {
      dispatch(addGuest(input))
    }
    setInput({
      name: '',
      email: '',
      phoneNumber: '',
      status: false
    })
  }

  const onSubmitEdit = (id) => {
    setIsEdit('')
    if (emailIsValid(edit.email)) {
      dispatch(editGuest(id, edit));
    }
  }

  const handleEdit = (id) => {
    setIsEdit(id)
    dispatch(showOneGuest(id))
  }

  const cancelAdd = () => {
    setIsAdd(false)
    setInput(defaultValue)
  }

  const handleDelete = (id) => {
    confirmDelete().then(async (result) => {
      if (result.isConfirmed) {
        await dispatch(deleteGuest(id))
      }
    })
  }

  function emailIsValid (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  return (
    <div className="w-full h-full p-2">
        <div>
          <button
            onClick={() => setIsAdd(true)} 
            className="bg-blue-500 text-white py-1 px-2 rounded my-2 ml-3 shadow-md">Add Guest</button>
        </div>
      <div className="relative z-10 h-auto py-2 overflow-scroll bg-white border-b-2 border-gray-300 rounded-lg shadow-md h-5/6">
        <table className="table w-full">
          <thead>
            <tr className="table-row border-b-2 border-t">
              <td className="table-cell w-1/4 px-2">Name</td>
              <td className="table-cell w-1/4">Email</td>
              <td className="table-cell w-1/4">Phone Number</td>
              <td className="table-cell">Status</td>
              <td className="table-cell">Action</td>
            </tr>
          </thead>
          <tbody>
          {
            guests.map(guest => {
              if(isEdit !== guest.id) return (
                <tr className="table-row py-2 border-b" key={guest.id}>
                  <td className="table-cell py-1 px-2 h-12 text-sm">{guest.name}</td>
                  <td className="table-cell text-sm">{guest.email}</td>
                  <td className="table-cell text-sm">{guest.phoneNumber}</td>
                  <td className="table-cell text-sm">{guest.status === null ? 'Not Confirmed Yet' : guest.status ? 'Attend' : 'Not Attend'}</td>
                  <td className="table-cell text-sm">
                    <div className="flex gap-1">
                      <button 
                        onClick={() => handleEdit(guest.id)}
                        className="group border border-blue-500 py-1 px-2 rounded hover:bg-blue-500"
                      >
                        <i className="fas fa-pen text-blue-500 group-hover:text-white"></i>
                      </button>
                      <button 
                        onClick={() => handleDelete(guest.id)}
                        className="group border border-red-500 py-1 px-2 rounded hover:bg-red-500 "
                      >
                        <i className="fas fa-trash text-red-500 group-hover:text-white"></i>
                      </button>
                    </div>  
                  </td>
                </tr>
              )
              else return (
                <tr className="table-row border-b-2" key={guest.id}>
                  <td className="table-cell w-1/4 py-2 px-2">
                    <input 
                      id="name"
                      value={edit.name}
                      onChange={handleOnChangeEdit}
                      type="text" className="border p-1 text-sm"></input>
                  </td>
                  <td className="table-cell w-1/4">
                    <input 
                      id="email"
                      value={edit.email}
                      onChange={handleOnChangeEdit}
                      type="email" className="border p-1 text-sm"></input>
                  </td>
                  <td className="table-cell w-1/4">
                    <input 
                      id="phoneNumber"
                      value={edit.phoneNumber}
                      onChange={handleOnChangeEdit}
                      type="text" className="border p-1 text-sm"></input>
                  </td>
                  <td className="table-cell">
                  </td>
                  <td className="table-cell">
                    <div className="flex gap-1">
                      <button 
                        onClick={() => onSubmitEdit(guest.id)}
                        className="group border border-blue-500 py-1 px-2 rounded hover:bg-blue-500"
                      >
                        <i className="fas fa-check text-blue-500 group-hover:text-white"></i>
                      </button>
                      <button 
                        onClick={() => setIsEdit("")}
                        className="group border border-red-500 py-1 px-2 rounded hover:bg-red-500"
                      >
                        <i className="fas fa-times text-red-500 group-hover:text-white"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              )
            }) 
          }
          {isAdd &&
            <tr className="table-row border-b-2">
              <td className="table-cell w-1/4 py-2 px-2">
                <input 
                  name="name"
                  value={input.name}
                  onChange={handleOnChange}
                  type="text" className="border p-1 text-sm"></input>
              </td>
              <td className="table-cell w-1/4">
                <input 
                  name="email"
                  value={input.email}
                  onChange={handleOnChange}
                  type="email" className="border p-1 text-sm"></input>
              </td>
              <td className="table-cell w-1/4">
                <input 
                  name="phoneNumber"
                  value={input.phoneNumber}
                  onChange={handleOnChange}
                  type="text" className="border p-1 text-sm"></input>
              </td>
              <td className="table-cell w-1/4">
                
              </td>
              <td className="table-cell">
                <div className="flex gap-1">
                  <button 
                    onClick={onSubmit}
                    className="group border border-blue-500 py-1 px-2 rounded hover:bg-blue-500"
                  >
                    <i className="fas fa-check text-blue-500 group-hover:text-white"></i>
                  </button>
                  <button 
                    onClick={() => cancelAdd()}
                    className="group border border-red-500 py-1 px-2 rounded hover:bg-red-500"
                  >
                    <i className="fas fa-times text-red-500 group-hover:text-white"></i>
                  </button>
                </div>
              </td>
            </tr>
          }
          </tbody>
        </table>
        {guests?.length == 0 && <div className="text-center my-3">--- No Data ---</div>}
      </div>
    </div>
  )
}