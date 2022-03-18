import React, { useEffect } from "react";
import { Space, Input, Button, Table, Tag } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import userActions from '../../redux/actions/user.action';

const Home = () => {
    const columns = [
        {
            title: 'Họ và tên',
            dataIndex: 'name',
            key: 'name',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Tên đăng nhập',
            dataIndex: 'user_name',
        },
        {
            title: 'Mã máy',
            dataIndex: 'computer_code',
        },
        {
            title: 'Ngày tạo',
            dataIndex: 'created_at',
            render: created_at => new Date(created_at).toLocaleString()
        }
    ];
    const dispatch = useDispatch();

    const userReducer = useSelector(state => state.userReducer);

    useEffect(() => {
        dispatch(userActions.actions.getAll());
    }, []);

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: "10px" }}>
                <Space>
                    <Input placeholder="Tìm kiếm" />
                    <Button type="primary" icon={<SearchOutlined />}>
                        Tìm kiếm
                    </Button>
                </Space>

            </div>
            <div>
                <Table columns={columns} dataSource={userReducer} />
            </div>
        </div>
    )
};

export default Home;
