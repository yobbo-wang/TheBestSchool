'use strict';
import React from 'react';
import {Table, Button, Loading} from 'element-react'
import Add from './add';
import { requestMenuData } from '../../store/menu/action';
import {connect} from "react-redux";

class Body extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loading: false, //TODO
            dialogVisible: false,
            type: '',
            menuId: '',
            columns: [
                {
                    type: 'expand',
                    expandPannel: (data) => {
                        const _columns_ = this.getColumns();
                        _columns_.push({
                            label: "操作",
                            prop: "operation",
                            render: (data) => {
                                return (
                                    <span>
                                        <Button type="primary" icon="edit" size="small" onClick={()=>{
                                            this.setState({ dialogVisible: true,type: data.type,menuId: data.id})
                                        }}>编辑</Button>
                                        <Button type="danger" icon="delete" size="small">删除</Button>
                                    </span>
                                )
                            }
                        })
                        const _data_ = [{id: "1", name: '首页控制2', url: '/main/list', type: 'auth'}]
                        return (
                            <Table
                                style={{borderTop: 0}}
                                columns={_columns_}
                                showHeader={false}
                                border={true}
                                data={_data_}
                            />
                        )
                    }
                },
                ...this.getColumns(),
                {
                    label: "操作",
                    prop: "operation",
                    render: (data) => {
                        return (
                            <span>
                                <Button type="primary" icon="edit" size="small" onClick={()=>{
                                    this.setState({ dialogVisible: true,type: data.type,menuId: data.id})
                                }} >编辑</Button>
                                <Button type="danger" icon="delete" size="small">删除</Button>
                                <Button  type="success" icon="plus" size="small" onClick={()=>{
                                    this.setState({ dialogVisible: true,type: 'auth',menuId: data.id})
                                }} >添加功能菜单</Button>
                            </span>
                        )
                    }
                }
            ],

            data: [{
                id: "1",
                name: '首页控制',
                url: '/main',
                type: 'menu'
            }, {
                id: "2",
                name: '用户管理',
                url: '/user',
                type: 'menu'
            }]
        }
    }

    getColumns() {
        return (
            [
                {label: "菜单名称", prop: "name", width: 180},
                {label: "菜单url", prop: "url", width: 360},
                {label: "菜单类型", prop: "type", width: 150}
            ]
        )
    }

    // child component callback change state. and close Dialog
    callback(status, saveResult){
        this.setState({
            dialogVisible: false
        });
        if(saveResult) this.props.requestMenuData("menuList");
    }

    componentDidMount(){
        this.props.requestMenuData("menuList");
    }

    render () {
        return (
            <div>
                <Loading text="拼命加载中" loading = {this.state.loading}>
                <div className={"body-child"}>
                    <Button type="success" icon="plus" onClick={()=>{
                        this.setState({ dialogVisible: true, type: 'menu'})
                    }} >添加主菜单</Button>
                    {<Add dialogVisible = {this.state.dialogVisible} callback = {this.callback.bind(this)} type={this.state.type} id={this.state.menuId} />}
                </div>
                <Table
                    style={{width: '100%'}}
                    columns={this.state.columns}
                    data={this.state.data}
                    border={true}
                    onExpand={() => {}}
                />
                </Loading>
            </div>
        )
    }
}

export default connect(state => ({
    menuData: state.menuData,
}), {
    requestMenuData
})(Body);