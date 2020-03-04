import React, {Component} from "react";
import {Button, Card, Form, Icon, Input, Modal, Table} from "antd";

export default class Category extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: null
        }
    }

    handlerShowModel = () => {
        this.setState({
           visible : true
        });
    };

    handlerCancel = () => {
      this.setState({
         visible: false
      });
    };

    render() {
        const title = "一级标题";
        const extra = (
            <Button type="primary" onClick={this.handlerShowModel}>
                <Icon type="plus"/>
                添加
            </Button>
        );

        const columns = [
            { title: '分类名称', dataIndex: 'name', key: 'name' },
            {
                title: '操作',
                width: 300,
                render: () => (
                    <span>
                        <a href="javascript:">修改分类</a>
                        <a href="javascript:" style={{"padding-left": 20}}>查看分类</a>
                    </span>
                ),
            },
        ];

        const data = [
            {
                key: 1,
                name: '家用电器',
            },
            {
                key: 2,
                name: '电子产品',
            },
            {
                key: 3,
                name: '服饰',
            },
        ];
        return (
            <div>
                <Card title={title} extra={extra}>
                    <Table
                        bordered
                        columns={columns}
                        dataSource={data}
                        pagination={{defaultPageSize: 2}}
                    />
                    <Modal
                        title="添加分类"
                        visible={this.state.visible}
                        onOk={this.handlerCancel}
                        onCancel={this.handlerCancel}
                        okText="添加"
                        cancelText="取消"
                    >
                        <Form className="login-form">

                        </Form>
                    </Modal>
                </Card>
            </div>
        )
    }
}