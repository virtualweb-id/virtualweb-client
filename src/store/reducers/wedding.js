const initialState = {
  wedding: {
    id: 1,
    WeddingId: 604042321,
    title: 'Pernikahan' ,
    date: '05-03-2021',
    address: 'Jakarta Selatan',
    groomName: 'Cha Eun WOo',
    brideName: 'Amanda Rizqi',
    groomImg: 'http://res.heraldm.com/phpwas/restmb_jhidxmake.php?idx=5&simg=201811201728261782524_20181120173103_01.jpg',
    brideImg: 'https://cdn1-production-images-kly.akamaized.net/U-BtD9FAg3Y6_QPoW6E7IpQLnrQ=/1x155:1080x763/640x360/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2291108/original/036690600_1532512066-22344544_139057696659969_8328654710428925952_n.jpg',
    status: false,
  },
  isLoading: false,
  isError: '',
}

export const weddingReducer = (state = initialState, action) => {
  const { type, name, payload } = action
  switch (type) {
    case `CHANGE_WEDDING_STATE_${name}`:
      return {
        ...state,
        wedding: {
          ...state.wedding,
          [name]: payload
        }
      }
    default:
      return state
  }
}