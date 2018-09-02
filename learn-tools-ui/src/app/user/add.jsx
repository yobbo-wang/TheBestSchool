'use strict';
import React from 'react';
import {Dialog, Button, Form, Input, Checkbox} from 'element-react'

class Add extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            form: {
                name: '',
                username: '',
                email: '',
                mobilePhone: '',
                roles: []
            },
            rules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' }
                ],
                name: [
                    { required: true, message: '请输入姓名', trigger: 'blur' }
                ],
                mobilePhone: [
                    { required: true, message: '请输入手机号', trigger: 'blur' }
                ],
                email: [
                    { required: true, message: '请输入邮箱', trigger: 'blur' },
                    { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
                ],
                roles: [
                    { type: 'array', required: true, message: '请至少选择一个角色', trigger: 'change' }
                ]
            },
            roles: [{id: "Aaaaaaa", text: "系统管理岗"}, {id: "Aaaaaa4a", text: "销售岗"}],
            roleGroup: [],
        }
    }

    onChange(key, value) {
        this.setState({
            form: Object.assign({}, this.state.form, { [key]: value })
        });
    }

    roleChange(value){
        let ids = [];
        for(let i=0;i<value.length;i++){
            for(let j=0;j<this.state.roles.length;j++){
                if(value[i] == this.state.roles[j].text){
                    ids.push(this.state.roles[j].id);
                }
            }
        }
        this.onChange('roles', ids);
    }

    //TODO
    save(){
        this.onClose.bind(this);
        this.props.callback(false);
    }

    render(){
        return (
            <Dialog
                title="用户编辑"
                visible={ this.props.dialogVisible }
                onCancel={ ()=> {this.props.callback(false)} }
                onClose={ ()=> {this.props.callback(false)} }
            >
                <Dialog.Body>
                    <Form model={this.state.form} labelPosition={'left'} labelWidth={"80%"} rules={this.state.rules}>
                        <Form.Item label="用户名" prop="username">
                            <Input  value={this.state.form.username} onChange={this.onChange.bind(this, 'username')} placeholder="用户名由英文、数字、字符组成且长度在15以内"/>
                        </Form.Item>
                        <Form.Item label="姓名" prop="name">
                            <Input  value={this.state.form.name} onChange={this.onChange.bind(this, 'name')} placeholder="姓名长度在15以内"/>
                        </Form.Item>
                        <Form.Item label="手机号码" prop="mobilePhone">
                            <Input value={this.state.form.mobilePhone} onChange={this.onChange.bind(this, 'mobilePhone')} placeholder="姓名长度在15以内"/>
                        </Form.Item>
                        <Form.Item label="邮箱" prop="email">
                            <Input defaultValue={this.state.form.email} min={"1"} onChange={this.onChange.bind(this, 'email')} placeholder="姓名长度在15以内" />
                        </Form.Item>
                        <Form.Item label="角色" prop={"roles"}>
                            <Checkbox.Group value={this.state.roleGroup} onChange={this.roleChange.bind(this)}>
                                {
                                    this.state.roles.map((data, index) => {
                                        return <Checkbox.Button key={index} label={data.text}>{data.text}</Checkbox.Button>
                                    })
                                }
                            </Checkbox.Group>
                        </Form.Item>
                    </Form>
                </Dialog.Body>

                <Dialog.Footer className="dialog-footer">
                    <Button onClick={ ()=> {this.props.callback(false)} }>取 消</Button>
                    <Button type="primary" onClick={ this.save.bind(this) }>确 定</Button>
                </Dialog.Footer>
            </Dialog>
        )
    }
}

export default Add;