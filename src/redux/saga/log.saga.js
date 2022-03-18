import { call, put, takeEvery } from 'redux-saga/effects'

const apiUrl = `http://13.212.239.178:8000/api/log`;
function getAllLog() {
    return fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .catch(() => { })
};

function* getAllLogSaga() {
    try {
        console.log('vao day nao')
        const data = yield call(getAllLog);

        console.log(data);
        if (data.status === 200) {
            yield put({ type: 'GET_LOG_SUCCESS', payload: data.data });
        } else {
            yield put({ type: 'GET_LOG_FAILED', payload: [] });
        }
    } catch (e) {
        yield put({ type: 'GET_USERS_FAILED', payload: [] });
    }
}

function* logSaga() {
    yield takeEvery("GET_LOGS", getAllLogSaga);
}

export default logSaga;