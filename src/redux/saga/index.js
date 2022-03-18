import { all } from 'redux-saga/effects';
import authSaga from './authSaga';
import userSaga from './user.saga';
import logSaga from './log.saga';

export default function* rootSaga() {
    yield all([
        authSaga(),
        userSaga(),
        logSaga()
    ])
}