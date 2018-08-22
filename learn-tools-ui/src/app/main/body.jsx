'use strict';
import React from 'react';
import { Layout } from 'element-react'
import echarts from 'echarts/lib/echarts';
import  'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/axis';
import 'echarts/lib/component/legend';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/pie';

export default class Body extends React.Component {

    componentDidMount(){
        const userVolume = echarts.init(document.getElementById('userVolume'));
        const learningMaterials = echarts.init(document.getElementById('learningMaterials'));
        userVolume.setOption({
            title: { text: '用户量统计' },
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['App下载量','活跃用户量','课件订阅量']
            },
            xAxis: [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ['周一','周二','周三','周四','周五','周六','周日']
                }
            ],
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            yAxis : [{
                    type : 'value'
            }],
            series: [{
                name:'App下载量',
                type:'line',
                stack: '总量',
                data:[120, 132, 101, 134, 90, 230, 210]
            },{
                name:'活跃用户量',
                type:'line',
                stack: '总量',
                data:[220, 182, 191, 234, 290, 330, 310]
            },{
                name:'课件订阅量',
                type:'line',
                stack: '总量',
                data:[150, 232, 201, 154, 190, 330, 410]
            }]
        });
        learningMaterials.setOption({
            title : {
                text: '资料学习情况占比',
                subtext: '实时刷新数据',
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['精品课程','实验讲义','网咯精品课程']
            },
            series : [
                {
                    name: '资料学习情况占比',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:335, name:'精品课程'},
                        {value:310, name:'实验讲义'},
                        {value:234, name:'网咯精品课程'}
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        });
    }

    render(){
        return (
            <div>
                <Layout.Row>
                    <Layout.Col span="12">
                        <div id={"userVolume"} style={{height:400}}>
                        </div>
                    </Layout.Col>
                    <Layout.Col span="12">
                        <div id={"learningMaterials"} style={{height:400}}>
                        </div>
                    </Layout.Col>
                </Layout.Row>
            </div>
        )
    }

}