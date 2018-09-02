'use strict';
import React from 'react';
import {Table, Button, Loading} from 'element-react'
import Add from './add';

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false, //TODO
            dialogVisible: false,
            columns: [
                {label: "角色名", prop: "username", width: 180},
                {label: "姓名", prop: "name", width: 180},
                {label: "角色", prop: "roles", width: 180},
                {label: "用户状态", prop: "status", width: 150},
                {label: "创建时间", prop: "createTime", width: 120},
                {
                    label: "操作",
                    prop: "operation",
                    render: function(data){
                        return (
                            <span>
                                <Button type="primary" icon="edit" size="small">编辑</Button>
                                <Button type="success" icon="check" size="small" onClick={()=>{}} >激活角色</Button>
                                <Button type="danger" icon="close" size="small" onClick={()=>{}} >禁用角色</Button>
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
                        <Button type="success" icon="plus" onClick={ () => {this.setState({ dialogVisible: true })}} >添加角色</Button>
                        {<Add dialogVisible = {this.state.dialogVisible} callback = {this.callback.bind(this)} />}
                    </div>
                    <Table
                        style={{width: '100%'}}
                        columns={this.state.columns}
                        data={this.state.data}
                        border={true}
                    />
                </Loading>
            </div>
        )
    }
}

export default Body;