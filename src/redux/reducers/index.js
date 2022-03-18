import { combineReducers } from 'redux';
import authReducer from './auth.reducer';
import userReducer from './user.reducer';
import logReducer from './log.reducer';

const rootReducer = combineReducers({
    authReducer,
    userReducer,
    logReducer
});

export default rootReducer;