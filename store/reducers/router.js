
import initialState from '../selectors/router'
import { AppNavigator } from '../../components/App'

const initStateResult = initialState(AppNavigator)
const navReducer = (state = initStateResult, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};

export default navReducer
