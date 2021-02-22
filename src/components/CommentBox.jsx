import React from 'react'
import moment from 'moment-timezone'

const CommentBox = ({comment}) => {
    return (
        <div class="flex bg-white shadow-lg rounded-lg mx-4 md:mx-auto my-2 mt-4 max-w-md md:max-w-2xl w-1/2 relative">
        <div class="flex items-start px-4 py-6">
           <img class="w-12 h-12 rounded-full object-cover mr-4 shadow" src={`https://avatars.dicebear.com/api/human/${comment.name}.svg`} alt="avatar"/>
           <div class="">
              <div class="flex items-center justify-between">
                 <h2 class="text-lg font-semibold text-gray-900 -mt-1">{comment.name} </h2>
                 <small class="text-sm text-gray-700 absolute right-2" >{ moment(moment.tz(comment.createdAt, 'Asia/Bangkok'), "YYYYMMDD").fromNow() }</small>
              </div>
              <p class="text-gray-700">{comment.relationship} </p>
              <p class="mt-3 text-gray-700 text-sm">
                 {comment.message}
              </p>
           </div>
        </div>
     </div>
    )
}

export default CommentBox
