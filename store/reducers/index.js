
import { combineReducers } from 'redux'
import appData from './dataReducer'
import navReducer from './router'

const rootReducer = combineReducers({
  // appData,
  nav: navReducer,
  appData,
})

export default rootReducer
