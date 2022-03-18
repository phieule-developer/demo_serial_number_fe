import React, { useEffect } from "react";
import { Space, Input, Button, Table } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import logActions from '../../redux/actions/log.action';

const UserManagement = () => {

    const columns = [
        {
            title: 'IP',
            dataIndex: 'ip',
            key: 'ip',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Phương thức',
            dataIndex: 'method',
        },
        {
            title: 'Đường dẫn',
            dataIndex: 'path',
        },
        {
            title: 'Nội dung',
            dataIndex: 'content',
        },
        {
            title: 'Ngày tạo',
            dataIndex: 'created_at',
            render: created_at => new Date(created_at).toLocaleString()
        }
    ];
    const dispatch = useDispatch();

    const logReducer = useSelector(state => state.logReducer);

    useEffect(() => {
        console.log(logReducer);
        dispatch(logActions.actions.getAll());
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
                <Table columns={columns} dataSource={logReducer} />
            </div>
        </div>
    );
};

export default UserManagement;
