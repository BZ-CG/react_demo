import React, {Component} from "react";
import {Card, Table, Button, Form, Input, Modal, message} from "antd";
import AuthForm from "./AuthForm";

export default class Role extends Component {

    constructor(props) {
        super(props);

        this.auth = React.createRef();
        this.state = {
            selectedRoleKeyList:[],
            showAuth: false
        }
    }

    onRow = (role) => {
         return {
             onClick: event => {
                 this.selectRow(role);
             }
         }
    };

    selectRow = (role) => {
        const selectedRoleKeyList = this.state.selectedRoleKeyList;

        if (selectedRoleKeyList.indexOf(role.name) >= 0) {
            selectedRoleKeyList.splice(selectedRoleKeyList.indexOf(role.name), 1);
        } else {
            selectedRoleKeyList.push(role.name);
        }

        this.setState({selectedRoleKeyList: selectedRoleKeyList});
    };

    onSelectedKeyChange = (selectedRowKeys) => {
        this.setState({selectedRoleKeyList: selectedRowKeys});
    };

    handlerOk = () => {
        const authNameList = this.auth.current.getAuthList();

        console.log("Role 组件获取到的复选框列表:" + authNameList);

        this.setState({showAuth: false});
        message.success("权限设置成功");
    }

    render() {
        const title = (
            <span>
                <Button type="primary">创建角色</Button>&nbsp;&nbsp;
                <Button type="primary" disabled = {!this.state.selectedRoleKeyList.length} onClick={() => {this.setState({showAuth:true})}}>设置角色权限</Button>
            </span>
        );

        const dataSource = [
            {
                "name": "钢铁侠",
                "createTime": "2020-02-10 21:17:15",
                "authTime": "2020-02-10 21:18:15",
                "author": "张超"
            },
            {
                "name": "美国队长",
                "createTime": "2020-02-10 21:17:15",
                "authTime": "2020-02-10 21:18:15",
                "author": "张超"
            },
            {
                "name": "黑寡妇",
                "createTime": "2020-02-10 21:17:15",
                "authTime": "2020-02-10 21:18:15",
                "author": "张超"
            },
            {
                "name": "猩红女巫",
                "createTime": "2020-02-10 21:17:15",
                "authTime": "2020-02-10 21:18:15",
                "author": "张超"
            },
            {
                "name": "绿巨人",
                "createTime": "2020-02-10 21:17:15",
                "authTime": "2020-02-10 21:18:15",
                "author": "张超"
            },
            {
                "name": "奇异博士",
                "createTime": "2020-02-10 21:17:15",
                "authTime": "2020-02-10 21:18:15",
                "author": "张超"
            },
            {
                "name": "蜘蛛侠",
                "createTime": "2020-02-10 21:17:15",
                "authTime": "2020-02-10 21:18:15",
                "author": "张超"
            },
            {
                "name": "灭霸",
                "createTime": "2020-02-10 21:17:15",
                "authTime": "2020-02-10 21:18:15",
                "author": "张超"
            },
            {
                "name": "黑豹",
                "createTime": "2020-02-10 21:17:15",
                "authTime": "2020-02-10 21:18:15",
                "author": "张超"
            },
            {
                "name": "雷神",
                "createTime": "2020-02-10 21:17:15",
                "authTime": "2020-02-10 21:18:15",
                "author": "张超"
            },
        ];

        const columns = [
            {
                "title": "角色名称",
                "dataIndex": "name"
            },
            {
                "title": "创建时间",
                "dataIndex": "createTime"
            },
            {
                "title": "授权时间",
                "dataIndex": "authTime"
            },
            {
                "title": "授权人",
                "dataIndex": "author"
            },
        ];

        const {selectedRoleKeyList} = this.state;
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
                this.onSelectedKeyChange(selectedRowKeys);
            },
            getCheckboxProps: record => ({
                disabled: record.name === 'Disabled User', // Column configuration not to be checked
                name: record.name,
            }),
            selectedRowKeys: selectedRoleKeyList
        };
        return (
            <Card title={title}>
                <Table
                    rowKey="name"
                    dataSource={dataSource}
                    columns={columns}
                    rowSelection={rowSelection}
                    onRow={this.onRow}

                />

                <Modal
                    title="添加权限"
                    visible={this.state.showAuth}
                    onOk={this.handlerOk}
                    onCancel={() => {
                        this.setState({showAuth: false});
                    }}
                    // okText="添加"
                    // cancelText="取消"
                >
                    <AuthForm ref={this.auth} nameList={selectedRoleKeyList}/>
                </Modal>
            </Card>
        )
    }
}