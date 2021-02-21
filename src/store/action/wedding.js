import axios from "../../api/axios"

export const changeWeddingState = (name, payload) => {
  return {
    type: `CHANGE_WEDDING_STATE_${name}`,
    name,
    payload
  }
}

export const changeWeddingInfo = (payload) => {
  return {
    type: 'CHANGE_WEDDING',
    payload
  }
}

export const fetchWedding = () => {
  return async (dispatch, getState) => {
    try {
      const { data:wedding } = await axios({
        method: 'get',
        url: '/weddings',
        headers: {
          access_token: localStorage.access_token
        }
      })
      console.log(wedding, 'ini wedding')
      dispatch(changeWeddingInfo(wedding))
    } catch (err) {
      console.log(err.response.data);
    }
  }
}

export const creatWedding = (input) => {
  const { title, date, address, groomName, groomImg, brideImg, brideName, status } = input
  return async (dispatch, getState) => {
    try {
      const { data:wedding } = await axios({
        method: 'post',
        url: '/weddings',
        data: { title, date, address, groomName, groomImg, brideImg, brideName, status: status === 'true' ? true : false},
        headers: {
          access_token: localStorage.access_token
        }
      })
      dispatch(changeWeddingInfo(wedding))
    } catch (err) {
      console.log(err);
    }
  }
}

export const updateWedding = (input) => {
  console.log('masuk sini')
  const { title, date, address, groomName, groomImg, brideImg, brideName, status, WeddingId, id } = input
  return async (dispatch, getState) => {
    try {
      const { data:wedding } = await axios({
        method: 'put',
        url: `/weddings/${id}`,
        data: { title, date,WeddingId, id, address, groomName, groomImg, brideImg, brideName, status: status === 'true' ? true : false},
        headers: {
          access_token: localStorage.access_token
        }
      })
      dispatch(changeWeddingInfo(wedding))
    } catch (err) {
      console.log(err);
    }
  }
}


