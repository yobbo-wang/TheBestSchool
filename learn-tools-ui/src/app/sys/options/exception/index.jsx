'use strict';
import React from 'react';
import {Button, Input, Pagination, Select, Table, Loading} from 'element-react';
import {connect} from "react-redux";
import {requestData} from "../../../../store/sys/options/action";

/**
 * 异常、错误码相关配置
 * <P>
 *
 */
class ExceptionOptions extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            pageSize: 10,
            currentPage: 1,
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
                    width: 180
                },
                {
                    label: "操作",
                    prop: "operation",
                    render: (data) => {
                        return (
                            <span>
                                <Button type="primary" icon="edit" size="small" onClick={()=>{

                                }} >编辑</Button>
                            </span>
                        )
                    }
                }
            ],
            data: [{
                exceptionType: '业务异常',
                errorCode: 'text.must.not.null',
                errorMsg: '菜单名不能为空'
            }]
        }
    }

    componentDidMount(){
        this.setState({loading: true});
        this.props.requestData(this.state.currentPage, this.state.pageSize, "errorCodeList").then(
            () => this.setState({loading: false})
        );
    }

    onSizeChange(size) {
        this.setState({loading: true, pageSize: size});
        this.props.requestData(this.state.currentPage, size, "errorCodeList").then(
            () => this.setState({loading: false})
        );
    }

    onCurrentChange(currentPage){
        this.setState({loading: true, currentPage: currentPage});
        this.props.requestData(currentPage, this.state.pageSize, "errorCodeList").then(
            () => this.setState({loading: false})
        );
    }

    render(){
        return (
            <div>
                <Loading text="拼命加载中" loading = {this.state.loading}>
                    <div className="body-child search">
                        <Input placeholder="异常码" style={{width: '240px'}}/>
                        <Input placeholder="异常提示信息" style={{width: '240px'}}/>
                        <Select placeholder={"异常类型"}>
                            <Select.Option label={"系统异常"} value={"systemException"} />
                            <Select.Option label={"业务异常"} value={"businessException"} />
                            <Select.Option label={"参数验证异常"} value={"ParamsException"} />
                        </Select>
                        <Button type="primary" icon="search" style={{marginLeft: 10}}>搜索</Button>
                        <Button type="success" icon="plus">新增</Button>
                    </div>
                    <Table
                        style={{width: '100%'}}
                        columns={this.state.columns}
                        data={this.props.errorCodeData.errorCodeList.rows}
                        border={true}
                    />
                    <Pagination layout="total, prev, pager, next, jumper"
                                style={{marginTop: '20px'}}
                                total={this.props.errorCodeData.errorCodeList.page.totalRecords}
                                pageSize={this.state.pageSize}
                                currentPage={this.state.currentPage}
                                onSizeChange={this.onSizeChange.bind(this)}
                                onCurrentChange={this.onCurrentChange.bind(this)}
                    />
                </Loading>
            </div>
        )
    }
}

export default connect(state => ({
    errorCodeData: state.errorCodeData,
}), {
    requestData
})(ExceptionOptions);