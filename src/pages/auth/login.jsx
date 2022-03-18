import React, { useState } from "react";
import { Row, Col, Form, Input, Button, Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import actions from '../../redux/actions/auth.action';
import { Navigate } from "react-router-dom";

import './index.css';
const { Title } = Typography;

const Login = () => {

    const [email, setEmail] = useState("levanphieu99@gmail.com");
    const [password, setPassword] = useState("abcd1234@");
    const dispatch = useDispatch();

    const pressLogin = () => {
        dispatch(actions.actions.login(email, password));
    };

    const authReducer = useSelector(state => state.authReducer);

    if (authReducer.isLoggedIn) {
        return <Navigate to="/" />
    }
    return (
        <Row>
            <Col style={{ display: 'flex', alignItems: "center", background: "#5b8dd7", height: "100vh" }} span={12}>
                <div style={{ marginLeft: "5vw", marginRight: "5vw", color: "white" }}>
                    <div>
                        PROTECT YOUR HOME AND BUSSINESS
                    </div>
                    <div style={{ marginTop: " 1vw" }}>
                        Protect your home and business through Cyber Space application, by applying artificial intelligence and the Internet of Things in security monitoring and image analysis to ensure the security and safety of your home and your business wherever you are.
                    </div>
                </div>
            </Col>
            <Col span={12}>

                <div style={{ marginLeft: "100px", width: "100vh" }}>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "50%", height: "95vh", }}>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <Title level={2}>Đăng Nhập</Title>

                        </div>
                        <div>
                            <Form
                                name="normal_login"
                                className="login-form"
                                initialValues={{
                                    remember: true,
                                }}
                            >
                                <Form.Item
                                    name="Email"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Vui lòng nhập email!',
                                        },
                                    ]}
                                >
                                    <Input
                                        onChange={e => setEmail(e.target.value)}
                                        prefix={<UserOutlined className="site-form-item-icon" />}
                                        placeholder="Email" />
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Vui lòng nhập mật khẩu!',
                                        },
                                    ]}
                                >
                                    <Input
                                        onChange={e => { setPassword(e.target.value) }}
                                        prefix={<LockOutlined className="site-form-item-icon" />}
                                        type="password"
                                        placeholder="Mật khẩu"
                                    />
                                </Form.Item>
                                <Form.Item>
                                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                        <a className="login-form-forgot" href="">
                                            Quên mật khẩu ?
                                        </a>
                                    </div>

                                </Form.Item>
                                <Form.Item>
                                    <p style={{ display: 'flex', justifyContent: 'center' }}>
                                        <Button type="primary" htmlType="submit" onClick={pressLogin} className="login-form-button">
                                            Đăng Nhập
                                        </Button>
                                    </p>

                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', height: "5vh", justifyContent: 'center' }}>
                        <p>About us</p>
                    </div>
                </div>
            </Col>

        </Row >

    )
};

export default Login;
