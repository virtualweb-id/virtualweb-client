import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom'
import { Event, Event2 } from '.'
import {getDataById} from '../store/action/invitation'
import { fetchComments } from '../store/action/comment'

const Events = () => {
    const { invitation:holder, isLoading } = useSelector(state => state.invitation)
    const { comments } = useSelector(state => state.comment)
    const dispatch = useDispatch()
    const {id} = useParams()
    
    useEffect(() => {
        dispatch(getDataById(id))
        dispatch(fetchComments(id))
      }, [dispatch])
    
      if (isLoading) {
          return <h1>Loading...</h1>
      } else {
          return (
              <div>
                  {
                      !holder.Wedding?.status ? <Event  /> : <Event2 />
                  }
              </div>
          )
      }
    
}

export default Events
