import React, {Component} from "react";
import {Tree, Form, Input} from "antd";
import PropTypes from "prop-types";
const { TreeNode } = Tree;

export default class AuthForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            checkedNameList : []
        }
    }

    static propTypes = {
        nameList: PropTypes.array
    }

    onCheck = checkedKeys => {

        console.log(checkedKeys);
        this.setState({checkedNameList: checkedKeys});
    }

    /**
     * 给父组件提供的获取已勾选复选框的列表
     * @returns {[]|*[]}
     */
    getAuthList = () => this.state.checkedNameList


    render() {
        const {nameList} = this.props;
        const formItemLayout = {
            labelCol: {span: 4},
            wrapperCol: {span: 14},
        };
        return (
            <div>
                <Form.Item label="角色名称" {...formItemLayout}>
                    <Input disabled value={nameList}/>
                </Form.Item>
                <Tree
                    checkable
                    defaultExpandAll={true}
                    onCheck={this.onCheck}
                >
                    <TreeNode title="React后台管理系统" key="0-0">
                        <TreeNode title="首页" key="home"/>

                        <TreeNode title="商品" key="0-0-0">
                            <TreeNode title="品类管理" key="0-0-0-0"/>
                            <TreeNode title="商品管理" key="0-0-0-1"/>
                        </TreeNode>

                        <TreeNode title="用户管理" key="user"/>
                        <TreeNode title="角色管理" key="auth"/>

                        <TreeNode title="图形图标" key="chart">
                            <TreeNode title="树状图" key="bar"/>
                            <TreeNode title="折线图" key="line"/>
                            <TreeNode title="饼图" key="pie"/>
                        </TreeNode>

                    </TreeNode>
                </Tree>
            </div>
        )
    }
}