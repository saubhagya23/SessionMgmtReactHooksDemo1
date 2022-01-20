import { createStore, applyMiddleware } from 'redux';
import {
    appMiddleware,
    apiMiddleware
} from '../Middlewares';
import rootReducer from '../Reducers';

// applyMiddleware: Creates a store enhancer that applies middleware to 
// the dispatch method of the Redux store. This is handy for a variety 
// of tasks, such as expressing asynchronous actions in a concise manner, 
// or logging every action payload.
const createStoreWithMiddleware = applyMiddleware(
    appMiddleware,
    apiMiddleware
)(createStore);

// store created and reducer linked to store.
const store = createStoreWithMiddleware(rootReducer);

export default store;