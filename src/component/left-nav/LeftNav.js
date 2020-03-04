import React, {Component} from "react";
import "./LeftNav.less"
import logo from "../../asserts/images/logo.svg"
import {Link, withRouter} from "react-router-dom";
import {Menu, Icon, Button} from 'antd';

const {SubMenu} = Menu;

class LeftNav extends Component {


    render() {
        // 必须得路由组件才能使用location
        const path = this.props.location.pathname;

        return (
            <div>
                <div className="left-nav">
                    <Link to="/" className="left-nav-header">
                        <img src={logo}/>
                        <h1>React 后台管理</h1>
                    </Link>
                </div>
                <Menu
                    mode="inline"
                    theme="dark"
                    defaultSelectedKeys={[path]}
                >
                    <Menu.Item key="/admin/home">
                        <Link to="/admin/home">
                            <Icon type="pie-chart"/>
                            <span>首页</span>
                        </Link>
                    </Menu.Item>

                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                                <Icon type="mail"/>
                                <span>商品</span>
                              </span>}
                    >
                        <Menu.Item key="/admin/category">
                            <Link to="/admin/category">
                                <Icon type="pie-chart"/>
                                <span>品类管理</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="/admin/product">
                            <Link to="/admin/product">
                                <Icon type="pie-chart"/>
                                <span>商品管理</span>
                            </Link>
                        </Menu.Item>
                    </SubMenu>

                    <Menu.Item key="/admin/user">
                        <Link to="/admin/user">
                            <Icon type="user"/>
                            <span>用户管理</span>
                        </Link>
                    </Menu.Item>

                    <Menu.Item key="/admin/role">
                        <Link to="/admin/role">
                            <Icon type="pie-chart"/>
                            <span>角色管理</span>
                        </Link>
                    </Menu.Item>

                    <SubMenu
                        key="sub2"
                        title={
                            <span>
                                <Icon type="mail"/>
                                <span>图形图表</span>
                              </span>}
                    >
                        <Menu.Item key="/admin/bar">
                            <Link to="/admin/bar">
                                <Icon type="pie-chart"/>
                                <span>树状图</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="/admin/line">
                            <Link to="/admin/line">
                                <Icon type="pie-chart"/>
                                <span>折线图</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="/admin/pie">
                            <Link to="/admin/pie">
                                <Icon type="pie-chart"/>
                                <span>饼图</span>
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}

/**
 * withRouter 高阶函数，包装一个非路由组件，返回一个新的组件
 */
export default withRouter(LeftNav);