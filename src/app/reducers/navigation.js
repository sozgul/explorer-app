
import {createNavigationReducer} from 'react-navigation-redux-helpers';
import {RootNavigator} from '../navigators';

// NOTE: We will need a custom navigation reducer eventually, so keeping this code temporarily.

//import { HOME, SIGNUP } from '../navigators/screen_names';

// const firstAction = RootNavigator.router.getActionForPathAndParams(HOME);
// const tempNavState = RootNavigator.router.getStateForAction(firstAction);
// const secondAction = RootNavigator.router.getActionForPathAndParams(SIGNUP);
// const initialNavState = RootNavigator.router.getStateForAction(
//   secondAction,
//   tempNavState
// );

// const navigationData = (state = initialNavState, action) => {
//   const nextState = RootNavigator.router.getStateForAction(
//     action,
//     state
//   );

//   return nextState || state;
// };

// export default navigationData;

export default createNavigationReducer(RootNavigator);