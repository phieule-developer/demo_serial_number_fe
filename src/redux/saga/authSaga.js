import { call, put, takeEvery } from 'redux-saga/effects'

const apiUrl = `https://haochi.vn/api/auth/v1/check_session`;
function checkSessionApi() {
    return fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .catch(() => { })
};
function loginApi(email, password) {
    return fetch("https://haochi.vn/api/auth/v1/sign_in", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    })
        .then(response => response.json())
        .catch(error => error.json())
}

function* checkSession() {
    try {
        const result = yield call(checkSessionApi);

        if (result.statusCode === 200) {
            yield put({ type: 'AUTH_CHECK_SESSION_SUCCESS', payload: result });
        } else {
            yield put({ type: 'AUTH_CHECK_SESSION_FAILED', payload: {} });
        }
    } catch (e) {
        yield put({ type: 'AUTH_CHECK_SESSION_FAILED', payload: {} });
    }
}
function* login(action) {
    try {
        // const result = yield call(loginApi(action.payload.email, action.payload.password));

        // if (result.statusCode === 200) {

        yield put({
            type: 'AUTH_LOGIN_SUCCESS', payload: {}
            //     });
            // } else {
            //     yield put({ type: 'AUTH_LOGIN_FAILED', payload: {} });
        })
    } catch (e) {
        yield put({ type: 'AUTH_LOGIN_FAILED', payload: {} });
    }
}

function* authSaga() {
    yield takeEvery('AUTH_CHECK_SESSION', checkSession);
    yield takeEvery('AUTH_LOGIN', login);
}

export default authSaga;