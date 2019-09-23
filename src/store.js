import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/index';

const rootReducer = combineReducers({
  user: userReducer,
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
