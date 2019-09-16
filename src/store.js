import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/index';

const rootReducer = combineReducers({
  user: userReducer,
});

const configureStore = () => createStore(rootReducer, applyMiddleware(thunk));

export default configureStore;
