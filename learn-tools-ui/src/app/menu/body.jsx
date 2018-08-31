'use strict';
import React from 'react';
import {Table, Button} from 'element-react'

class Body extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            columns: [
                {
                    type: 'expand',
                    expandPannel: (data) => {
                        const _columns_ = this.getColumns();
                        _columns_.push({
                            label: "操作",
                            prop: "operation",
                            render: function(data){
                                return (
                                    <span>
                                        <Button type="primary" icon="edit" size="small">编辑</Button>
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
                    render: function(data){
                        return (
                            <span>
                                <Button type="primary" icon="edit" size="small">编辑</Button>
                                <Button type="danger" icon="delete" size="small">删除</Button>
                                <Button  type="success" icon="add" size="small">添加子菜单</Button>
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

    render () {
        return (
            <Table
                style={{width: '100%'}}
                columns={this.state.columns}
                data={this.state.data}
                border={true}
                onExpand={() => {}}
            />
        )
    }
}

export default Body;