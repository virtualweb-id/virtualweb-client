import imgholder from '../../assets/couple1.jpg'
import imgholder2 from '../../assets/couple2.jpg'

const initialState = {
  invitation: {
    brigeNickname: 'Amanda', 
    groomNickname: 'Eunwoo', 
    story: `❝ Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir. ❞

    (Ar-Rum: 21)`, 
    title: 'Bismillah', 
    backgroundImg: imgholder, 
    additionalImg: imgholder2, 
    videoUrl: 'https://www.youtube.com/watch?v=3-NBA3aSMqc&ab_channel=WildOakFilms-WeddingVideo%2CVideography', 
    backgroundColor: '#1687a7', 
    textColor: '#d3e0ea', 
    timeEvent1: '18.00', 
    timeEvent2: '19.00', 
    youtubeUrl: 'https://www.youtube.com/watch?v=gIB2egm7tL8&ab_channel=KOMPASTV'
  },
  isLoading: false,
  isError: '',
}

export const invitationReducer = (state = initialState, action) => {
  const { type, name, payload } = action
  console.log(type, name, payload, '<<<');
  switch (type) {
    case `CHANGE_STATE_${name}`:
      return {
        ...state,
        invitation: {
          ...state.invitation,
          [name]: payload
        }
      }
    default:
      return state
  }
}