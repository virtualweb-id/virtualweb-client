import axios from '../../api/axios'
import { createToast } from '../../helpers/createToast'
import Swal from 'sweetalert2'

const guestChange = payload => {
  return {
    type: 'GUEST_CHANGE_GUESTS',
    payload
  }
}

const guestAdd = payload => {
  return {
    type: 'GUEST_ADD_GUESTS',
    payload
  }
}

const changeOneGuest = payload => {
  return {
    type: 'GUEST_CHANGE_GUEST',
    payload
  }
}

export const fetchGuest = () => {
  return async (dispatch) => {
    try {
      const { data:guests } = await axios({
        method: 'get',
        url: '/guests',
        headers: {
          access_token: localStorage.access_token
        }
      })
      dispatch(guestChange(guests))
    } catch (err) {
      console.log(err.response.data);
    }
  }
}

export const showOneGuest = (id) => {
  return async (dispatch, getState) => {
    const { guests } = getState().guest
    const guest = guests.filter(guest => guest.id === id)
    dispatch(changeOneGuest(guest[0]))
  }
}

export const addGuest = (input) => {
  const { name, email, phoneNumber, status } = input
  return async (dispatch, getState) => {
    try {
      const { data } = await axios({
        method: 'post',
        url: '/guests',
        data: { name, email, phoneNumber, status: status === 'true' ? true : false},
        headers: {
          access_token: localStorage.access_token
        }
      })
      dispatch(guestAdd(data))
      createToast('Added successfully')
    } catch (err) {
      createToast(err.response.data.message[0], 'error')
    }
  }
}

export const editGuest = (id, input) => {
  const { name, email, phoneNumber, status } = input
  return async (dispatch, getState) => {
    try {
      const { data } = await axios({
        method: 'put',
        url: '/guests/' + id,
        data: { name, email, phoneNumber, status: status === 'true' ? true : false},
        headers: {
          access_token: localStorage.access_token
        }
      })
      const { guests } = getState().guest
      const newGuests = guests.filter(guest => guest.id !== id)
      dispatch(guestChange([...newGuests, data]))
      createToast('Updated successfully')
    } catch (err) {
      createToast(err.response.data.message[0], 'error')
    }
  }
}

export const confirmGuest = (input) => {
  const { id, email, status } = input
  return async (dispatch, getState) => {
    try {
      const { data } = await axios({
        method: 'patch',
        url: '/guests/' + id,
        data: { status, email }
      })
      const { guests } = getState().guest
      const newGuests = guests.filter(guest => guest.id !== id)
      dispatch(guestChange([...newGuests, data]))
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Thanks you for your response, please check your email for the Event link',
        showConfirmButton: true,
      })
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'invalid id or email',
        showConfirmButton: true,
      })
    }
  }
}

export const deleteGuest = (id) => {
  return async (dispatch, getState) => {
    try {
      await axios({
        method: 'delete',
        url: '/guests/' + id,
        headers: {
          access_token: localStorage.access_token
        }
      })
      const { guests } = getState().guest
      const newGuests = guests.filter(guest => guest.id !== id)
      dispatch(guestChange(newGuests))
      createToast('deleted successfully')
    } catch (err) {
      console.log(err.response.data);
    }
  }
}

export const sendInvitation = () => {
  return async (dispatch) => {
    try {
      Swal.fire({
        title: 'Are you sure?',
        text: `You will send email to all guests`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        reverseButtons: true
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axios({
            url: '/guests/send',
            headers: {
              access_token: localStorage.access_token
            }
          })
          createToast('successfully send')
        }
      })
    } catch (err) {
      createToast(err.response.data.message, 'error')
    }
  }
}