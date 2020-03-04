import React, {Component} from "react";
import {Form, Icon, Input, Button, message} from 'antd';

import logo from "../../asserts/images/logo.svg";
import "./login.less";
class Login extends Component {

    handleSubmit = (event) => {
        event.preventDefault();
        const form = this.props.form;
        form.validateFields((errors, values) => {
           if (!errors) {
               console.log("校验通过发送登录请求,value:", values);
               message.success("登录成功");
               this.props.history.replace("/admin");

           } else {
              console.log("校验失败,value:", values);
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login">
                <header className="login-header">
                    <img src={logo}></img>
                    <h1>React项目：后端管理平台</h1>
                </header>
                <section className="login-content">
                    <h1>用户登录</h1>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {
                                getFieldDecorator("Username", {rules:[
                                    {required: true, whiteSpace: true, message: "Please input Username"},
                                    {min: 4, message: "Username 至少4位"},
                                    {max: 10, message: "Username 不超过10位"},
                                    {pattern: /^[a-zA-Z0-9_]+$/, message: "Username 必须是英文数字或下划线"},
                                    ]
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Username"
                                    />,
                                )
                            }
                        </Form.Item>
                        <Form.Item>
                            {
                                getFieldDecorator("Password", {rules:[{required: true, message: "Please input Password"}]})(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="Password"
                                    />
                                )
                            }

                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </section>

            </div>
        )
    }
}

const WrappedLogin = Form.create()(Login);
export default WrappedLogin;