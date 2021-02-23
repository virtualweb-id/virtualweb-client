import axios from '../../api/axios'

const commentChange = payload => {
  return {
    type: 'COMMENT_CHANGE_COMMENTS',
    payload
  }
}

const commentAdd = payload => {
  return {
    type: 'COMMENT_ADD_COMMENTS',
    payload
  }
}

const loadingComment = payload => {
    return {
      type: 'COMMENT_LOADING',
      payload
    }
  }

export const fetchComments = (InvitationId) => {
  return async (dispatch) => {
    try {
      dispatch(loadingComment(true))
      const { data:comments } = await axios({
        method: 'get',
        url: '/comments/' + InvitationId
      })
      dispatch(commentChange(comments))
      dispatch(loadingComment(false))
    } catch (err) {
      dispatch(loadingComment(false))
    }
  }
}

export const addComment = (input) => {
  const { name, relationship, message, InvitationId } = input
  return async (dispatch, getState) => {
    try {
      const { data } = await axios({
        method: 'post',
        url: '/comments',
        data: { name, relationship, message, InvitationId }
      })
      dispatch(commentAdd(data))
    } catch (err) {
      console.log(err);
    }
  }
}
