// Action
const action = {
	increase : { type: 'increase' },
	decrease : { type: 'decrease' }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncreaseClick: () => {
            dispatch(action.increase);
        },
        onDecreaseClick: () => {
            dispatch(action.decrease);
        },
    };
};

export default mapDispatchToProps;