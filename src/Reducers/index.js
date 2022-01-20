import { combineReducers } from 'redux';
import appAuthentication from './Auth';

const rootReducer = combineReducers({
    appAuthentication: appAuthentication
});

export default rootReducer;