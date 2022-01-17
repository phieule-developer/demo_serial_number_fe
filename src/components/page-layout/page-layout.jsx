import React, { createElement, useState } from "react";
import './index.css';
import { Layout, Menu, Row, Col, Dropdown, Button, message } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { NavLink, Outlet } from "react-router-dom";
import { Link, To } from "react-router-dom";

const { Header, Sider, Content, Footer } = Layout;
const PageLayout = () => {

    const [collapse, setCollapse] = useState(false);
    const toggle = () => {
        setCollapse(!collapse);
    };
    function handleMenuClick(e) {
        message.info('Click on menu item.');
        console.log('click', e);
    }
    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="1" icon={<UserOutlined />}>
                Thông tin cá nhân
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
                <Link to='auth/login'> Đăng xuất</Link>
            </Menu.Item>
        </Menu>
    );
    return (
        <Layout className="site-layout">
            <Sider className="site-layout-background" trigger={null} collapsible collapsed={collapse}>
                <div className="logo" />
                <Menu mode="inline" defaultSelectedKeys={['2']}>

                    <Menu.Item key="1" icon={<UserOutlined />}>
                        <Link to='home/dashboard'>  Trang chủ</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                        <Link to='home/user'>  Quản lý người dùng</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    <Row>
                        <Col span={6}> {
                            createElement(collapse ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                className: 'trigger',
                                onClick: toggle,
                            })}</Col>
                        <Col span={3} offset={15}>
                            <Dropdown overlay={menu}>
                                <Button>
                                    Lê Văn Phiêu
                                </Button>
                            </Dropdown>
                        </Col>
                    </Row>


                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: '80vh',
                    }}
                >
                    <Outlet />
                </Content>
                {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
            </Layout>
        </Layout>
    );
}
export default PageLayout;