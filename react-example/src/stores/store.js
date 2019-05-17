import {createStore} from 'redux';
import rootReducer from '../reducers/rotateReducer';

const configureStore = createStore(rootReducer, { rotating: true });

export default configureStore;