
import { combineReducers } from 'redux'
import appData from './dataReducer'
import player from './player'
import navReducer from './router'

const rootReducer = combineReducers({
  // appData,
  nav: navReducer,
  appData,
  player,
})

export default rootReducer
