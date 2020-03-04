import React, {Component} from "react";
import {Select, Form, Input} from "antd";
import PropTypes from "prop-types";
const Item = Form.Item;
const Option = Select.Option;

class UserForm extends Component {

    static propTypes = {
        setForm: PropTypes.func.isRequired, //用来传递form对象的函数
    };
    componentWillMount() {
        this.props.setForm(this.props.form);
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {span: 4},
            wrapperCol: {span: 14},
        };
        return (
            <Form {...formItemLayout}>
                <Item label="用户名">
                    {
                        getFieldDecorator('name', {
                           initialValue: '',
                        })(
                            <Input placeholder="请输入用户名" />
                        )
                    }

                </Item>
                <Item label="邮箱">
                    {
                        getFieldDecorator('email', {
                           initialValue: '',
                        })(
                            <Input placeholder="请输入邮箱" />
                        )
                    }

                </Item>
                <Item label="电话">
                    {
                        getFieldDecorator('phone', {
                           initialValue: '',
                        })(
                            <Input placeholder="请输入电话" />
                        )
                    }

                </Item>
                <Item label="角色">
                    {
                        getFieldDecorator('phone', {
                           initialValue: '5',
                        })(
                            <Select placeholder="请输入电话" >
                                <Option value="1">班长</Option>
                                <Option value="2">学习委员</Option>
                                <Option value="3">体育委员</Option>
                                <Option value="4">生活委员</Option>
                                <Option value="5">学生</Option>
                            </Select>
                        )
                    }

                </Item>


            </Form>
        )
    }
}
export default Form.create()(UserForm);
