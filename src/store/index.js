import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { wedding } from './reducers'

const rootRaducer = combineReducers({
  wedding
})

const store = createStore(
  rootRaducer,
  applyMiddleware(thunk)
)

export default store