import { createStore, combineReducers } from 'redux';
import registerReducer from './reducers/index';

const rootReducer = combineReducers({
  registration: registerReducer,
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
