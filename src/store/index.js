import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { user, wedding } from './reducers'

const rootRaducer = combineReducers({
  user,
  wedding
})

const store = createStore(
  rootRaducer,
  applyMiddleware(thunk)
)

export default store