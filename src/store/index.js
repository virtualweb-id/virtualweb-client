import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { user, guest, wedding, invitation } from './reducers'

const rootRaducer = combineReducers({
  user,
  guest,
  wedding,
  invitation
})

const store = createStore(
  rootRaducer,
  applyMiddleware(thunk)
)

export default store