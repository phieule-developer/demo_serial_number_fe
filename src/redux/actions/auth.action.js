const prefix = 'AUTH_';

const types = {
    LOGIN: 'AUTH_LOGIN',
    GET_USER_INFO: prefix + 'GET_USER_INFO',

    CHECK_SESSION: prefix + 'CHECK_SESSION',

}

const actions = {
    login: (email = '', password = '') => {
        return {
            type: types.LOGIN,
            payload: {
                email,
                password
            }
        }
    },
    checkSession: () => {
        return {
            type: types.CHECK_SESSION,
            payload: {}
        }
    },

    getUserInfo: () => {
        return {
            type: types.GET_USER_INFO,
            payload: {}
        }
    },
}

const authActions = { actions, types };

export default authActions;