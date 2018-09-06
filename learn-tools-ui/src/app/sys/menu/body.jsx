'use strict';
import React from 'react';
import {Button, Loading, Table} from 'element-react'
import Add from './add';
import {requestMenuData} from '../../../store/menu/action';
import {connect} from "react-redux";

class Body extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            row:{
                dialogVisible: false
            },
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
                                            this.setState({ row: { id:data.id, text: data.text, type: data.type, sort: data.sort, url: data.url, pid: data.pid, dialogVisible: true } })
                                        }}>编辑</Button>
                                        <Button type="danger" icon="delete" size="small">删除</Button>
                                    </span>
                                )
                            }
                        })
                        const _data_ = data.children;
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
                                    this.setState({ row: { id:data.id, text: data.text, type: data.type, sort: data.sort, url: data.url, dialogVisible: true } })
                                }} >编辑</Button>
                                <Button type="danger" icon="delete" size="small">删除</Button>
                                <Button  type="success" icon="plus" size="small" onClick={()=>{
                                    this.setState({ row: { type: 'auth', pid: data.id } })
                                }} >添加功能菜单</Button>
                            </span>
                        )
                    }
                }
            ]
        }
    }

    getColumns() {
        return (
            [
                {label: "菜单名称", prop: "text", width: 180},
                {label: "菜单url", prop: "url", width: 200},
                {label: "菜单类型", prop: "type", width: 150},
                {label: "创建人", prop: "userUserName", width: 150},
                {label: "创建时间", prop: "createTime", width: 170},
            ]
        )
    }

    // child component callback change state. and close Dialog
    callback(){
        this.setState({ loading : true, row: {} });
        this.props.requestMenuData("menuList").then(() => {
            this.setState({ loading : false });
        });
    }

    componentDidMount(){
        this.setState({ loading : true });
        this.props.requestMenuData("menuList").then(() => {
            this.setState({ loading : false });
        });
    }

    render () {
        return (
            <div>
                <Loading text="拼命加载中" loading = {this.state.loading}>
                <div className={"body-child"}>
                    <Button type="success" icon="plus" onClick={()=>{
                        this.setState({ row: { type: 'menu', dialogVisible: true } })
                    }} >添加主菜单</Button>
                    {<Add callback = {this.callback.bind(this)} row={this.state.row} />}
                </div>
                <Table
                    style={{width: '100%'}}
                    columns={this.state.columns}
                    data={this.props.menuData.menuList}
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