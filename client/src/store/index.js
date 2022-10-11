import {
  createStore, applyMiddleware, compose, combineReducers,
} from 'redux';
import promiseMiddleware from 'redux-promise';
import thunk from 'redux-thunk';
import auctions from './auctions/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    auctions,
  }),
  composeEnhancers(applyMiddleware(thunk, promiseMiddleware)),
);

export default store;
