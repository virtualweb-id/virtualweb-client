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

export const fetchWedding = (history) => {
  return async (dispatch, getState) => {
    try {
      const { data:wedding } = await axios({
        method: 'get',
        url: '/weddings',
        headers: {
          access_token: localStorage.access_token
        }
      })
      dispatch(changeWeddingInfo(wedding))
      if(!wedding.id) history.push('/create')
    } catch (err) {
      console.log(err.response.data);
    }
  }
}

export const creatWedding = (input, history) => {
  console.log('masuk sini')
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
      history.push('/dashboard')
    } catch (err) {
      console.log(err);
    }
  }
}

export const updateWedding = () => {
  return async (dispatch, getState) => {
    try {
      const { wedding } = getState().wedding
      console.log(wedding);
      const { data } = await axios({
        method: 'put',
        url: `/weddings/${wedding.id}`,
        data: wedding,
        headers: {
          access_token: localStorage.access_token
        }
      })
      dispatch(changeWeddingInfo(data))
    } catch (err) {
      console.log(err.response.data);
    }
  }
}


