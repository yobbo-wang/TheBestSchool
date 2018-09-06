'use strict';
import React from 'react';
import {Table, Button, Loading, Pagination} from 'element-react'
import Add from './add.jsx';
import {requestData} from '../../../store/user/action'
import {connect} from "react-redux";

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageSize: 10,
            currentPage: 1,
            total: 0,
            loading: false, //TODO
            dialogVisible: false,
            userId: '',
            columns: [
                {label: "用户名", prop: "username", width: 180},
                {label: "姓名", prop: "name", width: 180},
                {label: "角色", prop: "roles", width: 200},
                {label: "用户状态", prop: "status", width: 150},
                {label: "创建时间", prop: "createTime", width: 150},
                {
                    label: "操作",
                    prop: "operation",
                    render: function(data){
                        return (
                            <span>
                                <Button type="primary" icon="edit" size="small">编辑</Button>
                                <Button type="success" icon="check" size="small" onClick={()=>{}} >开启用户</Button>
                                <Button type="danger" icon="close" size="small" onClick={()=>{}} >禁用用户</Button>
                            </span>
                        )
                    }
                }
            ],
            data: [
                {
                    id: "1",
                    username: 'tony',
                    name: '首页控制',
                    roles: '普通用户',
                    status: '0',
                    createTime: '2018/9/1'
                }
            ]
        }
    }

    componentDidMount(){
        this.props.requestData(this.state.currentPage, this.state.pageSize, "userList");
    }

    // child component callback change state. and close Dialog
    callback(status){
        this.setState({
            dialogVisible: false
        });
    }

    render(){
        return(
            <div>
                <Loading text="拼命加载中" loading = {this.state.loading}>
                    <div className={"body-child"}>
                        <Button type="success" icon="plus" onClick={ () => {this.setState({ dialogVisible: true })}} >添加用户</Button>
                        {<Add dialogVisible = {this.state.dialogVisible} userId = {this.state.userId} callback={this.callback.bind(this)} />}
                    </div>
                    <Table
                        style={{width: '100%'}}
                        columns={this.state.columns}
                        data={this.state.data}
                        border={true}
                    />
                    <Pagination layout="total, sizes, prev, pager, next, jumper"
                                style={{marginTop: '20px'}}
                                total={this.state.total}
                                pageSizes={[10, 20, 30, 40]}
                                pageSize={10}
                                onSizeChange={(size)=>{
                                    this.setState({ pageSize: size });
                                    this.props.requestData(this.state.currentPage, this.state.pageSize, "userList");
                                }}
                                onCurrentChange={(currentPage)=>{
                                    this.setState({ currentPage: currentPage });
                                    this.props.requestData(this.state.currentPage, this.state.pageSize, "userList");
                                }}
                    />
                </Loading>
            </div>
        )
    }
}

export default connect(state => ({
    usersData: state.usersData,
}), {
    requestData
})(Body);