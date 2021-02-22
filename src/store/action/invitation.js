import axios from '../../api/axios'
import { createToast } from '../../helpers/createToast'
import createBtnLoading from '../../helpers/createBtnLoading'

export const changeState = (name, payload) => {
  return {
    type: `CHANGE_STATE_${name}`,
    name,
    payload
  }
}

const invitationChange = payload => {
  return {
    type: 'INVITATION_CHANGE_INVITATION',
    payload
  }
}

const loadingInvitation = payload => {
  return {
    type: 'INVITATION_LOADING',
    payload
  }
}

export const fetchInvitation = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        url: '/invitations',
        headers: {
          access_token: localStorage.access_token
        }
      })
      dispatch(invitationChange(data))
    } catch (err) {
      console.log(err.response.data);
    }
  }
}

export const getDataById = (id) => {
  return async (dispatch) => {
    try {
      dispatch(loadingInvitation(true))
      const { data } = await axios({
        url: '/events/' + id,
      })
      console.log(data, "<<< ini hasil fetch")
      dispatch(loadingInvitation(false))
      dispatch(invitationChange(data))
    } catch (err) {
      console.log(err.response.data);
      dispatch(loadingInvitation(false))
    }
  }
}

export const editInvitation = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(loadingInvitation(true))
      const { invitation } = getState().invitation
      const { data } = await axios({
        url: '/invitations/' + invitation.id,
        method: 'PUT',
        headers: {
          access_token: localStorage.access_token
        },
        data: invitation
      })
      createToast('Successfully update')
    } catch (err) {
      console.log(err.response.data);
    } finally {
      dispatch(loadingInvitation(false))
    }
  }
}