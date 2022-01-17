import React from "react";
import { Row, Col, Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './index.css';

const Login = () => {
    const onFinish = (values) => {
    };

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
                        <div style={{ display: "flex", justifyContent: "center", marginBottom: "50px" }}>
                            <div>ĐĂNG NHẬP</div>
                        </div>
                        <div>
                            <Form
                                name="normal_login"
                                className="login-form"
                                initialValues={{
                                    remember: true,
                                }}
                                onFinish={onFinish}
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
                                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
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
                                        <Button type="primary" htmlType="submit" className="login-form-button">
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
