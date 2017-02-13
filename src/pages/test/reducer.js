import initialState from './state';
// console.log(initialState);

function reducer(state = initialState, action) {
  let newState = Object.assign({},state);
  switch (action.type) {
    case 'TEST_SHOW_MODAL':
      newState.visible = true;
      return newState;
    case 'TEST_HIDE_MODAL':
      newState.visible = false;
      return newState;
    case 'TEST_SWITCH':
      newState.context = !newState.context;
      return newState;
    case 'TEST_GET':
      console.log("get");
      return newState;
    case 'TEST_GET_RESULT':
      newState.isGet = true;
      console.log(action.payload);
      return newState;
    default:
      return state;
  }
}

export default reducer;