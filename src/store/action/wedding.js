import axios from '../../api/axios'

export const changeWeddingState = (name, payload) => {
  return {
    type: `CHANGE_WEDDING_STATE_${name}`,
    name,
    payload
  }
}

export const fetchWedding = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        url: '/weddings',
        headers: {
          access_token: localStorage.access_token
        }
      })
      console.log(data);
    } catch (err) {
      console.log(err.response.data);
    }
  }
}