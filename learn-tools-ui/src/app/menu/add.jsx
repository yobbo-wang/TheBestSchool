'use strict';
import React from 'react';
import {Dialog, Button, Form, Input, Select, InputNumber} from 'element-react'

export default class Add extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            form: {
                name: '',
                sort: 1,
                url: ''
            },
            rules: {
                name: [
                    { required: true, message: '请输入菜单名', trigger: 'name' },
                    { required: true, message: '请输入序号', trigger: 'sort' },
                    { required: true, message: '请输入菜单url', trigger: 'url' }
                ],
            }
        }
    }

    onChange(key, value) {
        this.setState({
            form: Object.assign({}, this.state.form, { [key]: value })
        });
    }

    render(){
        return (
            <Dialog
                title="菜单编辑"
                visible={ this.props.dialogVisible }
                onCancel={ () => this.props.callback(false) }
                onClose={ () => this.props.callback(false) }
            >
                <Dialog.Body>
                    <Form model={this.state.form} labelPosition={'left'} labelWidth={"80%"} rules={this.state.rules}>
                        <Form.Item label="菜单名" prop="name">
                            <Input value={this.state.form.name} icon="menu" onChange={this.onChange.bind(this, 'name')} placeholder="菜单名字数最多15个字" />
                        </Form.Item>
                        <Form.Item label="菜单url" prop="url">
                            <Input value={this.state.form.url} onChange={this.onChange.bind(this, 'url')} placeholder="菜单url只能为英文、数字、字符组成"></Input>
                        </Form.Item>
                        <Form.Item label="序号" prop="sort">
                            <InputNumber defaultValue={this.state.form.sort} min={"1"} onChange={this.onChange.bind(this, 'sort')}></InputNumber>
                        </Form.Item>
                    </Form>
                </Dialog.Body>

                <Dialog.Footer className="dialog-footer">
                    <Button onClick={ () => this.props.callback(false) }>取 消</Button>
                    <Button type="primary" onClick={ () => this.props.callback(false) }>确 定</Button>
                </Dialog.Footer>
            </Dialog>
        )
    }
}