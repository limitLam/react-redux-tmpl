import { createStore } from 'redux';

import reducer from '../reducer';

// Store
const store = createStore(reducer);

export default store;