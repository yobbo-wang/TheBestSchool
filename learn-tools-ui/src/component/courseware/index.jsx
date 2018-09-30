'use strict';
import React from 'react';
import {Button, Input, Pagination, Table, Tag} from 'element-react';
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";

import { queryCourseWareDate } from '../../store/courseware/action'

class Index extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            pageSize: 10,
            currentPage: 1,
            total: 0,
            columns: [ { label: "上传日期", prop: "date", width: 180  },
                { label: "授课教师",  prop: "name", width: 180  },
                { label: "课件名称", prop: "address" },
                { label: '类型', prop: 'tag', width: 100, filters: [{text: '实验讲义', value: '实验讲义'}, {text: '课件', value: '课件'}],
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
            ]
        };
    }

    componentDidMount(){
        // query data
        this.queryData();
    }

    onSizeChange(size) {
        this.setState({ pageSize: size });
        this.queryData();
    }

    onCurrentChange(currentPage){
        this.setState({ currentPage: currentPage })
        this.queryData();
    }

    queryData() {
        this.props.queryCourseWareDate(this.state.currentPage, this.state.pageSize, "dataList");
    }

    handleOnClick(url) {
        this.setState({redirect: true, url: url});
    }

    render(){
        console.log(this.props)
        if (this.state.redirect) {
            return <Redirect push to={this.state.url}/>
        }
        return(
            <div>
                <div className="body-child search">
                    <Input placeholder="请输入授课教师" style={{width: '240px'}}/>
                    <Input placeholder="请输入课件/实验讲义名" style={{width: '240px'}}/>
                    <Button type="primary" icon="search">搜索</Button>
                    <Button type="success" icon="plus" onClick={this.handleOnClick.bind(this, '/upcourseware')}>新增</Button>
                    <Button type="primary" icon="edit" disabled={true}>修改</Button>
                    <Button type="primary" icon="delete" disabled={true}>删除</Button>
                </div>
                <Table
                    style={{width: '100%'}}
                    columns={this.state.columns}
                    data={this.props.coursewareData.dataList}
                    border={true}
                />
                <Pagination layout="total, sizes, prev, pager, next, jumper"
                            style={{marginTop: '20px'}}
                            total={this.state.total}
                            pageSizes={[10, 20, 30, 40]}
                            pageSize={10}
                            onSizeChange={this.onSizeChange.bind(this)}
                            onCurrentChange={this.onCurrentChange.bind(this)}
                />
            </div>
        )
    }
}

export default connect(state => ({
    coursewareData: state.coursewareData,
}), {
    queryCourseWareDate
})(Index);