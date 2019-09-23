import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/index';

const rootReducer = combineReducers({
  user: userReducer,
});

const configureStore = () => createStore(rootReducer, compose(applyMiddleware(thunk)));

export default configureStore;
