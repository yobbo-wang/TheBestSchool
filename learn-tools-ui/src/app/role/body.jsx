'use strict';
import React from 'react';
import {Table, Button, Loading} from 'element-react'
import Add from './add';
import {requestRoleData} from "../../store/role/action";
import {connect} from "react-redux";
import {fetchMenuList} from "../../store/menu/action";

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dialogVisible: false,
            menuList: [],
            columns: [
                {label: "角色名", prop: "name", width: 180},
                {label: "用户状态", prop: "status", width: 150, render: (data) => {
                    return data.status == "0" ? "激活" : "弃用";
                }},
                {label: "创建人", prop: "createUserName", width: 160},
                {label: "创建时间", prop: "createTime", width: 160},
                {
                    label: "操作",
                    prop: "operation",
                    render: (data) => {
                        return (
                            <span>
                                <Button type="primary" icon="edit" size="small">编辑</Button>
                                {data.status == "1" ?
                                    <Button type="success" icon="check" size="small" onClick={()=>{}} >激活角色</Button> :
                                    <Button type="danger" icon="close" size="small" onClick={()=>{}} >禁用角色</Button>
                                }
                            </span>
                        )
                    }
                }
            ]
        }
    }

    componentDidMount(){
        this.setState({ loading : true });
        this.props.requestRoleData("roleList").then(() => {
            this.setState({ loading : false });
        });
        //查询菜单
        fetchMenuList().then((result) => {
            this.setState({ menuList: result })
        }).catch((e) => {
            this.setState({ menuList: [] })
            console.log(e)
        });
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
                        {<Add dialogVisible = {this.state.dialogVisible} callback = {this.callback.bind(this)} menuList={this.state.menuList} />}
                    </div>
                    <Table
                        style={{width: '100%'}}
                        columns={this.state.columns}
                        data={this.props.roleData.roleList}
                        border={true}
                    />
                </Loading>
            </div>
        )
    }
}

export default connect(state => ({
    roleData: state.roleData,
}), {
    requestRoleData
})(Body);