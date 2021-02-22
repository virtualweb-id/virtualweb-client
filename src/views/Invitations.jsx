import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Invitation } from '.';
import { fetchComments } from '../store/action/comment'
import Invitation2 from './Invitation2';

const Invitations = () => {
  const { invitation:holder } = useSelector(state => state.invitation)
  const { wedding } = useSelector(state => state.wedding)
  const { comments, isLoading } = useSelector(state => state.comment)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchComments(wedding.id))
  }, [dispatch])
    
      if (isLoading) {
          return <h1>Loading...</h1>
      } else {
          return (
              <div>
                  {
                      !wedding?.status ? <Invitation  /> : <Invitation2 />
                  }
              </div>
          )
      }
    
}

export default Invitations
