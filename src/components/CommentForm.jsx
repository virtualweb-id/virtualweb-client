import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { addComment } from '../store/action/comment'
import { useLocation } from 'react-router-dom'

const CommentForm = ({InvitationId}) => {
    const [inputComment, setInputComment] = useState({
        name: '',
        relationship: '',
        message: ''
    })
    const dispatch = useDispatch()
    const { pathname } = useLocation()
    
    const handleOnChange = (e) => {
      const { name, value } = e.target
      setInputComment({
        ...inputComment,
        [name]: value
      })
    }
  
    const onSubmit = () => {
        if (!inputComment.name || !inputComment.relationship || !inputComment.message) {
          Swal.fire({
              position: 'top',
              icon: 'error',
              title: 'Oops... Let them know you and your wish!',
              showConfirmButton: false,
              timer: 1500
            })
          setInputComment({
              name: '',
              relationship: '',
              message: ''
            })       
        } else {
            const {name, relationship, message} = inputComment
            dispatch(addComment({name, relationship, message, InvitationId}))
            setInputComment({
              name: '',
              relationship: '',
              message: ''
            })
        }
    }

    return (
        <>
             <div className="text-2xl mb-6 text-center ">
                Send your wedding wish for this couple
            </div>
            <div className="grid grid-cols-2 gap-4 max-w-xl m-auto">

                <div className="col-span-2 lg:col-span-1">
                <input type="text" name='name' value={inputComment.name} onChange={handleOnChange} className="border-solid border-gray-200 border-2 p-3 md:text-xl w-full" placeholder="Name"/>
                </div>

                <div className="col-span-2 lg:col-span-1">
                <input type="text" name='relationship' value={inputComment.relationship} onChange={handleOnChange} className="border-solid border-gray-200 border-2 p-3 md:text-xl w-full" placeholder="Relationship"/>
                </div>

                <div className="col-span-2">
                <textarea cols="30" name='message' value={inputComment.message} onChange={handleOnChange} rows="8" className="border-solid border-gray-200 border-2 p-3 md:text-xl w-full" placeholder="Message"></textarea>
                </div>

                <div className="col-span-2 text-right">
                  {
                    pathname.split('/')[1] !== 'event' ? (<button className="py-3 px-6 bg-green-500 text-white font-bold w-full sm:w-32" onClick={onSubmit} disabled >Submit</button> ):( <button className="py-3 px-6 bg-green-500 text-white font-bold w-full sm:w-32" onClick={onSubmit} >Submit</button>)
                  }
                </div>

            </div>
        </>
    )
}

export default CommentForm
