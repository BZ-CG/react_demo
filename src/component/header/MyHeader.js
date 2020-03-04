import React, {Component} from "react";
import "./Herder.less"
import { Modal} from 'antd';
import {withRouter} from "react-router-dom";
const { confirm } = Modal;

class MyHeader extends Component {

    handlerLogout() {
        confirm({
            content: '确定退出吗?',
            onOk: () => {
                this.props.history.replace("/login");
            }
        });
    };

    render() {
        return (
            <div className="header">
                <div className="header-top">
                    <span>欢迎:超超哥</span>
                    <a href="javascript:" onClick={this.handlerLogout.bind(this)}>退出</a>
                </div>
                <div className="header-bottom">
                    <div className="header-bottom-left">
                        首页
                    </div>
                    <div className="header-bottom-right">
                        <span>11111111</span>
                        <span>222</span>
                        <span>12</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(MyHeader);