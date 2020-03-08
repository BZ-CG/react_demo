import React, {Component} from "react";
import {Button, Card} from "antd";
import ReactEcharts from "echarts-for-react";

export default class Line extends Component {

    state = {
        sale: [5, 20, 36, 10, 10, 20],
        stock: [15, 30, 16, 20, 50, 70]
    };


    update = () => {
        this.setState(state => ({
            sale: state.sale.map(sale => sale +1),
            stock: state.stock.map(stock => stock-1)
        }))
    };

    /**
     * 柱状图的配置对象
     */
    getOption = (sale, stock) => {
        return {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data:['销量', "库存"]
            },
            xAxis: {
                data: ["小米9","iPhone XR","iPhone 11 Pro Max","Macbook Pro","ASUS450J","雷柏"]
            },
            yAxis: {},
            series: [
                {
                    name: '销量',
                    type: 'line',
                    data: sale
                },
                {
                    name: '库存',
                    type: 'line',
                    data: stock
                }
            ]
        }
    };
    render() {
        const {sale, stock} = this.state;
        return (
            <div>

                <Card>
                    <Button type="primary" onClick={this.update}>更新</Button>
                </Card>

                <Card title="折线图">
                    <ReactEcharts option={this.getOption(sale, stock)} />
                </Card>
            </div>
        )
    }
}