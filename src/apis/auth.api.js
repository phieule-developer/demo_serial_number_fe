import { request } from "apis/base.api";
export function register(data) {
    return request(
        {
            url: "auth/v1/sign_up",
            method: "POST",
            data,
        },
        false
    );
};
export function login(data) {
    return request(
        {
            url: "auth/v1/sign_in",
            method: "POST",
            data,
        },
        false
    );
}
// check session
export function checkSession() {
    return request(
        {
            url: "auth/v1/check_session",
            method: "GET",
        },
        false,
        false
    );
}

// logout
export function logout() {
    return request({
        url: "auth/v1/sign_out",
        method: "POST",
    });
}