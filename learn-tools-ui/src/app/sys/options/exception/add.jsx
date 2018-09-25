'use strict';
import React from 'react';
import {Button, Select, Dialog, Form, Input, Message} from 'element-react'

/**
 * 异常信息编辑表单组件
 */
class Add extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            dialogVisible: false,
            saving: false,
            form: {},
            roles: {

            }
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            ...nextProps.row
        })
    }

    onClose() {
        this.setState({dialogVisible: false})
        this.props.callback();
    }

    save(){

    }

    onChange(key, value) {
        this.setState({
            form: Object.assign({}, this.state.form, { [key]: value })
        });
    }

    render(){
        return(
            <Dialog
                title="异常信息编辑"
                visible={ this.state.dialogVisible }
                onCancel={ this.onClose.bind(this) }
                onClose={ this.onClose.bind(this) }
            >
                <Dialog.Body>
                    <Form ref="form" model={this.state.form} labelWidth={"80%"} rules={this.state.exception}>
                        <Form.Item label="异常类型" prop="exceptionType">
                            <Select value={this.state.form.exceptionType}>
                                <Select.Option label={"业务相关异常"} value={"Business.Exception"}/>
                                <Select.Option label={"表单校验异常"} value={"Input.Exception"}/>
                                <Select.Option label={"系统相关异常"} value={"System.Exception"}/>
                            </Select>
                        </Form.Item>
                        <Form.Item label="错误码" prop="errorCode">
                            <Input  value={this.state.form.errorCode} onChange={this.onChange.bind(this, 'errorCode')} placeholder="错误码只能由数组、字母、符号组成"/>
                        </Form.Item>
                        <Form.Item label="错误提示信息" prop="errorMsg">
                            <Input  value={this.state.form.errorMsg} onChange={this.onChange.bind(this, 'errorMsg')} placeholder="错误提示信息只能由数组、字母、符号、中文组成"/>
                        </Form.Item>
                    </Form>
                </Dialog.Body>
                <Dialog.Footer className="dialog-footer">
                    <Button onClick={ this.onClose.bind(this)} >取 消</Button>
                    <Button type="primary" onClick={ this.save.bind(this) } loading={this.state.saving}>{ this.state.saving ? '保存中...' : '确 定'}</Button>
                </Dialog.Footer>
            </Dialog>
        )

    }
}

export default Add;