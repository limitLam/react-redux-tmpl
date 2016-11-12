// Reducer

const initialState = {
	home : {
		count : 0
	}
}

function counter(state = initialState, action) {
  const count = state.count
  switch (action.type) {
    case 'increase':
      return { count: count + 1 }
    default:
      return state
  }
}

export default counter;