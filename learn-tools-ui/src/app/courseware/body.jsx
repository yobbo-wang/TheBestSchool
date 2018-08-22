'use strict';
import React from 'react';
import { Input,Button,Table,Tag,Pagination } from 'element-react';
import { Redirect } from 'react-router-dom';

export default class Body extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            columns: [
                {
                    label: "上传日期",
                    prop: "date",
                    width: 180
                },
                {
                    label: "授课教师",
                    prop: "name",
                    width: 180
                },
                {
                    label: "课件名称",
                    prop: "address"
                },
                {
                    label: '类型',
                    prop: 'tag',
                    width: 100,
                    filters: [{text: '实验讲义', value: '实验讲义'}, {text: '课件', value: '课件'}],
                    filterMethod(value, row) {
                        return row.tag === value;
                    },
                    render: (data, column)=>{
                        if(data['tag'] == '课件'){
                            return <Tag type="primary">{data['tag']}</Tag>
                        }else if(data['tag'] == '实验讲义'){
                            return <Tag type="success">{data['tag']}</Tag>
                        }
                    }
                }
            ],
            data: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
                tag: '实验讲义'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄',
                tag: '实验讲义'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄',
                tag: '实验讲义'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄',
                tag: '课件'
            },{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
                tag: '实验讲义'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄',
                tag: '实验讲义'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄',
                tag: '实验讲义'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄',
                tag: '课件'
            },{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
                tag: '实验讲义'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄',
                tag: '实验讲义'
            }]
        };
    }

    onSizeChange() {
    }

    onCurrentChange(){
    }

    handleOnClick(url) {
        this.setState({redirect: true, url: url});

    }

    render(){
        if (this.state.redirect) {
            return <Redirect push to={this.state.url}/>
        }
        return(
            <div>
                <div className="search">
                    <Input placeholder="请输入授课教师" style={{width: '240px'}}/>
                    <Input placeholder="请输入课件/实验讲义名" style={{width: '240px'}}/>
                    <Button type="primary" icon="search">搜索</Button>
                    <Button type="primary" icon="plus" onClick={this.handleOnClick.bind(this, '/upcourseware')}>新增</Button>
                    <Button type="primary" icon="edit" disabled={true}>修改</Button>
                    <Button type="primary" icon="delete" disabled={true}>删除</Button>
                </div>
                <Table
                    style={{width: '100%'}}
                    columns={this.state.columns}
                    data={this.state.data}
                    border={true}
                />
                <Pagination layout="total, sizes, prev, pager, next, jumper"
                            style={{marginTop: '20px'}}
                            total={40}
                            pageSizes={[10, 20, 30, 40]}
                            pageSize={10}
                            currentPage={5}
                            onSizeChange={this.onSizeChange.bind(this)}
                            onCurrentChange={this.onCurrentChange.bind(this)}
                />
            </div>
        )
    }
}