import initialState from './state';

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'increase':
      var newState = Object.assign({},state);
      newState.count += 1;
      return newState;
    case 'decrease':
      var newState = Object.assign({},state);
      newState.count -= 1;
      return newState;
    default:
      return state
  }
}

export default reducer;