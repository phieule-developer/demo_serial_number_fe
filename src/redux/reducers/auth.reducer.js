import authActions from '../actions/auth.action';
const initialState = {
    isLoggedIn: false,
};

const authReducer = (state = initialState, action) => {
    // let types = authActions.types;
    switch (action.type) {
        case "AUTH_CHECK_SESSION_SUCCESS":
            return {
                ...state,
                isLoggedIn: true,
            }
        case "AUTH_CHECK_SESSION_FAILED":
            return {
                ...state,
                isLoggedIn: false,
            }
        case "AUTH_LOGIN_SUCCESS":
            return {
                ...state,
                isLoggedIn: true,
            }
        case "AUTH_LOGIN_FAILED":
            return {
                ...state,
                isLoggedIn: true,
            }
        default:
            return state;
    }
}
export default authReducer;