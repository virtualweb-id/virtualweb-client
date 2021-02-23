import React from 'react'
import moment from 'moment-timezone'

const CommentBox = ({comment}) => {
    return (
        <div className="flex bg-white shadow-lg rounded-lg mx-4 md:mx-auto my-2 mt-4 max-w-md md:max-w-2xl w-1/2 relative">
        <div className="flex items-start px-4 py-6">
           <img className="w-12 h-12 rounded-full object-cover mr-4 shadow" src={`https://avatars.dicebear.com/api/human/${comment.name}.svg`} alt="avatar"/>
           <div className="">
              <div className="flex items-center justify-between">
                 <h2 className="text-lg font-semibold text-gray-900 -mt-1">{comment.name} </h2>
                 <small className="text-sm text-gray-700 absolute right-2" >{ moment(moment.tz(comment.createdAt, 'Asia/Bangkok'), "YYYYMMDD").fromNow() }</small>
              </div>
              <p className="text-gray-700">{comment.relationship} </p>
              <p className="mt-3 text-gray-700 text-sm">
                 {comment.message}
              </p>
           </div>
        </div>
     </div>
    )
}

export default CommentBox
