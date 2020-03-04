import React, {Component} from "react";
import {Card, Button, Input, Select, Table, Icon} from "antd";

const Option = Select.Option;
export default class Product extends Component {
    render() {
        const title = (
          <span>
              <Select defaultValue="1" style={{width: 150}}>
                  <Option value="1">按名称搜索</Option>
                  <Option value="2">按类型搜索</Option>
              </Select>
              <Input placeholder="收入关键字" style={{width: 150, margin: '0 10px'}}/>
              <Button type="primary">
                  <Icon type="search"/>
                  搜索
              </Button>
          </span>
        );

        const extra = (
            <Button type="primary">
                <Icon type="plus"/>
                添加商品
            </Button>
        );

        const datasource = [
            {
                key: '1',
                name: '2020 Mac book Pro',
                discription: '2020最新款Mac笔记本',
                price: "￥20000",
                state: '缺货',
            },
            {
                key: '2',
                name: 'ASUS J450',
                discription: '华硕电脑J450',
                price: "￥41000",
                state: '在售',
            },
            {
                key: '4',
                name: '2019外星人高配',
                discription: '2019年最新款外星人高配版',
                price: "￥25000",
                state: '在售',
            },
            {
                key: '5',
                name: 'ThinkPad',
                discription: '2019联想ThinkPad',
                price: "￥7000",
                state: '缺货',
            },

        ];
        const colummns = [
            {
                title: '商品姓名',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '商品描述',
                dataIndex: 'discription',
                key: 'age',
            },
            {
                title: '价格',
                dataIndex: 'price',
                key: 'price',
            },
            {
                title: '状态',
                dataIndex: 'state',
                key: 'state',
            },
            {
                title: '状态',
                width: 300,
                render: () => (
                    <span>
                        <a href="javascript:">详情</a><br/>
                        <a href="javascript:">修改</a>
                    </span>
                )
            },

        ];
        return (
            <Card title={title} extra={extra}>
                <Table
                    dataSource={datasource}
                    columns={colummns}
                />

            </Card>

        )
    }
}