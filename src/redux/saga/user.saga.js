import { call, put, takeEvery } from 'redux-saga/effects'

const apiUrl = `http://13.212.239.178:8000/api/user`;
function getAllUser() {
    return fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .catch(() => { })
};

function* getAllUserSaga() {
    try {
        const data = yield call(getAllUser);
        if (data.status === 200) {
            yield put({ type: 'GET_USERS_SUCCESS', payload: data.data });
        } else {
            yield put({ type: 'GET_USERS_FAILED', payload: [] });
        }
    } catch (e) {
        yield put({ type: 'GET_USERS_FAILED', payload: [] });
    }
}

function* userSaga() {
    yield takeEvery("GET_USERS", getAllUserSaga);
}

export default userSaga;