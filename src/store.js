import { configureStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore(rootReducer, applyMiddleware(thunk));

export default store;
