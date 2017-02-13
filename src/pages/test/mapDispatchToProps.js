// Action

//  引入fetch
import fetch from 'isomorphic-fetch';

const action = {
	show : { type: 'TEST_SHOW_MODAL' },
	hide : { type: 'TEST_HIDE_MODAL' },
    switch : { type: 'TEST_SWITCH' },
    get : { type: 'TEST_GET' },
    result : (json) =>{
        return {
            type: 'TEST_GET_RESULT',
            payload: json
        }
    }
}

const fetchPosts = (dispatch, getState) => {
  // dispatch(action.get);
  return fetch(`/api/limitTest`)
    .then(response => response.json())
    .then(json => dispatch(action.result(json)));
};

const mapDispatchToProps = (dispatch) => {
    return {
        modalShow: () => {
            dispatch(action.show);
        },
        modalHide: () => {
            dispatch(action.hide);
        },
        switch: () => {
            dispatch(action.switch);
        },
        testGet: () =>{
            dispatch(fetchPosts);
        }
    };
};

export default mapDispatchToProps;