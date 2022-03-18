import React from "react";
import { useSelector } from 'react-redux'
import PageLayout from "../page-layout/page-layout"
import { Navigate } from "react-router-dom";

const AuthLayOut = () => {

    const authReducer = useSelector(state => state.authReducer);

    // if (!authReducer.isLoggedIn) {
    //     return <Navigate to="auth/login" />
    // }

    return (
        <PageLayout />
    );
};
export default AuthLayOut;