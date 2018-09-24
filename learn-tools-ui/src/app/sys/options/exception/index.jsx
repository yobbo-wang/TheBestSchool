'use strict';
import React from 'react';
import {Table, Input ,Button, Select, Pagination} from 'element-react';

/**
 * 异常、错误码相关配置
 * <P>
 *
 */
class ExceptionOptions extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            total: 0,
            columns: [
                {
                    label: "异常类型",
                    prop: "exceptionType",
                    width: 180
                },
                {
                    label: "异常码",
                    prop: "errorCode",
                    width: 180
                },
                {
                    label: "异常提示信息",
                    prop: "errorMsg",
                    width: 180
                },
                {
                    label: "创建人",
                    prop: "createUser",
                    width: 180
                },
                {
                    label: "创建时间",
                    prop: "createTime",
                }
            ],
            data: [{
                exceptionType: '业务异常',
                errorCode: 'text.must.not.null',
                errorMsg: '菜单名不能为空'
            }]
        }
    }

    render(){
        return (
            <div>
                <div className="body-child search">
                    <Input placeholder="异常码" style={{width: '240px'}}/>
                    <Input placeholder="异常提示信息" style={{width: '240px'}}/>
                    <Select placeholder={"异常类型"}>
                        <Select.Option label={"系统异常"} value={"systemException"} />
                        <Select.Option label={"业务异常"} value={"BussiesException"} />
                        <Select.Option label={"参数验证异常"} value={"ParamsException"} />
                    </Select>
                    <Button type="primary" icon="search" style={{marginLeft: 10}}>搜索</Button>
                    <Button type="success" icon="plus">新增</Button>
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
                />
            </div>
        )
    }
}

export default ExceptionOptions;