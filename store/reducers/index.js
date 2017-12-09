
import { combineReducers } from 'redux'
// import appData from './dataReducer'
import navReducer from './router'

const rootReducer = combineReducers({
  // appData,
  nav: navReducer,
})

export default rootReducer
