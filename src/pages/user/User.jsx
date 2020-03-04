import React, {Component} from "react";
import {Button, Table, Form, Card, Modal, message} from "antd";
import UserForm from "./UserForm";

export default class User extends Component {

    state = {
        showModal:false
    };

    deleteUser = (user) => {
        Modal.confirm({
           title: `确定删除${user.name}吗?`,
           onOk: () => {
                message.success("删除成功!");
           }
        });
    };

    render() {
        const cardTitle = <Button type="primary" onClick={() => {this.setState({showModal: true})}}>创建用户</Button>;
        const dataSource = [
            {
                "name": "钢铁侠",
                "email": "1245978718@qq.com",
                "phone": "15082383272",
                "create_date": "2020-02-10 21:17:15",
                "role": "经理",
            },
            {
                "name": "美国队长",
                "email": "1245978718@qq.com",
                "phone": "15082383272",
                "create_date": "2020-02-10 21:17:15",
                "role": "队长",
            },
            {
                "name": "黑寡妇",
                "email": "1245978718@qq.com",
                "phone": "15082383272",
                "create_date": "2020-02-10 21:17:15",
                "role": "体育委员",
            },
            {
                "name": "猩红女巫",
                "email": "1245978718@qq.com",
                "phone": "15082383272",
                "create_date": "2020-02-10 21:17:15",
                "role": "生活委员",
            },
        ];

        const columns = [
            {
                "title": "用户名",
                "dataIndex": "name"
            },
            {
                "title": "邮箱",
                "dataIndex": "email"
            },
            {
                "title": "电话",
                "dataIndex": "phone"
            },
            {
                "title": "注册时间",
                "dataIndex": "create_date"
            },
            {
                "title": "所属角色",
                "dataIndex": "role"
            },
            {
                "title": "操作",
                render: (user) => (
                    <span>
                        <a href="javascript:">修改</a>
                        <a href="javascript:" style={{"padding-left": 20}}
                           onClick={(user) => this.deleteUser(user)}>删除</a>
                    </span>
                ),
            },

        ];


        return (
            <Card title={cardTitle}>
                <Table
                    rowKey="name"
                    dataSource={dataSource}
                    columns={columns}
                />
                <Modal
                    title="添加权限"
                    visible={this.state.showModal}
                    onOk={this.handlerOk}
                    onCancel={() => {
                        this.setState({showModal: false});
                    }}
                >
                    <UserForm setForm={form => this.form = form}/>
                </Modal>
            </Card>
        )
    }
}