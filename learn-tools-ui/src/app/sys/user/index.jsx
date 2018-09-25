'use strict';
import React from 'react';
import {Table, Button, Loading, Pagination} from 'element-react'
import Add from './add.jsx';
import {requestData} from '../../../store/sys/user/action';
import {fetchRoleList} from '../../../store/sys/role/action';
import {connect} from "react-redux";

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageSize: 10,
            currentPage: 1,
            total: 0,
            loading: false,
            roles: [],
            row:{
                dialogVisible: false
            },
            columns: [
                {label: "用户名", prop: "username", width: 180},
                {label: "姓名", prop: "name", width: 180},
                {label: "角色", prop: "rolesName", width: 200},
                {label: "用户状态", prop: "status", width: 150, render: (data) =>{
                    return data.status == '1' ? '弃用' : '激活'
                }},
                {label: "创建时间", prop: "createTime", width: 150},
                {
                    label: "操作",
                    prop: "operation",
                    render: (data) => {
                        return (
                            <span>
                                <Button type="primary" icon="edit" size="small" onClick={()=>{
                                    this.setState({row: {dialogVisible: true, form: { ...data }}})
                                }}>编辑</Button>
                                <Button type="success" icon="check" size="small" onClick={()=>{}} >开启用户</Button>
                                <Button type="danger" icon="close" size="small" onClick={()=>{}} >禁用用户</Button>
                            </span>
                        )
                    }
                }
            ]
        }
    }

    componentDidMount(){
        this.setState({loading: true});
        this.props.requestData(this.state.currentPage, this.state.pageSize, "userList").then(() => this.setState({loading: false}));
        //query role
        fetchRoleList().then((result) => {
            this.setState({
                roles: result
            })
        }).catch(e=>{})
    }

    // child component callback change state. and close Dialog
    callback(){
        this.setState({loading: true});
        this.props.requestData(this.state.currentPage, this.state.pageSize, "userList").then(() => this.setState({loading: false}));
    }

    render(){
        return(
            <div>
                <Loading text="拼命加载中" loading = {this.state.loading}>
                    <div className={"body-child"}>
                        <Button type="success" icon="plus" onClick={ () => {this.setState({ row: { dialogVisible: true, form: {} } })}} >添加用户</Button>
                        {<Add roles={this.state.roles}  row={this.state.row} callback={this.callback.bind(this)} />}
                    </div>
                    <Table
                        style={{width: '100%'}}
                        columns={this.state.columns}
                        data={this.props.usersData.userList}
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