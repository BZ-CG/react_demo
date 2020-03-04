import React, {Component} from "react";
import {Layout} from 'antd';
import LeftNav from "../../component/left-nav/LeftNav";
import MyHeader from "../../component/header/MyHeader";
import Home from "../home/home";
import Category from "../category/Category";
import Product from "../product/Product";
import User from "../user/User";
import Role from "../role/Role";
import Bar from "../charts/Bar";
import Line from "../charts/Line";
import Pie from "../charts/Pie";
import {Redirect, Switch, Route} from "react-router-dom"

const {Footer, Sider, Content, Header} = Layout;
export default class Admin extends Component {


    render() {
        return (
            <Layout style={{height: '100%'}}>
                <Sider>
                    <LeftNav/>
                </Sider>
                <Layout>
                    <MyHeader>header</MyHeader>
                    <Content style={{margin: 20, backgroundColor: "#fff"}}>
                        <Switch>
                            <Route exact path="/admin/home" component={Home}/>
                            <Route  path="/admin/category" component={Category}/>
                            <Route  path="/admin/product" component={Product}/>
                            <Route  path="/admin/user" component={User}/>
                            <Route  path="/admin/role" component={Role}/>
                            <Route  path="/admin/bar" component={Bar}/>
                            <Route  path="/admin/line" component={Line}/>
                            <Route  path="/admin/pie" component={Pie}/>
                            <Redirect to="/admin/home"/>
                        </Switch>

                    </Content>
                    <Footer style={{textAlign: "center", color: "#cccccc"}}>欢迎欢迎，热烈欢迎</Footer>
                </Layout>
            </Layout>
        )
    }
}