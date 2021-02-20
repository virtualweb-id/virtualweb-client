import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { user, guest, wedding } from './reducers'

const rootRaducer = combineReducers({
  user,
  guest,
  wedding
})

const store = createStore(
  rootRaducer,
  applyMiddleware(thunk)
)

export default store