// Reducer

// const initialState = {
// 	home : {
// 		count : 0
// 	}
// }

// function reducer(state = initialState, action) {
//   switch (action.type) {
//     case 'increase':
//       let newState = Object.assign({},state);
//       newState.home.count += 1;
//       return newState;
//     default:
//       return state
//   }
// }

// export default reducer;
import { combineReducers } from 'redux';

import home from 'PAGES/home/reducer';
import test from 'PAGES/test/reducer';

const reducer = combineReducers({
  home,
  test
});

export default reducer;