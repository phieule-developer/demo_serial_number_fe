import { message, Modal } from "antd";
import axios from "axios";
import qs from "qs";

export const instance = axios.create({
    baseURL: "/api",
    headers: {
        "content-type": "application/json",
    },
    paramsSerializer: (params) => qs.stringify(params),
});

export function request(
    config,
    isDisplayError = true,
    isDisplay401Error = true
) {
    return new Promise((resolve, reject) => {
        instance(config)
            .then((res) => resolve(res))
            .catch((error) => {
                const { response } = error;

                if (401 === response?.status) {
                    if (isDisplay401Error) {
                        Modal.error({
                            centered: true,
                            title: "401 - Unauthorized",
                            content:
                                "Your authorization failed. Please try refreshing the page and fill in the correct login details.",
                        });
                    }
                } else if (isDisplayError) {
                    if (response?.data.message) {
                        message.error(response?.data.message);
                    } else {
                        message.error(error.message);
                    }
                }
                reject(error);
            });
    });
}

// Add a request interceptor
instance.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
instance.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error

        return Promise.reject(error);
    }
);
