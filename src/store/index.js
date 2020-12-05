import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger/src';
import rootReducer from '../reducers';

const logger = createLogger();

const store = createStore(
    rootReducer,
    undefined,
    applyMiddleware(logger)
);

export default store;
